#!/usr/bin/env node
/*
 * Erstellt die fertigen Anleitungsbilder aus der iPhone-Nachbildung.
 *
 *   node werkzeuge/iphone-nachbildung/aufnehmen.mjs            → alle Szenen
 *   node werkzeuge/iphone-nachbildung/aufnehmen.mjs schrift    → nur Szenen, deren Datei "schrift" enthält
 *
 * Braucht Playwright mit Chromium (einmalig: npx playwright install chromium).
 * Ergebnis: WebP-Dateien unter public/screenshots/<anleitung>/ – ganzer Bildschirm,
 * Klickziel im Plattform-Stil markiert, Streifen mit Hinweis „Nachgestellte Ansicht“.
 */
import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { SZENEN } from "./szenen.mjs";

const hier = dirname(fileURLToPath(import.meta.url));
const repo = join(hier, "..", "..");
const filter = process.argv[2] || "";

const browser = await chromium.launch();
const seite = await browser.newPage({ viewport: { width: 421, height: 918 }, deviceScaleFactor: 2 });
seite.on("pageerror", (e) => { console.error("Fehler in der Nachbildung:", e.message); process.exitCode = 1; });

for (const s of SZENEN.filter((s) => s.datei.includes(filter))) {
  const p = new URLSearchParams({ aufnahme: "1", ios: String(s.ios ?? 27), szene: s.szene ?? "", markiere: s.markiere ?? "", quelle: s.hinweis ?? `Nachgestellte Ansicht · iOS ${s.ios ?? 27}` });
  if (s.stufe !== undefined) p.set("stufe", String(s.stufe));
  await seite.goto(pathToFileURL(join(hier, "index.html")).href + "?" + p);
  await seite.waitForSelector("body[data-fertig]");
  const png = await seite.locator("#rahmen").screenshot();
  // PNG im Browser selbst nach WebP umwandeln (keine Zusatzpakete nötig)
  const webp = await seite.evaluate(async (b64) => {
    const img = new Image();
    img.src = "data:image/png;base64," + b64;
    await img.decode();
    const c = document.createElement("canvas");
    c.width = img.width; c.height = img.height;
    c.getContext("2d").drawImage(img, 0, 0);
    return c.toDataURL("image/webp", 0.86).split(",")[1];
  }, png.toString("base64"));
  const ziel = join(repo, "public", "screenshots", s.datei);
  await mkdir(dirname(ziel), { recursive: true });
  await writeFile(ziel, Buffer.from(webp, "base64"));
  console.log("✓", s.datei);
}
await browser.close();

import fs from "node:fs";
import path from "node:path";
import type { Payload } from "payload";
import type { Step } from "../content/types";

/**
 * Legt ein Bild aus /public (z. B. /screenshots/…/plz-eingeben.webp) einmalig in der
 * Bilder-Sammlung an und gibt seine ID zurück. Gibt es das Bild schon (gleiche Bildbeschreibung),
 * wird das vorhandene genommen.
 *
 * Der Dateiname gehört immer zum Bild aus src/seed. Hängt an diesem Dateinamen noch ein alter
 * Eintrag (z. B. mit früherer Bildbeschreibung), wird er übernommen oder – wenn es schon einen
 * Eintrag mit der neuen Beschreibung gibt – entfernt. Sonst legt Payload die Datei als „…-1.webp“
 * an und das spätere Ersetzen scheitert mit „ValidationError: filename“.
 */
export async function ensureImage(payload: Payload, image: NonNullable<Step["image"]>): Promise<number> {
  const filePath = path.resolve(process.cwd(), "public", image.src.replace(/^\//, ""));
  const filename = path.basename(filePath);
  const size = fs.statSync(filePath).size;

  const byAlt = (await payload.find({ collection: "media", where: { alt: { equals: image.alt } }, limit: 1, depth: 0 })).docs[0];
  const byName = (await payload.find({ collection: "media", where: { filename: { equals: filename } }, limit: 1, depth: 0 })).docs[0];

  // Alter Eintrag belegt den Dateinamen, das Bild hat inzwischen eine neue Beschreibung
  if (byName && byAlt && byName.id !== byAlt.id) {
    await payload.delete({ collection: "media", id: byName.id });
  }
  const existing = byAlt ?? byName;

  if (existing) {
    // Neue Fassung, neue Beschreibung, neue Quellenangabe oder falscher Dateiname (z. B. „…-1.webp“)?
    // Dann Datei und Angaben ersetzen.
    const stale =
      existing.filesize !== size ||
      existing.filename !== filename ||
      existing.alt !== image.alt ||
      (existing.credit ?? "") !== (image.credit ?? "");
    if (stale) {
      await payload.update({
        collection: "media",
        id: existing.id,
        data: { alt: image.alt, credit: image.credit },
        filePath,
        overwriteExistingFiles: true,
      });
    }
    return existing.id as number;
  }
  const doc = await payload.create({
    collection: "media",
    data: { alt: image.alt, credit: image.credit },
    filePath,
  });
  return doc.id as number;
}

/** Schritte für die Datenbank, inklusive Bild (falls vorhanden) */
export async function toStepData(payload: Payload, steps: Step[] = []) {
  const out = [];
  for (const s of steps) {
    out.push({
      title: s.title,
      text: s.text,
      tip: s.tip,
      warning: s.warning,
      image: s.image ? await ensureImage(payload, s.image) : undefined,
    });
  }
  return out;
}

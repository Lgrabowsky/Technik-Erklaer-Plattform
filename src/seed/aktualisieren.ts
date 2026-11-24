/**
 * Bringt Verbesserungen aus src/seed (neue Texte, Screenshots) in eine bestehende Datenbank.
 * Aufruf: npm run seed:aktualisieren
 *
 * Sicher für Änderungen aus dem Admin-Bereich:
 * - Anleitungen, die seit dem ersten Einspielen NICHT im Admin bearbeitet wurden,
 *   bekommen Schritte und Texte vollständig aus src/seed (inkl. Bilder).
 * - Anleitungen, die im Admin bearbeitet wurden, bleiben unverändert. Dort werden nur
 *   fehlende Bilder an Schritte mit gleicher Überschrift gehängt.
 * Kann gefahrlos mehrfach laufen.
 */
import fs from "node:fs";
import { getPayload } from "payload";
import config from "@payload-config";
import { guides } from "./guides";
import { ensureImage, toStepData } from "./media";
import type { Step } from "../content/types";

const payload = await getPayload({ config });
const report: string[] = [];
// Merkt sich, welche Fassung dieses Skript zuletzt geschrieben hat (Datei ist in .gitignore)
const STATE_FILE = ".seed-stand.json";
const state: Record<string, string> = fs.existsSync(STATE_FILE) ? JSON.parse(fs.readFileSync(STATE_FILE, "utf8")) : {};

async function versionsOf(id: number) {
  const r = await payload.findVersions({ collection: "guides", where: { parent: { equals: id } }, sort: "-updatedAt", limit: 100, depth: 0 });
  return r.docs;
}

type DbStep = { id?: string | null; title: string; image?: unknown };

async function attachImages(dbSteps: DbStep[] | null | undefined, seedSteps: Step[] = []) {
  let changed = 0;
  let missing = 0;
  const steps = (dbSteps ?? []).map((s) => ({ ...s, image: typeof s.image === "object" && s.image ? (s.image as { id: number }).id : s.image }));
  for (const seed of seedSteps) {
    if (!seed.image) continue;
    const match = steps.find((s) => s.title.trim() === seed.title.trim());
    if (!match) missing++;
    else if (!match.image) {
      match.image = await ensureImage(payload, seed.image);
      changed++;
    }
  }
  return { steps, changed, missing };
}

for (const g of guides) {
  const found = await payload.find({ collection: "guides", where: { slug: { equals: g.slug } }, limit: 1, depth: 0, draft: true });
  const doc = found.docs[0];
  if (!doc) {
    report.push(`– ${g.slug}: nicht in der Datenbank (bitte „npm run seed“ ausführen)`);
    continue;
  }
  // Unverändert im Admin = die neueste Fassung stammt von diesem Skript, oder alle Fassungen
  // entstanden beim ersten Einspielen (innerhalb von 10 Minuten nach dem Anlegen).
  const versions = await versionsOf(doc.id);
  const created = new Date(doc.createdAt).getTime();
  const untouched =
    (versions[0] && state[g.slug] === String(versions[0].id)) ||
    versions.every((v) => new Date(v.updatedAt).getTime() - created < 10 * 60 * 1000);

  if (untouched) {
    await payload.update({
      collection: "guides",
      id: doc.id,
      draft: false,
      data: {
        _status: "published",
        title: g.title,
        summary: g.summary,
        app: g.app,
        needs: g.needs.map((text) => ({ text })),
        takeaways: (g.takeaways ?? []).map((text) => ({ text })),
        steps: await toStepData(payload, g.steps),
        variants: await Promise.all(
          (g.variants ?? []).map(async (v) => ({
            device: v.device,
            label: v.label,
            hint: v.hint,
            unverified: v.unverified ?? false,
            steps: await toStepData(payload, v.steps),
          })),
        ),
        keywords: g.keywords ?? [],
      },
    });
    const latest = (await versionsOf(doc.id))[0];
    if (latest) state[g.slug] = String(latest.id);
    report.push(`✓ ${g.slug}: aus src/seed aktualisiert`);
    continue;
  }

  const main = await attachImages(doc.steps as DbStep[], g.steps);
  let changed = main.changed;
  let missing = main.missing;
  const variants = [];
  for (const [i, v] of (doc.variants ?? []).entries()) {
    const r = await attachImages(v.steps as DbStep[], g.variants?.[i]?.steps);
    changed += r.changed;
    missing += r.missing;
    variants.push({ ...v, steps: r.steps });
  }
  if (changed) {
    await payload.update({
      collection: "guides",
      id: doc.id,
      draft: false,
      data: { _status: "published", steps: main.steps, variants } as never,
    });
    report.push(`✓ ${g.slug}: im Admin bearbeitet – Texte bleiben, ${changed} Bild(er) ergänzt`);
  }
  if (missing) {
    report.push(`! ${g.slug}: ${missing} Bild(er) ohne passenden Schritt – bitte im Admin selbst zuordnen (Bilder liegen unter „Bilder“)`);
  }
}

fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
payload.logger.info("\n" + report.join("\n"));
process.exit(0);

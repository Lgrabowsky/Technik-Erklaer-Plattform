import fs from "node:fs";
import path from "node:path";
import type { Payload } from "payload";
import type { Step } from "../content/types";

/**
 * Legt ein Bild aus /public (z. B. /screenshots/…/plz-eingeben.webp) einmalig in der
 * Bilder-Sammlung an und gibt seine ID zurück. Gibt es das Bild schon (gleiche Bildbeschreibung),
 * wird das vorhandene genommen.
 */
export async function ensureImage(payload: Payload, image: NonNullable<Step["image"]>): Promise<number> {
  const filePath = path.resolve(process.cwd(), "public", image.src.replace(/^\//, ""));
  const found = await payload.find({ collection: "media", where: { alt: { equals: image.alt } }, limit: 1, depth: 0 });
  const existing = found.docs[0];
  if (existing) {
    // Neue Fassung des Bildes oder neue Quellenangabe? Dann Datei und Angabe ersetzen.
    const size = fs.statSync(filePath).size;
    if (existing.filesize !== size || (existing.credit ?? "") !== (image.credit ?? "")) {
      await payload.update({ collection: "media", id: existing.id, data: { credit: image.credit }, filePath, overwriteExistingFiles: true });
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

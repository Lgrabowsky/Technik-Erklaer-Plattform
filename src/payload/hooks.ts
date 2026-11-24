import { revalidateTag } from "next/cache";

/**
 * Nach jeder Änderung im Admin-Bereich wird der Inhalts-Zwischenspeicher der
 * Website geleert, damit Besucher sofort die neue Fassung sehen.
 */
export function revalidateContent() {
  try {
    revalidateTag("inhalte", { expire: 0 });
  } catch {
    // Außerhalb von Next.js (z. B. im Import-Skript) gibt es nichts zu leeren.
  }
}

export const contentHooks = {
  afterChange: [() => revalidateContent()],
  afterDelete: [() => revalidateContent()],
};

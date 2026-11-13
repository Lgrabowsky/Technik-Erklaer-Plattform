import type { Flow, Guide } from "../types";
import { grundlagen } from "./grundlagen";
import { gesundheit } from "./gesundheit";
import { unterwegs } from "./unterwegs";
import { bezahlen } from "./bezahlen";
import { sicherheit } from "./sicherheit";

/**
 * Alle Anleitungen. Je Thema eine Datei, damit die Redaktion übersichtlich bleibt.
 * Wichtig: App-Oberflächen ändern sich. Jede Anleitung hat ein "checked"-Datum
 * und sollte spätestens alle 6 Monate mit der echten App abgeglichen werden.
 */
export const guides: Guide[] = [...grundlagen, ...gesundheit, ...unterwegs, ...bezahlen, ...sicherheit];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}

export function getGuidesByCategory(category: string) {
  return guides.filter((g) => g.category === category);
}

/** Alle durchklickbaren Abläufe einer Anleitung (einer, oder einer je Gerät) */
export function getFlows(guide: Guide): Flow[] {
  if (guide.variants && guide.variants.length > 0) return guide.variants;
  return [{ steps: guide.steps ?? [] }];
}

/** Anzahl der Schritte (bei Geräte-Varianten: die längste Variante) */
export function stepCount(guide: Guide) {
  return Math.max(...getFlows(guide).map((f) => f.steps.length));
}

export function formatChecked(checked: string) {
  const [y, m] = checked.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1).toLocaleDateString("de-DE", { month: "long", year: "numeric" });
}

function normalize(s: string) {
  return s.toLowerCase().replace(/[-–]/g, " ");
}

export function searchGuides(query: string) {
  const words = normalize(query).split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];
  return guides.filter((g) => {
    const haystack = normalize(
      [g.title, g.summary, ...(g.keywords ?? []), ...getFlows(g).flatMap((f) => f.steps.map((s) => s.title))].join(" "),
    );
    return words.every((w) => haystack.includes(w));
  });
}

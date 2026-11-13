import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "grundlagen",
    title: "Smartphone-Grundlagen",
    description: "Apps installieren, Schrift vergrößern, Fotos verschicken.",
    icon: "phone",
  },
  {
    slug: "gesundheit",
    title: "Gesundheit & Arzt",
    description: "Arzttermine online buchen, Rechnungen bei der Krankenkasse einreichen.",
    icon: "heart",
  },
  {
    slug: "unterwegs",
    title: "Bus & Bahn",
    description: "Fahrpläne abrufen und Fahrkarten auf dem Handy kaufen.",
    icon: "train",
  },
  {
    slug: "bezahlen",
    title: "Online bezahlen",
    description: "Sicher im Internet einkaufen und bezahlen.",
    icon: "card",
  },
  {
    slug: "sicherheit",
    title: "Sicher im Netz",
    description: "Betrug, Fälschungen und KI-Inhalte erkennen.",
    icon: "shield",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

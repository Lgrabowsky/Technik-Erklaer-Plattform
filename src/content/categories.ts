import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "grundlagen",
    title: "Smartphone-Grundlagen",
    description: "Apps installieren, WhatsApp, Videoanrufe, Schrift vergrößern.",
    icon: "phone",
  },
  {
    slug: "gesundheit",
    title: "Gesundheit & Arzt",
    description: "E-Rezept, Arzttermine, Krankenkassen-App und Patientenakte.",
    icon: "heart",
  },
  {
    slug: "unterwegs",
    title: "Bus & Bahn",
    description: "Verbindungen finden, Fahrkarten und Deutschlandticket kaufen.",
    icon: "train",
  },
  {
    slug: "bezahlen",
    title: "Online bezahlen",
    description: "Sicher einkaufen, PayPal und Überweisungen per App.",
    icon: "card",
  },
  {
    slug: "sicherheit",
    title: "Sicher im Netz",
    description: "Betrug, Phishing, Fälschungen und KI-Inhalte erkennen; sichere Passwörter.",
    icon: "shield",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

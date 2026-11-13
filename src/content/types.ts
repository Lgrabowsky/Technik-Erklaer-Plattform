export type Device = "android" | "iphone" | "computer";

export type Difficulty = "leicht" | "mittel" | "anspruchsvoll";

/** "free" = für alle sichtbar, "premium" = Abo oder Einzelkauf nötig */
export type Access = "free" | "premium";

export type Step = {
  title: string;
  /** Kurze, klare Anweisung. Ein Schritt = eine Handlung. */
  text: string;
  /** Freundlicher Zusatz-Tipp */
  tip?: string;
  /** Wichtiger Warnhinweis (z. B. Betrugsgefahr) */
  warning?: string;
  /** Optionales Bild (Pfad unter /public). Wird später durch echte Screenshots ergänzt. */
  image?: { src: string; alt: string };
};

export type Guide = {
  slug: string;
  title: string;
  summary: string;
  category: CategorySlug;
  devices: Device[];
  difficulty: Difficulty;
  minutes: number;
  access: Access;
  /** Preis für den Einzelkauf in Cent (nur bei premium) */
  priceCents?: number;
  /** "Das brauchen Sie" – Vorbereitung vor dem Start */
  needs: string[];
  steps: Step[];
  /** Zusammenfassung am Ende: "Das haben Sie gelernt" */
  takeaways?: string[];
};

export type CategorySlug =
  | "grundlagen"
  | "gesundheit"
  | "unterwegs"
  | "bezahlen"
  | "sicherheit";

export type Category = {
  slug: CategorySlug;
  title: string;
  description: string;
  icon: "phone" | "heart" | "train" | "card" | "shield";
};

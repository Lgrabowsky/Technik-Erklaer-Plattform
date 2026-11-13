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
  /** Für welche App / Seite die Anleitung genau gilt, z. B. "DB Navigator" */
  app?: string;
  devices: Device[];
  difficulty: Difficulty;
  minutes: number;
  access: Access;
  /** Preis für den Einzelkauf in Cent (nur bei premium) */
  priceCents?: number;
  /** "Das brauchen Sie" – Vorbereitung vor dem Start */
  needs: string[];
  /**
   * Entweder ein gemeinsamer Ablauf für alle Geräte (`steps`) …
   */
  steps?: Step[];
  /**
   * … oder getrennte Abläufe je Gerät. Dann fragt die Seite zuerst:
   * "Welches Gerät haben Sie?"
   */
  variants?: Variant[];
  /** Zusätzliche Suchbegriffe, z. B. "Videotelefonie", "Rezept" */
  keywords?: string[];
  /** Wann die Anleitung zuletzt gegen die echte App geprüft wurde, z. B. "2026-11" */
  checked: string;
  /** Zusammenfassung am Ende: "Das haben Sie gelernt" */
  takeaways?: string[];
};

export type Variant = {
  device: Device;
  steps: Step[];
};

/** Ein durchklickbarer Ablauf (gemeinsam oder für ein bestimmtes Gerät) */
export type Flow = {
  device?: Device;
  steps: Step[];
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

/**
 * Geräte. "android" = Google Pixel und alle anderen Android-Hersteller (Xiaomi, Motorola …),
 * "samsung" = Samsung-Galaxy-Handys (eigene Menünamen, nur als Variante einer Anleitung).
 */
export type Device = "android" | "samsung" | "iphone" | "computer";

/** Geräte in der Übersicht einer Anleitung ("android" umfasst dort auch Samsung) */
export type GuideDevice = Exclude<Device, "samsung">;

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
  /**
   * Optionaler Screenshot (Pfad unter /public). ganzer Bildschirm, Klickziel markiert im Plattform-Stil (Limette mit dunklem Rand),
   * keine persönlichen Daten. `credit` ist die Quellenangabe unter dem Bild,
   * z. B. "Screenshot: 116117-termine.de, Kassenärztliche Bundesvereinigung".
   */
  image?: { src: string; alt: string; credit?: string };
};

export type Guide = {
  slug: string;
  title: string;
  summary: string;
  category: CategorySlug;
  /** Unterthema (Slug), z. B. "deutschlandticket" */
  subtopic?: string;
  /** Für welche App / Seite die Anleitung genau gilt, z. B. "DB Navigator" */
  app?: string;
  devices: GuideDevice[];
  difficulty: Difficulty;
  minutes: number;
  access: Access;
  /** Preis für den Einzelkauf in Cent (nur bei premium) */
  priceCents?: number;
  /** Datenbank-ID (für Käufe) */
  id?: number;
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
  /** Frage für die Auswahl (Standard: "Welches Gerät haben Sie?") */
  chooser?: Chooser;
  /** Zusätzliche Suchbegriffe, z. B. "Videotelefonie", "Rezept" */
  keywords?: string[];
  /** Wann die Anleitung zuletzt gegen die echte App geprüft wurde, z. B. "2026-11" */
  checked: string;
  /** Passende Anleitungen (Slugs), werden unter der Anleitung verlinkt */
  related?: string[];
  /** Zusammenfassung am Ende: "Das haben Sie gelernt" */
  takeaways?: string[];
  /**
   * Intern (nur Redaktion, wird Besuchern nicht angezeigt): Knopf-Namen dieser Anleitung
   * konnten noch nicht in der echten App geprüft werden. `reviewNote` sagt, was zu prüfen ist.
   */
  unverified?: boolean;
  reviewNote?: string;
};

/**
 * Eine Variante der Anleitung – z. B. für ein Gerät (Android/iPhone)
 * oder für eine Krankenkasse (TK, AOK, …).
 */
export type Variant = {
  device?: Device;
  /** Name auf dem Auswahl-Knopf, z. B. "TK – Techniker Krankenkasse" */
  label?: string;
  /** Kleiner Zusatz unter dem Namen, z. B. "App: TK-App" */
  hint?: string;
  steps: Step[];
  /**
   * Intern: Knopf-Namen konnten noch nicht in der echten App geprüft werden.
   * Wird Besuchern nicht angezeigt – nur für die Redaktion.
   */
  unverified?: boolean;
};

/** Ein durchklickbarer Ablauf (gemeinsam oder eine Variante) */
export type Flow = Variant;

/** Frage vor den Schritten, wenn es mehrere Varianten gibt */
export type Chooser = {
  question: string;
  hint: string;
  /** Text des Links zum Wechseln, z. B. "Andere Krankenkasse wählen" */
  switchLabel: string;
  icon?: "phone" | "heart";
};

export type CategorySlug = string;

export type CategoryIcon = "phone" | "heart" | "train" | "card" | "shield" | "building";

export type Category = {
  slug: CategorySlug;
  title: string;
  description: string;
  icon: CategoryIcon;
};

/** Unterpunkt innerhalb eines Themengebiets, z. B. Bus & Bahn → Deutschlandticket */
export type Subtopic = {
  slug: string;
  title: string;
  description?: string;
  category: CategorySlug;
};

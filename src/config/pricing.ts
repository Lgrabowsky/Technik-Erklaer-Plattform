/**
 * Bezahlmodell an einer Stelle steuern.
 * Beide Kaufwege sind technisch immer vorhanden – hier wird nur eingestellt,
 * was Besucher sehen. So lässt sich später testen, was besser ankommt.
 */
export const pricing = {
  showSubscription: true,
  showSinglePurchase: true,
  subscription: {
    name: "Alles-Zugang",
    monthlyCents: 699,
    yearlyCents: 5900,
    benefits: [
      "Alle Anleitungen ohne Einschränkung",
      "Neue Anleitungen jeden Monat",
      "Jederzeit monatlich kündbar",
    ],
  },
  /** Standardpreis, falls eine Anleitung keinen eigenen Preis hat */
  defaultGuideCents: 299,
} as const;

export function formatEuro(cents: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(cents / 100);
}

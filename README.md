# Schritt für Schritt – Technik einfach erklärt

Lernplattform mit sehr einfachen Schritt-für-Schritt-Anleitungen für Senioren und alle, die mit Smartphone, Tablet und Computer wenig Erfahrung haben: Apps installieren, Arzttermine online buchen, Rechnungen bei der Krankenkasse einreichen, Fahrkarten kaufen, sicher online bezahlen sowie Betrug, Fälschungen und KI-Inhalte erkennen.

## Starten

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Produktions-Build
npm run lint
```

Technik: Next.js 16 (App Router, Cache Components), TypeScript, Tailwind CSS 4.

## Aufbau

| Pfad | Inhalt |
| --- | --- |
| `src/content/guides.ts` | Alle Anleitungen (Titel, Kategorie, Gerät, Schwierigkeit, Vorbereitung, Schritte mit Tipp/Warnung) |
| `src/content/categories.ts` | Themenbereiche auf der Startseite |
| `src/content/types.ts` | Datenmodell für Anleitungen |
| `src/config/pricing.ts` | Preise und Schalter, welche Kaufwege angezeigt werden |
| `src/lib/entitlements.ts` | Einzige Stelle, an der geprüft wird, ob jemand eine Anleitung sehen darf |
| `src/lib/actions.ts` | Kauf-Aktionen (derzeit Demo ohne Zahlung) |
| `src/components/StepViewer.tsx` | Ein Schritt pro Bildschirm, Zurück/Weiter, Fortschritt, Vorlesen, Druckansicht |

### Neue Anleitung hinzufügen

In `src/content/guides.ts` einen Eintrag ergänzen. `access: "free"` ist für alle sichtbar, `access: "premium"` braucht Abo oder Einzelkauf (`priceCents` setzt den Einzelpreis).

Schreibregeln: „Sie“-Form, kurze Sätze, ein Schritt = eine Handlung, Bedienelemente in „Anführungszeichen“ genau so benennen, wie sie auf dem Gerät heißen.

## Barrierefreiheit

- Grundschrift 20 px, umschaltbar auf 24 px und 28 px (wird gemerkt)
- Schrift „Atkinson Hyperlegible“, speziell für gute Lesbarkeit entwickelt
- Hoher Kontrast, Links immer unterstrichen, Knöpfe mindestens 56 px hoch
- Deutlicher Fokus-Rahmen für Tastatur, „Zum Inhalt springen“-Link
- Vorlesefunktion über die Sprachausgabe des Geräts
- Kein verstecktes Menü, keine Animationen bei „Bewegung reduzieren“

## Bezahlmodell

Beides ist eingebaut: **Abo** (Alles-Zugang) und **Einzelkauf** pro Anleitung. Einige Anleitungen sind kostenlos. In `src/config/pricing.ts` lässt sich jeder Kaufweg ein- oder ausblenden.

Gesperrte Anleitungen zeigen Schritt 1 als Vorschau; die übrigen Schritte werden erst nach Freischaltung an den Browser geschickt.

**Derzeit Demo:** Käufe werden nur simuliert und in einem Cookie gespeichert (nicht fälschungssicher). Nächste Schritte für den echten Betrieb:

1. Benutzerkonten (Login per E-Mail-Link, ohne Passwort-Hürde)
2. Datenbank für Freischaltungen
3. Stripe Checkout: `mode: "subscription"` für das Abo, `mode: "payment"` für Einzelkäufe
4. Stripe-Webhook speichert die Freischaltung; `getEntitlements()` liest dann aus der Datenbank
5. Impressum, Datenschutz, AGB, Widerrufsbelehrung

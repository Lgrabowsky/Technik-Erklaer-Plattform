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
| `src/content/guides/*.ts` | Alle Anleitungen, eine Datei je Thema (Titel, Gerät, Schwierigkeit, Vorbereitung, Schritte mit Tipp/Warnung, Prüfdatum) |
| `src/content/categories.ts` | Themenbereiche auf der Startseite |
| `src/content/types.ts` | Datenmodell für Anleitungen |
| `src/config/pricing.ts` | Preise und Schalter, welche Kaufwege angezeigt werden |
| `src/lib/entitlements.ts` | Einzige Stelle, an der geprüft wird, ob jemand eine Anleitung sehen darf |
| `src/lib/actions.ts` | Kauf-Aktionen (derzeit Demo ohne Zahlung) |
| `src/components/StepViewer.tsx` | Ein Schritt pro Bildschirm, Zurück/Weiter, Fortschritt, Vorlesen, Druckansicht |

### Neue Anleitung hinzufügen

In der passenden Datei unter `src/content/guides/` einen Eintrag ergänzen. Gleicher Ablauf auf allen Geräten → `steps`; unterschiedliche Abläufe für Android und iPhone → `variants` (die Seite fragt dann zuerst „Welches Gerät haben Sie?“). Varianten können auch für Krankenkassen o. Ä. gelten – dann mit `label`, `hint` und eigener Frage in `chooser` (Beispiel: `src/content/guides/kassen.ts`). `unverified: true` markiert Varianten, deren Knopf-Namen noch in der echten App nachgeprüft werden müssen. `checked` ist das Datum, an dem die Anleitung zuletzt mit der echten App geprüft wurde. `access: "free"` ist für alle sichtbar, `access: "premium"` braucht Abo oder Einzelkauf (`priceCents` setzt den Einzelpreis).

Schreibregeln: „Sie“-Form, kurze Sätze, ein Schritt = eine Handlung, Bedienelemente in „Anführungszeichen“ genau so benennen, wie sie auf dem Gerät heißen.

## Barrierefreiheit

- Grundschrift 18 px (Handy 17 px), über „A A A“ oben rechts umschaltbar auf 21/24 px (Handy 19/22 px), wird gemerkt
- Am Handy klebt die „Weiter“-Leiste über dem Menü, damit sie immer erreichbar ist
- Schrift „Lexend“, entwickelt für leichteres Lesen
- Farben: Tinte auf warmem Hellgrau, ein Signal-Akzent (Limette) für „aktiv / weiter“; alle Texte mind. 7:1 Kontrast (WCAG AAA)
- Menü mit vier festen Punkten (Start, Themen, Suchen, Mein Zugang): am Computer oben, am Handy als Leiste unten wie in Handy-Apps
- „Sie sind hier“-Pfad (Brotkrumen) auf jeder Unterseite
- Links immer unterstrichen, Knöpfe mindestens 60 px hoch, lange Wörter werden getrennt statt abgeschnitten
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

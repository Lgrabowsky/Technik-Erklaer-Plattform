# Schritt für Schritt – Technik einfach erklärt

Lernplattform mit sehr einfachen Schritt-für-Schritt-Anleitungen für Senioren und alle, die mit Smartphone, Tablet und Computer wenig Erfahrung haben: Apps installieren, Arzttermine online buchen, Rechnungen bei der Krankenkasse einreichen, Fahrkarten kaufen, sicher online bezahlen sowie Betrug, Fälschungen und KI-Inhalte erkennen.

## Starten (lokal, Windows)

Einmalig vorbereiten:

1. **Node.js 22 oder neuer** installieren (nodejs.org, „LTS“).
2. **Datenbank PostgreSQL** bereitstellen – eine der beiden Möglichkeiten:
   - mit **Docker Desktop**: im Projektordner `docker compose up -d` ausführen (fertig eingerichtet über `docker-compose.yml`), oder
   - **PostgreSQL für Windows** installieren (postgresql.org/download/windows), dann in „SQL Shell (psql)“:
     `CREATE USER plattform WITH PASSWORD 'plattform'; CREATE DATABASE plattform OWNER plattform;`
3. `.env.example` kopieren und als `.env` speichern, `PAYLOAD_SECRET` auf einen langen Zufallstext setzen.
4. Im Projektordner:

```bash
npm install
npm run seed          # übernimmt die bisherigen 21 Anleitungen, Themen und Unterthemen in die Datenbank
npm run dev           # http://localhost:3000  ·  Admin-Bereich: http://localhost:3000/admin
```

Beim ersten Öffnen von `/admin` legen Sie Ihr Admin-Konto an (E-Mail + Passwort). Alternativ: `npm run admin:anlegen -- name@beispiel.de Passwort`.

Weitere Befehle: `npm run build` (Produktions-Build, braucht die Datenbank), `npm run lint`, `npm run generate:types` (nach Änderungen an den Feldern im Admin-Bereich).

Technik: Next.js 16 (App Router, Cache Components), TypeScript, Tailwind CSS 4, **Payload CMS 3** (Admin-Bereich, läuft in derselben Next.js-App), **PostgreSQL**, **Stripe**.

## Admin-Bereich (`/admin`)

Ähnlich wie WordPress, komplett auf Deutsch:

| Bereich | Was man dort macht |
| --- | --- |
| Inhalte → **Anleitungen** | Anleitungen anlegen und bearbeiten: Titel, Thema/Unterthema, Geräte, „Das brauchen Sie“, Schritte (mit Tipp, Warnhinweis, Bild), Varianten je Gerät oder Krankenkasse, kostenlos/kostenpflichtig, Einzelpreis. „Entwurf speichern“ = unsichtbar, „Veröffentlichen“ = sofort online. Ältere Fassungen unter „Versionen“ wiederherstellbar. |
| Inhalte → **Themengebiete** / **Unterthemen** | z. B. „Bus & Bahn“ → „Deutschlandticket“. Reihenfolge über das Feld „Reihenfolge“. |
| Inhalte → **Bilder** | Screenshots/Illustrationen hochladen (mit Bildbeschreibung zum Vorlesen). |
| Inhalte → **Startseite** | Überschrift und die „Oder direkt starten“-Knöpfe. |
| Verkauf → **Preise & Verkauf** | Abo-Preis (Monat/Jahr), Standardpreis Einzelkauf, Abo/Einzelkauf ein- oder ausblenden, Vorteile-Liste, MwSt.-Hinweis. |
| Verkauf → **Kunden** / **Zahlungen** | Wer hat was gekauft, Abo-Status, „Alles-Zugang geschenkt“ für Testpersonen. |
| Verkauf → **Kündigungen & Widerrufe** | Alles, was über „Verträge hier kündigen“ und „Vertrag widerrufen“ eingeht, mit Eingangszeit. |
| Einstellungen → **Admins** | Weitere Redakteure anlegen. |

Änderungen sind sofort auf der Website sichtbar.

## Aufbau

| Pfad | Inhalt |
| --- | --- |
| `src/payload.config.ts`, `src/payload/` | Admin-Bereich: Sammlungen (Anleitungen, Themen, Unterthemen, Kunden …) und Einstellungen |
| `src/lib/content.ts` | Einzige Stelle, an der die Website Inhalte aus der Datenbank liest (zwischengespeichert) |
| `src/lib/entitlements.ts` | Einzige Stelle, an der geprüft wird, ob jemand eine Anleitung sehen darf |
| `src/lib/session.ts` | Anmeldung ohne Passwort (Link per E-Mail), signiertes Sitzungs-Cookie |
| `src/lib/actions.ts` | Anmelden, Bestellen (Stripe Checkout), Kündigen, Widerrufen |
| `src/lib/customers.ts` | Stripe → Datenbank: Freischaltung nach Zahlung, Abo-Status |
| `src/app/(frontend)/` | Die Website · `src/app/(payload)/` der Admin-Bereich (von Payload erzeugt) |
| `src/app/(frontend)/zahlung/webhook` | Empfängt Meldungen von Stripe |
| `src/seed/` | Ursprüngliche Anleitungen als Startdaten (`npm run seed`) |
| `src/migrations/` | Datenbank-Änderungen für den Server (laufen beim Start automatisch) |

Schreibregeln für Anleitungen: „Sie“-Form, kurze Sätze, ein Schritt = eine Handlung, Bedienelemente in „Anführungszeichen“ genau so benennen, wie sie auf dem Gerät heißen. Eine Anleitung gilt für genau eine App („Gilt für“).

## Bezahlen mit Stripe

So läuft ein Kauf ab: Anleitung → „Alles-Zugang wählen“ oder „Diese Anleitung wählen“ → Bestellübersicht mit Häkchen (Verzicht auf Widerruf bei sofortigem Zugang) → **„Zahlungspflichtig bestellen“** → sichere Stripe-Bezahlseite (Lastschrift, Karte, PayPal, Apple Pay, Google Pay) → zurück und sofort freigeschaltet. Dabei wird automatisch ein Kundenkonto mit der E-Mail-Adresse angelegt und die Person ist auf dem Gerät angemeldet. Auf anderen Geräten meldet sie sich per Link aus einer E-Mail an – ohne Passwort.

Einrichten:

1. Konto auf stripe.com anlegen (zum Testen reicht der Testmodus, ohne Firmendaten).
2. Stripe-Dashboard → Entwickler → API-Schlüssel → `sk_test_…` als `STRIPE_SECRET_KEY` in `.env`.
3. Zahlungsarten: Stripe-Dashboard → Einstellungen → Zahlungsmethoden → **SEPA-Lastschrift, PayPal, Apple Pay, Google Pay** einschalten (Karte ist schon an). Im Code muss dafür nichts geändert werden.
4. Kundenportal (Zahlungsart ändern, Rechnungen): Einstellungen → Billing → Kundenportal → „Aktivieren“.
5. Webhook:
   - lokal: Stripe CLI installieren, `stripe login`, dann `npm run stripe:webhook` – den angezeigten `whsec_…` als `STRIPE_WEBHOOK_SECRET` eintragen.
   - online: Entwickler → Webhooks → Ziel `https://IHRE-DOMAIN/zahlung/webhook`, Ereignisse: `checkout.session.completed`, `checkout.session.async_payment_succeeded`, `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.paid`.
6. Testkarte: `4242 4242 4242 4242`, beliebiges Datum in der Zukunft, beliebige Prüfziffer.

Abo-Preise legt die App beim ersten Kauf selbst in Stripe an. Ändern Sie den Preis im Admin-Bereich, gilt er für neue Abos; bestehende behalten ihren Preis.

## Rechtliches (technisch umgesetzt)

- Bestellknopf „Zahlungspflichtig bestellen“ auf einer eigenen Bestellübersicht
- Häkchen für den Verzicht auf das Widerrufsrecht bei sofortigem Zugang (wird mit Zeitstempel bei Stripe gespeichert)
- Dauerhaft sichtbare Links „Verträge hier kündigen“ (§ 312k BGB, zweistufig mit „Jetzt kündigen“, sofortige Eingangsbestätigung per E-Mail) und „Vertrag widerrufen“
- Nur technisch notwendiges Anmelde-Cookie, keine Google-Dienste, Schrift lokal eingebunden → kein Cookie-Banner nötig
- Offen: Impressum, Datenschutzerklärung, AGB, Widerrufsbelehrung (Texte), E-Mail-Versand (SMTP) einrichten

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

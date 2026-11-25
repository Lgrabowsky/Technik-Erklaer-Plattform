# iPhone-Nachbildung für Anleitungsbilder

Kostenloser Ersatz für einen iOS-Simulator (der nur auf einem Mac läuft): Eine Webseite, die wie ein
aktuelles deutschsprachiges iPhone aussieht und sich beim Tippen ähnlich verhält. Sie kann nur das, was
wir für Anleitungsbilder brauchen – keine echten Apps.

**Die Bilder sind nachgestellt, keine echten Bildschirmfotos.** Darum steht unter jedem Bild
„Nachgestellte Ansicht · iOS 27“ und in der Bildquelle „Nachgestellte Ansicht (iOS 27), kein Original-Screenshot“.

## Ausprobieren

`werkzeuge/iphone-nachbildung/index.html` im Browser öffnen (Doppelklick genügt). Dann wie am Handy tippen:
Einstellungen → Erscheinungsbild → Textgröße, Regler ziehen, Schalter umlegen, oben links zurück,
unten auf den Strich tippen (oder nach oben ziehen) = Home-Bildschirm. Rechts lässt sich iOS 26 wählen.

## Fertige Bilder erstellen

```bash
npx playwright install chromium   # einmalig
node werkzeuge/iphone-nachbildung/aufnehmen.mjs            # alle Bilder
node werkzeuge/iphone-nachbildung/aufnehmen.mjs schrift    # nur Bilder, deren Datei "schrift" enthält
```

Welche Bilder entstehen, steht in `szenen.mjs`. Ergebnis: `public/screenshots/<anleitung>/…webp`,
ganzer Bildschirm, Klickziel im Plattform-Stil (grüner Ring, dunkler Rand, Umgebung abgedunkelt,
bei mehreren Zielen Nummern), darunter der dunkle Streifen – ohne Plattform-Namen.

## Aufbau

| Datei | Inhalt |
|---|---|
| `texte.js` | **Jede Beschriftung mit Beleg** (Apple-Support-Seite) oder `belegt: false` |
| `symbole.js` | Selbst gezeichnete Symbole (bewusst keine Apple-Symbole) |
| `app.js` | Seiten (Home, Einstellungen, Erscheinungsbild, Anzeige & Helligkeit, Textgröße), Navigation, Markierung |
| `stil.css` | Aussehen |
| `szenen.mjs` / `aufnehmen.mjs` | Bilderliste und Aufnahme |
| `schrift/` | Schrift Inter (freie Lizenz OFL, siehe `LIZENZ-Inter.txt`) – Apples Systemschrift darf hier nicht verwendet werden |

Neue Seite: in `app.js` unter `SEITEN` eine Funktion ergänzen, jeder antippbare Eintrag bekommt
`data-ziel="…"` (zum Markieren) und ggf. `data-oeffne="seitenname"`. Neue Texte **immer** in `texte.js`
mit Quelle eintragen.

## Belegte und unbelegte Beschriftungen

Quellen (abgerufen 25.11.2026, deutsche Apple-Support-Seiten):

- A: [iPhone-Display und Texteinstellungen anpassen (iOS 27)](https://support.apple.com/de-de/guide/iphone/iphd6804774e/ios) – „Einstellungen“ > „Erscheinungsbild“ > „Textgröße“, „Fetter Text“, „Liquid Glass“, „Anzeigezoom“
- B: [dieselbe Seite für iOS 26](https://support.apple.com/de-de/guide/iphone/iphd6804774e/26/ios/26) – dort heißt es noch „Anzeige & Helligkeit“ > „Textgröße“
- C: [Einstellungen auf dem iPhone finden](https://support.apple.com/de-de/guide/iphone/iph079e1fe9d/ios) – alle Einträge der Einstellungs-Liste und ihre Reihenfolge
- D: [Text auf dem iPhone leichter lesbar machen](https://support.apple.com/de-de/guide/iphone/iph3c076905a/ios)
- E: [Helligkeit und Farbbalance anpassen](https://support.apple.com/de-de/guide/iphone/iph60ba71065/ios) – „Hell“, „Dunkel“, „Automatisch“

### Prüfliste für ein echtes iPhone (iOS 27)

Diese Dinge stehen in keiner Apple-Quelle und sind aus Erfahrung nachgebaut. Sie betreffen nicht die
Knöpfe, auf die in der Anleitung getippt wird, sollten aber bei Gelegenheit verglichen werden:

- [ ] Erklärtext auf der Seite „Textgröße“: „Apps, die dynamische Schrift unterstützen, passen sich an deine bevorzugte Lesegröße unten an.“
- [ ] Aufbau der Seite „Erscheinungsbild“ (Reihenfolge Hell/Dunkel, Automatisch, Textgröße, Fetter Text, Liquid Glass, Anzeigezoom) und Wert „Standard“ neben „Anzeigezoom“
- [ ] Wert „Aus“ neben „Bluetooth“
- [ ] Abschnittstitel „Helligkeit“ (nur iOS-26-Ansicht)
- [ ] Apple Support nennt den Punkt teils „Anzeige & Helligkeit“, teils „Bildschirm & Helligkeit“ (Quelle E) – auf dem Gerät prüfen
- [ ] App-Namen auf dem Home-Bildschirm ohne Beleg: Telefon, Uhr, Wetter, Karten, Erinnerungen, App Store, Musik
- [ ] Farben der Symbole (nur grob angedeutet)

## Rechtliche Leitplanken (keine Rechtsberatung)

- Keine Apple-Logos, keine Apple-Symbole/App-Icons, keine Apple-Hintergrundbilder, keine Apple-Schrift. Symbole hier sind eigene, schlichte Zeichnungen.
- Kein Gerät (Gehäuse) auf den fertigen Bildern, nur der Bildschirminhalt.
- Jedes Bild ist als „Nachgestellte Ansicht“ gekennzeichnet; keine echten persönlichen Daten (Profil ist unscharf).
- „iPhone“, „iOS“ nur beschreibend nennen; Fußzeilen-Hinweis „Unabhängiges Angebot … Alle Marken gehören ihren Inhabern“ bleibt.
- Apps anderer Firmen (WhatsApp, DB Navigator, Banken) **nicht** ohne Prüfung nachbauen – siehe Hinweis im Projekt.

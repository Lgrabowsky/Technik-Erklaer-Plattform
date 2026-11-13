import type { Guide } from "./types";

/**
 * Beispiel-Anleitungen für das MVP.
 * Hinweis: Die Inhalte sind Entwürfe und sollten vor dem Start fachlich geprüft
 * und mit echten Bildschirmfotos ergänzt werden. App-Oberflächen ändern sich
 * regelmäßig – jede Anleitung braucht später ein "Zuletzt geprüft"-Datum.
 */
export const guides: Guide[] = [
  {
    slug: "app-installieren-android",
    title: "Eine App auf dem Android-Handy installieren",
    summary:
      "Sie lernen, wie Sie eine neue App aus dem Google Play Store auf Ihr Handy laden.",
    category: "grundlagen",
    devices: ["android"],
    difficulty: "leicht",
    minutes: 5,
    access: "free",
    needs: [
      "Ihr Android-Handy (z. B. Samsung, Motorola, Xiaomi)",
      "Eine Internet-Verbindung (WLAN zu Hause ist am besten)",
      "Ihr Google-Konto (ist meist schon eingerichtet)",
    ],
    steps: [
      {
        title: "Play Store öffnen",
        text: "Suchen Sie auf Ihrem Startbildschirm das bunte Dreieck mit dem Namen „Play Store“. Tippen Sie einmal kurz darauf.",
        tip: "Finden Sie das Symbol nicht? Wischen Sie auf dem Bildschirm von unten nach oben. Dann sehen Sie alle Apps.",
      },
      {
        title: "Nach der App suchen",
        text: "Tippen Sie oben auf das Suchfeld „Apps und Spiele suchen“. Es erscheint eine Tastatur. Tippen Sie den Namen der App ein, zum Beispiel „WhatsApp“.",
      },
      {
        title: "Die richtige App auswählen",
        text: "Tippen Sie auf der Tastatur unten rechts auf die Lupe. Sie sehen nun eine Liste. Tippen Sie auf die App mit dem richtigen Namen und Symbol.",
        warning:
          "Achten Sie auf den Anbieter unter dem Namen. Bei WhatsApp steht dort „WhatsApp LLC“. Nachahmer-Apps haben oft ähnliche Namen.",
      },
      {
        title: "Auf „Installieren“ tippen",
        text: "Tippen Sie auf den grünen Knopf „Installieren“. Die App wird jetzt heruntergeladen. Das kann ein bis zwei Minuten dauern.",
        tip: "Wenn nach einem Passwort gefragt wird: Das ist das Passwort Ihres Google-Kontos.",
      },
      {
        title: "App öffnen",
        text: "Wenn der Knopf „Öffnen“ erscheint, ist die App fertig. Tippen Sie auf „Öffnen“. Die App finden Sie ab jetzt auch auf Ihrem Startbildschirm.",
      },
    ],
    takeaways: [
      "Apps bekommen Sie sicher aus dem Play Store.",
      "Prüfen Sie immer Name und Anbieter der App.",
    ],
  },
  {
    slug: "schrift-vergroessern",
    title: "Die Schrift auf dem Handy vergrößern",
    summary:
      "Damit Sie alles gut lesen können: So stellen Sie eine größere Schrift ein.",
    category: "grundlagen",
    devices: ["android", "iphone"],
    difficulty: "leicht",
    minutes: 3,
    access: "free",
    needs: ["Ihr Smartphone"],
    steps: [
      {
        title: "Einstellungen öffnen",
        text: "Tippen Sie auf das Zahnrad-Symbol „Einstellungen“.",
      },
      {
        title: "Den richtigen Bereich finden",
        text: "Beim iPhone: Tippen Sie auf „Anzeige & Helligkeit“. Bei Android: Tippen Sie auf „Anzeige“ (manchmal heißt es auch „Display“).",
        tip: "In den Einstellungen gibt es oben eine Lupe. Dort können Sie einfach „Schrift“ eintippen.",
      },
      {
        title: "Schriftgröße auswählen",
        text: "Beim iPhone: Tippen Sie auf „Textgröße“. Bei Android: Tippen Sie auf „Schriftgröße und -stil“ oder „Schriftgröße“.",
      },
      {
        title: "Schieberegler bewegen",
        text: "Sie sehen einen Schieberegler. Legen Sie den Finger auf den Punkt und schieben Sie ihn nach rechts. Die Beispielschrift wird größer.",
      },
      {
        title: "Fertig",
        text: "Gehen Sie zurück zum Startbildschirm. Die neue Größe gilt jetzt in den meisten Apps.",
      },
    ],
  },
  {
    slug: "betrug-erkennen-sms-anrufe",
    title: "Betrug per SMS, WhatsApp und Telefon erkennen",
    summary:
      "„Hallo Mama, das ist meine neue Nummer“ – so erkennen Sie die häufigsten Betrugsmaschen.",
    category: "sicherheit",
    devices: ["android", "iphone", "computer"],
    difficulty: "leicht",
    minutes: 10,
    access: "free",
    needs: ["Etwas Zeit und Ruhe"],
    steps: [
      {
        title: "Die wichtigste Regel",
        text: "Betrüger machen Druck. Sie sagen: „Es ist dringend!“ oder „Sofort zahlen!“. Wenn Sie Druck spüren: Legen Sie auf oder antworten Sie nicht. Nehmen Sie sich Zeit.",
        warning:
          "Ihre Bank, die Polizei oder Ihre Krankenkasse fragen niemals per SMS oder Telefon nach PIN, TAN oder Passwörtern.",
      },
      {
        title: "Masche 1: „Hallo Mama, hallo Papa“",
        text: "Jemand schreibt von einer unbekannten Nummer: „Mein Handy ist kaputt, das ist meine neue Nummer.“ Kurz danach bittet die Person um Geld für eine Rechnung.",
        tip: "Rufen Sie Ihr Kind unter der alten, bekannten Nummer an. Fragen Sie nach. Fast immer ist alles in Ordnung.",
      },
      {
        title: "Masche 2: Paket-SMS",
        text: "Sie bekommen eine SMS: „Ihr Paket konnte nicht zugestellt werden. Klicken Sie hier.“ Der Link führt auf eine gefälschte Seite.",
        warning: "Tippen Sie nicht auf Links in unerwarteten SMS. Löschen Sie die Nachricht.",
      },
      {
        title: "Masche 3: Falsche Polizisten und Schockanrufe",
        text: "Am Telefon sagt jemand, er sei Polizist oder ein Angehöriger hatte einen Unfall. Es wird Geld oder Schmuck verlangt.",
        tip: "Legen Sie auf. Rufen Sie selbst die 110 an – nicht über die Rückruf-Taste, sondern neu wählen.",
      },
      {
        title: "Masche 4: Gefälschte Bank-Nachrichten",
        text: "Eine Nachricht sagt: „Ihr Konto wird gesperrt. Bestätigen Sie Ihre Daten.“ Dahinter steckt ein Betrüger.",
        tip: "Rufen Sie Ihre Bank unter der Nummer auf Ihrer Bankkarte an.",
      },
      {
        title: "Was tun, wenn es passiert ist?",
        text: "Rufen Sie sofort Ihre Bank an. Sperren Sie Ihre Karte über die Sperr-Notrufnummer 116 116. Erstatten Sie Anzeige bei der Polizei. Sie müssen sich nicht schämen – Betrüger sind Profis.",
      },
    ],
    takeaways: [
      "Druck und Eile sind Warnzeichen.",
      "Nie PIN, TAN oder Passwort weitergeben.",
      "Im Zweifel selbst zurückrufen – unter einer bekannten Nummer.",
    ],
  },
  {
    slug: "fakes-und-ki-erkennen",
    title: "Gefälschte Bilder, Videos und KI-Inhalte erkennen",
    summary:
      "Nicht alles im Internet ist echt. So prüfen Sie Bilder, Videos und Nachrichten.",
    category: "sicherheit",
    devices: ["android", "iphone", "computer"],
    difficulty: "mittel",
    minutes: 15,
    access: "premium",
    priceCents: 299,
    needs: ["Ihr Smartphone oder Computer", "Eine Internet-Verbindung"],
    steps: [
      {
        title: "Erst denken, dann teilen",
        text: "Wenn ein Bild oder Video Sie sehr wütend, ängstlich oder begeistert macht: Halten Sie kurz inne. Genau so funktionieren Fälschungen.",
      },
      {
        title: "Auf Details achten",
        text: "Bei KI-Bildern stimmen oft Kleinigkeiten nicht: zu viele oder verformte Finger, unlesbare Schrift im Hintergrund, seltsame Ohrringe oder Brillen, zu glatte Haut.",
        tip: "Vergrößern Sie das Bild mit zwei Fingern. Fehler sieht man oft erst im Detail.",
      },
      {
        title: "Die Quelle prüfen",
        text: "Wer hat das veröffentlicht? Steht es auch auf bekannten Nachrichtenseiten wie tagesschau.de? Wenn nur eine unbekannte Seite berichtet, ist Vorsicht geboten.",
      },
      {
        title: "Gefälschte Stimmen",
        text: "Mit KI kann man Stimmen nachmachen. Ein Anruf kann klingen wie Ihr Enkel – und ist es nicht.",
        warning:
          "Vereinbaren Sie mit Ihrer Familie ein Codewort. Fragen Sie bei seltsamen Anrufen danach.",
      },
      {
        title: "Falsche Werbung mit Prominenten",
        text: "Bekannte Gesichter werben angeblich für Geldanlagen oder Wundermittel. Diese Videos sind fast immer gefälscht.",
      },
      {
        title: "Bilder rückwärts suchen",
        text: "Mit der Google-Bildersuche (Google Lens) finden Sie heraus, wo ein Bild schon früher aufgetaucht ist. Tippen Sie in der Google-App auf das Kamera-Symbol und wählen Sie das Bild aus.",
      },
    ],
    takeaways: [
      "Starke Gefühle sind ein Warnzeichen.",
      "Quelle prüfen, Details ansehen, Familien-Codewort vereinbaren.",
    ],
  },
  {
    slug: "arzttermin-online-buchen",
    title: "Einen Arzttermin online buchen",
    summary:
      "Ohne Warteschleife: So buchen Sie einen Termin über ein Online-Portal wie Doctolib.",
    category: "gesundheit",
    devices: ["android", "iphone", "computer"],
    difficulty: "mittel",
    minutes: 15,
    access: "premium",
    priceCents: 299,
    needs: [
      "Ihre Krankenversicherungskarte",
      "Ihre E-Mail-Adresse und Handynummer",
      "Die App des Buchungsportals oder die Internetseite",
    ],
    steps: [
      {
        title: "Herausfinden, wie Ihre Praxis Termine vergibt",
        text: "Schauen Sie auf die Internetseite Ihrer Arztpraxis. Dort steht oft ein Knopf wie „Termin online buchen“. Viele Praxen nutzen dafür Doctolib.",
      },
      {
        title: "Konto anlegen",
        text: "Beim ersten Mal legen Sie ein Konto an. Geben Sie Ihren Namen, Ihre E-Mail-Adresse und ein Passwort ein. Schreiben Sie sich das Passwort an einem sicheren Ort auf.",
        tip: "Sie bekommen eine SMS mit einem Code. Tippen Sie diesen Code ein, um Ihr Handy zu bestätigen.",
      },
      {
        title: "Praxis und Grund auswählen",
        text: "Suchen Sie Ihre Praxis. Wählen Sie, ob Sie schon Patient sind, und den Grund des Besuchs, zum Beispiel „Vorsorge“ oder „Sprechstunde“.",
      },
      {
        title: "Termin wählen",
        text: "Sie sehen freie Termine in einem Kalender. Tippen Sie auf einen passenden Tag und eine Uhrzeit.",
      },
      {
        title: "Angaben prüfen und bestätigen",
        text: "Prüfen Sie Datum und Uhrzeit. Tippen Sie dann auf „Termin bestätigen“. Sie bekommen eine Bestätigung per E-Mail.",
      },
      {
        title: "Termin absagen, wenn Sie nicht können",
        text: "Öffnen Sie die App und tippen Sie auf „Meine Termine“. Dort können Sie den Termin absagen. So bekommt jemand anderes den Platz.",
      },
    ],
  },
  {
    slug: "rechnung-krankenkasse-einreichen",
    title: "Eine Rechnung bei der Krankenkasse per App einreichen",
    summary:
      "Rechnung fotografieren statt Brief schicken: So reichen Sie Belege in der App Ihrer Krankenkasse ein.",
    category: "gesundheit",
    devices: ["android", "iphone"],
    difficulty: "anspruchsvoll",
    minutes: 20,
    access: "premium",
    priceCents: 399,
    needs: [
      "Die App Ihrer Krankenkasse (z. B. aus dem Play Store oder App Store)",
      "Ihre Zugangsdaten für die App",
      "Die Rechnung auf Papier oder als PDF",
    ],
    steps: [
      {
        title: "App öffnen und anmelden",
        text: "Öffnen Sie die App Ihrer Krankenkasse und melden Sie sich an. Beim ersten Mal müssen Sie sich oft registrieren. Das kann einige Tage dauern, weil ein Brief mit Code zu Ihnen geschickt wird.",
        tip: "Gesetzlich Versicherte reichen Rechnungen meist nur für Zusatzversicherungen oder Kostenerstattung ein. Fragen Sie im Zweifel bei Ihrer Kasse nach.",
      },
      {
        title: "Den Bereich „Rechnung einreichen“ finden",
        text: "Suchen Sie nach einem Knopf wie „Rechnung einreichen“, „Belege hochladen“ oder „Dokumente senden“. Er ist oft auf der Startseite oder im Menü.",
      },
      {
        title: "Rechnung gut fotografieren",
        text: "Legen Sie die Rechnung auf einen dunklen Tisch bei gutem Licht. Halten Sie das Handy gerade darüber. Die ganze Rechnung muss gut lesbar sein.",
        tip: "Viele Apps erkennen die Ränder automatisch und machen das Foto selbst.",
      },
      {
        title: "Weitere Seiten hinzufügen",
        text: "Hat die Rechnung mehrere Seiten? Tippen Sie auf „Seite hinzufügen“ und fotografieren Sie jede Seite.",
      },
      {
        title: "Angaben ergänzen und absenden",
        text: "Wählen Sie, für wen die Rechnung ist, und tippen Sie auf „Absenden“. Sie bekommen eine Bestätigung.",
      },
      {
        title: "Original aufheben",
        text: "Heben Sie die Papier-Rechnung noch einige Monate auf. Manchmal fragt die Kasse nach.",
      },
    ],
  },
  {
    slug: "fahrplan-und-ticket-db-navigator",
    title: "Fahrplan abrufen und Fahrkarte kaufen mit dem DB Navigator",
    summary:
      "Verbindungen suchen, Fahrkarte kaufen und im Zug vorzeigen – Schritt für Schritt.",
    category: "unterwegs",
    devices: ["android", "iphone"],
    difficulty: "mittel",
    minutes: 20,
    access: "premium",
    priceCents: 399,
    needs: [
      "Die App „DB Navigator“",
      "Eine Bezahlmöglichkeit (z. B. Lastschrift, Kreditkarte oder PayPal)",
    ],
    steps: [
      {
        title: "Start und Ziel eingeben",
        text: "Öffnen Sie den DB Navigator. Tippen Sie auf „Von“ und geben Sie Ihren Startbahnhof ein. Tippen Sie dann auf „Nach“ und geben Sie Ihr Ziel ein.",
      },
      {
        title: "Datum und Uhrzeit wählen",
        text: "Tippen Sie auf das Datum und wählen Sie, wann Sie fahren möchten. Tippen Sie dann auf „Suchen“.",
      },
      {
        title: "Verbindung auswählen",
        text: "Sie sehen eine Liste mit Zügen. Dort stehen Abfahrt, Ankunft, Dauer und wie oft Sie umsteigen. Tippen Sie auf eine Verbindung, um Details zu sehen.",
        tip: "Weniger Umstiege sind oft entspannter, auch wenn die Fahrt etwas länger dauert.",
      },
      {
        title: "Fahrkarte auswählen",
        text: "Tippen Sie auf „Weiter“ und wählen Sie ein Angebot. Haben Sie eine BahnCard? Geben Sie diese an, dann wird es günstiger.",
      },
      {
        title: "Bezahlen",
        text: "Geben Sie Ihre Daten ein und wählen Sie die Bezahlart. Prüfen Sie alles und tippen Sie auf „Jetzt kaufen“.",
      },
      {
        title: "Fahrkarte im Zug zeigen",
        text: "Ihre Fahrkarte finden Sie unter „Reisen“. Zeigen Sie dem Zugbegleiter den Code auf dem Bildschirm und Ihren Ausweis.",
        warning: "Laden Sie Ihr Handy vor der Fahrt auf. Ohne Akku keine Fahrkarte!",
      },
    ],
  },
  {
    slug: "sicher-online-bezahlen",
    title: "Sicher im Internet bezahlen",
    summary:
      "Welche Bezahlarten sicher sind und woran Sie einen seriösen Online-Shop erkennen.",
    category: "bezahlen",
    devices: ["android", "iphone", "computer"],
    difficulty: "mittel",
    minutes: 15,
    access: "premium",
    priceCents: 299,
    needs: ["Ihr Smartphone oder Computer"],
    steps: [
      {
        title: "Auf das Schloss achten",
        text: "Oben in der Adresszeile sollte die Adresse mit „https“ beginnen. Oft sehen Sie dort auch ein kleines Schloss. Das heißt: Die Verbindung ist verschlüsselt.",
        warning: "Das Schloss allein sagt nicht, dass der Shop ehrlich ist. Auch Betrüger nutzen es.",
      },
      {
        title: "Den Shop prüfen",
        text: "Ein seriöser Shop hat ein „Impressum“ mit Adresse und Telefonnummer. Suchen Sie im Internet nach dem Shop-Namen und dem Wort „Erfahrungen“.",
      },
      {
        title: "Sichere Bezahlarten wählen",
        text: "Am sichersten sind Kauf auf Rechnung, PayPal oder Kreditkarte. Dort bekommen Sie bei Problemen Ihr Geld oft zurück.",
        warning: "Vorsicht bei „nur Vorkasse“ oder Überweisung ins Ausland. Dieses Geld ist bei Betrug meist weg.",
      },
      {
        title: "Zu günstige Angebote meiden",
        text: "Ist ein Preis viel niedriger als überall sonst? Dann ist es wahrscheinlich ein Fake-Shop.",
      },
      {
        title: "Kauf bestätigen",
        text: "Viele Banken schicken eine Bestätigung in ihre App. Prüfen Sie dort Betrag und Händler, bevor Sie auf „Freigeben“ tippen.",
        warning: "Geben Sie niemals eine Zahlung frei, die Sie nicht selbst gestartet haben.",
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}

export function getGuidesByCategory(category: string) {
  return guides.filter((g) => g.category === category);
}

export function searchGuides(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return guides.filter((g) =>
    [g.title, g.summary, ...g.steps.map((s) => s.title)]
      .join(" ")
      .toLowerCase()
      .includes(q),
  );
}

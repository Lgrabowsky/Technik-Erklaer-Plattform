import type { Guide } from "../../content/types";

export const sicherheit: Guide[] = [
  {
    slug: "betrug-erkennen-sms-anrufe",
    title: "Betrug per SMS, WhatsApp und Telefon erkennen",
    summary: "„Hallo Mama, das ist meine neue Nummer“ – so erkennen Sie die häufigsten Betrugsmaschen.",
    category: "sicherheit",
    devices: ["android", "iphone", "computer"],
    difficulty: "leicht",
    minutes: 10,
    access: "free",
    checked: "2026-11",
    keywords: ["Enkeltrick", "Schockanruf", "falsche Polizisten", "Betrug", "Abzocke", "SMS"],
    needs: ["Etwas Zeit und Ruhe"],
    steps: [
      {
        title: "Die wichtigste Regel",
        text: "Betrüger machen Druck: „Es ist dringend!“, „Sofort zahlen!“, „Sagen Sie niemandem etwas!“. Wenn Sie Druck spüren: Legen Sie auf oder antworten Sie nicht. Nehmen Sie sich Zeit.",
        warning: "Bank, Polizei und Krankenkasse fragen niemals per SMS, Mail oder Telefon nach PIN, TAN oder Passwörtern.",
      },
      {
        title: "Masche 1: „Hallo Mama, hallo Papa“",
        text: "Von einer unbekannten Nummer kommt: „Mein Handy ist kaputt, das ist meine neue Nummer.“ Kurz danach soll Geld für eine dringende Rechnung überwiesen werden.",
        tip: "Rufen Sie Ihr Kind unter der alten, bekannten Nummer an. Fast immer ist alles in Ordnung.",
      },
      {
        title: "Masche 2: Paket- und Behörden-SMS",
        text: "„Ihr Paket konnte nicht zugestellt werden“ oder „Sie haben eine offene Mautgebühr“ – mit einem Link. Der Link führt auf eine gefälschte Seite, die Ihre Daten stehlen will.",
        warning: "Tippen Sie nicht auf Links in unerwarteten SMS. Löschen Sie die Nachricht.",
      },
      {
        title: "Masche 3: Schockanruf und falsche Polizisten",
        text: "Am Telefon heißt es, ein Angehöriger hatte einen Unfall, oder ein „Polizist“ will Ihr Geld in Sicherheit bringen. Es wird Bargeld oder Schmuck verlangt, oft holt jemand es ab.",
        tip: "Legen Sie auf. Rufen Sie selbst die 110 an – neu wählen, nicht die Rückruf-Taste nutzen. Die echte Polizei holt nie Geld ab.",
      },
      {
        title: "Masche 4: Falscher Bankmitarbeiter",
        text: "Jemand ruft an – oft mit der echten Nummer Ihrer Bank im Display – und sagt, Ihr Konto sei in Gefahr. Sie sollen eine Zahlung „stornieren“ und dafür etwas in der App freigeben.",
        warning: "Die Nummer im Display kann gefälscht sein. Geben Sie am Telefon niemals etwas frei. Legen Sie auf und rufen Sie Ihre Bank selbst an – die Nummer steht auf Ihrer Karte.",
      },
      {
        title: "Was tun, wenn es passiert ist?",
        text: "Rufen Sie sofort Ihre Bank an. Lassen Sie Karten und Online-Banking über den Sperr-Notruf 116 116 sperren. Erstatten Sie Anzeige bei der Polizei. Sie müssen sich nicht schämen – Betrüger sind Profis.",
      },
    ],
    takeaways: ["Druck und Eile sind Warnzeichen.", "Nie PIN, TAN oder Passwort weitergeben.", "Im Zweifel auflegen und selbst unter einer bekannten Nummer zurückrufen."],
  },
  {
    slug: "phishing-mails-erkennen",
    title: "Gefälschte E-Mails (Phishing) erkennen",
    summary: "Mails, die aussehen wie von Bank, Post oder Amazon, aber von Betrügern kommen – so entlarven Sie sie.",
    category: "sicherheit",
    devices: ["android", "iphone", "computer"],
    difficulty: "leicht",
    minutes: 10,
    access: "free",
    checked: "2026-11",
    keywords: ["Phishing", "E-Mail", "Mail", "Spam", "Link", "Absender"],
    needs: ["Ihr E-Mail-Postfach"],
    steps: [
      {
        title: "Absender genau ansehen",
        text: "Tippen Sie auf den Namen des Absenders. Jetzt sehen Sie die echte Adresse. Steht da bei „Sparkasse“ etwa „info@sparkasse-sicherheit24.com“, ist es eine Fälschung.",
      },
      {
        title: "Auf die Anrede achten",
        text: "„Sehr geehrter Kunde“ statt Ihres Namens ist ein Warnzeichen. Echte Firmen sprechen Sie meist mit Namen an.",
      },
      {
        title: "Druck und Drohung erkennen",
        text: "„Ihr Konto wird in 24 Stunden gesperrt“ oder „Letzte Mahnung“: Solche Drohungen sollen Sie zu schnellem Klicken bringen.",
      },
      {
        title: "Links nicht anklicken",
        text: "Tippen Sie nicht auf Knöpfe oder Links in der Mail. Wenn Sie unsicher sind: Öffnen Sie die App Ihrer Bank oder tippen Sie die Adresse der Firma selbst ein und schauen Sie dort nach.",
        warning: "Öffnen Sie keine unerwarteten Anhänge – besonders keine ZIP-Dateien oder „Rechnungen“ von Firmen, bei denen Sie nichts bestellt haben.",
      },
      {
        title: "Mail löschen oder melden",
        text: "Löschen Sie die Mail. Viele Postfächer haben auch einen Knopf „Spam“ oder „Phishing melden“. Die Verbraucherzentrale sammelt Phishing-Mails im „Phishing-Radar“.",
      },
      {
        title: "Doch geklickt?",
        text: "Haben Sie Daten eingegeben, ändern Sie sofort das Passwort – über die echte App oder Seite. Bei Bankdaten: Rufen Sie Ihre Bank an oder den Sperr-Notruf 116 116.",
      },
    ],
    takeaways: ["Echte Absender-Adresse prüfen.", "Nie über Links in Mails anmelden.", "Im Zweifel selbst in der App nachsehen."],
  },
  {
    slug: "sichere-passwoerter",
    title: "Sichere Passwörter, die man sich merken kann",
    summary: "So erstellen Sie gute Passwörter, bewahren sie sicher auf und schützen Ihre Konten zusätzlich.",
    category: "sicherheit",
    devices: ["android", "iphone", "computer"],
    difficulty: "leicht",
    minutes: 10,
    access: "premium",
    priceCents: 199,
    checked: "2026-11",
    keywords: ["Passwort", "Kennwort", "Zwei-Faktor", "2FA", "Sicherheit", "Konto"],
    needs: ["Papier und Stift", "Einen sicheren Ort zu Hause"],
    steps: [
      {
        title: "Lang ist besser als kompliziert",
        text: "Ein gutes Passwort ist lang. Verbinden Sie vier zufällige Wörter, zum Beispiel „Tulpe-Fahrrad-Mond-Kaffee“. Das ist leicht zu merken und sehr schwer zu erraten.",
        warning: "Nicht geeignet: Namen, Geburtstage, „123456“ oder „Passwort“.",
      },
      {
        title: "Für jedes Konto ein eigenes Passwort",
        text: "Nutzen Sie nie dasselbe Passwort für E-Mail, Bank und Online-Shops. Wird eines gestohlen, sind sonst alle Konten in Gefahr.",
        tip: "Das wichtigste Passwort ist das für Ihr E-Mail-Postfach. Darüber lassen sich alle anderen zurücksetzen.",
      },
      {
        title: "Passwortbuch zu Hause",
        text: "Es ist in Ordnung, Passwörter in ein kleines Heft zu schreiben – solange es sicher zu Hause liegt und nicht im Portemonnaie oder neben dem Computer.",
      },
      {
        title: "Zweiten Schutz einschalten",
        text: "Viele Dienste bieten „Zwei-Faktor-Anmeldung“ oder „Bestätigung in zwei Schritten“: Nach dem Passwort kommt noch ein Code per SMS oder App. Schalten Sie das in den Einstellungen unter „Sicherheit“ ein.",
      },
      {
        title: "Passwörter nie weitergeben",
        text: "Echte Firmen fragen nie nach Ihrem Passwort – weder per Telefon noch per Mail. Wer danach fragt, ist ein Betrüger.",
      },
    ],
    takeaways: ["Vier Wörter = ein starkes Passwort.", "Jedes Konto bekommt sein eigenes Passwort.", "Zwei-Faktor-Anmeldung einschalten."],
  },
  {
    slug: "fakes-und-ki-erkennen",
    title: "Gefälschte Bilder, Videos und KI-Inhalte erkennen",
    summary: "Nicht alles im Internet ist echt. So prüfen Sie Bilder, Videos, Stimmen und Nachrichten.",
    category: "sicherheit",
    devices: ["android", "iphone", "computer"],
    difficulty: "mittel",
    minutes: 15,
    access: "premium",
    priceCents: 299,
    checked: "2026-11",
    keywords: ["KI", "künstliche Intelligenz", "Fake", "Deepfake", "Fake News", "Falschmeldung"],
    needs: ["Ihr Smartphone oder Computer", "Eine Internet-Verbindung"],
    steps: [
      {
        title: "Erst denken, dann teilen",
        text: "Macht Sie ein Bild oder Video sehr wütend, ängstlich oder begeistert? Halten Sie kurz inne. Genau so sind Fälschungen gemacht.",
      },
      {
        title: "Auf Details achten",
        text: "Bei KI-Bildern stimmen oft Kleinigkeiten nicht: verformte Finger, unlesbare Schrift im Hintergrund, seltsame Ohrringe oder Brillen, sehr glatte Haut, Licht von mehreren Seiten.",
        tip: "Vergrößern Sie das Bild mit zwei Fingern. Fehler sieht man oft erst im Detail. Aber Achtung: Gute Fälschungen haben keine sichtbaren Fehler mehr.",
      },
      {
        title: "Die Quelle prüfen",
        text: "Wer hat das veröffentlicht? Berichten auch bekannte Nachrichtenseiten wie tagesschau.de darüber? Wenn nur eine unbekannte Seite oder ein Kettenbrief es zeigt, ist Vorsicht geboten.",
      },
      {
        title: "Gefälschte Stimmen",
        text: "Mit KI lassen sich Stimmen nachmachen. Ein Anruf kann klingen wie Ihr Enkel – und ist es nicht.",
        warning: "Vereinbaren Sie mit Ihrer Familie ein Codewort. Fragen Sie bei ungewöhnlichen Anrufen danach – besonders, wenn es um Geld geht.",
      },
      {
        title: "Falsche Werbung mit Prominenten",
        text: "Bekannte Gesichter aus Fernsehen oder Politik werben angeblich für Geldanlagen oder Wundermittel. Diese Videos sind fast immer gefälscht.",
      },
      {
        title: "Bilder rückwärts suchen",
        text: "Mit Google Lens finden Sie heraus, wo ein Bild schon früher aufgetaucht ist. Öffnen Sie die Google-App, tippen Sie auf das Kamera-Symbol im Suchfeld und wählen Sie das Bild aus.",
      },
      {
        title: "Faktenchecks nutzen",
        text: "Seiten wie „correctiv.org/faktencheck“ oder der „ARD-Faktenfinder“ prüfen bekannte Falschmeldungen. Suchen Sie dort nach dem Thema.",
      },
    ],
    takeaways: ["Starke Gefühle sind ein Warnzeichen.", "Quelle prüfen, Details ansehen.", "Familien-Codewort gegen gefälschte Stimmen."],
  },
];

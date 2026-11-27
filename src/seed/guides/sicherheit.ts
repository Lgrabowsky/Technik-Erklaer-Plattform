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
        text: "Löschen Sie die Mail. Viele Postfächer haben auch einen Knopf „Spam“ oder „Phishing melden“. Die Verbraucherzentrale sammelt Phishing-Mails im „Phishing-Radar“: Leiten Sie die Mail an die grün markierte Adresse weiter.",
        image: {
          src: "/screenshots/phishing-mails-erkennen/phishing-radar.webp",
          alt: "Seite „Phishing-Radar“ der Verbraucherzentrale. Die E-Mail-Adresse phishing@verbraucherzentrale.nrw ist markiert.",
          credit: "verbraucherzentrale.de",
        },
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
        text: "Seiten wie „correctiv.org/faktencheck“ oder der „ARD-Faktenfinder“ prüfen bekannte Falschmeldungen. Klicken Sie oben rechts auf die Lupe und suchen Sie nach dem Thema.",
        image: {
          src: "/screenshots/fakes-und-ki-erkennen/faktencheck-suchen.webp",
          alt: "Faktencheck-Seite von Correctiv. Oben rechts ist die Lupe für die Suche markiert.",
          credit: "correctiv.org",
        },
      },
    ],
    takeaways: ["Starke Gefühle sind ein Warnzeichen.", "Quelle prüfen, Details ansehen.", "Familien-Codewort gegen gefälschte Stimmen."],
  },
  {
    slug: "whatsapp-zwei-schritt",
    title: "WhatsApp gegen Diebstahl schützen (Bestätigung in zwei Schritten)",
    summary: "Mit einer eigenen PIN kann niemand Ihr WhatsApp übernehmen – selbst wenn er Ihren SMS-Code ergaunert.",
    category: "sicherheit",
    app: "WhatsApp",
    devices: ["android", "iphone"],
    difficulty: "leicht",
    minutes: 5,
    access: "free",
    checked: "2026-11",
    keywords: ["WhatsApp", "PIN", "Zwei-Faktor", "Bestätigung in zwei Schritten", "Konto gehackt", "übernommen", "Sicherheit"],
    needs: ["WhatsApp ist eingerichtet", "Eine sechsstellige Zahl, die Sie sich gut merken können (nicht Ihr Geburtsdatum)"],
    unverified: true,
    reviewNote: "Weg zu den Einstellungen prüfen: Android „⋮“ oben rechts → „Einstellungen“; iPhone unten rechts „Einstellungen“ (Tab wurde in manchen Versionen umbenannt). Danach „Account“ → „Bestätigung in zwei Schritten“ → „Aktivieren“.",
    variants: [
      {
        device: "android",
        unverified: true,
        steps: [
          {
            title: "Einstellungen öffnen",
            text: "Öffnen Sie WhatsApp. Tippen Sie oben rechts auf die drei Punkte (⋮) und dann auf „Einstellungen“.",
          },
          {
            title: "„Account“ öffnen",
            text: "Tippen Sie auf „Account“ und dann auf „Bestätigung in zwei Schritten“.",
          },
          {
            title: "„Aktivieren“ antippen",
            text: "Tippen Sie auf „Aktivieren“ bzw. „PIN erstellen“.",
          },
          {
            title: "PIN zweimal eingeben",
            text: "Tippen Sie eine sechsstellige Zahl ein und tippen Sie auf „Weiter“. Geben Sie sie zur Sicherheit noch einmal ein.",
            tip: "Schreiben Sie die PIN in Ihr Passwortheft zu Hause.",
          },
          {
            title: "E-Mail-Adresse hinterlegen",
            text: "WhatsApp fragt nach Ihrer E-Mail-Adresse. Geben Sie sie ein – damit können Sie die PIN zurücksetzen, falls Sie sie vergessen. Bestätigen Sie den Code aus der E-Mail und tippen Sie zum Schluss auf „Fertig“.",
          },
        ],
      },
      {
        device: "iphone",
        unverified: true,
        steps: [
          {
            title: "Einstellungen öffnen",
            text: "Öffnen Sie WhatsApp und tippen Sie unten rechts auf „Einstellungen“ (Zahnrad).",
          },
          {
            title: "„Account“ öffnen",
            text: "Tippen Sie auf „Account“ und dann auf „Bestätigung in zwei Schritten“.",
          },
          {
            title: "„Aktivieren“ antippen",
            text: "Tippen Sie auf „Aktivieren“.",
          },
          {
            title: "PIN zweimal eingeben",
            text: "Tippen Sie eine sechsstellige Zahl ein und tippen Sie auf „Weiter“. Geben Sie sie noch einmal ein.",
            tip: "Schreiben Sie die PIN in Ihr Passwortheft zu Hause.",
          },
          {
            title: "E-Mail-Adresse hinterlegen",
            text: "Geben Sie Ihre E-Mail-Adresse ein, damit Sie die PIN zurücksetzen können. Tippen Sie auf „Weiter“ und zum Schluss auf „Fertig“.",
          },
        ],
      },
    ],
    takeaways: ["Mit PIN kann niemand Ihr WhatsApp auf ein anderes Handy holen.", "PIN und SMS-Code nie weitergeben."],
    related: ["whatsapp-einrichten", "betrug-erkennen-sms-anrufe"],
  },
  {
    slug: "handy-aktualisieren",
    title: "Das Handy auf den neuesten Stand bringen (Updates)",
    summary: "Updates schließen Sicherheitslücken. So prüfen Sie, ob Ihr Handy aktuell ist, und installieren Updates.",
    category: "sicherheit",
    devices: ["android", "iphone"],
    difficulty: "leicht",
    minutes: 10,
    access: "free",
    checked: "2026-11",
    keywords: ["Update", "Softwareupdate", "aktualisieren", "Sicherheitsupdate", "System", "neueste Version"],
    needs: ["WLAN", "Akku mindestens halb voll oder Ladekabel angesteckt"],
    variants: [
      {
        device: "android",
        unverified: true,
        steps: [
          {
            title: "Einstellungen öffnen",
            text: "Tippen Sie auf das Zahnrad-Symbol „Einstellungen“.",
          },
          {
            title: "„System“ öffnen",
            text: "Wischen Sie ganz nach unten und tippen Sie auf „System“ und dann auf „Softwareupdates“.",
            image: {
              src: "/screenshots/handy-aktualisieren/android-system.webp",
              alt: "Einstellungen auf einem Android-Handy. Der Eintrag „System“ ist markiert.",
              credit: "Android 16 (Pixel)",
            },
            tip: "Oben in den Einstellungen gibt es eine Lupe. Tippen Sie „Update“ ein.",
          },
          {
            title: "Nach Updates suchen",
            text: "Tippen Sie auf „Systemupdate“. Das Handy sucht jetzt nach neuen Versionen.",
            image: {
              src: "/screenshots/handy-aktualisieren/android-systemupdate.webp",
              alt: "Seite „Softwareupdates“. Der Eintrag „Systemupdate“ ist markiert.",
              credit: "Android 16 (Pixel)",
            },
          },
          {
            title: "Update installieren",
            text: "Steht dort „Dein System ist auf dem neuesten Stand“, ist alles in Ordnung. Sie können zur Sicherheit auf „Nach Updates suchen“ tippen. Gibt es ein Update, tippen Sie auf „Herunterladen und installieren“. Danach tippen Sie auf „Jetzt neu starten“. Das Handy startet dabei neu. Das kann 15 bis 30 Minuten dauern – lassen Sie es in Ruhe.",
            image: {
              src: "/screenshots/handy-aktualisieren/android-nach-updates-suchen.webp",
              alt: "Seite „Dein System ist auf dem neuesten Stand“. Unten rechts ist „Nach Updates suchen“ markiert.",
              credit: "Android 16 (Pixel)",
            },
          },
          {
            title: "Auch Apps aktualisieren",
            text: "Öffnen Sie den Play Store. Tippen Sie oben rechts auf Ihr Profilbild, dann auf „Apps und Gerät verwalten“ und auf „Alle aktualisieren“.",
          },
        ],
      },
      {
        device: "iphone",
        steps: [
          {
            title: "Einstellungen öffnen",
            text: "Tippen Sie auf das graue Zahnrad-Symbol „Einstellungen“.",
          },
          {
            title: "„Allgemein“ antippen",
            text: "Wischen Sie etwas nach oben und tippen Sie auf „Allgemein“.",
          },
          {
            title: "„Softwareupdate“ öffnen",
            text: "Tippen Sie auf „Softwareupdate“. Das iPhone sucht nach neuen Versionen.",
          },
          {
            title: "Update installieren",
            text: "Gibt es ein Update, tippen Sie auf „Jetzt aktualisieren“ bzw. „Jetzt installieren“ und geben Sie Ihren Code ein. Das iPhone startet neu. Lassen Sie es in Ruhe, bis der Sperrbildschirm wieder erscheint.",
          },
          {
            title: "Automatische Updates einschalten",
            text: "Tippen Sie auf „Automatische Updates“ und schalten Sie alle Schalter ein (grün). Dann aktualisiert sich das iPhone nachts von selbst.",
          },
        ],
      },
      {
        device: "samsung",
        unverified: true,
        steps: [
          {
            title: "Einstellungen öffnen",
            text: "Tippen Sie auf das Zahnrad-Symbol „Einstellungen“.",
          },
          {
            title: "„Software-Update“ öffnen",
            text: "Wischen Sie ganz nach unten und tippen Sie auf „Software-Update“.",
            tip: "Oben in den Einstellungen gibt es eine Lupe. Tippen Sie „Update“ ein.",
          },
          {
            title: "Nach Updates suchen",
            text: "Tippen Sie auf „Herunterladen und installieren“. Das Handy sucht jetzt nach neuen Versionen.",
          },
          {
            title: "Update installieren",
            text: "Gibt es ein Update, tippen Sie auf „Herunterladen“ und danach auf „Jetzt installieren“. Das Handy startet dabei neu. Das kann 15 bis 30 Minuten dauern – lassen Sie es in Ruhe.",
          },
          {
            title: "Auch Apps aktualisieren",
            text: "Öffnen Sie den Play Store. Tippen Sie oben rechts auf Ihr Profilbild, dann auf „Apps und Gerät verwalten“ und auf „Alle aktualisieren“.",
            tip: "Einige Samsung-Apps werden über den „Galaxy Store“ aktualisiert. Das Handy meldet sich, wenn dort etwas Neues da ist.",
          },
        ],
      },
    ],
    takeaways: ["Updates schützen vor Betrügern.", "Am besten automatische Updates einschalten."],
    reviewNote: "Samsung: „Software-Update“ → „Herunterladen und installieren“ → „Jetzt installieren“ prüfen. Pixel: „System“ → „Softwareupdates“ (Schreibweise!) → „Systemupdate“ → „Jetzt neu starten“ prüfen. Play-Store-Weg „Apps und Gerät verwalten“ prüfen.",
  },
  {
    slug: "nummer-blockieren",
    title: "Lästige Anrufer und Nummern blockieren",
    summary: "Werbung, Betrüger oder ständige Anrufe: So sperren Sie eine Nummer, damit sie Sie nicht mehr erreicht.",
    category: "sicherheit",
    app: "Telefon-App (Samsung „Telefon“, Google „Telefon“, iPhone „Telefon“)",
    devices: ["android", "iphone"],
    difficulty: "leicht",
    minutes: 3,
    access: "free",
    checked: "2026-11",
    keywords: ["blockieren", "sperren", "Werbeanruf", "Spam", "unerwünschte Anrufe", "Nummer sperren"],
    needs: ["Die Nummer steht in Ihrer Anrufliste"],
    unverified: true,
    reviewNote: "Samsung „Telefon“: Tab „Letzte“, Eintrag antippen → „i“ (Details) → „Blockieren“ sowie Weg zu „Nummern blockieren“ prüfen. Google „Telefon“ (Pixel): Tab „Startseite“ (seit Neugestaltung 2025), Eintrag lange drücken → „Blockieren/Spam melden“ prüfen. iPhone: Seit iOS 26 neues Layout der Telefon-App, Tab-Namen prüfen.",
    variants: [
      {
        device: "android",
        unverified: true,
        steps: [
          {
            title: "Telefon-App öffnen",
            text: "Tippen Sie auf das Symbol mit dem Telefonhörer. Es heißt „Telefon“.",
          },
          {
            title: "Anrufliste öffnen",
            text: "Tippen Sie unten auf „Anrufliste“. Dort sehen Sie die letzten Anrufe.",
            image: {
              src: "/screenshots/nummer-blockieren/android-anrufliste.webp",
              alt: "Telefon-App. Unten ist der Reiter „Anrufliste“ markiert.",
              credit: "Android 16 (Pixel)",
            },
          },
          {
            title: "Nummer lange gedrückt halten",
            text: "Legen Sie den Finger auf die Nummer, die Sie sperren möchten, und lassen Sie ihn kurz liegen. Es öffnet sich ein Menü.",
            image: {
              src: "/screenshots/nummer-blockieren/android-eintrag.webp",
              alt: "Anrufliste mit einem Anruf von 03012345678. Der Eintrag ist markiert.",
              credit: "Android 16 (Pixel)",
            },
          },
          {
            title: "„Blockieren“ wählen",
            text: "Tippen Sie auf „Blockieren/Spam melden“. Bestätigen Sie mit „Blockieren“.",
            image: {
              src: "/screenshots/nummer-blockieren/android-blockieren.webp",
              alt: "Menü nach langem Drücken. „Blockieren/Spam melden“ ist markiert.",
              credit: "Android 16 (Pixel)",
            },
            tip: "Ein Haken bei „Als Spam melden“ hilft, andere Menschen vor dieser Nummer zu warnen.",
          },
        ],
      },
      {
        device: "iphone",
        unverified: true,
        steps: [
          {
            title: "Telefon-App öffnen",
            text: "Tippen Sie auf das grüne Symbol mit dem weißen Telefonhörer.",
          },
          {
            title: "Anrufliste öffnen",
            text: "Tippen Sie unten auf „Anrufliste“ bzw. „Anrufe“.",
          },
          {
            title: "Infos zur Nummer öffnen",
            text: "Tippen Sie rechts neben der Nummer auf das kleine „i“ im Kreis.",
          },
          {
            title: "„Anrufer blockieren“",
            text: "Wischen Sie ganz nach unten und tippen Sie auf „Anrufer blockieren“. Bestätigen Sie mit „Kontakt blockieren“.",
            tip: "Gegen viele unbekannte Anrufe: Unter „Einstellungen“ → „Apps“ → „Telefon“ gibt es Optionen für unbekannte Anrufer.",
          },
        ],
      },
      {
        device: "samsung",
        unverified: true,
        steps: [
          {
            title: "Telefon-App öffnen",
            text: "Tippen Sie auf das grüne Symbol mit dem weißen Telefonhörer. Es heißt „Telefon“.",
          },
          {
            title: "Anrufliste öffnen",
            text: "Tippen Sie unten auf „Letzte“. Sie sehen die letzten Anrufe.",
          },
          {
            title: "Details zur Nummer öffnen",
            text: "Tippen Sie einmal auf die Nummer, die Sie sperren möchten. Darunter erscheinen kleine Symbole. Tippen Sie auf das „i“ im Kreis („Details“).",
          },
          {
            title: "„Blockieren“ wählen",
            text: "Tippen Sie unten auf „Blockieren“. Bestätigen Sie mit „Blockieren“.",
            tip: "Alle blockierten Nummern sehen Sie in der Telefon-App unter den drei Punkten (⋮) → „Einstellungen“ → „Nummern blockieren“.",
          },
        ],
      },
    ],
    takeaways: ["Blockierte Nummern können Sie nicht mehr anrufen oder per SMS erreichen.", "Unerlaubte Werbeanrufe können Sie bei der Bundesnetzagentur melden."],
    related: ["betrug-erkennen-sms-anrufe"],
  },
  {
    slug: "app-abos-kuendigen",
    title: "Abos in Apps finden und kündigen",
    summary: "Monatlich wird Geld für eine App abgebucht? So sehen Sie alle Abos auf Ihrem Handy und kündigen sie.",
    category: "sicherheit",
    app: "Play Store (Android) bzw. Einstellungen (iPhone)",
    devices: ["android", "iphone"],
    difficulty: "leicht",
    minutes: 5,
    access: "free",
    checked: "2026-11",
    unverified: true,
    keywords: ["Abo", "Abofalle", "kündigen", "Abonnement", "abgebucht", "App-Kosten", "Probeabo", "Testphase"],
    needs: ["Ihr Handy"],
    variants: [
      {
        device: "android",
        steps: [
          {
            title: "Play Store öffnen",
            text: "Tippen Sie auf das bunte Dreieck „Play Store“.",
          },
          {
            title: "Profilbild antippen",
            text: "Tippen Sie oben rechts auf Ihr Profilbild oder Ihren Anfangsbuchstaben.",
          },
          {
            title: "„Zahlungen und Abos“ öffnen",
            text: "Tippen Sie auf „Zahlungen und Abos“ und dann auf „Abos“. Sie sehen alle Abos, die über Google laufen.",
          },
          {
            title: "Abo kündigen",
            text: "Tippen Sie auf das Abo, das Sie beenden möchten, und dann auf „Abo kündigen“. Geben Sie einen Grund an und bestätigen Sie.",
            tip: "Sie können das Abo bis zum Ende des bezahlten Zeitraums weiter nutzen.",
          },
        ],
      },
      {
        device: "iphone",
        steps: [
          {
            title: "Einstellungen öffnen",
            text: "Tippen Sie auf das graue Zahnrad-Symbol „Einstellungen“.",
          },
          {
            title: "Ihren Namen antippen",
            text: "Tippen Sie ganz oben auf Ihren Namen.",
          },
          {
            title: "„Abonnements“ öffnen",
            text: "Tippen Sie auf „Abonnements“. Sie sehen alle aktiven und abgelaufenen Abos.",
          },
          {
            title: "Abo kündigen",
            text: "Tippen Sie auf das Abo und dann ganz unten auf „Abo kündigen“. Bestätigen Sie mit „Bestätigen“.",
            tip: "Steht dort „Abgelaufen“, wird nichts mehr abgebucht.",
          },
        ],
      },
    ],
    takeaways: ["Probeabos laufen oft automatisch weiter – rechtzeitig kündigen.", "Löschen einer App kündigt das Abo nicht!"],
    reviewNote: "Android „Zahlungen und Abos“ (bzw. „Zahlungen & Abos“) und iPhone „Abonnements“ – Schreibweise prüfen.",
  },
  {
    slug: "notruf-sos-einrichten",
    title: "Notruf per Tastendruck einrichten (Notruf SOS)",
    summary: "Im Notfall mehrmals die Seitentaste drücken – und das Handy ruft die 112. So schalten Sie die Funktion ein.",
    category: "sicherheit",
    devices: ["android", "iphone"],
    difficulty: "leicht",
    minutes: 5,
    access: "free",
    checked: "2026-11",
    keywords: ["Notruf", "SOS", "112", "Notfall", "Hilfe", "Sturz", "Seitentaste"],
    needs: ["Ihr Handy", "Optional: einen Notfallkontakt (siehe „Notfall-Infos im Handy hinterlegen“)"],
    variants: [
      {
        device: "android",
        unverified: true,
        steps: [
          {
            title: "Einstellungen öffnen",
            text: "Tippen Sie auf das Zahnrad-Symbol „Einstellungen“.",
          },
          {
            title: "„Notfälle & Sicherheit“ öffnen",
            text: "Wischen Sie nach unten und tippen Sie auf „Notfälle & Sicherheit“ und dann auf „Notfall-SOS“.",
            image: {
              src: "/screenshots/notruf-sos-einrichten/android-notfall-sos.webp",
              alt: "Seite „Notfälle & Sicherheit“. Der Eintrag „Notfall-SOS“ ist markiert.",
              credit: "Android 16 (Pixel)",
            },
          },
          {
            title: "Funktion einschalten",
            text: "Bei „Notfall-SOS“ steht meist schon „An“. Auf der Seite „Notfall-SOS“ prüfen Sie unter „Notfallaktionen“, dass der Schalter „Rettungsdienst anrufen“ eingeschaltet ist. Ab jetzt gilt: Drücken Sie fünfmal oder öfter schnell die Ein/Aus-Taste, ruft das Handy die 112 an.",
            image: {
              src: "/screenshots/notruf-sos-einrichten/android-rettungsdienst.webp",
              alt: "Seite „Notfall-SOS“. Unter „Notfallaktionen“ ist der Schalter „Rettungsdienst anrufen“ markiert.",
              credit: "Android 16 (Pixel)",
            },
          },
          {
            title: "Notfallkontakte informieren (optional)",
            text: "Darunter können Sie „Informationen mit Notfallkontakten teilen“ einschalten. Dann bekommen Ihre Notfallkontakte eine Nachricht mit Ihrem Standort. Dafür müssen Sie mit Ihrem Google-Konto angemeldet sein.",
            image: {
              src: "/screenshots/notruf-sos-einrichten/android-kontakte-teilen.webp",
              alt: "Seite „Notfall-SOS“. Die Einstellung „Informationen mit Notfallkontakten teilen“ ist markiert.",
              credit: "Android 16 (Pixel)",
            },
            warning: "Probieren Sie die Funktion nicht aus – sonst ruft das Handy wirklich die 112. Bei einem versehentlichen Anruf: Nicht auflegen, sondern kurz sagen, dass es ein Versehen war.",
          },
        ],
      },
      {
        device: "iphone",
        steps: [
          {
            title: "Einstellungen öffnen",
            text: "Tippen Sie auf das graue Zahnrad-Symbol „Einstellungen“.",
          },
          {
            title: "„Notruf SOS“ öffnen",
            text: "Wischen Sie nach oben und tippen Sie auf „Notruf SOS“ (rotes Symbol mit „SOS“).",
          },
          {
            title: "Auslöser einstellen",
            text: "Schalten Sie „Mit Halten und Loslassen anrufen“ ein. Möchten Sie lieber fünfmal drücken, schalten Sie „Mit 5x Drücken anrufen“ ein.",
            tip: "„Halten und Loslassen“: Seitentaste und eine Lautstärketaste gleichzeitig gedrückt halten, bis der Countdown läuft.",
          },
          {
            title: "Notfallkontakte prüfen",
            text: "Unter „Notfallkontakte“ sehen Sie, wer nach einem Notruf eine Nachricht mit Ihrem Standort bekommt. Bearbeiten Sie die Kontakte in der App „Health“ im Notfallpass.",
            warning: "Probieren Sie die Funktion nicht aus – sonst ruft das iPhone wirklich die 112. Bei einem versehentlichen Anruf: Nicht auflegen, sondern kurz sagen, dass es ein Versehen war.",
          },
        ],
      },
      {
        device: "samsung",
        unverified: true,
        steps: [
          {
            title: "Einstellungen öffnen",
            text: "Tippen Sie auf das Zahnrad-Symbol „Einstellungen“.",
          },
          {
            title: "„Sicherheit und Notfall“ öffnen",
            text: "Wischen Sie nach unten und tippen Sie auf „Sicherheit und Notfall“ und dann auf „Notruf SOS“.",
          },
          {
            title: "Funktion einschalten",
            text: "Schalten Sie den Schalter oben ein. Ab jetzt gilt: Drücken Sie fünfmal schnell die Seitentaste, ruft das Handy die 112 an.",
            tip: "Mit „Countdown“ zählt das Handy vor dem Anruf ein paar Sekunden herunter. So können Sie ein Versehen noch abbrechen.",
          },
          {
            title: "Notfallkontakte informieren (optional)",
            text: "Darunter können Sie einstellen, dass Ihre Notfallkontakte eine Nachricht mit Ihrem Standort bekommen.",
            warning: "Probieren Sie die Funktion nicht aus – sonst ruft das Handy wirklich die 112. Bei einem versehentlichen Anruf: Nicht auflegen, sondern kurz sagen, dass es ein Versehen war.",
          },
        ],
      },
    ],
    takeaways: ["Mehrmals Seitentaste drücken = Notruf 112.", "Nicht ausprobieren – der Anruf ist echt."],
    reviewNote: "Samsung: „Sicherheit und Notfall“ → „Notruf SOS“ (Schreibweise!) → Schalter, „Countdown“ prüfen. Pixel: „Sicherheit und Notfall“ → „Notfall-SOS“ → „Notfall-SOS verwenden“ prüfen.",
    related: ["notfallpass-handy"],
  },
  {
    slug: "bildschirmsperre-einrichten",
    title: "Eine Bildschirmsperre einrichten (PIN oder Fingerabdruck)",
    summary: "Verloren oder gestohlen: Mit einer Sperre kommt niemand an Ihre Fotos, Nachrichten und Ihr Konto.",
    category: "sicherheit",
    devices: ["android", "iphone"],
    difficulty: "leicht",
    minutes: 10,
    access: "premium",
    priceCents: 199,
    checked: "2026-11",
    keywords: ["Sperre", "PIN", "Code", "Fingerabdruck", "Face ID", "Gesichtserkennung", "Sperrbildschirm", "entsperren"],
    needs: ["Ihr Handy", "Eine Zahl (mindestens 6 Ziffern), die Sie sich merken können – nicht Ihr Geburtsdatum"],
    variants: [
      {
        device: "android",
        unverified: true,
        steps: [
          {
            title: "Einstellungen öffnen",
            text: "Tippen Sie auf das Zahnrad-Symbol „Einstellungen“.",
          },
          {
            title: "„Datenschutz & Sicherheit“ öffnen",
            text: "Tippen Sie auf „Datenschutz & Sicherheit“, dann auf „Geräteentsperrung“ und auf „Displaysperre“.",
            image: {
              src: "/screenshots/bildschirmsperre-einrichten/android-datenschutz.webp",
              alt: "Einstellungen auf einem Android-Handy. Der Eintrag „Datenschutz & Sicherheit“ ist markiert.",
              credit: "Android 16 (Pixel)",
            },
            tip: "Schneller: Oben auf die Lupe tippen und „Sperre“ eingeben.",
          },
          {
            title: "„PIN“ wählen",
            text: "Tippen Sie auf „PIN“. Geben Sie mindestens sechs Ziffern ein, tippen Sie auf „Weiter“ und wiederholen Sie die PIN zur Bestätigung.",
            image: {
              src: "/screenshots/bildschirmsperre-einrichten/android-pin.webp",
              alt: "Seite „Displaysperre auswählen“. Der Eintrag „PIN“ ist markiert.",
              credit: "Android 16 (Pixel)",
            },
          },
          {
            title: "Fingerabdruck hinzufügen (optional)",
            text: "Das Handy bietet danach „Entsperrung per Fingerabdruck“ an. Folgen Sie den Anweisungen und legen Sie den Finger mehrmals auf den Sensor, bis 100 Prozent erreicht sind.",
          },
        ],
      },
      {
        device: "iphone",
        steps: [
          {
            title: "Einstellungen öffnen",
            text: "Tippen Sie auf das graue Zahnrad-Symbol „Einstellungen“.",
          },
          {
            title: "„Face ID & Code“ öffnen",
            text: "Tippen Sie auf „Face ID & Code“ (iPhone ohne Home-Taste) bzw. „Touch ID & Code“ (iPhone mit Home-Taste).",
          },
          {
            title: "„Code aktivieren“",
            text: "Tippen Sie auf „Code aktivieren“. Geben Sie einen sechsstelligen Code ein und wiederholen Sie ihn.",
          },
          {
            title: "Gesicht oder Finger einrichten (optional)",
            text: "Tippen Sie auf „Face ID konfigurieren“ bzw. „Fingerabdruck hinzufügen“ und folgen Sie den Anweisungen.",
          },
        ],
      },
      {
        device: "samsung",
        unverified: true,
        steps: [
          {
            title: "Einstellungen öffnen",
            text: "Tippen Sie auf das Zahnrad-Symbol „Einstellungen“.",
          },
          {
            title: "„Sperrbildschirm und AOD“ öffnen",
            text: "Tippen Sie auf „Sperrbildschirm und AOD“ und dann auf „Sperrbildschirmtyp“.",
            tip: "Schneller: Oben auf die Lupe tippen und „Sperre“ eingeben.",
          },
          {
            title: "„PIN“ wählen",
            text: "Tippen Sie auf „PIN“. Geben Sie mindestens sechs Ziffern ein, tippen Sie auf „Weiter“ und wiederholen Sie die PIN zur Bestätigung. Tippen Sie auf „OK“.",
          },
          {
            title: "Fingerabdruck hinzufügen (optional)",
            text: "Unter „Sperrbildschirmtyp“ können Sie danach „Fingerabdrücke“ einschalten. Folgen Sie den Anweisungen und legen Sie den Finger mehrmals auf den Sensor, bis 100 Prozent erreicht sind.",
          },
        ],
      },
    ],
    takeaways: ["Ohne Sperre kann jeder Finder Ihr Handy benutzen.", "Code aufschreiben und sicher zu Hause aufbewahren."],
    reviewNote: "Samsung: „Sperrbildschirm und AOD“ → „Sperrbildschirmtyp“ → „PIN“, Fingerabdrücke prüfen. Pixel: „Sicherheit und Datenschutz“ → „Geräteentsperrung“ → „Displaysperre“ und Fingerabdruck-Angebot prüfen.",
    related: ["sichere-passwoerter"],
  },
];

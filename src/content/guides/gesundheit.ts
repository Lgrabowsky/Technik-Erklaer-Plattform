import type { Guide } from "../types";

export const gesundheit: Guide[] = [
  {
    slug: "e-rezept-einloesen",
    title: "Ein E-Rezept in der Apotheke einlösen",
    summary: "Kein Papier mehr nötig: So bekommen Sie Ihr Medikament mit der Gesundheitskarte.",
    category: "gesundheit",
    devices: ["android", "iphone", "computer"],
    difficulty: "leicht",
    minutes: 5,
    access: "free",
    checked: "2026-11",
    keywords: ["Rezept", "Medikament", "Apotheke", "eGK", "Versichertenkarte"],
    needs: ["Ihre Gesundheitskarte (die Karte Ihrer Krankenkasse)"],
    steps: [
      {
        title: "Was ist ein E-Rezept?",
        text: "Ihre Ärztin oder Ihr Arzt schickt das Rezept nicht mehr auf Papier, sondern elektronisch auf einen sicheren Server. Sie müssen dafür kein Handy und keine App haben.",
      },
      {
        title: "Zur Apotheke gehen",
        text: "Gehen Sie nach dem Arztbesuch in eine Apotheke Ihrer Wahl. Das Rezept ist meist schon nach wenigen Minuten abrufbar.",
        tip: "Wurde das Rezept bei einem Telefon- oder Videotermin ausgestellt, fragen Sie in der Praxis kurz nach, ob es schon „unterschrieben“ ist.",
      },
      {
        title: "Karte in das Lesegerät stecken",
        text: "Geben Sie der Apotheke Ihre Gesundheitskarte oder stecken Sie sie selbst in das Kartenlesegerät auf der Theke. Eine PIN brauchen Sie dafür nicht.",
      },
      {
        title: "Medikament erhalten",
        text: "Die Apotheke sieht jetzt Ihre offenen Rezepte und gibt Ihnen das Medikament. Die Zuzahlung bezahlen Sie wie gewohnt.",
      },
      {
        title: "Lieber auf Papier?",
        text: "Sie können in der Arztpraxis auch um einen Ausdruck bitten. Darauf steht ein Code, den die Apotheke einscannt. Das ist genauso gültig.",
      },
    ],
    takeaways: ["Für das E-Rezept reicht Ihre Gesundheitskarte – ohne PIN, ohne Handy.", "Ein Papierausdruck mit Code ist jederzeit möglich."],
  },
  {
    slug: "arzttermin-online-buchen",
    title: "Einen Arzttermin online buchen (z. B. Doctolib)",
    summary: "Ohne Warteschleife: So buchen Sie einen Termin über ein Online-Portal wie Doctolib.",
    category: "gesundheit",
    app: "Doctolib (App oder doctolib.de)",
    devices: ["android", "iphone", "computer"],
    difficulty: "mittel",
    minutes: 15,
    access: "premium",
    priceCents: 299,
    checked: "2026-11",
    keywords: ["Doctolib", "Termin", "Praxis", "Arzt", "buchen"],
    needs: [
      "Ihre E-Mail-Adresse und Handynummer",
      "Die App „Doctolib“ oder die Internetseite doctolib.de",
      "Ihre Gesundheitskarte (für Angaben zur Versicherung)",
    ],
    steps: [
      {
        title: "Herausfinden, wie Ihre Praxis Termine vergibt",
        text: "Schauen Sie auf die Internetseite Ihrer Arztpraxis. Dort steht oft ein Knopf wie „Termin online buchen“. Viele Praxen nutzen dafür Doctolib, manche andere Anbieter.",
        tip: "Steht dort nichts? Dann vergibt die Praxis Termine nur am Telefon.",
      },
      {
        title: "Konto anlegen",
        text: "Beim ersten Mal tippen Sie auf „Registrieren“ bzw. „Konto erstellen“. Geben Sie Ihre E-Mail-Adresse und ein Passwort ein. Schreiben Sie das Passwort an einem sicheren Ort auf.",
      },
      {
        title: "Handynummer bestätigen",
        text: "Geben Sie Ihre Handynummer ein. Sie bekommen eine SMS mit einem Code. Tippen Sie diesen Code ein.",
      },
      {
        title: "Praxis suchen",
        text: "Tippen Sie in das Suchfeld den Namen Ihrer Ärztin oder Ihres Arztes ein – oder die Fachrichtung (z. B. „Hausarzt“) und Ihren Ort. Tippen Sie in der Liste auf die richtige Praxis.",
      },
      {
        title: "Fragen zum Besuch beantworten",
        text: "Sie werden gefragt, ob Sie schon Patient sind, wie Sie versichert sind und warum Sie kommen (z. B. „Vorsorge“ oder „Akute Beschwerden“). Tippen Sie jeweils die passende Antwort an.",
      },
      {
        title: "Termin auswählen",
        text: "Sie sehen freie Termine. Tippen Sie auf einen passenden Tag und eine Uhrzeit.",
        tip: "Keine passenden Termine? Wischen Sie nach links, um spätere Tage zu sehen.",
      },
      {
        title: "Prüfen und bestätigen",
        text: "Prüfen Sie Datum, Uhrzeit und Adresse. Tippen Sie auf „Termin bestätigen“. Sie bekommen eine Bestätigung per E-Mail und eine Erinnerung vor dem Termin.",
      },
      {
        title: "Absagen, wenn Sie nicht können",
        text: "Öffnen Sie die App, tippen Sie auf „Termine“ und wählen Sie den Termin aus. Tippen Sie auf „Termin absagen“. So bekommt jemand anderes den Platz.",
      },
    ],
  },
  {
    slug: "termin-116117",
    title: "Facharzttermin über die 116117 bekommen",
    summary: "Kein Termin beim Facharzt? Die Terminservicestelle 116117 hilft – am Telefon oder online.",
    category: "gesundheit",
    app: "116117 (Telefon oder 116117-termine.de)",
    devices: ["android", "iphone", "computer"],
    difficulty: "mittel",
    minutes: 15,
    access: "premium",
    priceCents: 299,
    checked: "2026-11",
    keywords: ["Facharzt", "Terminservicestelle", "Vermittlungscode", "Überweisung", "116117"],
    needs: [
      "Ihre Gesundheitskarte",
      "Für Fachärzte: eine Überweisung mit Vermittlungscode von Ihrer Hausarztpraxis (bei dringenden Fällen)",
      "Ein Telefon oder die Internetseite 116117-termine.de",
    ],
    steps: [
      {
        title: "Was ist die 116117?",
        text: "Die 116117 ist ein kostenloser Dienst der Kassenärztlichen Vereinigungen für gesetzlich Versicherte. Er vermittelt Arzttermine – auch beim Facharzt – und ist außerhalb der Sprechzeiten der ärztliche Bereitschaftsdienst.",
        warning: "Bei Lebensgefahr wählen Sie immer sofort die 112.",
      },
      {
        title: "Vermittlungscode besorgen",
        text: "Brauchen Sie dringend einen Facharzttermin, bitten Sie Ihre Hausarztpraxis um eine Überweisung mit „Vermittlungscode“. Das ist ein 12-stelliger Code oben auf der Überweisung.",
        tip: "Für Hausärzte, Kinderärzte, Frauenärzte und Augenärzte brauchen Sie meist keinen Code.",
      },
      {
        title: "Weg wählen: Telefon oder Internet",
        text: "Am einfachsten: Rufen Sie die 116117 an. Halten Sie Ihre Gesundheitskarte und den Vermittlungscode bereit. Oder öffnen Sie im Internet die Seite 116117-termine.de.",
      },
      {
        title: "Online: „Termin buchen“ wählen",
        text: "Tippen Sie auf der Seite auf „Termin buchen“. Geben Sie den Vermittlungscode ein, wenn Sie einen haben. Wählen Sie sonst die Fachrichtung aus.",
      },
      {
        title: "Ort und Termin auswählen",
        text: "Geben Sie Ihre Postleitzahl ein. Sie sehen freie Termine in Ihrer Nähe. Tippen Sie auf einen passenden Termin und geben Sie Ihre Kontaktdaten ein.",
        tip: "Die Terminservicestelle muss Ihnen bei dringenden Überweisungen innerhalb von 4 Wochen einen Termin anbieten – allerdings nicht unbedingt bei Ihrer Wunschpraxis.",
      },
      {
        title: "Bestätigung aufheben",
        text: "Sie bekommen eine Bestätigung per E-Mail oder SMS. Notieren Sie sich den Code. Damit können Sie den Termin auf 116117-termine.de unter „Termin einsehen oder absagen“ wiederfinden.",
      },
    ],
    takeaways: ["116117 = Termine und Bereitschaftsdienst, 112 = Notfall.", "Mit Vermittlungscode gibt es einen Facharzttermin innerhalb von 4 Wochen."],
  },
  {
    slug: "rechnung-krankenkasse-einreichen",
    title: "Eine Rechnung bei der Krankenkasse per App einreichen",
    summary: "Fotografieren statt Brief schicken: So reichen Sie Belege in der App Ihrer Krankenkasse ein.",
    category: "gesundheit",
    devices: ["android", "iphone"],
    difficulty: "anspruchsvoll",
    minutes: 20,
    access: "premium",
    priceCents: 399,
    checked: "2026-11",
    keywords: ["Beleg", "Rechnung", "Erstattung", "Krankenkasse", "Zusatzversicherung", "Beihilfe"],
    needs: [
      "Die App Ihrer Krankenkasse (z. B. „TK-App“, „BARMER-App“, „AOK Mein Leben“, „DAK App“)",
      "Ihre Zugangsdaten für die App",
      "Die Rechnung auf Papier oder als PDF",
    ],
    steps: [
      {
        title: "Wann reicht man Rechnungen ein?",
        text: "Privat Versicherte reichen fast alle Arzt- und Apothekenrechnungen ein. Gesetzlich Versicherte nur in bestimmten Fällen – etwa für Zusatzversicherungen, Bonusprogramme oder wenn die Kasse eine Leistung erstattet.",
        tip: "Unsicher? Rufen Sie kurz bei Ihrer Kasse an und fragen Sie, ob die Rechnung erstattet wird.",
      },
      {
        title: "App öffnen und anmelden",
        text: "Öffnen Sie die App Ihrer Krankenkasse und melden Sie sich an. Bei der ersten Anmeldung schickt die Kasse oft einen Brief mit Freischalt-Code – das kann einige Tage dauern.",
      },
      {
        title: "„Dokument einreichen“ finden",
        text: "Suchen Sie einen Knopf wie „Rechnung einreichen“, „Dokumente senden“ oder „Postfach → Neue Nachricht“. Er ist oft auf der Startseite oder unter „Services“.",
      },
      {
        title: "Art der Rechnung wählen",
        text: "Die App fragt, worum es geht – zum Beispiel „Arztrechnung“, „Arzneimittel“ oder „Bonusprogramm“. Tippen Sie die passende Auswahl an.",
      },
      {
        title: "Rechnung fotografieren",
        text: "Legen Sie die Rechnung auf einen dunklen Tisch bei gutem Licht. Halten Sie das Handy gerade darüber. Viele Apps erkennen die Ränder und lösen selbst aus. Sonst tippen Sie auf den runden Auslöser.",
        tip: "Prüfen Sie das Foto: Ist alles scharf und gut lesbar? Wenn nicht, tippen Sie auf „Wiederholen“.",
      },
      {
        title: "Weitere Seiten hinzufügen",
        text: "Hat die Rechnung mehrere Seiten, tippen Sie auf „Seite hinzufügen“ und fotografieren Sie jede Seite.",
      },
      {
        title: "Absenden",
        text: "Wählen Sie, für wen die Rechnung ist (z. B. Sie selbst oder mitversicherte Angehörige). Tippen Sie auf „Absenden“. Sie sehen eine Bestätigung.",
      },
      {
        title: "Original aufheben",
        text: "Heben Sie die Papier-Rechnung noch mindestens bis zur Erstattung auf. Manchmal fragt die Kasse nach.",
      },
    ],
  },
  {
    slug: "epa-patientenakte",
    title: "Die elektronische Patientenakte (ePA) verstehen und einrichten",
    summary: "Was die ePA ist, was sie für Sie bedeutet und wie Sie sie mit der App Ihrer Kasse ansehen.",
    category: "gesundheit",
    devices: ["android", "iphone"],
    difficulty: "anspruchsvoll",
    minutes: 30,
    access: "premium",
    priceCents: 399,
    checked: "2026-11",
    keywords: ["ePA", "Patientenakte", "GesundheitsID", "Befunde", "Widerspruch"],
    needs: [
      "Ein neueres Handy mit NFC (fast alle Handys ab ca. 2020)",
      "Die ePA-App Ihrer Krankenkasse",
      "Ihre Gesundheitskarte mit PIN – oder Ihren Personalausweis mit Online-Funktion und PIN",
    ],
    steps: [
      {
        title: "Was ist die ePA?",
        text: "Die ePA ist eine digitale Akte für Ihre Gesundheitsdaten: Befunde, Arztbriefe und eine Liste Ihrer Medikamente. Seit 2025 haben alle gesetzlich Versicherten eine – außer sie haben widersprochen.",
      },
      {
        title: "Brauche ich die App überhaupt?",
        text: "Nein. Ihre Praxen und Apotheken können die ePA auch nutzen, wenn Sie die App nie öffnen. Die App brauchen Sie nur, wenn Sie selbst hineinschauen oder festlegen möchten, wer was sehen darf.",
        tip: "Möchten Sie keine ePA? Dann können Sie bei Ihrer Krankenkasse widersprechen – per Brief, Telefon oder in der App.",
      },
      {
        title: "ePA-App installieren",
        text: "Laden Sie die ePA-App Ihrer Kasse aus dem App Store oder Play Store. Bei manchen Kassen ist es die normale Kassen-App (z. B. „TK-App“, „AOK Mein Leben“), bei anderen eine eigene App.",
      },
      {
        title: "Ausweisen",
        text: "Beim ersten Start müssen Sie zeigen, dass Sie es wirklich sind. Wählen Sie eine der angebotenen Möglichkeiten: Gesundheitskarte mit PIN, Personalausweis mit PIN oder eine Prüfung in der Postfiliale (POSTIDENT).",
        tip: "Keine PIN für Ihre Gesundheitskarte? Die können Sie kostenlos bei Ihrer Krankenkasse bestellen. Sie kommt per Post.",
      },
      {
        title: "Karte ans Handy halten",
        text: "Wenn Sie die Karte nutzen: Halten Sie sie flach an die Rückseite Ihres Handys (beim iPhone oben, bei Android meist in der Mitte). Halten Sie still, bis die App „Erfolgreich“ meldet.",
      },
      {
        title: "Eigenen Zugangscode festlegen",
        text: "Die App bittet Sie, einen Code (meist 6 Ziffern) festzulegen. Damit melden Sie sich künftig an. Schreiben Sie ihn an einem sicheren Ort auf – nicht auf das Handy.",
      },
      {
        title: "In die Akte schauen",
        text: "Tippen Sie auf „Dokumente“ oder „Meine Akte“. Hier sehen Sie, was Praxen eingestellt haben. Unter „Medikationsliste“ finden Sie Ihre verordneten Medikamente.",
      },
      {
        title: "Zugriffe verwalten",
        text: "Unter „Berechtigungen“ oder „Zugriffe“ können Sie einzelnen Praxen den Zugriff entziehen oder einzelne Dokumente verbergen.",
      },
    ],
    takeaways: [
      "Die ePA funktioniert auch ohne App.",
      "Widerspruch ist jederzeit bei der Krankenkasse möglich.",
      "Den App-Code und die Karten-PIN nie weitergeben.",
    ],
  },
];

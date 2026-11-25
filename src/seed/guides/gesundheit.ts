import type { Guide } from "../../content/types";
import { epaPatientenakte, rechnungEinreichen } from "./kassen";

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
        text: "Beim ersten Mal brauchen Sie ein Konto. Auf doctolib.de tippen Sie oben rechts auf „Einloggen“. Unter „Neu bei Doctolib?“ tippen Sie auf den blauen Knopf „Registrieren“. Geben Sie Ihre E-Mail-Adresse und ein Passwort ein. Schreiben Sie das Passwort an einem sicheren Ort auf.",
        image: {
          src: "/screenshots/arzttermin-online-buchen/registrieren.webp",
          alt: "Doctolib-Seite „Neu bei Doctolib?“ mit dem markierten blauen Knopf „Registrieren“. Darunter „Haben Sie bereits ein Konto?“ mit „Einloggen“.",
          credit: "doctolib.de",
        },
      },
      {
        title: "Handynummer bestätigen",
        text: "Geben Sie Ihre Handynummer ein. Sie bekommen eine SMS mit einem Code. Tippen Sie diesen Code ein.",
      },
      {
        title: "Praxis suchen",
        text: "Tippen Sie in das linke Feld „Name, Fachgebiet, Einrichtung“ (1) den Namen Ihrer Ärztin oder Ihres Arztes ein – oder die Fachrichtung, z. B. „Hausarzt“. Tippen Sie in das Feld daneben (2) Ihren Ort oder Ihre Postleitzahl. Tippen Sie dann auf „Suchen“ (3) und in der Liste auf die richtige Praxis.",
        image: {
          src: "/screenshots/arzttermin-online-buchen/praxis-suchen.webp",
          alt: "Suchleiste auf doctolib.de: Feld „Name, Fachgebiet, Einrichtung“ (1), Feld für Ort oder Postleitzahl (2) und Knopf „Suchen“ (3); alle markiert.",
          credit: "doctolib.de",
        },
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
        text: "Öffnen Sie die App, tippen Sie auf „Meine Termine“ und wählen Sie den Termin aus. Tippen Sie auf „Termin absagen“ und dann auf „Absage bestätigen“. So bekommt jemand anderes den Platz.",
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
        title: "Online: Postleitzahl und Code eingeben",
        text: "Auf der Startseite ist „Termin buchen“ schon ausgewählt. Tippen Sie in das Feld „Suchgebiet (PLZ)“ (1) und geben Sie Ihre Postleitzahl ein. Haben Sie einen Vermittlungscode, tippen Sie ihn in das Feld „Vermittlungscode (optional)“. Tippen Sie dann auf „Weiter“ (2).",
        image: {
          src: "/screenshots/termin-116117/plz-eingeben.webp",
          alt: "Startseite von 116117-termine.de: Feld „Suchgebiet (PLZ)“ mit Beispiel-Postleitzahl (1) und Knopf „Weiter“ (2); beide markiert. Daneben das Feld „Vermittlungscode (optional)“.",
          credit: "116117-termine.de",
        },
      },
      {
        title: "Fachrichtung und Termin auswählen",
        text: "Ohne Code sehen Sie die Liste „Ohne Überweisung online buchbar“ (z. B. Hausarzt, Augenarzt, Frauenarzt). Tippen Sie bei der passenden Fachrichtung auf „Termine anzeigen“. Tippen Sie auf einen freien Termin und geben Sie Ihre Kontaktdaten ein.",
        image: {
          src: "/screenshots/termin-116117/termine-anzeigen.webp",
          alt: "Liste „Ohne Überweisung online buchbar“ mit Hausarzt, Augenarzt und Frauenarzt. Beim Hausarzt ist „Termine anzeigen“ markiert.",
          credit: "116117-termine.de",
        },
        tip: "Die Terminservicestelle muss Ihnen bei dringenden Überweisungen innerhalb von 4 Wochen einen Termin anbieten – allerdings nicht unbedingt bei Ihrer Wunschpraxis.",
      },
      {
        title: "Bestätigung aufheben",
        text: "Sie bekommen eine Bestätigung per E-Mail oder SMS. Notieren Sie sich den Code. Damit können Sie den Termin auf 116117-termine.de oben unter „Buchung verwalten“ einsehen oder absagen.",
        image: {
          src: "/screenshots/termin-116117/buchung-verwalten.webp",
          alt: "Oberer Bereich von 116117-termine.de mit den Reitern „Termin buchen“ und „Buchung verwalten“. „Buchung verwalten“ ist markiert.",
          credit: "116117-termine.de",
        },
      },
    ],
    takeaways: ["116117 = Termine und Bereitschaftsdienst, 112 = Notfall.", "Mit Vermittlungscode gibt es einen Facharzttermin innerhalb von 4 Wochen."],
  },
  rechnungEinreichen,
  epaPatientenakte,
  {
    slug: "notfallpass-handy",
    title: "Notfall-Infos im Handy hinterlegen",
    summary: "Im Notfall sehen Helfer Ihre Vorerkrankungen, Medikamente und einen Angehörigen – auch ohne Ihr Handy zu entsperren.",
    category: "gesundheit",
    app: "Health (iPhone) bzw. Einstellungen (Android)",
    devices: ["android", "iphone"],
    difficulty: "leicht",
    minutes: 10,
    access: "free",
    checked: "2026-11",
    keywords: ["Notfallpass", "Notfall", "Notfallkontakt", "Medikamente", "Allergien", "Blutgruppe", "Rettungsdienst", "medizinische Informationen"],
    needs: [
      "Ihr Handy",
      "Ihre Medikamentenliste und wichtige Erkrankungen oder Allergien",
      "Telefonnummer eines Angehörigen (als Kontakt gespeichert)",
    ],
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
            title: "„Sicherheit und Notfall“ öffnen",
            text: "Wischen Sie nach unten und tippen Sie auf „Sicherheit und Notfall“.",
            tip: "Nicht gefunden? Tippen Sie oben auf die Lupe und geben Sie „Notfall“ ein.",
          },
          {
            title: "Medizinische Infos eintragen",
            text: "Tippen Sie auf „Medizinische Informationen“. Tragen Sie Blutgruppe, Allergien, Medikamente und Erkrankungen ein. Tippen Sie auf „Speichern“.",
          },
          {
            title: "Notfallkontakt hinzufügen",
            text: "Gehen Sie zurück und tippen Sie auf „Notfallkontakte“. Tippen Sie auf „Kontakt hinzufügen“ und wählen Sie Ihren Angehörigen aus.",
          },
          {
            title: "Auf dem Sperrbildschirm zeigen",
            text: "Schalten Sie „Auf Sperrbildschirm anzeigen“ ein, falls dieser Schalter erscheint. Helfer finden Ihre Infos dann auf dem Sperrbildschirm über „Notruf“ und „Notfallinformationen“.",
          },
        ],
      },
      {
        device: "iphone",
        steps: [
          {
            title: "App „Health“ öffnen",
            text: "Tippen Sie auf das weiße Symbol mit dem roten Herz. Es heißt „Health“.",
          },
          {
            title: "Ihr Profilbild antippen",
            text: "Tippen Sie oben rechts auf Ihr Profilbild oder Ihre Initialen.",
          },
          {
            title: "„Notfallpass“ öffnen",
            text: "Tippen Sie auf „Notfallpass“ und dann auf „Los geht’s“ bzw. oben rechts auf „Bearbeiten“, wenn schon etwas eingetragen ist.",
          },
          {
            title: "Angaben eintragen",
            text: "Tragen Sie Erkrankungen, Allergien, Medikamente und Blutgruppe ein. Unter „Notfallkontakte“ tippen Sie auf das grüne Plus und wählen einen Angehörigen aus.",
          },
          {
            title: "Im Sperrzustand zeigen",
            text: "Schalten Sie „Im Sperrzustand zeigen“ ein (Schalter grün). Tippen Sie oben rechts auf „Fertig“.",
            tip: "So sehen Helfer den Notfallpass: Auf dem Sperrbildschirm „Notfall“ antippen, dann „Notfallpass“.",
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
            text: "Wischen Sie nach unten und tippen Sie auf „Sicherheit und Notfall“.",
            tip: "Nicht gefunden? Tippen Sie oben auf die Lupe und geben Sie „Notfall“ ein.",
          },
          {
            title: "Medizinische Infos eintragen",
            text: "Tippen Sie auf „Medizinische Infos“. Tragen Sie Blutgruppe, Allergien, Medikamente und Erkrankungen ein. Tippen Sie auf „Speichern“.",
          },
          {
            title: "Notfallkontakt hinzufügen",
            text: "Gehen Sie zurück und tippen Sie auf „Notfallkontakte“ und dann auf „Mitglied hinzufügen“. Wählen Sie Ihren Angehörigen aus.",
          },
          {
            title: "Auf dem Sperrbildschirm zeigen",
            text: "Schalten Sie „Auf Sperrbildschirm anzeigen“ ein. Dann sehen Helfer die Infos über den Knopf „Notruf“ auf dem Sperrbildschirm.",
          },
        ],
      },
    ],
    takeaways: ["Notfall-Infos helfen Rettungskräften, ohne dass Ihr Handy entsperrt werden muss.", "Angaben einmal im Jahr aktualisieren."],
    reviewNote: "Samsung: „Sicherheit und Notfall“ → „Medizinische Infos“, „Notfallkontakte“ → „Mitglied hinzufügen“, Schalter „Auf Sperrbildschirm anzeigen“ prüfen. Pixel: „Medizinische Informationen“ (öffnet ggf. App „Persönliche Sicherheit“), „Kontakt hinzufügen“ und Sperrbildschirm-Einstellung prüfen.",
    related: ["notruf-sos-einrichten"],
  },
  {
    slug: "doctolib-termin-absagen",
    title: "Einen Arzttermin bei Doctolib absagen oder verschieben",
    summary: "Termin passt nicht mehr? So sagen Sie ihn in der Doctolib-App rechtzeitig ab – damit ein anderer Patient den Platz bekommt.",
    category: "gesundheit",
    app: "Doctolib (App)",
    devices: ["android", "iphone"],
    difficulty: "leicht",
    minutes: 5,
    access: "free",
    checked: "2026-11",
    keywords: ["Doctolib", "Termin absagen", "stornieren", "verschieben", "Arzttermin", "Praxis"],
    needs: ["Die App „Doctolib“, mit der Sie den Termin gebucht haben"],
    unverified: true,
    reviewNote: "Tab-Name („Termine“) und Knöpfe („Termin absagen“, „Termin verschieben“) in aktueller Doctolib-App prüfen. Ob Verschieben bei jeder Praxis angeboten wird, hängt von der Praxis ab.",
    steps: [
      {
        title: "Doctolib öffnen",
        text: "Tippen Sie auf das blaue Doctolib-Symbol. Melden Sie sich an, falls die App danach fragt.",
      },
      {
        title: "Ihre Termine öffnen",
        text: "Tippen Sie unten auf „Termine“. Sie sehen Ihre kommenden Termine.",
      },
      {
        title: "Den Termin antippen",
        text: "Tippen Sie auf den Termin, den Sie absagen oder verschieben möchten.",
      },
      {
        title: "Verschieben oder absagen",
        text: "Wischen Sie nach unten. Möchten Sie einen anderen Tag? Tippen Sie auf „Termin verschieben“ und wählen Sie eine neue Zeit. Möchten Sie gar nicht kommen? Tippen Sie auf „Termin absagen“.",
        tip: "Fehlt der Knopf, erlaubt die Praxis keine Online-Absage so kurz vor dem Termin. Rufen Sie dann in der Praxis an.",
      },
      {
        title: "Bestätigen",
        text: "Bestätigen Sie die Absage. Sie bekommen eine E-Mail. Der Termin verschwindet aus Ihrer Liste.",
        warning: "Sagen Sie möglichst mindestens 24 Stunden vorher ab. Manche Praxen berechnen sonst ein Ausfallhonorar.",
      },
    ],
    related: ["arzttermin-online-buchen"],
  },
  {
    slug: "medikamente-erinnerung-iphone",
    title: "An Medikamente erinnern lassen (iPhone)",
    summary: "Das iPhone erinnert Sie zur richtigen Uhrzeit an Ihre Tabletten – und Sie haken ab, was Sie genommen haben.",
    category: "gesundheit",
    app: "Health (iPhone)",
    devices: ["iphone"],
    difficulty: "mittel",
    minutes: 10,
    access: "premium",
    priceCents: 199,
    checked: "2026-11",
    keywords: ["Medikamente", "Tabletten", "Erinnerung", "Einnahme", "Wecker", "Health", "Medikamentenplan"],
    needs: ["Ein iPhone", "Ihr Medikamentenplan oder die Packungen"],
    unverified: true,
    reviewNote: "Menüweg in Health („Durchsuchen“ → „Medikamente“ → „Medikament hinzufügen“) und Knopfnamen im Assistenten auf aktuellem iOS prüfen.",
    steps: [
      {
        title: "App „Health“ öffnen",
        text: "Tippen Sie auf das weiße Symbol mit dem roten Herz.",
      },
      {
        title: "„Medikamente“ finden",
        text: "Tippen Sie unten rechts auf „Durchsuchen“ und dann auf „Medikamente“.",
      },
      {
        title: "Medikament hinzufügen",
        text: "Tippen Sie auf „Medikament hinzufügen“. Tippen Sie den Namen ein, zum Beispiel „Ramipril“, und wählen Sie ihn aus der Liste. Tippen Sie auf „Weiter“.",
        tip: "Sie können die Packung auch mit der Kamera erfassen: Tippen Sie dafür auf das Kamera-Symbol neben dem Suchfeld.",
      },
      {
        title: "Form und Stärke wählen",
        text: "Wählen Sie, ob es eine Tablette, Kapsel oder etwas anderes ist, und die Stärke (z. B. 5 mg). Tippen Sie jeweils auf „Weiter“.",
      },
      {
        title: "Uhrzeiten festlegen",
        text: "Wählen Sie „Jeden Tag“ und tippen Sie auf „Zeit hinzufügen“. Stellen Sie die Uhrzeit ein, zu der Sie erinnert werden möchten. Tippen Sie auf „Weiter“, bis die Einrichtung fertig ist.",
      },
      {
        title: "Einnahme abhaken",
        text: "Zur eingestellten Zeit erscheint eine Mitteilung. Tippen Sie darauf und dann auf „Eingenommen“. So wissen Sie später sicher, ob Sie die Tablette schon hatten.",
        warning: "Die App ersetzt keinen ärztlichen Rat. Ändern Sie Ihre Medikamente nur nach Absprache mit Ihrer Ärztin oder Ihrem Arzt.",
      },
    ],
    related: ["notfallpass-handy"],
  },
  {
    slug: "e-rezept-app-gematik",
    title: "E-Rezepte mit der App „Das E-Rezept“ ansehen",
    summary: "Sehen Sie auf dem Handy, welche Rezepte Ihre Praxis ausgestellt hat – und ob eine Apotheke sie schon eingelöst hat.",
    category: "gesundheit",
    app: "Das E-Rezept (App der gematik)",
    devices: ["android", "iphone"],
    difficulty: "anspruchsvoll",
    minutes: 20,
    access: "premium",
    priceCents: 299,
    checked: "2026-11",
    keywords: ["E-Rezept", "Rezept", "gematik", "Apotheke", "Gesundheitskarte", "NFC", "PIN"],
    needs: [
      "Ein Handy mit NFC (fast alle neueren Handys, iPhone ab iPhone 8)",
      "Ihre Gesundheitskarte mit sechsstelliger Nummer (CAN) neben dem Foto",
      "Die PIN zur Gesundheitskarte – bekommen Sie auf Anfrage von Ihrer Krankenkasse per Brief",
    ],
    unverified: true,
    reviewNote: "Einrichtungs-Ablauf und Knopfnamen der gematik-App („Anmelden“, „Mit Gesundheitskarte“, „Karte jetzt verbinden“) auf aktueller Version prüfen. Alternativ bieten viele Kassen die Anmeldung über ihre eigene App (GesundheitsID) an.",
    steps: [
      {
        title: "Brauche ich das überhaupt?",
        text: "Nein. Sie können E-Rezepte immer mit der Gesundheitskarte in der Apotheke einlösen. Die App ist praktisch, wenn Sie Rezepte vorher sehen oder bei einer Online-Apotheke bestellen möchten.",
      },
      {
        title: "App „Das E-Rezept“ installieren",
        text: "Laden Sie die App „Das E-Rezept“ aus dem Play Store bzw. App Store. Der Anbieter heißt „gematik GmbH“.",
        warning: "Achten Sie auf den Anbieter „gematik GmbH“. Andere Apps mit ähnlichem Namen sind Apotheken-Apps.",
      },
      {
        title: "App öffnen und Einführung durchgehen",
        text: "Tippen Sie sich durch die Einführung und legen Sie den Schutz für die App fest (z. B. Fingerabdruck oder ein Passwort).",
      },
      {
        title: "Anmelden mit Gesundheitskarte",
        text: "Tippen Sie auf „Anmelden“ und wählen Sie die Anmeldung mit Ihrer Gesundheitskarte. Geben Sie die sechsstellige Nummer (CAN) ein, die oben rechts neben Ihrem Foto auf der Karte steht. Geben Sie dann Ihre PIN ein.",
      },
      {
        title: "Karte ans Handy halten",
        text: "Halten Sie die Gesundheitskarte flach an die Rückseite des Handys – beim iPhone oben, bei Android meist in der Mitte. Bewegen Sie die Karte nicht, bis die App „Erfolgreich“ meldet.",
        tip: "Klappt es nicht? Nehmen Sie die Handyhülle ab und versuchen Sie es langsam an verschiedenen Stellen.",
      },
      {
        title: "Rezepte ansehen",
        text: "Auf der Startseite sehen Sie jetzt Ihre E-Rezepte. Sie sehen, ob ein Rezept noch offen oder schon eingelöst ist und bis wann es gilt.",
      },
    ],
    takeaways: ["Die App ist freiwillig – die Gesundheitskarte reicht in der Apotheke.", "Für die App brauchen Sie Karte, CAN und PIN."],
    related: ["e-rezept-einloesen"],
  },
];

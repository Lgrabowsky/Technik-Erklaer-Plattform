import type { Guide } from "../types";
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
  rechnungEinreichen,
  epaPatientenakte,
];

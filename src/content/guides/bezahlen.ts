import type { Guide } from "../types";

export const bezahlen: Guide[] = [
  {
    slug: "sicher-online-bezahlen",
    title: "Sicher im Internet einkaufen und bezahlen",
    summary: "Welche Bezahlarten sicher sind und woran Sie einen seriösen Online-Shop erkennen.",
    category: "bezahlen",
    devices: ["android", "iphone", "computer"],
    difficulty: "mittel",
    minutes: 15,
    access: "premium",
    priceCents: 299,
    checked: "2026-11",
    keywords: ["Shop", "Einkaufen", "Fake-Shop", "Rechnung", "Vorkasse"],
    needs: ["Ihr Smartphone oder Computer"],
    steps: [
      {
        title: "Auf die Adresse achten",
        text: "Oben in der Adresszeile sollte die Adresse mit „https“ beginnen. Prüfen Sie, ob der Name richtig geschrieben ist – Betrüger nutzen gern Adressen wie „amaz0n-angebote.shop“.",
        warning: "Das Schloss-Symbol heißt nur: Die Verbindung ist verschlüsselt. Es sagt nichts darüber, ob der Shop ehrlich ist.",
      },
      {
        title: "Impressum prüfen",
        text: "Ein seriöser Shop hat ganz unten ein „Impressum“ mit Firmenname, Adresse in Deutschland oder der EU und Telefonnummer.",
      },
      {
        title: "Fake-Shop-Finder nutzen",
        text: "Die Verbraucherzentrale bietet den kostenlosen „Fakeshop-Finder“. Suchen Sie im Internet nach „Fakeshop-Finder Verbraucherzentrale“ und geben Sie dort die Adresse des Shops ein.",
      },
      {
        title: "Sichere Bezahlart wählen",
        text: "Am sichersten ist „Kauf auf Rechnung“: Sie zahlen erst, wenn die Ware da ist. Auch PayPal (mit Käuferschutz), Lastschrift und Kreditkarte sind gut – bei Problemen bekommen Sie Ihr Geld meist zurück.",
        warning: "Vorsicht, wenn nur „Vorkasse“ oder Überweisung möglich ist. Dieses Geld ist bei Betrug fast immer verloren.",
      },
      {
        title: "Zu günstige Angebote meiden",
        text: "Ist ein Preis viel niedriger als überall sonst? Dann ist es wahrscheinlich ein Fake-Shop. Lieber einmal mehr vergleichen.",
      },
      {
        title: "Zahlung in der Bank-App freigeben",
        text: "Viele Banken schicken eine Nachricht in ihre App, bevor eine Zahlung ausgeführt wird. Prüfen Sie dort Betrag und Händler, bevor Sie auf „Freigeben“ tippen.",
        warning: "Geben Sie niemals eine Zahlung frei, die Sie nicht selbst gerade gestartet haben – auch nicht, wenn jemand am Telefon Sie darum bittet.",
      },
    ],
    takeaways: ["Kauf auf Rechnung ist am sichersten.", "Nur Vorkasse = Vorsicht.", "Nur Zahlungen freigeben, die Sie selbst gestartet haben."],
  },
  {
    slug: "paypal-einrichten",
    title: "PayPal einrichten und sicher damit bezahlen",
    summary: "Bezahlen, ohne dem Shop Ihre Bankdaten zu geben: So richten Sie PayPal ein und nutzen den Käuferschutz.",
    category: "bezahlen",
    devices: ["android", "iphone", "computer"],
    difficulty: "mittel",
    minutes: 20,
    access: "premium",
    priceCents: 299,
    checked: "2026-11",
    keywords: ["PayPal", "Käuferschutz", "bezahlen", "Konto"],
    needs: [
      "Die App „PayPal“ oder die Internetseite paypal.com",
      "Ihre E-Mail-Adresse und Handynummer",
      "Ihre IBAN (steht auf Ihrer Bankkarte oder im Kontoauszug)",
    ],
    steps: [
      {
        title: "Registrieren",
        text: "Öffnen Sie die PayPal-App und tippen Sie auf „Registrieren“. Wählen Sie „Privatkonto“.",
        warning: "Laden Sie PayPal nur aus dem App Store oder Play Store, oder tippen Sie paypal.com selbst ein. Folgen Sie nie Links aus E-Mails.",
      },
      {
        title: "Handynummer bestätigen",
        text: "Geben Sie Ihre Handynummer ein. Sie bekommen eine SMS mit einem Code. Tippen Sie den Code ein.",
      },
      {
        title: "Persönliche Daten eingeben",
        text: "Geben Sie E-Mail-Adresse, ein sicheres Passwort, Ihren Namen und Ihre Adresse ein. Schreiben Sie das Passwort an einem sicheren Ort auf.",
      },
      {
        title: "Bankkonto verknüpfen",
        text: "Tippen Sie auf „Bankkonto hinzufügen“ und geben Sie Ihre IBAN ein. PayPal bucht später von diesem Konto ab. Folgen Sie den Hinweisen zur Bestätigung.",
      },
      {
        title: "Im Online-Shop „PayPal“ wählen",
        text: "Beim Einkaufen wählen Sie an der Kasse „PayPal“ als Bezahlart. Es öffnet sich ein PayPal-Fenster.",
      },
      {
        title: "Anmelden und prüfen",
        text: "Melden Sie sich mit E-Mail und Passwort an. Prüfen Sie den Betrag und den Namen des Händlers. Tippen Sie dann auf „Weiter“ bzw. „Jetzt bezahlen“.",
      },
      {
        title: "Geld an Bekannte senden – richtig",
        text: "Wenn Sie Geld an eine Person schicken, fragt PayPal: „Freunde und Familie“ oder „Waren und Dienstleistungen“. Für Familie wählen Sie „Freunde und Familie“.",
        warning: "Kaufen Sie bei Privatleuten etwas (z. B. auf Kleinanzeigen), wählen Sie immer „Waren und Dienstleistungen“. Nur dann gilt der Käuferschutz. Betrüger bitten oft um „Freunde und Familie“.",
      },
    ],
    takeaways: ["Beim Einkaufen gilt der PayPal-Käuferschutz.", "„Freunde und Familie“ nur für Menschen, die Sie wirklich kennen."],
  },
  {
    slug: "ueberweisung-banking-app",
    title: "Eine Überweisung mit der Banking-App machen",
    summary: "Rechnungen bequem von zu Hause bezahlen – mit der App Ihrer Bank oder Sparkasse.",
    category: "bezahlen",
    devices: ["android", "iphone"],
    difficulty: "mittel",
    minutes: 10,
    access: "premium",
    priceCents: 299,
    checked: "2026-11",
    keywords: ["Überweisung", "Bank", "Sparkasse", "IBAN", "Rechnung bezahlen", "Online-Banking", "TAN"],
    needs: [
      "Die Banking-App Ihrer Bank (z. B. „Sparkasse“, „VR Banking“) – bei Ihrer Bank freigeschaltet",
      "Ihre Anmeldedaten und ggf. die TAN-App Ihrer Bank",
      "Die Rechnung mit Name, IBAN, Betrag und Verwendungszweck",
    ],
    steps: [
      {
        title: "App öffnen und anmelden",
        text: "Öffnen Sie die App Ihrer Bank und melden Sie sich an – mit Passwort, Fingerabdruck oder Gesicht.",
      },
      {
        title: "„Überweisung“ wählen",
        text: "Tippen Sie auf „Überweisung“ oder „Senden“. Oft ist das ein Knopf mit zwei Pfeilen auf der Startseite oder unten in der Leiste.",
      },
      {
        title: "Empfänger und IBAN eingeben",
        text: "Geben Sie den Namen des Empfängers genau wie auf der Rechnung ein. Dann die IBAN – sie beginnt in Deutschland mit „DE“ und hat 22 Zeichen.",
        tip: "Viele Apps können die Rechnung abfotografieren („Foto-Überweisung“ oder „Scan“) und füllen alles selbst aus. Prüfen Sie die Angaben danach trotzdem.",
      },
      {
        title: "Auf die Namensprüfung achten",
        text: "Die Bank prüft jetzt, ob Name und IBAN zusammenpassen. Sie sehen dann „Stimmt überein“, „Stimmt nahezu überein“ oder „Stimmt nicht überein“.",
        warning: "Erscheint „Stimmt nicht überein“, überweisen Sie nicht. Rufen Sie den Empfänger unter einer Ihnen bekannten Nummer an und fragen Sie nach.",
      },
      {
        title: "Betrag und Verwendungszweck",
        text: "Geben Sie den Betrag ein. Ins Feld „Verwendungszweck“ schreiben Sie die Rechnungs- oder Kundennummer, damit der Empfänger die Zahlung zuordnen kann.",
      },
      {
        title: "Prüfen und freigeben",
        text: "Tippen Sie auf „Weiter“. Prüfen Sie alles. Geben Sie die Überweisung dann frei – je nach Bank in der App selbst oder in einer TAN-App (z. B. „S-pushTAN“).",
      },
      {
        title: "Fertig",
        text: "Sie sehen eine Bestätigung. Im Umsatz erscheint die Überweisung meist am nächsten Bankarbeitstag.",
      },
    ],
    takeaways: ["„Stimmt nicht überein“ = nicht überweisen.", "Die Bank fragt nie per Telefon nach einer TAN."],
  },
];

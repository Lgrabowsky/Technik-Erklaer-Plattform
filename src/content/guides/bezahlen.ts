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
    app: "PayPal",
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
    title: "Eine Überweisung mit der Sparkasse-App machen",
    summary: "Rechnungen bequem von zu Hause bezahlen – Schritt für Schritt in der App „Sparkasse“, mit der neuen Namensprüfung.",
    category: "bezahlen",
    app: "Sparkasse (App der Sparkassen) mit S-pushTAN",
    devices: ["android", "iphone"],
    difficulty: "mittel",
    minutes: 10,
    access: "premium",
    priceCents: 299,
    checked: "2026-11",
    keywords: ["Überweisung", "Sparkasse", "IBAN", "Rechnung bezahlen", "Online-Banking", "TAN", "pushTAN", "Geld senden", "Empfängerüberprüfung"],
    needs: [
      "Die App „Sparkasse“ (rotes Symbol mit weißem „S“), bereits mit Ihrem Konto eingerichtet",
      "Die App „S-pushTAN“ für die Freigabe – ebenfalls eingerichtet",
      "Die Rechnung mit Name, IBAN, Betrag und Rechnungsnummer",
    ],
    steps: [
      {
        title: "Sparkasse-App öffnen und anmelden",
        text: "Tippen Sie auf das rote Symbol mit dem weißen „S“. Melden Sie sich mit Ihrem App-Passwort an – oder mit Fingerabdruck bzw. Gesicht, wenn Sie das eingerichtet haben.",
      },
      {
        title: "„Geld senden“ antippen",
        text: "Auf der Startseite bzw. unter Ihrem Girokonto sehen Sie den Knopf „Geld senden“. Tippen Sie darauf.",
      },
      {
        title: "„Überweisung“ wählen",
        text: "Es erscheint eine Auswahl. Tippen Sie auf den obersten Eintrag „Überweisung“.",
        tip: "Darunter gibt es oft „Fotoüberweisung“: Sie fotografieren die Rechnung, und die App füllt die Felder selbst aus. Prüfen Sie die Angaben danach trotzdem genau.",
      },
      {
        title: "Name des Empfängers eingeben",
        text: "Tippen Sie in das Feld „Name“ bzw. „Empfänger“ und geben Sie den Namen genau so ein, wie er auf der Rechnung steht – zum Beispiel „Stadtwerke Musterstadt GmbH“.",
      },
      {
        title: "IBAN eingeben",
        text: "Tippen Sie in das Feld „IBAN“ und geben Sie die IBAN ein. In Deutschland beginnt sie mit „DE“ und hat 22 Zeichen. Leerzeichen müssen Sie nicht eintippen.",
      },
      {
        title: "Betrag und Verwendungszweck",
        text: "Geben Sie im Feld „Betrag“ die Summe ein, zum Beispiel 49,90. Schreiben Sie in „Verwendungszweck“ die Rechnungs- oder Kundennummer. Tippen Sie dann auf „Weiter“.",
      },
      {
        title: "Ergebnis der Namensprüfung lesen",
        text: "Die Sparkasse prüft jetzt in wenigen Sekunden, ob Name und IBAN zusammenpassen. Grün heißt: passt. Bei „nahezu übereinstimmend“ zeigt die App den richtigen Namen – prüfen Sie, ob das der gewünschte Empfänger ist.",
        warning: "Steht dort, dass Name und IBAN nicht übereinstimmen: Brechen Sie ab. Rufen Sie den Empfänger unter einer Ihnen bekannten Nummer an. Genau so arbeiten Betrüger mit gefälschten Rechnungen.",
      },
      {
        title: "Überweisung prüfen und Freigabe anfordern",
        text: "Sie sehen eine Übersicht. Prüfen Sie Name, IBAN und Betrag. Tippen Sie auf „Überweisung prüfen“ bzw. „Senden“. Die App schickt jetzt eine Freigabe-Anfrage an die S-pushTAN-App.",
      },
      {
        title: "In S-pushTAN freigeben",
        text: "Eine Mitteilung von S-pushTAN erscheint – tippen Sie darauf (oder öffnen Sie die App S-pushTAN). Prüfen Sie dort noch einmal Empfänger und Betrag und tippen Sie auf „Freigeben“.",
        warning: "Geben Sie nur frei, was Sie selbst gerade eingegeben haben. Ruft Sie jemand an und bittet um eine Freigabe: auflegen.",
      },
      {
        title: "Fertig",
        text: "Wechseln Sie zurück in die Sparkasse-App. Sie sehen „Auftrag ausgeführt“ bzw. eine Bestätigung. Die Überweisung erscheint in Ihren Umsätzen.",
      },
    ],
    takeaways: [
      "Geld senden → Überweisung → Name, IBAN, Betrag.",
      "Name passt nicht zur IBAN = nicht überweisen.",
      "In S-pushTAN nur freigeben, was Sie selbst gestartet haben.",
    ],
  },
];

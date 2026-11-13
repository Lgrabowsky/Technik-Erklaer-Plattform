import type { Guide } from "../types";

export const unterwegs: Guide[] = [
  {
    slug: "verbindung-google-maps",
    title: "Bus- und Bahnverbindung mit Google Maps finden",
    summary: "Wann fährt der nächste Bus? So sehen Sie Verbindung, Abfahrtszeit und Fußweg zur Haltestelle.",
    category: "unterwegs",
    app: "Google Maps",
    devices: ["android", "iphone"],
    difficulty: "leicht",
    minutes: 10,
    access: "free",
    checked: "2026-11",
    keywords: ["Fahrplan", "Bus", "Haltestelle", "Abfahrt", "Route", "Karte", "Verbindung"],
    needs: ["Die App „Google Maps“ (auf Android-Handys meist schon vorhanden)", "Internet und eingeschalteter Standort"],
    steps: [
      {
        title: "Google Maps öffnen",
        text: "Tippen Sie auf das Symbol mit der bunten Stecknadel „Maps“.",
      },
      {
        title: "Ziel eingeben",
        text: "Tippen Sie oben in das Feld „Hier suchen“. Geben Sie Ihr Ziel ein – eine Adresse, einen Ort oder zum Beispiel „Hauptbahnhof Köln“. Tippen Sie dann in der Liste auf das richtige Ziel.",
      },
      {
        title: "Auf „Route“ tippen",
        text: "Unten erscheint das Ziel. Tippen Sie auf den blauen Knopf „Route“.",
      },
      {
        title: "Bus & Bahn wählen",
        text: "Oben sehen Sie kleine Symbole: Auto, Bus/Bahn, Fußgänger. Tippen Sie auf das Symbol mit dem Zug bzw. Bus.",
        tip: "Als Start nimmt Maps Ihren aktuellen Ort. Möchten Sie woanders losfahren, tippen Sie oben auf „Mein Standort“ und geben einen anderen Start ein.",
      },
      {
        title: "Abfahrtszeit einstellen",
        text: "Möchten Sie später fahren, tippen Sie auf „Jetzt abfahren“ und wählen Sie Tag und Uhrzeit. Tippen Sie auf „Fertig“.",
      },
      {
        title: "Verbindung ansehen",
        text: "Sie sehen eine Liste mit Verbindungen. Tippen Sie auf eine davon. Jetzt sehen Sie jeden Schritt: zu Fuß zur Haltestelle, welche Linie, wo Sie umsteigen und wo Sie aussteigen.",
        tip: "Grün geschriebene Zeiten sind pünktlich, rote Zeiten bedeuten Verspätung.",
      },
    ],
    takeaways: ["„Route“ → Bus-Symbol → Verbindung antippen.", "Rote Zeiten = Verspätung."],
  },
  {
    slug: "fahrplan-und-ticket-db-navigator",
    title: "Fahrkarte kaufen mit dem DB Navigator",
    summary: "Verbindung suchen, Fahrkarte kaufen und im Zug vorzeigen – Schritt für Schritt.",
    category: "unterwegs",
    app: "DB Navigator (App der Deutschen Bahn)",
    devices: ["android", "iphone"],
    difficulty: "mittel",
    minutes: 20,
    access: "premium",
    priceCents: 399,
    checked: "2026-11",
    keywords: ["Bahn", "Zug", "Ticket", "Fahrkarte", "DB", "Deutsche Bahn", "BahnCard"],
    needs: [
      "Die App „DB Navigator“",
      "Eine Bezahlmöglichkeit (z. B. Lastschrift, Kreditkarte oder PayPal)",
      "Ihren Personalausweis für die Fahrt",
    ],
    steps: [
      {
        title: "Start und Ziel eingeben",
        text: "Öffnen Sie den DB Navigator. Tippen Sie auf „Start“ und geben Sie Ihren Bahnhof ein. Tippen Sie dann auf „Ziel“ und geben Sie Ihr Ziel ein.",
      },
      {
        title: "Datum, Uhrzeit und Reisende",
        text: "Tippen Sie auf das Datum und wählen Sie, wann Sie fahren möchten. Prüfen Sie darunter die Reisenden: Anzahl, Alter und ob Sie eine BahnCard haben. Tippen Sie dann auf „Suchen“.",
        tip: "Mit BahnCard wird es günstiger – sie muss beim Kauf angegeben werden.",
      },
      {
        title: "Verbindung auswählen",
        text: "Sie sehen eine Liste mit Zügen: Abfahrt, Ankunft, Dauer und wie oft Sie umsteigen. Tippen Sie auf eine Verbindung, um alle Details zu sehen.",
        tip: "Weniger Umstiege sind oft entspannter, auch wenn die Fahrt etwas länger dauert.",
      },
      {
        title: "Angebot wählen",
        text: "Tippen Sie auf „Weiter“. Wählen Sie ein Angebot: „Sparpreis“ ist günstig, gilt aber nur für diesen Zug. „Flexpreis“ ist teurer, Sie können aber jeden Zug an dem Tag nehmen.",
      },
      {
        title: "Anmelden oder als Gast kaufen",
        text: "Haben Sie ein DB-Konto, melden Sie sich an. Sonst können Sie „Ohne Anmeldung fortfahren“ wählen und Ihren Namen eingeben.",
        tip: "Mit Konto finden Sie Ihre Fahrkarten jederzeit wieder – auch auf einem neuen Handy.",
      },
      {
        title: "Bezahlen",
        text: "Wählen Sie die Bezahlart und prüfen Sie alles noch einmal. Tippen Sie auf „Jetzt kaufen“ bzw. „Kaufen“.",
      },
      {
        title: "Fahrkarte im Zug zeigen",
        text: "Ihre Fahrkarte finden Sie unten unter „Reisen“. Zeigen Sie dem Zugbegleiter den Code auf dem Bildschirm und Ihren Ausweis.",
        warning: "Laden Sie Ihr Handy vor der Fahrt auf. Ohne Akku keine Fahrkarte!",
      },
    ],
  },
  {
    slug: "deutschlandticket-kaufen",
    title: "Das Deutschlandticket im DB Navigator kaufen und kündigen",
    summary: "Bus und Bahn im Nahverkehr in ganz Deutschland: So bestellen Sie das Deutschlandticket in der App der Deutschen Bahn – und so kündigen Sie es wieder.",
    category: "unterwegs",
    app: "DB Navigator (App der Deutschen Bahn)",
    devices: ["android", "iphone"],
    difficulty: "mittel",
    minutes: 15,
    access: "premium",
    priceCents: 299,
    checked: "2026-11",
    keywords: ["Deutschlandticket", "Deutschland-Ticket", "D-Ticket", "Nahverkehr", "Abo", "Monatskarte", "kündigen", "DB Navigator"],
    needs: [
      "Die App „DB Navigator“ – rotes Symbol mit weißem „DB“ (aus Play Store bzw. App Store)",
      "Ihre E-Mail-Adresse – für das DB-Kundenkonto",
      "Ihre IBAN (steht auf der Bankkarte) oder eine Kreditkarte",
      "Ihren Personalausweis – er wird bei Kontrollen zusammen mit dem Ticket gezeigt",
    ],
    steps: [
      {
        title: "Kurz vorab: Was ist das Deutschlandticket?",
        text: "Mit dem Deutschlandticket fahren Sie in ganz Deutschland mit Bus, Straßenbahn, U-Bahn, S-Bahn und Regionalzügen (RE und RB). Es kostet 63 Euro im Monat, ab 1. Januar 2027 66,80 Euro. Es ist ein Abo, das sich jeden Monat verlängert.",
        warning: "Nicht gültig in ICE, IC und EC. Steigen Sie nur in Züge mit „RE“, „RB“ oder „S“ auf der Anzeigetafel.",
      },
      {
        title: "DB Navigator öffnen",
        text: "Tippen Sie auf das rote Symbol mit den weißen Buchstaben „DB“. Beim allerersten Start fragt die App nach Mitteilungen und Standort – tippen Sie jeweils auf „Erlauben“.",
      },
      {
        title: "Unten auf „Tickets“ tippen",
        text: "Am unteren Bildschirmrand sehen Sie eine Leiste mit mehreren Symbolen. Tippen Sie auf „Tickets“.",
        tip: "Sie sehen keine Leiste? Dann sind Sie in einem Unterfenster. Tippen Sie oben links so oft auf den Pfeil „Zurück“, bis die Leiste wieder erscheint.",
      },
      {
        title: "„Deutschland-Ticket“ antippen",
        text: "Im Bereich „Tickets“ finden Sie eine Kachel bzw. einen Eintrag „Deutschland-Ticket“. Tippen Sie darauf. Es öffnet sich die Bestellseite mit Preis und Infos.",
        tip: "Finden Sie den Eintrag nicht? Wischen Sie auf der Seite etwas nach oben – er steht manchmal weiter unten.",
      },
      {
        title: "Bestellung starten",
        text: "Tippen Sie unten auf den roten Knopf zum Bestellen („Abo abschließen“ bzw. „Jetzt bestellen“).",
      },
      {
        title: "Anmelden oder Kundenkonto anlegen",
        text: "Für das Abo brauchen Sie ein DB-Kundenkonto. Haben Sie eins, tippen Sie auf „Anmelden“ und geben E-Mail und Passwort ein. Sonst tippen Sie auf „Registrieren“ und geben Name, Geburtsdatum, Adresse und E-Mail ein.",
        tip: "Nach dem Registrieren bekommen Sie eine E-Mail von der Bahn. Öffnen Sie sie und tippen Sie auf den Bestätigungs-Link. Danach kehren Sie in die App zurück.",
      },
      {
        title: "Startmonat wählen",
        text: "Wählen Sie, ab welchem Monat das Ticket gelten soll. Sie können auch den laufenden Monat wählen – dann gilt das Ticket sofort.",
        warning: "Auch wenn Sie mitten im Monat starten, zahlen Sie den vollen Monatspreis. Wer nach dem 10. bestellt, dem werden oft zwei Monate auf einmal abgebucht.",
      },
      {
        title: "Bezahlart eingeben",
        text: "Wählen Sie „SEPA-Lastschrift“ und tippen Sie Ihre IBAN ein (beginnt mit „DE“, 22 Zeichen). Oder wählen Sie „Kreditkarte“ und geben die Kartendaten ein.",
      },
      {
        title: "Prüfen und „Zahlungspflichtig bestellen“",
        text: "Sie sehen eine Zusammenfassung: Name, Startmonat, Preis. Prüfen Sie alles. Setzen Sie den Haken bei den Bedingungen und tippen Sie auf „Zahlungspflichtig bestellen“.",
      },
      {
        title: "Ticket finden und vorzeigen",
        text: "Tippen Sie unten auf „Tickets“ und dann oben auf „Meine Tickets“. Dort steht Ihr Deutschland-Ticket. Bei einer Kontrolle öffnen Sie es und zeigen den Code zusammen mit Ihrem Ausweis.",
        tip: "Öffnen Sie das Ticket einmal zu Hause im WLAN. Dann ist es auch unterwegs ohne Internet sichtbar. Und: Handy vor der Fahrt aufladen.",
      },
      {
        title: "Wichtig für bestehende Abos: Preis bis 30. November bestätigen",
        text: "Haben Sie Ihr Abo vor dem 15. Oktober 2026 bestellt? Dann bittet die Bahn Sie, dem neuen Preis von 66,80 Euro ab Januar 2027 zuzustimmen. Sie bekommen dazu eine Nachricht im DB Navigator bzw. per E-Mail. Tippen Sie dort auf Zustimmen.",
        warning: "Ohne Zustimmung bis zum 30. November 2026 endet Ihr Abo am 31. Dezember 2026. Sie können danach aber jederzeit neu bestellen.",
      },
      {
        title: "Kündigen",
        text: "Tippen Sie unten auf „Tickets“, dann auf „Meine Tickets“ und auf Ihr Deutschland-Ticket. Wischen Sie unter dem Ticket nach oben und tippen Sie auf „Abo kündigen“. Bestätigen Sie die Kündigung.",
        warning: "Kündigen Sie spätestens am 10. des Monats. Dann endet das Abo am Monatsende. Danach gilt die Kündigung erst zum Ende des nächsten Monats.",
      },
    ],
    takeaways: [
      "Tickets → Deutschland-Ticket → bestellen.",
      "Ticket steht unter Tickets → Meine Tickets.",
      "Kündigen bis zum 10. des Monats über „Abo kündigen“.",
    ],
  },
];

import type { Guide } from "../types";

export const unterwegs: Guide[] = [
  {
    slug: "verbindung-google-maps",
    title: "Bus- und Bahnverbindung mit Google Maps finden",
    summary: "Wann fährt der nächste Bus? So sehen Sie Verbindung, Abfahrtszeit und Fußweg zur Haltestelle.",
    category: "unterwegs",
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
        text: "Haben Sie ein DB-Konto, melden Sie sich an. Sonst können Sie „Ohne Anmeldung buchen“ wählen und Ihren Namen eingeben.",
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
    title: "Das Deutschlandticket auf dem Handy kaufen",
    summary: "Mit Bus und Bahn im Nahverkehr durch ganz Deutschland – so kaufen und kündigen Sie das Abo.",
    category: "unterwegs",
    devices: ["android", "iphone"],
    difficulty: "mittel",
    minutes: 15,
    access: "premium",
    priceCents: 299,
    checked: "2026-11",
    keywords: ["Deutschlandticket", "D-Ticket", "Nahverkehr", "Abo", "63 Euro", "Monatskarte"],
    needs: [
      "Die App Ihres Verkehrsbetriebs oder den „DB Navigator“",
      "Eine Bankverbindung (IBAN) für die monatliche Abbuchung",
      "Ihren Personalausweis für die Fahrt",
    ],
    steps: [
      {
        title: "Was ist das Deutschlandticket?",
        text: "Mit dem Deutschlandticket fahren Sie bundesweit in allen Bussen, Straßenbahnen, U-Bahnen und Regionalzügen (RE, RB, S-Bahn). Seit Januar 2026 kostet es 63 Euro im Monat. Es gilt nicht im ICE oder IC.",
      },
      {
        title: "Es ist ein Abo",
        text: "Das Ticket gibt es nur als Abo. Es verlängert sich jeden Monat von selbst, bis Sie kündigen. Sie können aber jeden Monat kündigen.",
        tip: "Fragen Sie bei Ihrem örtlichen Verkehrsbetrieb nach – manche bieten günstigere Varianten, zum Beispiel für Menschen mit wenig Einkommen.",
      },
      {
        title: "Kaufen in der App",
        text: "Öffnen Sie die App Ihres Verkehrsbetriebs oder den DB Navigator. Suchen Sie auf der Startseite nach „Deutschlandticket“ und tippen Sie darauf. Tippen Sie auf „Jetzt bestellen“.",
      },
      {
        title: "Konto anlegen und Daten eingeben",
        text: "Für das Abo brauchen Sie ein Konto. Geben Sie Name, Geburtsdatum, Adresse und E-Mail ein. Wählen Sie dann den Startmonat.",
      },
      {
        title: "Bezahlung einrichten",
        text: "Geben Sie Ihre IBAN für die Lastschrift ein (oder wählen Sie eine andere angebotene Bezahlart). Prüfen Sie alles und tippen Sie auf „Zahlungspflichtig bestellen“.",
      },
      {
        title: "Ticket vorzeigen",
        text: "Das Ticket erscheint in der App, meist unter „Tickets“ oder „Meine Tickets“. Zeigen Sie bei der Kontrolle den Code und Ihren Ausweis.",
        tip: "Öffnen Sie das Ticket am besten einmal, solange Sie WLAN haben. Dann ist es auch ohne Netz verfügbar.",
      },
      {
        title: "Kündigen",
        text: "Kündigen geht in derselben App, meist unter „Mein Abo“ oder „Konto“. Wichtig: Kündigen Sie bis zum 10. des Monats, damit das Ticket zum Monatsende endet.",
      },
    ],
    takeaways: ["63 Euro im Monat, nur im Nahverkehr.", "Kündigung bis zum 10. des Monats für das Monatsende."],
  },
];

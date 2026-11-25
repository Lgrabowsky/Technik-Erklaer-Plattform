/** Erste Aufteilung der Themengebiete in Unterthemen (für `npm run seed`). */
export const seedSubtopics: { category: string; slug: string; title: string; description: string; guides: string[] }[] = [
  { category: "grundlagen", slug: "handy-einrichten", title: "Handy einrichten", description: "Apps installieren und die Schrift größer stellen.", guides: ["app-installieren", "schrift-vergroessern", "wlan-verbinden", "taschenlampe-einschalten", "kontakt-speichern", "foto-machen"] },
  { category: "grundlagen", slug: "whatsapp", title: "WhatsApp", description: "Einrichten, Fotos schicken, Video telefonieren.", guides: ["whatsapp-einrichten", "whatsapp-foto-senden", "whatsapp-videoanruf", "whatsapp-sprachnachricht", "whatsapp-gruppe-erstellen", "whatsapp-live-standort"] },
  { category: "gesundheit", slug: "arzttermine", title: "Arzttermine", description: "Termine online buchen oder über die 116117.", guides: ["arzttermin-online-buchen", "termin-116117", "doctolib-termin-absagen"] },
  { category: "gesundheit", slug: "rezepte-apotheke", title: "Rezept & Apotheke", description: "Das E-Rezept einlösen.", guides: ["e-rezept-einloesen", "e-rezept-app-gematik", "medikamente-erinnerung-iphone"] },
  { category: "gesundheit", slug: "krankenkasse", title: "Krankenkasse", description: "Rechnungen einreichen und die Patientenakte (ePA).", guides: ["rechnung-krankenkasse-einreichen", "epa-patientenakte"] },
  { category: "unterwegs", slug: "verbindungen-fahrkarten", title: "Verbindungen & Fahrkarten", description: "Verbindung finden und eine Fahrkarte kaufen.", guides: ["verbindung-google-maps", "fahrplan-und-ticket-db-navigator", "zu-fuss-google-maps", "fahrgastrechte-db-navigator"] },
  { category: "unterwegs", slug: "deutschlandticket", title: "Deutschlandticket", description: "Kaufen und wieder kündigen.", guides: ["deutschlandticket-kaufen", "deutschlandticket-vorzeigen", "deutschlandticket-kuendigen"] },
  { category: "bezahlen", slug: "online-einkaufen", title: "Online einkaufen", description: "Sicher bezahlen und PayPal einrichten.", guides: ["sicher-online-bezahlen", "paypal-einrichten", "paypal-geld-senden", "paypal-kaeuferschutz"] },
  { category: "bezahlen", slug: "online-banking", title: "Online-Banking", description: "Überweisungen mit der Banking-App.", guides: ["ueberweisung-banking-app"] },
  { category: "sicherheit", slug: "betrug-erkennen", title: "Betrug erkennen", description: "Falsche SMS, Anrufe und E-Mails.", guides: ["betrug-erkennen-sms-anrufe", "phishing-mails-erkennen", "nummer-blockieren", "app-abos-kuendigen"] },
  { category: "sicherheit", slug: "passwoerter", title: "Passwörter", description: "Sichere Passwörter, die man sich merken kann.", guides: ["sichere-passwoerter"] },
  { category: "grundlagen", slug: "videoanrufe", title: "Videoanrufe", description: "Per Video mit der Familie sprechen.", guides: ["facetime-videoanruf"] },
  { category: "gesundheit", slug: "notfall", title: "Notfall", description: "Notfall-Infos im Handy hinterlegen.", guides: ["notfallpass-handy"] },
  { category: "bezahlen", slug: "karten-handy-bezahlen", title: "Karten & Bezahlen mit dem Handy", description: "Karte sperren und an der Kasse mit dem Handy zahlen.", guides: ["karte-sperren-116116", "mit-dem-handy-bezahlen"] },
  { category: "sicherheit", slug: "handy-schuetzen", title: "Handy schützen", description: "Updates, Bildschirmsperre, WhatsApp-PIN und Notruf per Tastendruck.", guides: ["handy-aktualisieren", "bildschirmsperre-einrichten", "whatsapp-zwei-schritt", "notruf-sos-einrichten"] },
  { category: "alltag", slug: "ausweis-aemter", title: "Ausweis & Ämter", description: "Den Online-Ausweis einrichten.", guides: ["online-ausweis-pin"] },
  { category: "alltag", slug: "dokumente", title: "Dokumente", description: "Scannen und per E-Mail verschicken.", guides: ["dokument-scannen-iphone", "dokument-scannen-android", "email-mit-anhang"] },
  { category: "sicherheit", slug: "faelschungen-ki", title: "Fälschungen & KI", description: "Gefälschte Bilder, Videos und KI-Inhalte.", guides: ["fakes-und-ki-erkennen"] },
];

export const seedQuickLinks = [
  { label: "Arzttermin buchen", guide: "arzttermin-online-buchen" },
  { label: "Fahrkarte kaufen", guide: "fahrplan-und-ticket-db-navigator" },
  { label: "Betrug erkennen", guide: "betrug-erkennen-sms-anrufe" },
  { label: "Videoanruf", guide: "whatsapp-videoanruf" },
  { label: "E-Rezept", guide: "e-rezept-einloesen" },
];

/** Erste Aufteilung der Themengebiete in Unterthemen (für `npm run seed`). */
export const seedSubtopics: { category: string; slug: string; title: string; description: string; guides: string[] }[] = [
  { category: "grundlagen", slug: "handy-einrichten", title: "Handy einrichten", description: "Apps installieren und die Schrift größer stellen.", guides: ["app-installieren", "schrift-vergroessern"] },
  { category: "grundlagen", slug: "whatsapp", title: "WhatsApp", description: "Einrichten, Fotos schicken, Video telefonieren.", guides: ["whatsapp-einrichten", "whatsapp-foto-senden", "whatsapp-videoanruf"] },
  { category: "gesundheit", slug: "arzttermine", title: "Arzttermine", description: "Termine online buchen oder über die 116117.", guides: ["arzttermin-online-buchen", "termin-116117"] },
  { category: "gesundheit", slug: "rezepte-apotheke", title: "Rezept & Apotheke", description: "Das E-Rezept einlösen.", guides: ["e-rezept-einloesen"] },
  { category: "gesundheit", slug: "krankenkasse", title: "Krankenkasse", description: "Rechnungen einreichen und die Patientenakte (ePA).", guides: ["rechnung-krankenkasse-einreichen", "epa-patientenakte"] },
  { category: "unterwegs", slug: "verbindungen-fahrkarten", title: "Verbindungen & Fahrkarten", description: "Verbindung finden und eine Fahrkarte kaufen.", guides: ["verbindung-google-maps", "fahrplan-und-ticket-db-navigator"] },
  { category: "unterwegs", slug: "deutschlandticket", title: "Deutschlandticket", description: "Kaufen und wieder kündigen.", guides: ["deutschlandticket-kaufen", "deutschlandticket-kuendigen"] },
  { category: "bezahlen", slug: "online-einkaufen", title: "Online einkaufen", description: "Sicher bezahlen und PayPal einrichten.", guides: ["sicher-online-bezahlen", "paypal-einrichten"] },
  { category: "bezahlen", slug: "online-banking", title: "Online-Banking", description: "Überweisungen mit der Banking-App.", guides: ["ueberweisung-banking-app"] },
  { category: "sicherheit", slug: "betrug-erkennen", title: "Betrug erkennen", description: "Falsche SMS, Anrufe und E-Mails.", guides: ["betrug-erkennen-sms-anrufe", "phishing-mails-erkennen"] },
  { category: "sicherheit", slug: "passwoerter", title: "Passwörter", description: "Sichere Passwörter, die man sich merken kann.", guides: ["sichere-passwoerter"] },
  { category: "sicherheit", slug: "faelschungen-ki", title: "Fälschungen & KI", description: "Gefälschte Bilder, Videos und KI-Inhalte.", guides: ["fakes-und-ki-erkennen"] },
];

export const seedQuickLinks = [
  { label: "Arzttermin buchen", guide: "arzttermin-online-buchen" },
  { label: "Fahrkarte kaufen", guide: "fahrplan-und-ticket-db-navigator" },
  { label: "Betrug erkennen", guide: "betrug-erkennen-sms-anrufe" },
  { label: "Videoanruf", guide: "whatsapp-videoanruf" },
  { label: "E-Rezept", guide: "e-rezept-einloesen" },
];

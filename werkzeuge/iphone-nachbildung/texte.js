/*
 * Alle Beschriftungen der Nachbildung – mit Beleg.
 *
 * belegt: true  = Wortlaut steht so auf einer deutschen Apple-Support-Seite (Quelle angegeben).
 * belegt: false = aus Erfahrung geschrieben, NICHT aus einer Apple-Quelle. Vor Veröffentlichung
 *                 an einem echten iPhone prüfen (Prüfliste: LIESMICH.md).
 *
 * Quellen (abgerufen am 25.11.2026):
 *  A = https://support.apple.com/de-de/guide/iphone/iphd6804774e/ios        (iPhone-Display und Texteinstellungen anpassen, iOS 27)
 *  B = https://support.apple.com/de-de/guide/iphone/iphd6804774e/26/ios/26  (dieselbe Seite, iOS 26)
 *  C = https://support.apple.com/de-de/guide/iphone/iph079e1fe9d/ios        (Einstellungen auf dem iPhone finden, iOS 27 – Tabelle der Abschnitte)
 *  D = https://support.apple.com/de-de/guide/iphone/iph3c076905a/ios        (Text auf dem iPhone leichter lesbar machen)
 *  E = https://support.apple.com/de-de/guide/iphone/iph60ba71065/ios        (Helligkeit und Farbbalance anpassen)
 */
window.TEXTE = {
  // --- Einstellungen, Startliste (Quelle C, Reihenfolge wie in der Tabelle) ---
  einstellungen: { text: "Einstellungen", belegt: true, quelle: "A" },
  suchen: { text: "Suchen", belegt: true, quelle: "C" },
  flugmodus: { text: "Flugmodus", belegt: true, quelle: "C" },
  wlan: { text: "WLAN", belegt: true, quelle: "C" },
  bluetooth: { text: "Bluetooth", belegt: true, quelle: "C" },
  mobilfunk: { text: "Mobilfunk", belegt: true, quelle: "C" },
  hotspot: { text: "Persönlicher Hotspot", belegt: true, quelle: "C" },
  batterie: { text: "Batterie", belegt: true, quelle: "C" },
  allgemein: { text: "Allgemein", belegt: true, quelle: "C" },
  bedienungshilfen: { text: "Bedienungshilfen", belegt: true, quelle: "C" },
  aktionstaste: { text: "Aktionstaste", belegt: true, quelle: "C" },
  erscheinungsbild: { text: "Erscheinungsbild", belegt: true, quelle: "A, C" },
  kamera: { text: "Kamera", belegt: true, quelle: "C" },
  kontrollzentrum: { text: "Kontrollzentrum", belegt: true, quelle: "C" },
  anzeigeHelligkeit: { text: "Anzeige & Helligkeit", belegt: true, quelle: "B, C" },
  homeBildschirm: { text: "Home-Bildschirm & App-Mediathek", belegt: true, quelle: "C" },
  siri: { text: "Siri", belegt: true, quelle: "C" },
  standby: { text: "StandBy", belegt: true, quelle: "C" },
  hintergrundbild: { text: "Hintergrundbild", belegt: true, quelle: "C" },
  mitteilungen: { text: "Mitteilungen", belegt: true, quelle: "C" },
  toene: { text: "Töne & Haptik", belegt: true, quelle: "C" },
  fokus: { text: "Fokus", belegt: true, quelle: "C" },
  bildschirmzeit: { text: "Bildschirmzeit", belegt: true, quelle: "C" },
  faceId: { text: "Face ID & Code", belegt: true, quelle: "C (Tabelle nennt „Face ID oder Touch ID & Code“; auf Face-ID-Modellen steht nur Face ID)" },
  notruf: { text: "Notruf SOS", belegt: true, quelle: "C" },
  datenschutz: { text: "Datenschutz & Sicherheit", belegt: true, quelle: "C" },
  gameCenter: { text: "Game Center", belegt: true, quelle: "C" },
  icloud: { text: "iCloud", belegt: true, quelle: "C" },
  wallet: { text: "Wallet & Apple Pay", belegt: true, quelle: "C" },
  apps: { text: "Apps", belegt: true, quelle: "C" },
  aus: { text: "Aus", belegt: false, quelle: "Wert neben „Bluetooth“ – nicht in Apple-Quelle" },

  // --- Erscheinungsbild (iOS 27) bzw. Anzeige & Helligkeit (iOS 26) ---
  hell: { text: "Hell", belegt: true, quelle: "E" },
  dunkel: { text: "Dunkel", belegt: true, quelle: "E" },
  automatisch: { text: "Automatisch", belegt: true, quelle: "E" },
  textgroesse: { text: "Textgröße", belegt: true, quelle: "A, B" },
  fetterText: { text: "Fetter Text", belegt: true, quelle: "A, B" },
  liquidGlass: { text: "Liquid Glass", belegt: true, quelle: "A, B" },
  anzeigezoom: { text: "Anzeigezoom", belegt: true, quelle: "A, B" },
  helligkeit: { text: "Helligkeit", belegt: false, quelle: "Abschnittstitel – nicht wörtlich in Apple-Quelle" },
  standard: { text: "Standard", belegt: false, quelle: "Wert neben „Anzeigezoom“ – nicht in Apple-Quelle" },

  // --- Textgröße ---
  textgroesseErklaerung: {
    text: "Apps, die dynamische Schrift unterstützen, passen sich an deine bevorzugte Lesegröße unten an.",
    belegt: false,
    quelle: "Erklärtext auf dem Textgröße-Bildschirm – aus Erfahrung, nicht in Apple-Quelle",
  },

  // --- Home-Bildschirm (App-Namen von Apple-Apps; Quelle D nennt „Kalender“, „Mail“, „Nachrichten“, „Notizen“, „Einstellungen“) ---
  appKalender: { text: "Kalender", belegt: true, quelle: "D" },
  appMail: { text: "Mail", belegt: true, quelle: "D" },
  appNachrichten: { text: "Nachrichten", belegt: true, quelle: "D" },
  appNotizen: { text: "Notizen", belegt: true, quelle: "D" },
  appKamera: { text: "Kamera", belegt: true, quelle: "C" },
  appFotos: { text: "Fotos", belegt: true, quelle: "C (Abschnitt Apps)" },
  appSafari: { text: "Safari", belegt: true, quelle: "C (Abschnitt Apps)" },
  appTelefon: { text: "Telefon", belegt: false, quelle: "App-Name – nicht in den genannten Quellen" },
  appUhr: { text: "Uhr", belegt: false, quelle: "App-Name – nicht in den genannten Quellen" },
  appWetter: { text: "Wetter", belegt: false, quelle: "App-Name – nicht in den genannten Quellen" },
  appKarten: { text: "Karten", belegt: false, quelle: "App-Name – nicht in den genannten Quellen" },
  appErinnerungen: { text: "Erinnerungen", belegt: false, quelle: "App-Name – nicht in den genannten Quellen" },
  appAppStore: { text: "App Store", belegt: false, quelle: "App-Name – nicht in den genannten Quellen" },
  appMusik: { text: "Musik", belegt: false, quelle: "App-Name – nicht in den genannten Quellen" },
};

/** Kurzform: T("wlan") → "WLAN" */
window.T = (schluessel) => {
  const eintrag = window.TEXTE[schluessel];
  if (!eintrag) throw new Error("Unbekannter Text: " + schluessel);
  return eintrag.text;
};

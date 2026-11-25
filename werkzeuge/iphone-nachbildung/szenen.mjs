/*
 * Welche Bilder aufgenommen werden.
 *   datei     Pfad unter public/screenshots/
 *   szene     Seitenpfad in der Nachbildung (leer = Home-Bildschirm)
 *   markiere  data-ziel des Klickziels (mehrere mit Komma → Nummern 1, 2 …)
 *   ios       27 (Standard) oder 26
 */
export const SZENEN = [
  // Anleitung „Die Schrift auf dem Handy vergrößern“ – iPhone, iOS 27
  { datei: "schrift-vergroessern/iphone-1-einstellungen.webp", szene: "", markiere: "einstellungen" },
  { datei: "schrift-vergroessern/iphone-2-erscheinungsbild.webp", szene: "einstellungen", markiere: "erscheinungsbild" },
  { datei: "schrift-vergroessern/iphone-3-textgroesse.webp", szene: "einstellungen/erscheinungsbild", markiere: "textgroesse" },
  { datei: "schrift-vergroessern/iphone-4-regler.webp", szene: "einstellungen/erscheinungsbild/textgroesse", markiere: "regler-textgroesse" },
];

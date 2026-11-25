/*
 * Selbst gezeichnete, schlichte Symbole. Bewusst KEINE Kopien der Apple-Symbole
 * (SF Symbols und App-Icons sind urheberrechtlich geschützt). Sie sollen nur
 * Farbe und grobe Form andeuten, damit man sich auf dem echten Gerät zurechtfindet.
 */
(() => {
  const s = (inhalt, extra = "") =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${extra}>${inhalt}</svg>`;
  const f = (inhalt) => `<svg viewBox="0 0 24 24" fill="currentColor">${inhalt}</svg>`;

  window.SYMBOL = {
    flugzeug: f('<path d="M21 14.5v-1.8l-7.5-4.6V3.6a1.5 1.5 0 0 0-3 0v4.5L3 12.7v1.8l7.5-2.3v4.6l-2 1.5V20l3.5-1 3.5 1v-1.7l-2-1.5v-4.6z"/>'),
    wlan: s('<path d="M3.5 9.5a12 12 0 0 1 17 0M6.5 12.7a7.5 7.5 0 0 1 11 0M9.5 15.8a3.2 3.2 0 0 1 5 0"/><circle cx="12" cy="18.6" r="1" fill="currentColor"/>'),
    bluetooth: s('<path d="M7 7.5l10 9-5 4.5v-18l5 4.5-10 9"/>'),
    antenne: s('<path d="M12 10v11M8.5 6.5a5 5 0 0 0 0 7M15.5 6.5a5 5 0 0 1 0 7M5.5 3.8a9 9 0 0 0 0 12.4M18.5 3.8a9 9 0 0 1 0 12.4"/><circle cx="12" cy="10" r="1.4" fill="currentColor"/>'),
    kette: s('<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'),
    batterie: s('<rect x="2.5" y="7.5" width="16" height="9" rx="2.2"/><path d="M21 10.5v3"/><rect x="4.5" y="9.5" width="9" height="5" rx="1" fill="currentColor" stroke="none"/>'),
    zahnrad: s('<circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v2.6M12 18.6v2.6M2.8 12h2.6M18.6 12h2.6M5.5 5.5l1.8 1.8M16.7 16.7l1.8 1.8M5.5 18.5l1.8-1.8M16.7 7.3l1.8-1.8"/><circle cx="12" cy="12" r="6.6"/>'),
    person: s('<circle cx="12" cy="7.5" r="3.2"/><path d="M5.5 20a6.5 6.5 0 0 1 13 0"/>'),
    taste: s('<rect x="7" y="3" width="10" height="18" rx="3"/><path d="M4 8v5"/>'),
    schrift: `<svg viewBox="0 0 24 24" fill="currentColor"><text x="1.5" y="18" font-family="Inter, sans-serif" font-weight="700" font-size="11">A</text><text x="9.5" y="18" font-family="Inter, sans-serif" font-weight="700" font-size="16">A</text></svg>`,
    kamera: s('<path d="M4 8h3l1.8-2.5h6.4L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.4"/>'),
    regler: s('<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>'),
    sonne: s('<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>'),
    raster: s('<rect x="4" y="4" width="6.5" height="6.5" rx="1.6"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.6"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.6"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.6"/>'),
    lupe: s('<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5.5 5.5"/>'),
    welle: s('<path d="M3 12h2M7 8v8M11 5v14M15 8v8M19 11v2"/>'),
    mond: f('<path d="M14.5 3.5a8.5 8.5 0 1 0 6 13.8A7 7 0 0 1 14.5 3.5z"/>'),
    blume: s('<circle cx="12" cy="12" r="2.4"/><circle cx="12" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="12" r="3"/>'),
    glocke: s('<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>'),
    lautsprecher: s('<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>'),
    sanduhr: s('<path d="M7 3.5h10M7 20.5h10M8 3.5c0 5 8 5 8 8.5s-8 3.5-8 8.5M16 3.5c0 5-8 5-8 8.5s8 3.5 8 8.5"/>'),
    gesicht: s('<path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16"/><path d="M9 9.5v1M15 9.5v1M12 10v3h-1M9.5 15.5a4 4 0 0 0 5 0"/>'),
    sos: `<svg viewBox="0 0 24 24" fill="currentColor"><text x="12" y="15.5" text-anchor="middle" font-family="Inter, sans-serif" font-weight="800" font-size="8.5">SOS</text></svg>`,
    hand: s('<path d="M8 12V5.5a1.5 1.5 0 0 1 3 0V11M11 10V4a1.5 1.5 0 0 1 3 0v6M14 10V5.5a1.5 1.5 0 0 1 3 0V14a7 7 0 0 1-7 7 6 6 0 0 1-5-3l-2-4a1.4 1.4 0 0 1 2.4-1.4L8 15"/>'),
    kreise: s('<circle cx="8.5" cy="9" r="4"/><circle cx="15.5" cy="9" r="4"/><circle cx="12" cy="15.5" r="4"/>'),
    wolke: f('<path d="M7 19a4.5 4.5 0 0 1-.6-9 6 6 0 0 1 11.4 1.6A3.8 3.8 0 0 1 17.5 19z"/>'),
    karten: s('<rect x="3.5" y="6" width="17" height="12" rx="2.5"/><path d="M3.5 10h17"/>'),
    stapel: s('<rect x="4" y="4" width="7" height="7" rx="1.8"/><rect x="13" y="4" width="7" height="7" rx="1.8"/><rect x="4" y="13" width="7" height="7" rx="1.8"/><rect x="13" y="13" width="7" height="7" rx="1.8"/>'),
    // App-Symbole für den Home-Bildschirm (eigene, schlichte Zeichnungen)
    telefon: f('<path d="M7.2 3.5l2.4 3.6-1.6 2.2a11 11 0 0 0 6.7 6.7l2.2-1.6 3.6 2.4-1.2 3a2 2 0 0 1-2.2 1.2C10.5 19.8 4.2 13.5 3 6.9a2 2 0 0 1 1.2-2.2z"/>'),
    kompass: s('<circle cx="12" cy="12" r="8.5"/><path d="M15.5 8.5l-2 5-5 2 2-5z" fill="currentColor"/>'),
    sprechblase: f('<path d="M12 4c5 0 9 3.2 9 7.3s-4 7.2-9 7.2c-1 0-2-.1-2.9-.4L5 20l1-3.6C4.2 15.1 3 13.3 3 11.3 3 7.2 7 4 12 4z"/>'),
    note: f('<path d="M19 3.5v12a3 3 0 1 1-2-2.8V7.6l-7 1.6v8.3a3 3 0 1 1-2-2.8V6z"/>'),
    brief: s('<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/>'),
    uhr: s('<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/>'),
    wetter: `<svg viewBox="0 0 24 24"><circle cx="9" cy="9" r="4" fill="#ffd60a"/><path d="M8 19a3.8 3.8 0 0 1-.4-7.6 5 5 0 0 1 9.6 1.3A3.2 3.2 0 0 1 16.8 19z" fill="#fff"/></svg>`,
    karte: s('<path d="M3.5 6.5l5.5-2 6 2 5.5-2v13l-5.5 2-6-2-5.5 2z"/><path d="M9 4.5v13M15 6.5v13"/>'),
    liste: s('<circle cx="5.5" cy="7" r="1.3" fill="currentColor"/><circle cx="5.5" cy="12" r="1.3" fill="currentColor"/><circle cx="5.5" cy="17" r="1.3" fill="currentColor"/><path d="M9.5 7h10M9.5 12h10M9.5 17h10"/>'),
    stift: s('<path d="M5 19l1-4L16 5l3 3L9 18z"/><path d="M14 7l3 3"/>'),
    laden: s('<path d="M8 17l7-11M16 17L9 6M5.5 14h13"/>'),
    // Bewusst NICHT die bunte Blüte des Apple-Fotos-Symbols, sondern ein neutrales Bild-Symbol
    bild: `<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3" fill="#e9f3ff"/><circle cx="8.5" cy="9.5" r="2" fill="#ffb800"/><path d="M3.5 17l5-5 3.5 3.5 3-3 5.5 5.2V17a2 2 0 0 1-2 2H5.5a2 2 0 0 1-2-2z" fill="#2fb36d"/></svg>`,
    kalender: "", // wird als Text-Kachel gezeichnet
  };

  // Statusleiste
  window.STATUS = {
    netz: `<svg viewBox="0 0 18 12" fill="currentColor"><rect x="0" y="8" width="3" height="4" rx=".8"/><rect x="5" y="5.5" width="3" height="6.5" rx=".8"/><rect x="10" y="3" width="3" height="9" rx=".8"/><rect x="15" y="0" width="3" height="12" rx=".8"/></svg>`,
    wlan: `<svg viewBox="0 0 16 12" fill="currentColor"><path d="M8 2.2c2.5 0 4.8 1 6.5 2.6l1.2-1.3A11 11 0 0 0 8 .4 11 11 0 0 0 .3 3.5l1.2 1.3A9.4 9.4 0 0 1 8 2.2z"/><path d="M8 5.6c1.6 0 3 .6 4.1 1.6l1.2-1.3A8 8 0 0 0 8 3.8a8 8 0 0 0-5.3 2.1l1.2 1.3C5 6.2 6.4 5.6 8 5.6z"/><path d="M8 9c.7 0 1.3.2 1.8.6L8 11.6 6.2 9.6c.5-.4 1.1-.6 1.8-.6z"/></svg>`,
    akku: `<svg viewBox="0 0 27 13"><rect x=".5" y=".5" width="23" height="12" rx="3.5" fill="none" stroke="currentColor" opacity=".4"/><rect x="2" y="2" width="17" height="9" rx="2" fill="currentColor"/><path d="M25 4.5v4a2 2 0 0 0 0-4z" fill="currentColor" opacity=".4"/></svg>`,
  };
})();

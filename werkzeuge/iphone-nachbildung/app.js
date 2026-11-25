/*
 * iPhone-Nachbildung: kleine Zustandsmaschine mit Seiten-Stapel.
 *
 * URL-Parameter (für Aufnahmen, alle optional):
 *   ios=27|26            iOS-Version (Standard 27)
 *   szene=pfad/zur/seite z. B. "einstellungen/erscheinungsbild/textgroesse"; leer = Home-Bildschirm
 *   markiere=ziel        data-ziel des Elements, das markiert wird (mehrere mit Komma → Nummern 1, 2 …)
 *   nummern=0            keine Nummern-Kreise (bei nur einem Ziel Standard)
 *   stufe=0..6           Textgröße (3 = Standard)
 *   aufnahme=1           Aufnahme-Modus: ohne Gehäuse, mit Streifen unten
 *   quelle=Text          Text im Streifen
 */
(() => {
  const P = new URLSearchParams(location.search);
  const zustand = {
    ios: P.get("ios") === "26" ? 26 : 27,
    stapel: [],
    flugmodus: false,
    fetterText: false,
    automatisch: false,
    modus: "hell",
    stufe: P.has("stufe") ? Math.max(0, Math.min(6, +P.get("stufe"))) : 3,
    helligkeit: 0.62,
  };
  const SCHRIFTSTUFEN = [14, 15, 16, 17, 19, 21, 23];

  const bildschirm = document.getElementById("bildschirm");
  const aufnahme = P.get("aufnahme") === "1";
  if (aufnahme) document.body.classList.add("aufnahme");

  // ---------- Bausteine ----------
  const pfeil = `<svg class="pfeil" viewBox="0 0 9 15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 1.5l6 6-6 6"/></svg>`;
  const zurueckPfeil = `<svg viewBox="0 0 20 20" fill="none" stroke="#000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 3.5L6 10l6.5 6.5"/></svg>`;

  const symbol = (name, farbe) => `<span class="symbol" style="background:${farbe}">${SYMBOL[name]}</span>`;

  /** Zeile in einer Einstellungs-Gruppe */
  function zeile({ ziel, text, sym, farbe, wert, schalter, ziel_seite, ohnePfeil }) {
    const attr = [`data-ziel="${ziel}"`];
    if (ziel_seite) attr.push(`data-oeffne="${ziel_seite}"`);
    if (schalter) attr.push(`data-schalter="${schalter}"`);
    return `<div class="zeile ${sym ? "" : "ohne-symbol"}" ${attr.join(" ")}>
      ${sym ? symbol(sym, farbe) : ""}
      <span class="titel">${text}</span>
      ${wert ? `<span class="wert">${wert}</span>` : ""}
      ${schalter ? `<span class="schalter ${zustand[schalter] ? "an" : ""}"></span>` : ohnePfeil ? "" : pfeil}
    </div>`;
  }
  const gruppe = (zeilen) => `<div class="gruppe">${zeilen.join("")}</div>`;

  function navleiste(titel) {
    return `<div class="navleiste"><div class="zurueck" data-ziel="zurueck" data-zurueck>${zurueckPfeil}</div><h1>${titel}</h1></div>`;
  }

  // ---------- Seiten ----------
  const SEITEN = {
    home() {
      const app = (ziel, name, sym, farbe, extra = "") =>
        `<div class="app" data-ziel="${ziel}" ${extra}><div class="kachel" style="background:${farbe}">${SYMBOL[sym]}</div><span>${name}</span></div>`;
      const kalender = `<div class="app" data-ziel="app-kalender"><div class="kachel kal"><small>MI</small><b>25</b></div><span>${T("appKalender")}</span></div>`;
      return {
        klasse: "home",
        hell: true,
        html: `
          <div class="home-raster">
            ${kalender}
            ${app("app-fotos", T("appFotos"), "bild", "#fff")}
            ${app("app-kamera", T("appKamera"), "kamera", "#8e8e93")}
            ${app("app-mail", T("appMail"), "brief", "#1e8bff")}
            ${app("app-uhr", T("appUhr"), "uhr", "#1c1c1e")}
            ${app("app-wetter", T("appWetter"), "wetter", "#4a90e2")}
            ${app("app-karten", T("appKarten"), "karte", "#5ac46a")}
            ${app("app-notizen", T("appNotizen"), "stift", "#f5c400")}
            ${app("app-erinnerungen", T("appErinnerungen"), "liste", "#ff6b4a")}
            ${app("app-appstore", T("appAppStore"), "laden", "#1a8cff")}
            ${app("einstellungen", T("einstellungen"), "zahnrad", "#8e8e93", 'data-oeffne="einstellungen"')}
          </div>
          <div class="suchpille">${SYMBOL.lupe}${T("suchen")}</div>
          <div class="dock">
            ${app("app-telefon", T("appTelefon"), "telefon", "#34c759")}
            ${app("app-safari", T("appSafari"), "kompass", "#1a8cff")}
            ${app("app-nachrichten", T("appNachrichten"), "sprechblase", "#34c759")}
            ${app("app-musik", T("appMusik"), "note", "#ff375f")}
          </div>`,
      };
    },

    einstellungen() {
      const ios27 = zustand.ios === 27;
      const g2 = [
        zeile({ ziel: "allgemein", text: T("allgemein"), sym: "zahnrad", farbe: "#8e8e93" }),
        zeile({ ziel: "bedienungshilfen", text: T("bedienungshilfen"), sym: "person", farbe: "#0a7cff" }),
        zeile({ ziel: "aktionstaste", text: T("aktionstaste"), sym: "taste", farbe: "#0a7cff" }),
      ];
      if (ios27) g2.push(zeile({ ziel: "erscheinungsbild", text: T("erscheinungsbild"), sym: "schrift", farbe: "#0a7cff", ziel_seite: "erscheinungsbild" }));
      g2.push(
        zeile({ ziel: "kamera", text: T("kamera"), sym: "kamera", farbe: "#8e8e93" }),
        zeile({ ziel: "kontrollzentrum", text: T("kontrollzentrum"), sym: "regler", farbe: "#8e8e93" }),
        zeile({ ziel: "anzeige", text: T("anzeigeHelligkeit"), sym: "sonne", farbe: "#0a7cff", ziel_seite: ios27 ? null : "anzeige" }),
        zeile({ ziel: "homebildschirm", text: T("homeBildschirm"), sym: "raster", farbe: "#5e5ce6" }),
        zeile({ ziel: "suchen", text: T("suchen"), sym: "lupe", farbe: "#8e8e93" }),
        zeile({ ziel: "siri", text: T("siri"), sym: "welle", farbe: "#1c1c1e" }),
        zeile({ ziel: "standby", text: T("standby"), sym: "mond", farbe: "#1c1c1e" }),
        zeile({ ziel: "hintergrundbild", text: T("hintergrundbild"), sym: "blume", farbe: "#32ade6" }),
      );
      return {
        html: `
          <div class="kleintitel navleiste" style="position:sticky;height:96px;padding-top:54px;justify-content:center;opacity:0;transition:opacity .15s" data-kleintitel><h1>${T("einstellungen")}</h1></div>
          <div style="margin-top:-96px"></div>
          <h2 class="grosstitel">${T("einstellungen")}</h2>
          <div class="suchfeld">${SYMBOL.lupe}${T("suchen")}</div>
          <div class="gruppe"><div class="zeile profil" data-ziel="profil">
            <span class="bild">${SYMBOL.person}</span>
            <span class="unscharf"><i style="width:55%"></i><i style="width:85%"></i></span>${pfeil}
          </div></div>
          ${gruppe([
            zeile({ ziel: "flugmodus", text: T("flugmodus"), sym: "flugzeug", farbe: "#ff9500", schalter: "flugmodus" }),
            zeile({ ziel: "wlan", text: T("wlan"), sym: "wlan", farbe: "#0a7cff" }),
            zeile({ ziel: "bluetooth", text: T("bluetooth"), sym: "bluetooth", farbe: "#0a7cff", wert: T("aus") }),
            zeile({ ziel: "mobilfunk", text: T("mobilfunk"), sym: "antenne", farbe: "#34c759" }),
            zeile({ ziel: "hotspot", text: T("hotspot"), sym: "kette", farbe: "#34c759" }),
            zeile({ ziel: "batterie", text: T("batterie"), sym: "batterie", farbe: "#34c759" }),
          ])}
          ${gruppe(g2)}
          ${gruppe([
            zeile({ ziel: "mitteilungen", text: T("mitteilungen"), sym: "glocke", farbe: "#ff3b30" }),
            zeile({ ziel: "toene", text: T("toene"), sym: "lautsprecher", farbe: "#ff2d55" }),
            zeile({ ziel: "fokus", text: T("fokus"), sym: "mond", farbe: "#5e5ce6" }),
            zeile({ ziel: "bildschirmzeit", text: T("bildschirmzeit"), sym: "sanduhr", farbe: "#5e5ce6" }),
          ])}
          ${gruppe([
            zeile({ ziel: "faceid", text: T("faceId"), sym: "gesicht", farbe: "#34c759" }),
            zeile({ ziel: "notruf", text: T("notruf"), sym: "sos", farbe: "#ff3b30" }),
            zeile({ ziel: "datenschutz", text: T("datenschutz"), sym: "hand", farbe: "#0a7cff" }),
          ])}
          ${gruppe([
            zeile({ ziel: "gamecenter", text: T("gameCenter"), sym: "kreise", farbe: "#ff2d55" }),
            zeile({ ziel: "icloud", text: T("icloud"), sym: "wolke", farbe: "#0a7cff" }),
            zeile({ ziel: "wallet", text: T("wallet"), sym: "karten", farbe: "#1c1c1e" }),
          ])}
          ${gruppe([zeile({ ziel: "apps", text: T("apps"), sym: "stapel", farbe: "#5e5ce6" })])}
          <div style="height:40px"></div>`,
        nachDemEinfuegen(seite) {
          const klein = seite.querySelector("[data-kleintitel]");
          seite.addEventListener("scroll", () => { klein.style.opacity = seite.scrollTop > 60 ? 1 : 0; });
        },
      };
    },

    /** iOS 27: „Erscheinungsbild“ (Quelle A). iOS 26: dieselben Punkte liegen unter „Anzeige & Helligkeit“ (Quelle B). */
    erscheinungsbild() { return darstellungsSeite(T("erscheinungsbild"), false); },
    anzeige() { return darstellungsSeite(T("anzeigeHelligkeit"), true); },

    textgroesse() {
      const ticks = SCHRIFTSTUFEN.map((_, i) => `<span class="strich" style="left:${(i / 6) * 100}%"></span>`).join("");
      return {
        html: `
          ${navleiste(T("textgroesse"))}
          <div class="textgroesse-beispiel" data-ziel="beispieltext" style="font-size:${SCHRIFTSTUFEN[zustand.stufe]}px;font-weight:${zustand.fetterText ? 600 : 400}">${T("textgroesseErklaerung")}</div>
          <div class="textgroesse-unten">
            <div class="gruppe" style="margin:0 16px">
              <div class="regler-zeile" data-ziel="regler-textgroesse">
                <span class="klein-a">A</span>
                <div class="regler stufen" data-regler="stufe">${ticks}<span class="knopf" style="left:${(zustand.stufe / 6) * 100}%"></span></div>
                <span class="gross-a">A</span>
              </div>
            </div>
          </div>`,
        nachDemEinfuegen(seite) {
          const r = seite.querySelector('[data-regler="stufe"]');
          ziehen(r, (anteil) => {
            const neu = Math.round(anteil * 6);
            if (neu === zustand.stufe) return;
            zustand.stufe = neu;
            r.querySelector(".knopf").style.left = (neu / 6) * 100 + "%";
            seite.querySelector(".textgroesse-beispiel").style.fontSize = SCHRIFTSTUFEN[neu] + "px";
          });
        },
      };
    },
  };

  function darstellungsSeite(titel, mitHelligkeit) {
    const modus = (wert, klasse) => `<div class="modus ${klasse}" data-ziel="modus-${wert}" data-modus="${wert}"><div class="vorschau"></div><span>${T(wert)}</span><span class="kreis ${zustand.modus === wert ? "an" : ""}"></span></div>`;
    return {
      html: `
        ${navleiste(titel)}
        <div class="gruppe">
          <div class="modi">${modus("hell", "hellm")}${modus("dunkel", "dunkelm")}</div>
          ${zeile({ ziel: "automatisch", text: T("automatisch"), schalter: "automatisch" })}
        </div>
        ${mitHelligkeit ? `<p class="kopf">${T("helligkeit")}</p><div class="gruppe"><div class="regler-zeile" data-ziel="regler-helligkeit">
            <svg class="klein" viewBox="0 0 24 24">${SYMBOL.sonne.replace(/<\/?svg[^>]*>/g, "")}</svg>
            <div class="regler" data-regler="helligkeit"><span class="fuellung" style="width:${zustand.helligkeit * 100}%"></span><span class="knopf" style="left:${zustand.helligkeit * 100}%"></span></div>
            <svg class="gross" viewBox="0 0 24 24">${SYMBOL.sonne.replace(/<\/?svg[^>]*>/g, "")}</svg></div></div>` : ""}
        ${gruppe([
          zeile({ ziel: "textgroesse", text: T("textgroesse"), ziel_seite: "textgroesse" }),
          zeile({ ziel: "fettertext", text: T("fetterText"), schalter: "fetterText" }),
        ])}
        ${gruppe([zeile({ ziel: "liquidglass", text: T("liquidGlass") })])}
        ${gruppe([zeile({ ziel: "anzeigezoom", text: T("anzeigezoom"), wert: T("standard") })])}`,
      nachDemEinfuegen(seite) {
        seite.querySelectorAll("[data-modus]").forEach((el) =>
          el.addEventListener("click", () => {
            zustand.modus = el.dataset.modus;
            seite.querySelectorAll(".kreis").forEach((k) => k.classList.toggle("an", k.parentElement === el));
          }),
        );
        const r = seite.querySelector('[data-regler="helligkeit"]');
        if (r) ziehen(r, (a) => {
          zustand.helligkeit = a;
          r.querySelector(".fuellung").style.width = a * 100 + "%";
          r.querySelector(".knopf").style.left = a * 100 + "%";
        });
      },
    };
  }

  /** Schieberegler mit Maus/Finger bedienen */
  function ziehen(el, beiAenderung) {
    const anteil = (e) => {
      const r = el.getBoundingClientRect();
      return Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
    };
    el.addEventListener("pointerdown", (e) => {
      el.setPointerCapture(e.pointerId);
      beiAenderung(anteil(e));
      const bewegen = (ev) => beiAenderung(anteil(ev));
      el.addEventListener("pointermove", bewegen);
      el.addEventListener("pointerup", () => el.removeEventListener("pointermove", bewegen), { once: true });
      e.stopPropagation();
    });
  }

  // ---------- Darstellung & Navigation ----------
  function statusleiste(hell) {
    return `<div class="insel"></div>
      <div class="status ${hell ? "hell" : ""}"><span>10:24</span><span class="rechts">${STATUS.netz}${STATUS.wlan}${STATUS.akku}</span></div>
      <div class="home-strich ${hell ? "hell" : ""}" data-home></div>`;
  }

  function baueSeite(name) {
    const def = SEITEN[name]();
    const el = document.createElement("div");
    el.className = "seite " + (def.klasse || "");
    el.dataset.seite = name;
    el.innerHTML = def.html;
    el._hell = !!def.hell;
    bildschirm.appendChild(el);
    def.nachDemEinfuegen?.(el);
    // Inter läuft etwas breiter als die iPhone-Systemschrift: zu lange Zeilen leicht enger setzen,
    // damit sie wie auf dem echten Gerät in eine Zeile passen.
    el.querySelectorAll(".zeile .titel").forEach((t) => {
      for (let ls = -0.03; t.scrollWidth > t.clientWidth && ls > -0.08; ls -= 0.01) t.style.letterSpacing = ls + "em";
    });
    return el;
  }

  function chromAktualisieren() {
    bildschirm.querySelectorAll(".insel,.status,.home-strich").forEach((e) => e.remove());
    const oben = zustand.stapel[zustand.stapel.length - 1];
    bildschirm.insertAdjacentHTML("beforeend", statusleiste(oben?._hell));
  }

  function oeffne(name, animiert = true) {
    const alt = zustand.stapel[zustand.stapel.length - 1];
    const neu = baueSeite(name);
    zustand.stapel.push(neu);
    if (animiert && alt) {
      if (alt.dataset.seite === "home") {
        neu.classList.add("app-oeffnen");
      } else {
        neu.classList.add("rein");
        requestAnimationFrame(() => requestAnimationFrame(() => { neu.classList.remove("rein"); alt.classList.add("hinten"); }));
      }
    } else if (alt) alt.classList.add("hinten");
    chromAktualisieren();
  }

  function zurueck() {
    if (zustand.stapel.length < 2) return;
    const oben = zustand.stapel.pop();
    const darunter = zustand.stapel[zustand.stapel.length - 1];
    darunter.classList.remove("hinten");
    oben.classList.add("rein");
    setTimeout(() => oben.remove(), 400);
    chromAktualisieren();
  }

  function zumHome() {
    while (zustand.stapel.length > 1) zustand.stapel.pop().remove();
    zustand.stapel[0].classList.remove("hinten");
    chromAktualisieren();
  }

  bildschirm.addEventListener("click", (e) => {
    if (e.target.closest("[data-home]")) return zumHome();
    if (e.target.closest("[data-zurueck]")) return zurueck();
    const sch = e.target.closest("[data-schalter]");
    if (sch) {
      const k = sch.dataset.schalter;
      zustand[k] = !zustand[k];
      sch.querySelector(".schalter").classList.toggle("an", zustand[k]);
      return;
    }
    const z = e.target.closest("[data-oeffne]");
    if (z) oeffne(z.dataset.oeffne);
  });
  // Wischen vom unteren Rand nach oben = Home
  let startY = null;
  bildschirm.addEventListener("pointerdown", (e) => { const r = bildschirm.getBoundingClientRect(); startY = e.clientY - r.top > r.height - 40 ? e.clientY : null; });
  bildschirm.addEventListener("pointerup", (e) => { if (startY !== null && startY - e.clientY > 60) zumHome(); startY = null; });

  // ---------- Start ----------
  const wahl = document.getElementById("wahl-ios");
  wahl.value = String(zustand.ios);
  wahl.addEventListener("change", () => { P.set("ios", wahl.value); location.search = P.toString(); });

  oeffne("home", false);
  const szene = (P.get("szene") || "").split("/").filter(Boolean);
  szene.forEach((s) => oeffne(s, false));

  // ---------- Markierung für Aufnahmen ----------
  function markiere() {
    const ziele = (P.get("markiere") || "").split(",").filter(Boolean);
    if (!ziele.length) return;
    const oben = zustand.stapel[zustand.stapel.length - 1];
    const mitNummern = P.has("nummern") ? P.get("nummern") !== "0" : ziele.length > 1;
    // Ziel in den sichtbaren Bereich scrollen (wie ein Nutzer, der etwas nach oben wischt)
    const erstes = oben.querySelector(`[data-ziel="${ziele[0]}"]`);
    if (erstes && oben !== zustand.stapel[0]) {
      const rb = bildschirm.getBoundingClientRect();
      const re = erstes.getBoundingClientRect();
      if (re.bottom - rb.top > rb.height * 0.72) oben.scrollTop += re.top - rb.top - rb.height * 0.5;
      oben.dispatchEvent(new Event("scroll"));
    }
    const rb = bildschirm.getBoundingClientRect();
    ziele.forEach((z, i) => {
      const el = oben.querySelector(`[data-ziel="${z}"]`);
      if (!el) throw new Error("Ziel nicht gefunden: " + z);
      const r = el.getBoundingClientRect();
      const pad = 5;
      const m = document.createElement("div");
      m.className = "markierung";
      Object.assign(m.style, {
        left: r.left - rb.left - pad + "px", top: r.top - rb.top - pad + "px",
        width: r.width + 2 * pad + "px", height: r.height + 2 * pad + "px",
      });
      // Abgerundete Ecken an die Form anpassen
      const radius = parseFloat(getComputedStyle(el.querySelector(".kachel") || el).borderRadius) || 0;
      m.style.borderRadius = Math.max(14, radius + pad) + "px";
      bildschirm.appendChild(m);
      if (mitNummern) {
        const n = document.createElement("div");
        n.className = "nummer";
        n.textContent = i + 1;
        Object.assign(n.style, { left: Math.max(4, r.left - rb.left - pad - 18) + "px", top: Math.max(4, r.top - rb.top - pad - 18) + "px" });
        bildschirm.appendChild(n);
      }
    });
  }

  if (aufnahme) {
    const streifen = document.getElementById("streifen");
    streifen.hidden = false;
    document.getElementById("streifen-text").textContent = P.get("quelle") || "";
  }
  document.fonts.ready.then(() => {
    markiere();
    document.body.dataset.fertig = "1";
  });
})();

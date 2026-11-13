import type { Guide } from "../types";

export const grundlagen: Guide[] = [
  {
    slug: "app-installieren",
    title: "Eine App auf dem Handy installieren",
    summary: "So laden Sie eine neue App sicher auf Ihr Handy – zum Beispiel WhatsApp oder die App Ihrer Bank.",
    category: "grundlagen",
    devices: ["android", "iphone"],
    difficulty: "leicht",
    minutes: 5,
    access: "free",
    checked: "2026-11",
    keywords: ["App Store", "Play Store", "herunterladen", "runterladen", "installieren"],
    needs: [
      "Ihr Handy mit Internet (am besten WLAN zu Hause)",
      "Android: Ihr Google-Konto · iPhone: Ihre Apple-ID (sind meist schon eingerichtet)",
    ],
    variants: [
      {
        device: "android",
        steps: [
          {
            title: "Play Store öffnen",
            text: "Suchen Sie auf dem Startbildschirm das bunte Dreieck mit dem Namen „Play Store“. Tippen Sie einmal kurz darauf.",
            tip: "Sie finden das Symbol nicht? Wischen Sie auf dem Startbildschirm von unten nach oben. Dann sehen Sie alle Apps.",
          },
          {
            title: "Nach der App suchen",
            text: "Tippen Sie unten auf „Suchen“ und dann oben in das Suchfeld. Es erscheint eine Tastatur. Tippen Sie den Namen der App ein, zum Beispiel „WhatsApp“. Tippen Sie dann auf der Tastatur auf die Lupe.",
          },
          {
            title: "Die richtige App erkennen",
            text: "Sie sehen eine Liste. Tippen Sie auf die App mit dem richtigen Namen und Symbol.",
            warning:
              "Achten Sie auf den Anbieter unter dem Namen – bei WhatsApp steht dort „WhatsApp LLC“. Nachahmer-Apps haben oft sehr ähnliche Namen. Ganz oben steht manchmal Werbung (mit „Gesponsert“ markiert).",
          },
          {
            title: "Auf „Installieren“ tippen",
            text: "Tippen Sie auf den grünen Knopf „Installieren“. Die App wird jetzt geladen. Das dauert meist nur ein bis zwei Minuten.",
            tip: "Fragt das Handy nach einem Passwort, ist das Passwort Ihres Google-Kontos gemeint.",
          },
          {
            title: "App öffnen",
            text: "Wenn der Knopf „Öffnen“ erscheint, ist die App fertig. Tippen Sie darauf. Ab jetzt finden Sie die App auch bei Ihren anderen Apps.",
          },
        ],
      },
      {
        device: "iphone",
        steps: [
          {
            title: "App Store öffnen",
            text: "Tippen Sie auf das blaue Symbol mit dem weißen „A“. Es heißt „App Store“.",
            tip: "Sie finden es nicht? Wischen Sie auf dem Startbildschirm in der Mitte nach unten. Oben erscheint ein Suchfeld – tippen Sie dort „App Store“ ein.",
          },
          {
            title: "Nach der App suchen",
            text: "Tippen Sie unten rechts auf die Lupe „Suchen“. Tippen Sie oben in das Suchfeld und geben Sie den Namen der App ein, zum Beispiel „WhatsApp“. Tippen Sie dann auf der Tastatur auf „Suchen“.",
          },
          {
            title: "Die richtige App erkennen",
            text: "Tippen Sie in der Liste auf die App mit dem richtigen Namen und Symbol.",
            warning:
              "Prüfen Sie den Anbieter unter dem Namen – bei WhatsApp „WhatsApp Inc.“. Ganz oben steht oft Werbung, die mit „Anzeige“ markiert ist.",
          },
          {
            title: "Auf „Laden“ tippen",
            text: "Tippen Sie auf den blauen Knopf „Laden“. Bei Apps, die Sie früher schon einmal hatten, sehen Sie stattdessen eine Wolke mit Pfeil.",
          },
          {
            title: "Bestätigen",
            text: "Das iPhone möchte wissen, dass wirklich Sie es sind. Je nach Gerät: Drücken Sie zweimal schnell die Seitentaste und schauen Sie auf den Bildschirm (Face ID), legen Sie den Finger auf die Home-Taste (Touch ID) oder geben Sie das Passwort Ihrer Apple-ID ein.",
          },
          {
            title: "App öffnen",
            text: "Wenn der Knopf „Öffnen“ erscheint, ist die App fertig. Tippen Sie darauf. Die App liegt ab jetzt auch auf Ihrem Startbildschirm.",
          },
        ],
      },
    ],
    takeaways: [
      "Apps nur aus dem Play Store bzw. App Store laden.",
      "Name und Anbieter der App prüfen.",
      "Kostenlose Apps kosten nichts – fragt eine App nach Geld, steht das deutlich dabei.",
    ],
  },
  {
    slug: "schrift-vergroessern",
    title: "Die Schrift auf dem Handy vergrößern",
    summary: "Damit Sie alles bequem lesen können: So stellen Sie eine größere Schrift ein.",
    category: "grundlagen",
    devices: ["android", "iphone"],
    difficulty: "leicht",
    minutes: 3,
    access: "free",
    checked: "2026-11",
    keywords: ["Textgröße", "größer", "lesen", "Brille", "Sehen"],
    needs: ["Ihr Handy"],
    variants: [
      {
        device: "android",
        steps: [
          {
            title: "Einstellungen öffnen",
            text: "Tippen Sie auf das Zahnrad-Symbol „Einstellungen“.",
          },
          {
            title: "„Anzeige“ wählen",
            text: "Tippen Sie auf „Anzeige“. Bei manchen Handys heißt es „Display“ oder „Anzeige und Helligkeit“.",
            tip: "Oben in den Einstellungen gibt es eine Lupe. Tippen Sie dort „Schrift“ ein – so kommen Sie direkt hin.",
          },
          {
            title: "Schriftgröße öffnen",
            text: "Tippen Sie auf „Schriftgröße und -stil“ (Samsung) oder „Schriftgröße“ bzw. „Anzeigegröße und Text“ (andere Handys).",
          },
          {
            title: "Schieberegler bewegen",
            text: "Legen Sie den Finger auf den Punkt des Schiebereglers und schieben Sie ihn nach rechts. Oben sehen Sie, wie groß die Schrift wird.",
            tip: "Gleich darunter gibt es oft auch „Anzeigegröße“ oder „Bildschirmzoom“. Damit werden auch Knöpfe und Symbole größer.",
          },
          {
            title: "Fertig",
            text: "Gehen Sie mit der Zurück-Taste oder einer Wischbewegung zum Startbildschirm. Die neue Größe gilt jetzt in den meisten Apps.",
          },
        ],
      },
      {
        device: "iphone",
        steps: [
          {
            title: "Einstellungen öffnen",
            text: "Tippen Sie auf das graue Zahnrad-Symbol „Einstellungen“.",
          },
          {
            title: "„Anzeige & Helligkeit“ wählen",
            text: "Wischen Sie etwas nach oben und tippen Sie auf „Anzeige & Helligkeit“.",
          },
          {
            title: "„Textgröße“ öffnen",
            text: "Tippen Sie auf „Textgröße“.",
          },
          {
            title: "Schieberegler bewegen",
            text: "Legen Sie den Finger auf den Punkt unten und schieben Sie ihn nach rechts. Die Beispielschrift wird größer.",
            tip: "Noch größer geht es unter „Einstellungen“ → „Bedienungshilfen“ → „Anzeige & Textgröße“ → „Größerer Text“.",
          },
          {
            title: "Fertig",
            text: "Wischen Sie vom unteren Rand nach oben (oder drücken Sie die Home-Taste). Die neue Größe gilt jetzt in den meisten Apps.",
          },
        ],
      },
    ],
  },
  {
    slug: "whatsapp-einrichten",
    title: "WhatsApp einrichten und die erste Nachricht schreiben",
    summary: "Kostenlos Nachrichten an Familie und Freunde schicken – so starten Sie mit WhatsApp.",
    category: "grundlagen",
    devices: ["android", "iphone"],
    difficulty: "leicht",
    minutes: 15,
    access: "premium",
    priceCents: 299,
    checked: "2026-11",
    keywords: ["Nachricht", "Chat", "Messenger", "schreiben"],
    needs: [
      "Ihr Handy mit Internet",
      "Ihre Handynummer – Sie bekommen gleich eine SMS",
      "Die App „WhatsApp“ (siehe Anleitung „Eine App installieren“)",
    ],
    steps: [
      {
        title: "WhatsApp öffnen",
        text: "Tippen Sie auf das grüne Symbol mit der weißen Sprechblase und dem Telefonhörer.",
      },
      {
        title: "Bedingungen bestätigen",
        text: "Tippen Sie auf „Zustimmen und fortfahren“. Fragt WhatsApp nach der Sprache, wählen Sie „Deutsch“.",
      },
      {
        title: "Handynummer eingeben",
        text: "Prüfen Sie, dass oben „Deutschland“ ausgewählt ist. Tippen Sie Ihre Handynummer ohne die erste Null ein – also zum Beispiel 170 1234567. Tippen Sie auf „Weiter“ und bestätigen Sie mit „Ja“.",
      },
      {
        title: "Code aus der SMS eingeben",
        text: "Sie bekommen eine SMS mit einem 6-stelligen Code. Oft trägt WhatsApp ihn von selbst ein. Sonst öffnen Sie die SMS, merken sich die Zahlen und tippen sie in WhatsApp ein.",
        warning:
          "Diesen Code nie an andere weitergeben – auch nicht an „Freunde“, die per Nachricht danach fragen. Mit dem Code können Fremde Ihr WhatsApp übernehmen.",
      },
      {
        title: "Kontakte erlauben",
        text: "WhatsApp fragt, ob es Ihre Kontakte sehen darf. Tippen Sie auf „Erlauben“ bzw. „OK“. Nur so sehen Sie, wer von Ihren Bekannten WhatsApp hat.",
      },
      {
        title: "Namen eingeben",
        text: "Tippen Sie Ihren Namen ein, so wie andere Sie sehen sollen, zum Beispiel „Oma Inge“. Tippen Sie auf „Weiter“. Ein Foto können Sie später hinzufügen.",
      },
      {
        title: "Neuen Chat beginnen",
        text: "Tippen Sie auf das Symbol mit dem Plus oder der Sprechblase (Android: grüner Knopf unten rechts, iPhone: oben rechts). Es erscheint die Liste Ihrer Kontakte. Tippen Sie auf die Person, der Sie schreiben möchten.",
      },
      {
        title: "Nachricht schreiben und senden",
        text: "Tippen Sie unten in das Feld „Nachricht“. Schreiben Sie Ihren Text, zum Beispiel „Hallo, ich bin jetzt auch bei WhatsApp!“. Tippen Sie dann auf den grünen Pfeil rechts daneben.",
        tip: "Ein grauer Haken heißt: gesendet. Zwei graue Haken: angekommen. Zwei blaue Haken: gelesen.",
      },
    ],
    takeaways: [
      "Den SMS-Code von WhatsApp niemals weitergeben.",
      "Zwei blaue Haken bedeuten: Ihre Nachricht wurde gelesen.",
    ],
  },
  {
    slug: "whatsapp-foto-senden",
    title: "Ein Foto mit WhatsApp verschicken",
    summary: "Enkel, Garten oder Urlaub: So teilen Sie Ihre Fotos mit der Familie.",
    category: "grundlagen",
    devices: ["android", "iphone"],
    difficulty: "leicht",
    minutes: 5,
    access: "premium",
    priceCents: 199,
    checked: "2026-11",
    keywords: ["Bild", "Foto", "teilen", "schicken"],
    needs: ["WhatsApp ist eingerichtet", "Ein Foto auf Ihrem Handy"],
    steps: [
      {
        title: "Chat öffnen",
        text: "Öffnen Sie WhatsApp und tippen Sie auf die Person oder Gruppe, der Sie das Foto schicken möchten.",
      },
      {
        title: "Anhang-Knopf antippen",
        text: "Unten neben dem Schreibfeld sehen Sie ein Symbol. Android: eine Büroklammer. iPhone: ein Plus-Zeichen (+) links. Tippen Sie darauf.",
      },
      {
        title: "„Galerie“ oder „Fotos“ wählen",
        text: "Tippen Sie auf „Galerie“ (Android) bzw. „Fotos“ (iPhone). Sie sehen jetzt Ihre Bilder.",
        tip: "Beim ersten Mal fragt das Handy, ob WhatsApp Ihre Fotos sehen darf. Tippen Sie auf „Erlauben“ bzw. „Vollen Zugriff erlauben“.",
      },
      {
        title: "Foto auswählen",
        text: "Tippen Sie auf das Foto. Es wird groß angezeigt. Möchten Sie mehrere Fotos senden, tippen Sie einfach weitere an.",
      },
      {
        title: "Absenden",
        text: "Unten können Sie noch einen Text dazuschreiben. Tippen Sie dann auf den grünen Pfeil. Fertig – das Foto ist unterwegs.",
      },
    ],
  },
  {
    slug: "whatsapp-videoanruf",
    title: "Mit WhatsApp per Video telefonieren",
    summary: "Die Familie sehen, nicht nur hören: So starten und beantworten Sie einen Videoanruf.",
    category: "grundlagen",
    devices: ["android", "iphone"],
    difficulty: "leicht",
    minutes: 5,
    access: "free",
    checked: "2026-11",
    keywords: ["Video", "Videotelefonie", "Anruf", "Bildtelefon", "sehen"],
    needs: ["WhatsApp ist eingerichtet", "Am besten WLAN – Videoanrufe brauchen viel Datenvolumen"],
    steps: [
      {
        title: "Chat öffnen",
        text: "Öffnen Sie WhatsApp und tippen Sie auf die Person, die Sie anrufen möchten.",
      },
      {
        title: "Kamera-Symbol antippen",
        text: "Oben rechts sehen Sie zwei Symbole: einen Telefonhörer (nur Ton) und eine Videokamera. Tippen Sie auf die Videokamera.",
      },
      {
        title: "Anruf bestätigen",
        text: "Fragt WhatsApp nach, tippen Sie auf „Anrufen“. Beim ersten Mal müssen Sie Kamera und Mikrofon erlauben – tippen Sie auf „Erlauben“.",
      },
      {
        title: "Handy richtig halten",
        text: "Halten Sie das Handy etwa eine Armlänge vor Ihr Gesicht. Unten sehen Sie sich selbst in einem kleinen Fenster, groß die andere Person.",
        tip: "Gutes Licht von vorne – zum Beispiel ein Fenster vor Ihnen – macht Ihr Bild viel heller.",
      },
      {
        title: "Auflegen",
        text: "Tippen Sie auf den roten Knopf mit dem Telefonhörer. Sehen Sie keine Knöpfe? Tippen Sie einmal kurz auf den Bildschirm.",
      },
      {
        title: "Einen Anruf annehmen",
        text: "Ruft Sie jemand per Video an, klingelt das Handy. Tippen Sie auf den grünen Knopf oder wischen Sie ihn nach oben.",
      },
    ],
    takeaways: ["Videokamera-Symbol = Videoanruf, Hörer-Symbol = nur Ton.", "Roter Knopf = auflegen."],
  },
];

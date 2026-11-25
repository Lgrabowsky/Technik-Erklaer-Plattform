import type { Guide } from "../../content/types";

export const grundlagen: Guide[] = [
  {
    slug: "app-installieren",
    title: "Eine App auf dem Handy installieren",
    summary: "So laden Sie eine neue App sicher auf Ihr Handy – zum Beispiel WhatsApp oder die App Ihrer Bank.",
    category: "grundlagen",
    app: "Play Store (Android) bzw. App Store (iPhone)",
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
    app: "WhatsApp",
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
    app: "WhatsApp",
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
    app: "WhatsApp",
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

  {
    slug: "wlan-verbinden",
    title: "Das Handy mit dem WLAN zu Hause verbinden",
    summary: "Mit WLAN surfen Sie schneller und sparen Datenvolumen. So verbinden Sie Ihr Handy mit Ihrem Router.",
    category: "grundlagen",
    devices: ["android", "iphone"],
    difficulty: "leicht",
    minutes: 5,
    access: "free",
    checked: "2026-11",
    keywords: ["WLAN", "WiFi", "Wi-Fi", "Internet", "Router", "FritzBox", "Passwort", "Netzwerk"],
    needs: [
      "Ihr Handy",
      "Name und Passwort Ihres WLANs – stehen meist auf der Rückseite oder Unterseite des Routers (bei der FRITZ!Box: „WLAN-Netzwerkschlüssel“)",
    ],
    variants: [
      {
        device: "android",
        unverified: true,
        steps: [
          {
            title: "Einstellungen öffnen",
            text: "Tippen Sie auf das Zahnrad-Symbol „Einstellungen“.",
          },
          {
            title: "WLAN-Bereich öffnen",
            text: "Samsung: Tippen Sie auf „Verbindungen“ und dann auf „WLAN“. Andere Handys (z. B. Google Pixel): Tippen Sie auf „Netzwerk & Internet“ und dann auf „Internet“.",
            tip: "Oben in den Einstellungen gibt es eine Lupe. Tippen Sie dort „WLAN“ ein – so kommen Sie direkt hin.",
          },
          {
            title: "WLAN einschalten",
            text: "Ganz oben ist ein Schalter. Ist er grau, tippen Sie darauf. Er wird farbig – WLAN ist jetzt an.",
          },
          {
            title: "Ihr WLAN auswählen",
            text: "Nach ein paar Sekunden erscheint eine Liste mit WLAN-Namen. Tippen Sie auf den Namen Ihres WLANs – den finden Sie auf dem Router.",
            tip: "Sie sehen viele fremde Namen? Das sind die WLANs Ihrer Nachbarn. Nehmen Sie nur den Namen, der auf Ihrem Router steht.",
          },
          {
            title: "Passwort eingeben",
            text: "Tippen Sie das Passwort vom Router ein. Achten Sie genau auf jede Ziffer. Tippen Sie dann auf „Verbinden“.",
            tip: "Tippen Sie auf das Augen-Symbol neben dem Feld. Dann sehen Sie, was Sie eingetippt haben.",
          },
          {
            title: "Prüfen, ob es geklappt hat",
            text: "Unter dem Namen steht jetzt „Verbunden“. Oben am Bildschirmrand sehen Sie ein Fächer-Symbol. Ab jetzt verbindet sich das Handy zu Hause von selbst.",
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
            title: "„WLAN“ antippen",
            text: "Tippen Sie oben in der Liste auf „WLAN“.",
          },
          {
            title: "WLAN einschalten",
            text: "Ist der Schalter neben „WLAN“ grau, tippen Sie darauf. Er wird grün.",
          },
          {
            title: "Ihr WLAN auswählen",
            text: "Unter „Netzwerke“ erscheinen WLAN-Namen. Tippen Sie auf den Namen, der auf Ihrem Router steht.",
            tip: "Fremde Namen gehören zu den Nachbarn. Wählen Sie nur Ihr eigenes WLAN.",
          },
          {
            title: "Passwort eingeben",
            text: "Tippen Sie das Passwort vom Router ein. Tippen Sie dann oben rechts auf „Verbinden“.",
          },
          {
            title: "Prüfen, ob es geklappt hat",
            text: "Neben Ihrem WLAN-Namen steht jetzt ein blauer Haken. Oben am Bildschirmrand sehen Sie ein Fächer-Symbol. Ab jetzt verbindet sich das iPhone zu Hause von selbst.",
          },
        ],
      },
    ],
    takeaways: ["WLAN-Name und Passwort stehen auf dem Router.", "Einmal verbunden, klappt es zu Hause automatisch."],
    reviewNote: "Android: Menüweg bei Samsung („Verbindungen“ → „WLAN“) und Pixel („Netzwerk & Internet“ → „Internet“) auf aktuellem Gerät prüfen.",
  },
  {
    slug: "taschenlampe-einschalten",
    title: "Die Taschenlampe am Handy einschalten",
    summary: "Schlüsselloch, dunkler Flur, Speisekarte im Restaurant: So machen Sie mit dem Handy schnell Licht.",
    category: "grundlagen",
    devices: ["android", "iphone"],
    difficulty: "leicht",
    minutes: 2,
    access: "free",
    checked: "2026-11",
    keywords: ["Taschenlampe", "Licht", "Lampe", "dunkel", "Kontrollzentrum", "Schnelleinstellungen"],
    needs: ["Ihr Handy"],
    variants: [
      {
        device: "android",
        steps: [
          {
            title: "Vom oberen Rand nach unten wischen",
            text: "Legen Sie den Finger ganz oben an den Bildschirmrand und ziehen Sie ihn nach unten. Es erscheinen runde oder eckige Knöpfe – die „Schnelleinstellungen“.",
            tip: "Sie sehen nur Benachrichtigungen? Wischen Sie ein zweites Mal nach unten.",
          },
          {
            title: "„Taschenlampe“ antippen",
            text: "Tippen Sie auf den Knopf mit der kleinen Lampe. Darunter steht „Taschenlampe“. Die Lampe auf der Rückseite des Handys leuchtet jetzt.",
          },
          {
            title: "Wieder ausschalten",
            text: "Wischen Sie wieder von oben nach unten und tippen Sie noch einmal auf „Taschenlampe“.",
          },
        ],
      },
      {
        device: "iphone",
        steps: [
          {
            title: "Kontrollzentrum öffnen",
            text: "iPhone ohne Home-Taste: Wischen Sie von der rechten oberen Ecke nach unten. iPhone mit Home-Taste (runder Knopf unten): Wischen Sie vom unteren Rand nach oben.",
          },
          {
            title: "Lampen-Symbol antippen",
            text: "Tippen Sie auf den runden Knopf mit der Taschenlampe. Die Lampe auf der Rückseite leuchtet.",
            tip: "Auch auf dem Sperrbildschirm sehen Sie unten links eine kleine Lampe. Halten Sie den Finger kurz darauf – dann geht das Licht an.",
          },
          {
            title: "Wieder ausschalten",
            text: "Tippen Sie noch einmal auf das Lampen-Symbol.",
          },
        ],
      },
    ],
  },
  {
    slug: "kontakt-speichern",
    title: "Eine Telefonnummer als Kontakt speichern",
    summary: "Nie wieder Nummern suchen: So speichern Sie eine Person mit Namen im Handy – dann sehen Sie auch, wer anruft.",
    category: "grundlagen",
    app: "Kontakte (Android) bzw. Telefon (iPhone)",
    devices: ["android", "iphone"],
    difficulty: "leicht",
    minutes: 5,
    access: "free",
    checked: "2026-11",
    unverified: true,
    keywords: ["Kontakt", "Telefonbuch", "Adressbuch", "Nummer speichern", "Telefonnummer"],
    needs: ["Ihr Handy", "Name und Telefonnummer der Person"],
    variants: [
      {
        device: "android",
        unverified: true,
        steps: [
          {
            title: "App „Kontakte“ öffnen",
            text: "Tippen Sie auf das Symbol „Kontakte“. Es zeigt meist eine Person auf farbigem Hintergrund.",
          },
          {
            title: "Neuen Kontakt anlegen",
            text: "Tippen Sie auf das Plus-Zeichen (+). Bei Samsung ist es oben rechts, bei anderen Handys ein Knopf unten rechts („Kontakt erstellen“).",
            tip: "Fragt das Handy, wo der Kontakt gespeichert werden soll, wählen Sie Ihr Google- bzw. Samsung-Konto. Dann geht er bei einem neuen Handy nicht verloren.",
          },
          {
            title: "Namen eingeben",
            text: "Tippen Sie in das Feld „Vorname“ und schreiben Sie den Namen. Darunter tragen Sie den „Nachnamen“ ein.",
          },
          {
            title: "Telefonnummer eingeben",
            text: "Tippen Sie in das Feld „Telefon“ und tippen Sie die Nummer ein. Für Handynummern können Sie sie ganz normal mit 0 am Anfang eingeben, zum Beispiel 0170 1234567.",
          },
          {
            title: "Speichern",
            text: "Tippen Sie auf „Speichern“ (unten oder oben rechts). Fertig – der Name erscheint jetzt, wenn diese Person anruft.",
          },
        ],
      },
      {
        device: "iphone",
        steps: [
          {
            title: "App „Telefon“ öffnen",
            text: "Tippen Sie auf das grüne Symbol mit dem weißen Telefonhörer.",
          },
          {
            title: "„Kontakte“ öffnen",
            text: "Tippen Sie unten auf „Kontakte“.",
          },
          {
            title: "Plus-Zeichen antippen",
            text: "Tippen Sie oben rechts auf das Plus-Zeichen (+). Es öffnet sich ein leerer Kontakt.",
          },
          {
            title: "Namen eingeben",
            text: "Tippen Sie auf „Vorname“ und schreiben Sie den Namen. Darunter tragen Sie den „Nachnamen“ ein.",
          },
          {
            title: "Telefonnummer eingeben",
            text: "Wischen Sie etwas nach oben und tippen Sie auf „Telefon hinzufügen“ (grünes Plus). Tippen Sie die Nummer ein.",
          },
          {
            title: "Fertig",
            text: "Tippen Sie oben rechts auf „Fertig“. Der Name erscheint jetzt, wenn diese Person anruft.",
          },
        ],
      },
    ],
    takeaways: ["Gespeicherte Kontakte zeigen beim Anruf den Namen.", "Kontakte im Konto speichern – dann sind sie auch auf einem neuen Handy da."],
    reviewNote: "Android: Lage des Plus-Knopfs in Samsung „Kontakte“ und Google „Kontakte“ prüfen. iPhone: Seit iOS 26 hat die Telefon-App ein neues Layout – prüfen, ob „Kontakte“ unten noch so heißt.",
  },
  {
    slug: "foto-machen",
    title: "Ein Foto mit dem Handy machen",
    summary: "Enkel, Blumen oder ein wichtiges Schild: So machen Sie ein scharfes Foto und finden es danach wieder.",
    category: "grundlagen",
    app: "Kamera (Android und iPhone)",
    devices: ["android", "iphone"],
    difficulty: "leicht",
    minutes: 5,
    access: "free",
    checked: "2026-11",
    keywords: ["Foto", "Kamera", "Bild", "fotografieren", "Galerie", "Fotos"],
    needs: ["Ihr Handy"],
    variants: [
      {
        device: "android",
        steps: [
          {
            title: "Kamera öffnen",
            text: "Tippen Sie auf das Symbol „Kamera“. Es sieht aus wie ein kleiner Fotoapparat.",
          },
          {
            title: "„Foto“ einstellen",
            text: "Unten über dem großen runden Knopf stehen Wörter wie „Video“, „Foto“, „Porträt“. Prüfen Sie, dass „Foto“ hervorgehoben ist. Sonst tippen Sie auf „Foto“.",
          },
          {
            title: "Motiv anpeilen und scharfstellen",
            text: "Halten Sie das Handy ruhig mit beiden Händen. Tippen Sie auf dem Bildschirm einmal auf die Stelle, die scharf sein soll, zum Beispiel ein Gesicht.",
            tip: "Größer heranholen: Legen Sie zwei Finger auf den Bildschirm und ziehen Sie sie auseinander.",
          },
          {
            title: "Auslösen",
            text: "Tippen Sie auf den großen runden Knopf unten in der Mitte. Ein kurzes Klicken oder Blinken zeigt: Das Foto ist gemacht.",
          },
          {
            title: "Foto ansehen",
            text: "Tippen Sie unten auf das kleine Vorschaubild neben dem Auslöser. Später finden Sie alle Fotos in der App „Galerie“ (Samsung) oder „Fotos“ (andere Handys).",
          },
        ],
      },
      {
        device: "iphone",
        steps: [
          {
            title: "Kamera öffnen",
            text: "Tippen Sie auf das graue Symbol „Kamera“ mit dem Fotoapparat.",
            tip: "Schneller geht es vom Sperrbildschirm: Wischen Sie dort von rechts nach links.",
          },
          {
            title: "„Foto“ einstellen",
            text: "Über dem großen weißen Knopf stehen Wörter wie „Video“, „Foto“, „Porträt“. „Foto“ soll gelb sein. Sonst tippen Sie auf „Foto“.",
          },
          {
            title: "Motiv anpeilen und scharfstellen",
            text: "Halten Sie das iPhone ruhig mit beiden Händen. Tippen Sie auf die Stelle, die scharf sein soll. Ein gelbes Kästchen zeigt die scharfe Stelle.",
            tip: "Größer heranholen: Tippen Sie unten auf „2x“ oder ziehen Sie zwei Finger auseinander.",
          },
          {
            title: "Auslösen",
            text: "Tippen Sie auf den großen weißen Knopf. Ein kurzes Blinken zeigt: Das Foto ist gemacht.",
          },
          {
            title: "Foto ansehen",
            text: "Tippen Sie unten links auf das kleine Vorschaubild. Später finden Sie alle Fotos in der App „Fotos“ (bunte Blüte).",
          },
        ],
      },
    ],
    related: ["whatsapp-foto-senden"],
  },
  {
    slug: "whatsapp-sprachnachricht",
    title: "Eine Sprachnachricht mit WhatsApp schicken",
    summary: "Lieber sprechen als tippen: So nehmen Sie eine Sprachnachricht auf und schicken sie ab.",
    category: "grundlagen",
    app: "WhatsApp",
    devices: ["android", "iphone"],
    difficulty: "leicht",
    minutes: 5,
    access: "free",
    checked: "2026-11",
    keywords: ["Sprachnachricht", "Sprachmemo", "aufnehmen", "sprechen", "Mikrofon", "Audio"],
    needs: ["WhatsApp ist eingerichtet"],
    steps: [
      {
        title: "Chat öffnen",
        text: "Öffnen Sie WhatsApp und tippen Sie auf die Person, der Sie etwas sagen möchten.",
      },
      {
        title: "Mikrofon finden",
        text: "Unten rechts neben dem Schreibfeld sehen Sie ein Mikrofon. Es erscheint nur, wenn im Schreibfeld noch nichts steht.",
      },
      {
        title: "Gedrückt halten und sprechen",
        text: "Legen Sie den Finger auf das Mikrofon und lassen Sie ihn liegen. Sprechen Sie jetzt. Die Zeit läuft mit.",
        tip: "Beim ersten Mal fragt das Handy, ob WhatsApp das Mikrofon nutzen darf. Tippen Sie auf „Erlauben“ bzw. „OK“ und starten Sie dann neu.",
      },
      {
        title: "Loslassen = Absenden",
        text: "Wenn Sie fertig sind, nehmen Sie den Finger weg. Die Nachricht wird sofort verschickt.",
        tip: "Vertan? Wischen Sie während der Aufnahme mit dem Finger nach links – dann wird die Aufnahme verworfen.",
      },
      {
        title: "Längere Nachricht ohne Festhalten",
        text: "Wischen Sie während der Aufnahme mit dem Finger nach oben zum Schloss. Jetzt können Sie loslassen und weitersprechen. Zum Senden tippen Sie auf den grünen Pfeil.",
      },
      {
        title: "Sprachnachricht anhören",
        text: "Bekommen Sie eine Sprachnachricht, tippen Sie auf das Dreieck (Abspielen). Halten Sie das Handy ans Ohr, wenn andere nicht mithören sollen.",
      },
    ],
    takeaways: ["Mikrofon gedrückt halten, sprechen, loslassen.", "Nach links wischen = Aufnahme löschen."],
    related: ["whatsapp-einrichten"],
  },
  {
    slug: "whatsapp-gruppe-erstellen",
    title: "Eine WhatsApp-Gruppe für die Familie erstellen",
    summary: "Eine Nachricht an alle auf einmal: So gründen Sie eine Familiengruppe.",
    category: "grundlagen",
    app: "WhatsApp",
    devices: ["android", "iphone"],
    difficulty: "mittel",
    minutes: 10,
    access: "premium",
    priceCents: 199,
    checked: "2026-11",
    keywords: ["Gruppe", "Familie", "Familiengruppe", "Gruppenchat", "mehrere"],
    needs: ["WhatsApp ist eingerichtet", "Die Familienmitglieder sind als Kontakte gespeichert"],
    unverified: true,
    reviewNote: "Neuer-Chat-Knopf und „Neue Gruppe“ auf aktueller WhatsApp-Version (Android und iPhone) prüfen; ob im letzten Schritt „Erstellen“ oder Haken steht.",
    steps: [
      {
        title: "Neuen Chat starten",
        text: "Öffnen Sie WhatsApp. Tippen Sie auf den Knopf für einen neuen Chat: Android – grüner Knopf unten rechts. iPhone – Plus-Symbol oben rechts.",
      },
      {
        title: "„Neue Gruppe“ wählen",
        text: "Ganz oben in der Liste steht „Neue Gruppe“. Tippen Sie darauf.",
      },
      {
        title: "Mitglieder auswählen",
        text: "Tippen Sie nacheinander auf alle Personen, die in die Gruppe sollen. Ausgewählte Personen bekommen einen Haken und erscheinen oben.",
        tip: "Oben gibt es ein Suchfeld. Tippen Sie dort einen Namen ein, um ihn schneller zu finden.",
      },
      {
        title: "Weiter",
        text: "Android: Tippen Sie auf den grünen Pfeil unten rechts. iPhone: Tippen Sie oben rechts auf „Weiter“.",
      },
      {
        title: "Gruppennamen eingeben",
        text: "Tippen Sie einen Namen für die Gruppe ein, zum Beispiel „Familie Schulz“.",
      },
      {
        title: "Gruppe erstellen",
        text: "Android: Tippen Sie auf den grünen Haken. iPhone: Tippen Sie oben rechts auf „Erstellen“. Die Gruppe ist fertig – alles, was Sie hier schreiben, lesen alle Mitglieder.",
        warning: "Werden Sie von Fremden in Gruppen hinzugefügt, die für Geldanlagen oder Gewinnspiele werben: Verlassen Sie die Gruppe und melden Sie sie. Das ist fast immer Betrug.",
      },
    ],
    takeaways: ["Neuer Chat → „Neue Gruppe“ → Personen antippen → Namen geben.", "Was Sie in die Gruppe schreiben, lesen alle."],
    related: ["whatsapp-einrichten", "whatsapp-foto-senden"],
  },
  {
    slug: "facetime-videoanruf",
    title: "Mit FaceTime per Video telefonieren (iPhone)",
    summary: "Kostenlos per Video mit Familie telefonieren, die auch ein iPhone oder iPad hat – ganz ohne extra App.",
    category: "grundlagen",
    app: "FaceTime (nur iPhone und iPad)",
    devices: ["iphone"],
    difficulty: "leicht",
    minutes: 5,
    access: "free",
    checked: "2026-11",
    keywords: ["FaceTime", "Video", "Videoanruf", "Videotelefonie", "iPad", "Apple"],
    needs: ["Ein iPhone mit Internet (am besten WLAN)", "Die andere Person hat ein iPhone, iPad oder einen Mac"],
    steps: [
      {
        title: "FaceTime öffnen",
        text: "Tippen Sie auf das grüne Symbol mit der weißen Videokamera. Es heißt „FaceTime“.",
      },
      {
        title: "Neuen Anruf beginnen",
        text: "Tippen Sie oben auf „Neuer FaceTime“.",
      },
      {
        title: "Person auswählen",
        text: "Tippen Sie den Namen der Person ein. Unter dem Feld erscheint der passende Kontakt – tippen Sie darauf.",
        tip: "Ist der Name blau, hat die Person FaceTime. Ist er grau, klappt FaceTime mit ihr nicht – nutzen Sie dann zum Beispiel WhatsApp.",
      },
      {
        title: "Anruf starten",
        text: "Tippen Sie unten auf den grünen Knopf „FaceTime“. Es klingelt bei der anderen Person.",
      },
      {
        title: "Auflegen",
        text: "Tippen Sie auf den roten Knopf mit dem X oder dem Hörer. Sehen Sie keine Knöpfe? Tippen Sie einmal kurz auf den Bildschirm.",
      },
    ],
    takeaways: ["FaceTime funktioniert nur zwischen Apple-Geräten.", "Grüner Knopf „FaceTime“ = Videoanruf starten."],
    related: ["whatsapp-videoanruf"],
  },
  {
    slug: "whatsapp-live-standort",
    title: "Den eigenen Standort mit WhatsApp teilen",
    summary: "Beim Spaziergang oder auf dem Heimweg: So sieht Ihre Familie für eine Weile, wo Sie gerade sind.",
    category: "grundlagen",
    app: "WhatsApp",
    devices: ["android", "iphone"],
    difficulty: "leicht",
    minutes: 5,
    access: "premium",
    priceCents: 199,
    checked: "2026-11",
    keywords: ["Standort", "Live-Standort", "teilen", "wo bin ich", "verlaufen", "abholen", "GPS"],
    needs: ["WhatsApp ist eingerichtet", "Standort (GPS) am Handy ist eingeschaltet"],
    unverified: true,
    reviewNote: "Anhang-Menü (Android Büroklammer, iPhone „+“) → „Standort“ → „Live-Standort teilen“ und Zeitauswahl (15 Minuten / 1 Stunde / 8 Stunden) auf aktueller WhatsApp-Version prüfen.",
    steps: [
      {
        title: "Chat öffnen",
        text: "Öffnen Sie WhatsApp und tippen Sie auf die Person oder Familiengruppe, die Ihren Standort sehen soll.",
      },
      {
        title: "Anhang-Knopf antippen",
        text: "Android: Tippen Sie auf die Büroklammer im Schreibfeld. iPhone: Tippen Sie auf das Plus-Zeichen (+) links.",
      },
      {
        title: "„Standort“ wählen",
        text: "Tippen Sie auf „Standort“.",
        tip: "Beim ersten Mal fragt das Handy, ob WhatsApp Ihren Standort verwenden darf. Tippen Sie auf „Bei Nutzung der App“ bzw. „Beim Verwenden der App erlauben“.",
      },
      {
        title: "„Live-Standort teilen“",
        text: "Tippen Sie auf „Live-Standort teilen“. Wählen Sie, wie lange: 15 Minuten, 1 Stunde oder 8 Stunden.",
      },
      {
        title: "Senden",
        text: "Tippen Sie auf den grünen Pfeil. Die andere Person sieht jetzt auf einer Karte, wo Sie sind – bis die Zeit abgelaufen ist.",
      },
      {
        title: "Früher beenden",
        text: "Möchten Sie das Teilen vorher beenden, tippen Sie im Chat auf „Teilen beenden“.",
        warning: "Teilen Sie Ihren Standort nur mit Menschen, die Sie gut kennen – nie in großen oder fremden Gruppen.",
      },
    ],
    takeaways: ["Büroklammer bzw. + → „Standort“ → „Live-Standort teilen“.", "Das Teilen endet automatisch nach der gewählten Zeit."],
    related: ["whatsapp-einrichten"],
  },
];

import type { Guide } from "../../content/types";

export const bezahlen: Guide[] = [
  {
    slug: "sicher-online-bezahlen",
    title: "Sicher im Internet einkaufen und bezahlen",
    summary: "Welche Bezahlarten sicher sind und woran Sie einen seriösen Online-Shop erkennen.",
    category: "bezahlen",
    devices: ["android", "iphone", "computer"],
    difficulty: "mittel",
    minutes: 15,
    access: "premium",
    priceCents: 299,
    checked: "2026-11",
    keywords: ["Shop", "Einkaufen", "Fake-Shop", "Rechnung", "Vorkasse"],
    needs: ["Ihr Smartphone oder Computer"],
    steps: [
      {
        title: "Auf die Adresse achten",
        text: "Oben in der Adresszeile sollte die Adresse mit „https“ beginnen. Prüfen Sie, ob der Name richtig geschrieben ist – Betrüger nutzen gern Adressen wie „amaz0n-angebote.shop“.",
        warning: "Das Schloss-Symbol heißt nur: Die Verbindung ist verschlüsselt. Es sagt nichts darüber, ob der Shop ehrlich ist.",
      },
      {
        title: "Impressum prüfen",
        text: "Ein seriöser Shop hat ganz unten ein „Impressum“ mit Firmenname, Adresse in Deutschland oder der EU und Telefonnummer.",
      },
      {
        title: "Fake-Shop-Finder nutzen",
        text: "Die Verbraucherzentrale bietet den kostenlosen „Fakeshop-Finder“. Suchen Sie im Internet nach „Fakeshop-Finder Verbraucherzentrale“. Tippen Sie die Adresse des Shops in das Feld „www.shop-url.de“ (1) und dann auf den roten Knopf „Shop-URL prüfen“ (2).",
        image: {
          src: "/screenshots/sicher-online-bezahlen/fakeshop-finder.webp",
          alt: "Fakeshop-Finder der Verbraucherzentrale: Eingabefeld für die Shop-Adresse (1) und roter Knopf „Shop-URL prüfen“ (2); beide markiert.",
          credit: "verbraucherzentrale.de (Fakeshop-Finder)",
        },
      },
      {
        title: "Sichere Bezahlart wählen",
        text: "Am sichersten ist „Kauf auf Rechnung“: Sie zahlen erst, wenn die Ware da ist. Auch PayPal (mit Käuferschutz), Lastschrift und Kreditkarte sind gut – bei Problemen bekommen Sie Ihr Geld meist zurück.",
        warning: "Vorsicht, wenn nur „Vorkasse“ oder Überweisung möglich ist. Dieses Geld ist bei Betrug fast immer verloren.",
      },
      {
        title: "Zu günstige Angebote meiden",
        text: "Ist ein Preis viel niedriger als überall sonst? Dann ist es wahrscheinlich ein Fake-Shop. Lieber einmal mehr vergleichen.",
      },
      {
        title: "Zahlung in der Bank-App freigeben",
        text: "Viele Banken schicken eine Nachricht in ihre App, bevor eine Zahlung ausgeführt wird. Prüfen Sie dort Betrag und Händler, bevor Sie auf „Freigeben“ tippen.",
        warning: "Geben Sie niemals eine Zahlung frei, die Sie nicht selbst gerade gestartet haben – auch nicht, wenn jemand am Telefon Sie darum bittet.",
      },
    ],
    takeaways: ["Kauf auf Rechnung ist am sichersten.", "Nur Vorkasse = Vorsicht.", "Nur Zahlungen freigeben, die Sie selbst gestartet haben."],
  },
  {
    slug: "paypal-einrichten",
    title: "PayPal einrichten und sicher damit bezahlen",
    summary: "Bezahlen, ohne dem Shop Ihre Bankdaten zu geben: So richten Sie PayPal ein und nutzen den Käuferschutz.",
    category: "bezahlen",
    app: "PayPal",
    devices: ["android", "iphone", "computer"],
    difficulty: "mittel",
    minutes: 20,
    access: "premium",
    priceCents: 299,
    checked: "2026-11",
    keywords: ["PayPal", "Käuferschutz", "bezahlen", "Konto"],
    needs: [
      "Die App „PayPal“ oder die Internetseite paypal.com",
      "Ihre E-Mail-Adresse und Handynummer",
      "Ihre IBAN (steht auf Ihrer Bankkarte oder im Kontoauszug)",
    ],
    steps: [
      {
        title: "Registrieren",
        text: "Öffnen Sie die PayPal-App oder paypal.com und tippen Sie oben rechts auf den schwarzen Knopf „Neu anmelden“.",
        warning: "Laden Sie PayPal nur aus dem App Store oder Play Store, oder tippen Sie paypal.com selbst ein. Folgen Sie nie Links aus E-Mails.",
        image: {
          src: "/screenshots/paypal-einrichten/neu-anmelden.webp",
          alt: "Startseite von paypal.com. Oben rechts: „Hilfe“, „Einloggen“ und dem markierten Knopf „Neu anmelden“.",
          credit: "paypal.com",
        },
      },
      {
        title: "„Privat“ wählen",
        text: "Tippen Sie auf das Feld „Privat“ (1), sodass der Kreis davor blau gefüllt ist. Tippen Sie dann auf „Jetzt starten“ (2).",
        tip: "„Business“ ist nur für Firmen und Händler. Für Sie ist „Privat“ richtig.",
        image: {
          src: "/screenshots/paypal-einrichten/privat-jetzt-starten.webp",
          alt: "Auswahl bei PayPal: Feld „Privat“ (1) ist gewählt und markiert, darunter der markierte Knopf „Jetzt starten“ (2). Rechts daneben das Feld „Business“.",
          credit: "paypal.com",
        },
      },
      {
        title: "Handynummer bestätigen",
        text: "Geben Sie Ihre Handynummer ein. Sie bekommen eine SMS mit einem Code. Tippen Sie den Code ein.",
      },
      {
        title: "Persönliche Daten eingeben",
        text: "Geben Sie E-Mail-Adresse, ein sicheres Passwort, Ihren Namen und Ihre Adresse ein. Schreiben Sie das Passwort an einem sicheren Ort auf.",
      },
      {
        title: "Bankkonto verknüpfen",
        text: "Tippen Sie auf „Bankkonto hinzufügen“ und geben Sie Ihre IBAN ein. PayPal bucht später von diesem Konto ab. Folgen Sie den Hinweisen zur Bestätigung.",
      },
      {
        title: "Im Online-Shop „PayPal“ wählen",
        text: "Beim Einkaufen wählen Sie an der Kasse „PayPal“ als Bezahlart. Es öffnet sich ein PayPal-Fenster.",
      },
      {
        title: "Anmelden und prüfen",
        text: "Melden Sie sich mit E-Mail und Passwort an. Prüfen Sie den Betrag und den Namen des Händlers. Tippen Sie dann auf „Weiter“ bzw. „Jetzt bezahlen“.",
      },
      {
        title: "Geld an Bekannte senden – richtig",
        text: "Wenn Sie Geld an eine Person schicken, fragt PayPal: „Freunde und Familie“ oder „Waren und Dienstleistungen“. Für Familie wählen Sie „Freunde und Familie“.",
        warning: "Kaufen Sie bei Privatleuten etwas (z. B. auf Kleinanzeigen), wählen Sie immer „Waren und Dienstleistungen“. Nur dann gilt der Käuferschutz. Betrüger bitten oft um „Freunde und Familie“.",
      },
    ],
    takeaways: ["Beim Einkaufen gilt der PayPal-Käuferschutz.", "„Freunde und Familie“ nur für Menschen, die Sie wirklich kennen."],
  },
  {
    slug: "ueberweisung-banking-app",
    title: "Eine Überweisung mit der Sparkasse-App machen",
    summary: "Rechnungen bequem von zu Hause bezahlen – Schritt für Schritt in der App „Sparkasse“, mit der neuen Namensprüfung.",
    category: "bezahlen",
    app: "Sparkasse (App der Sparkassen) mit S-pushTAN",
    devices: ["android", "iphone"],
    difficulty: "mittel",
    minutes: 10,
    access: "premium",
    priceCents: 299,
    checked: "2026-11",
    keywords: ["Überweisung", "Sparkasse", "IBAN", "Rechnung bezahlen", "Online-Banking", "TAN", "pushTAN", "Geld senden", "Empfängerüberprüfung"],
    needs: [
      "Die App „Sparkasse“ (rotes Symbol mit weißem „S“), bereits mit Ihrem Konto eingerichtet",
      "Die App „S-pushTAN“ für die Freigabe – ebenfalls eingerichtet",
      "Die Rechnung mit Name, IBAN, Betrag und Rechnungsnummer",
    ],
    steps: [
      {
        title: "Sparkasse-App öffnen und anmelden",
        text: "Tippen Sie auf das rote Symbol mit dem weißen „S“. Melden Sie sich mit Ihrem App-Passwort an – oder mit Fingerabdruck bzw. Gesicht, wenn Sie das eingerichtet haben.",
      },
      {
        title: "„Geld senden“ antippen",
        text: "Auf der Startseite bzw. unter Ihrem Girokonto sehen Sie den Knopf „Geld senden“. Tippen Sie darauf.",
      },
      {
        title: "„Überweisung“ wählen",
        text: "Es erscheint eine Auswahl. Tippen Sie auf den obersten Eintrag „Überweisung“.",
        tip: "Darunter gibt es oft „Fotoüberweisung“: Sie fotografieren die Rechnung, und die App füllt die Felder selbst aus. Prüfen Sie die Angaben danach trotzdem genau.",
      },
      {
        title: "Name des Empfängers eingeben",
        text: "Tippen Sie in das Feld „Name“ bzw. „Empfänger“ und geben Sie den Namen genau so ein, wie er auf der Rechnung steht – zum Beispiel „Stadtwerke Musterstadt GmbH“.",
      },
      {
        title: "IBAN eingeben",
        text: "Tippen Sie in das Feld „IBAN“ und geben Sie die IBAN ein. In Deutschland beginnt sie mit „DE“ und hat 22 Zeichen. Leerzeichen müssen Sie nicht eintippen.",
      },
      {
        title: "Betrag und Verwendungszweck",
        text: "Geben Sie im Feld „Betrag“ die Summe ein, zum Beispiel 49,90. Schreiben Sie in „Verwendungszweck“ die Rechnungs- oder Kundennummer. Tippen Sie dann auf „Weiter“.",
      },
      {
        title: "Ergebnis der Namensprüfung lesen",
        text: "Die Sparkasse prüft jetzt in wenigen Sekunden, ob Name und IBAN zusammenpassen. Grün heißt: passt. Bei „nahezu übereinstimmend“ zeigt die App den richtigen Namen und bietet an, ihn zu übernehmen – prüfen Sie vorher, ob das der gewünschte Empfänger ist.",
        warning: "Steht dort, dass Name und IBAN nicht übereinstimmen: Brechen Sie ab. Rufen Sie den Empfänger unter einer Ihnen bekannten Nummer an. Genau so arbeiten Betrüger mit gefälschten Rechnungen.",
      },
      {
        title: "Überweisung prüfen und Freigabe anfordern",
        text: "Sie sehen eine Übersicht. Prüfen Sie Name, IBAN und Betrag. Tippen Sie auf „Überweisung prüfen“ bzw. „Senden“. Die App schickt jetzt eine Freigabe-Anfrage an die S-pushTAN-App.",
      },
      {
        title: "In S-pushTAN freigeben",
        text: "Eine Mitteilung von S-pushTAN erscheint – tippen Sie darauf (oder öffnen Sie die App S-pushTAN). Prüfen Sie dort noch einmal Empfänger und Betrag und tippen Sie auf „Auftrag freigeben“.",
        warning: "Geben Sie nur frei, was Sie selbst gerade eingegeben haben. Ruft Sie jemand an und bittet um eine Freigabe: auflegen.",
      },
      {
        title: "Fertig",
        text: "Wechseln Sie zurück in die Sparkasse-App. Sie sehen „Auftrag ausgeführt“ bzw. eine Bestätigung. Die Überweisung erscheint in Ihren Umsätzen.",
      },
    ],
    takeaways: [
      "Geld senden → Überweisung → Name, IBAN, Betrag.",
      "Name passt nicht zur IBAN = nicht überweisen.",
      "In S-pushTAN nur freigeben, was Sie selbst gestartet haben.",
    ],
  },
  {
    slug: "karte-sperren-116116",
    title: "Bankkarte sofort sperren lassen (Sperr-Notruf 116 116)",
    summary: "Portemonnaie weg oder Daten verraten? So lassen Sie Ihre Bankkarte und Ihr Online-Banking rund um die Uhr sperren.",
    category: "bezahlen",
    app: "Telefon – Sperr-Notruf 116 116",
    devices: ["android", "iphone", "computer"],
    difficulty: "leicht",
    minutes: 5,
    access: "free",
    checked: "2026-11",
    keywords: ["Karte sperren", "116 116", "Sperr-Notruf", "girocard", "EC-Karte", "Kreditkarte", "verloren", "gestohlen", "Diebstahl"],
    needs: [
      "Ein Telefon",
      "Am besten Ihre IBAN (steht im Kontoauszug – schreiben Sie sie jetzt schon in Ihr Notfallheft)",
    ],
    steps: [
      {
        title: "Wann sperren?",
        text: "Sperren Sie sofort, wenn Ihre Karte verloren oder gestohlen wurde, wenn ein Automat sie eingezogen hat oder wenn Sie Kartendaten, PIN oder TAN an Fremde gegeben haben.",
        warning: "Warten Sie nicht bis zum nächsten Tag. Jede Stunde zählt.",
      },
      {
        title: "116 116 anrufen",
        text: "Wählen Sie 116 116. Der Anruf ist kostenlos und rund um die Uhr erreichbar – auch nachts, am Wochenende und an Feiertagen.",
        tip: "Aus dem Ausland wählen Sie +49 116 116. Klappt das nicht, gibt es die Ersatznummer +49 30 4050 4050.",
      },
      {
        title: "Angaben machen",
        text: "Sagen Sie Ihren Namen, den Namen Ihrer Bank und Ihre IBAN oder Kontonummer. Die Mitarbeiterin oder der Mitarbeiter leitet die Sperre ein.",
      },
      {
        title: "Online-Banking sperren lassen",
        text: "Haben Sie Zugangsdaten oder eine TAN verraten? Sagen Sie das ausdrücklich. Dann wird auch Ihr Online-Banking gesperrt.",
      },
      {
        title: "Bei Diebstahl: Anzeige erstatten",
        text: "Erstatten Sie bei der Polizei Anzeige. Lassen Sie bei der Polizei auch die „KUNO-Sperre“ veranlassen – dann funktioniert die Karte auch nicht mehr beim Bezahlen mit Unterschrift.",
      },
      {
        title: "Neue Karte bestellen",
        text: "Rufen Sie am nächsten Werktag Ihre Bank an oder gehen Sie in die Filiale. Dort bekommen Sie eine neue Karte.",
      },
    ],
    takeaways: ["Sperr-Notruf: 116 116 – kostenlos, rund um die Uhr.", "IBAN vorher notieren.", "Bei Diebstahl zusätzlich Anzeige und KUNO-Sperre."],
    related: ["betrug-erkennen-sms-anrufe", "phishing-mails-erkennen"],
  },
  {
    slug: "mit-dem-handy-bezahlen",
    title: "An der Kasse mit dem Handy bezahlen",
    summary: "Handy ans Kartenlesegerät halten – fertig. So legen Sie Ihre Bankkarte im Handy an.",
    category: "bezahlen",
    app: "Google Wallet (Android) bzw. Wallet (iPhone)",
    devices: ["android", "iphone"],
    difficulty: "mittel",
    minutes: 15,
    access: "premium",
    priceCents: 299,
    checked: "2026-11",
    keywords: ["Apple Pay", "Google Pay", "Google Wallet", "Wallet", "kontaktlos", "bezahlen", "Kasse", "NFC", "Handy bezahlen"],
    needs: [
      "Eine Debit- oder Kreditkarte Ihrer Bank, die Apple Pay bzw. Google Pay unterstützt (fragen Sie bei Ihrer Bank nach)",
      "Eine Bildschirmsperre am Handy (PIN, Fingerabdruck oder Gesichtserkennung)",
    ],
    unverified: true,
    reviewNote: "Knöpfe in Google Wallet („Zu Wallet hinzufügen“ → „Zahlungskarte“) und Apple Wallet („+“ → „Debit- oder Kreditkarte“) prüfen. Hinweis: Sparkassen-girocard wird bei Android über die Sparkasse-App hinzugefügt, nicht über Google Wallet – evtl. eigene Anleitung.",
    variants: [
      {
        device: "android",
        unverified: true,
        steps: [
          {
            title: "Google Wallet öffnen",
            text: "Öffnen Sie die App „Google Wallet“ (Symbol: bunte Geldbörse). Fehlt sie, laden Sie sie aus dem Play Store. Anbieter: „Google LLC“.",
          },
          {
            title: "Karte hinzufügen",
            text: "Tippen Sie auf „Zu Wallet hinzufügen“ und dann auf „Zahlungskarte“. Wählen Sie „Neue Kredit- oder Debitkarte“.",
          },
          {
            title: "Karte fotografieren",
            text: "Halten Sie Ihre Bankkarte vor die Kamera. Die Nummer wird automatisch erkannt. Prüfen Sie die Angaben und tippen Sie auf „Speichern“ bzw. „Weiter“.",
          },
          {
            title: "Bedingungen annehmen und bestätigen",
            text: "Tippen Sie auf „Akzeptieren“. Ihre Bank schickt Ihnen einen Code per SMS oder fragt eine Bestätigung in der Banking-App ab. Folgen Sie den Anweisungen.",
          },
          {
            title: "An der Kasse bezahlen",
            text: "Entsperren Sie das Handy und halten Sie die Rückseite an das Kartenlesegerät. Ein Haken oder Ton zeigt: bezahlt. Die App muss dafür nicht geöffnet sein.",
          },
        ],
      },
      {
        device: "iphone",
        steps: [
          {
            title: "Wallet öffnen",
            text: "Tippen Sie auf das schwarze Symbol mit den bunten Karten. Es heißt „Wallet“.",
          },
          {
            title: "Plus antippen",
            text: "Tippen Sie oben rechts auf das Plus-Zeichen (+) und dann auf „Debit- oder Kreditkarte“. Tippen Sie auf „Fortfahren“.",
          },
          {
            title: "Karte erfassen",
            text: "Halten Sie Ihre Bankkarte in den Rahmen auf dem Bildschirm. Die Nummer wird erkannt. Prüfen Sie Name und Ablaufdatum und tippen Sie auf „Weiter“.",
          },
          {
            title: "Bedingungen annehmen und bestätigen",
            text: "Tippen Sie auf „Akzeptieren“. Ihre Bank bestätigt die Karte, oft per SMS-Code oder in der Banking-App.",
          },
          {
            title: "An der Kasse bezahlen",
            text: "iPhone ohne Home-Taste: Drücken Sie zweimal schnell die Seitentaste und schauen Sie aufs iPhone. iPhone mit Home-Taste: Legen Sie den Finger auf die Home-Taste. Halten Sie das iPhone dann oben an das Kartenlesegerät.",
          },
        ],
      },
    ],
    takeaways: ["Bezahlen mit dem Handy ist sicher – die echte Kartennummer wird nicht weitergegeben.", "Ohne entsperrtes Handy kann niemand damit bezahlen."],
    related: ["karte-sperren-116116"],
  },
  {
    slug: "paypal-geld-senden",
    title: "Mit PayPal Geld an Familie und Freunde schicken",
    summary: "Das Geld fürs Geburtstagsgeschenk oder die geteilte Rechnung: So schicken Sie Geld an Bekannte – und so nicht an Betrüger.",
    category: "bezahlen",
    app: "PayPal (App)",
    devices: ["android", "iphone"],
    difficulty: "mittel",
    minutes: 5,
    access: "premium",
    priceCents: 199,
    checked: "2026-11",
    keywords: ["PayPal", "Geld senden", "schicken", "überweisen", "Freunde", "Familie"],
    needs: ["Ihr PayPal-Konto (siehe „PayPal einrichten“)", "Die E-Mail-Adresse oder Handynummer der Person"],
    unverified: true,
    reviewNote: "Knöpfe in der PayPal-App („Senden“, „Weiter“, Auswahl „Für Freunde und Familie“) auf aktueller Version prüfen – PayPal hat die App 2025 umgestaltet.",
    steps: [
      {
        title: "PayPal-App öffnen",
        text: "Öffnen Sie die App „PayPal“ und melden Sie sich an.",
      },
      {
        title: "„Senden“ antippen",
        text: "Tippen Sie auf der Startseite auf „Senden“.",
      },
      {
        title: "Empfänger eingeben",
        text: "Tippen Sie den Namen, die E-Mail-Adresse oder die Handynummer der Person ein. Tippen Sie auf den richtigen Eintrag.",
        warning: "Prüfen Sie Name und Bild genau, bevor Sie weitermachen. Geld an die falsche Person bekommen Sie nur schwer zurück.",
      },
      {
        title: "Betrag eingeben",
        text: "Tippen Sie den Betrag ein, zum Beispiel 20. Darunter können Sie eine kurze Nachricht schreiben, zum Beispiel „Für das Geschenk“. Tippen Sie auf „Weiter“.",
      },
      {
        title: "„Für Freunde und Familie“ nur bei Bekannten",
        text: "Fragt PayPal, wofür das Geld ist, wählen Sie „Für Freunde und Familie“ – aber nur, wenn Sie die Person wirklich kennen.",
        warning: "Für Freunde und Familie gibt es keinen Käuferschutz. Verlangt ein Verkäufer bei Kleinanzeigen diese Zahlart, ist das fast immer Betrug.",
      },
      {
        title: "Senden",
        text: "Prüfen Sie Empfänger und Betrag. Tippen Sie auf „Jetzt senden“ bzw. „Senden“. Sie bekommen eine Bestätigung per E-Mail.",
      },
    ],
    takeaways: ["„Freunde und Familie“ nur für Menschen, die Sie wirklich kennen.", "Beim Einkaufen immer mit Käuferschutz bezahlen."],
    related: ["paypal-einrichten", "sicher-online-bezahlen"],
  },
  {
    slug: "paypal-kaeuferschutz",
    title: "Ware nicht angekommen? PayPal-Käuferschutz nutzen",
    summary: "Bestellt, bezahlt, aber nichts bekommen? So melden Sie das Problem bei PayPal und bekommen Ihr Geld zurück.",
    category: "bezahlen",
    app: "PayPal (paypal.com am Computer)",
    devices: ["computer"],
    difficulty: "mittel",
    minutes: 15,
    access: "premium",
    priceCents: 299,
    checked: "2026-11",
    keywords: ["PayPal", "Käuferschutz", "Konflikt", "Problem melden", "Ware nicht erhalten", "Geld zurück", "Betrug", "Fakeshop"],
    needs: ["Ihr PayPal-Konto", "Die Bestellung (Datum, Betrag, Händler)", "Am besten den Computer – die Formulare sind dort übersichtlicher"],
    unverified: true,
    reviewNote: "Menüweg auf paypal.com („Konfliktlösungen“ bzw. „Problem melden“ in der Transaktion) und Fristen (180 Tage) prüfen; ggf. mit markierten Screenshots ergänzen (ohne eigene Kontodaten).",
    steps: [
      {
        title: "Zuerst beim Händler melden",
        text: "Schreiben Sie dem Händler eine kurze Nachricht: Die Ware ist nicht angekommen oder ist falsch. Warten Sie ein paar Tage auf eine Antwort.",
        tip: "Ist der Shop nicht erreichbar oder wirkt er gefälscht, melden Sie das Problem sofort bei PayPal.",
      },
      {
        title: "Bei PayPal anmelden",
        text: "Tippen Sie am Computer selbst „paypal.com“ in die Adresszeile und melden Sie sich an.",
        warning: "Nicht über einen Link in einer E-Mail anmelden – auch wenn die Mail echt aussieht.",
      },
      {
        title: "Die Zahlung öffnen",
        text: "Klicken Sie oben auf „Aktivitäten“. Suchen Sie die Zahlung an den Händler und klicken Sie darauf.",
      },
      {
        title: "„Problem melden“ klicken",
        text: "Klicken Sie in der Zahlung auf „Problem melden“. Wählen Sie den Grund, zum Beispiel „Ich habe meinen Artikel nicht erhalten“.",
      },
      {
        title: "Angaben machen und absenden",
        text: "Beschreiben Sie kurz, was passiert ist. Klicken Sie auf „Weiter“ und senden Sie die Meldung ab. PayPal informiert den Händler.",
      },
      {
        title: "Fristen beachten",
        text: "Sie haben 180 Tage nach der Zahlung Zeit. Antwortet der Händler nicht oder einigen Sie sich nicht, können Sie den Fall an PayPal zur Entscheidung weitergeben. Achten Sie auf E-Mails von PayPal.",
      },
    ],
    takeaways: ["Erst Händler kontaktieren, dann „Problem melden“.", "180 Tage Frist.", "Zahlungen „Für Freunde und Familie“ sind nicht geschützt."],
    related: ["paypal-einrichten", "sicher-online-bezahlen"],
  },
];

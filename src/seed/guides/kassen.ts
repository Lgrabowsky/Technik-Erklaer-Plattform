import type { Chooser, Guide, Step, Variant } from "../../content/types";

/**
 * Anleitungen, die je Krankenkasse unterschiedlich sind.
 * Besucher wählen vor den Schritten ihre Kasse aus.
 *
 * REDAKTION: Varianten mit `unverified: true` beruhen auf Angaben der Kassen
 * und Ratgeber-Seiten, die Knopf-Namen sind aber noch nicht in der echten App
 * nachgeklickt. Vor dem Start bitte mit einem Testzugang prüfen.
 */

const kassenChooser: Chooser = {
  question: "Bei welcher Krankenkasse sind Sie?",
  hint: "Jede Kasse hat ihre eigene App. Tippen Sie auf Ihre Kasse – den Namen finden Sie auf Ihrer Gesundheitskarte.",
  switchLabel: "Andere Krankenkasse wählen",
  icon: "heart",
};

/** Tipp, der überall gilt, wo ein Knopf je nach App-Version anders heißen kann */
const suchTipp = (wort: string) =>
  `Heißt der Knopf bei Ihnen etwas anders? Suchen Sie nach dem Wort „${wort}“ – die Kassen ändern die Beschriftung manchmal leicht.`;

// ---------------------------------------------------------------------------
// Rechnung einreichen
// ---------------------------------------------------------------------------

const rechnungStart: Step = {
  title: "Wann reicht man Rechnungen ein?",
  text: "Gesetzlich Versicherte reichen Rechnungen nur in bestimmten Fällen ein: zum Beispiel für Zuschüsse (etwa Zahnreinigung, Reiseimpfungen), für Bonusprogramme oder wenn Sie eine Leistung selbst bezahlt haben und die Kasse erstattet.",
  tip: "Unsicher, ob Ihre Kasse zahlt? Rufen Sie kurz an – die Nummer steht auf der Rückseite Ihrer Gesundheitskarte.",
};

const rechnungFoto: Step = {
  title: "Rechnung fotografieren",
  text: "Legen Sie die Rechnung auf einen dunklen Tisch bei gutem Licht. Halten Sie das Handy gerade darüber, bis die ganze Seite zu sehen ist. Tippen Sie auf den runden Auslöser. Hat die Rechnung mehrere Seiten, fotografieren Sie jede Seite.",
  tip: "Prüfen Sie das Foto: Ist alles scharf und lesbar? Wenn nicht, tippen Sie auf „Wiederholen“.",
};

const rechnungEnde: Step = {
  title: "Original aufheben",
  text: "Heben Sie die Papier-Rechnung auf, bis das Geld auf Ihrem Konto ist. Manchmal fragt die Kasse nach dem Original.",
};

function rechnungVariante(v: {
  label: string;
  app: string;
  unverified?: boolean;
  steps: Step[];
}): Variant {
  return {
    label: v.label,
    hint: `App: ${v.app}`,
    unverified: v.unverified,
    steps: [
      rechnungStart,
      {
        title: `App „${v.app}“ öffnen und anmelden`,
        text: `Öffnen Sie die App „${v.app}“ und melden Sie sich an. Haben Sie die App noch nicht, laden Sie sie aus dem Play Store bzw. App Store (siehe Anleitung „Eine App installieren“).`,
        tip: "Bei der allerersten Anmeldung schickt die Kasse oft einen Brief mit einem Freischalt-Code. Das dauert einige Tage – das ist normal.",
      },
      ...v.steps,
      rechnungEnde,
    ],
  };
}

export const rechnungEinreichen: Guide = {
  slug: "rechnung-krankenkasse-einreichen",
  title: "Eine Rechnung bei der Krankenkasse per App einreichen",
  summary: "Fotografieren statt Brief schicken: So reichen Sie Rechnungen in der App Ihrer Krankenkasse ein – für TK, AOK, BARMER, DAK, IKK classic, KKH und hkk.",
  category: "gesundheit",
  app: "App Ihrer Krankenkasse (Auswahl vor den Schritten)",
  devices: ["android", "iphone"],
  difficulty: "anspruchsvoll",
  minutes: 15,
  access: "premium",
  priceCents: 399,
  checked: "2026-11",
  keywords: ["Beleg", "Rechnung", "Erstattung", "Krankenkasse", "Zuschuss", "TK", "AOK", "BARMER", "DAK", "IKK", "KKH", "hkk"],
  needs: [
    "Die App Ihrer Krankenkasse mit Ihren Zugangsdaten",
    "Die Rechnung auf Papier",
    "Ihre IBAN – falls die Kasse noch keine Bankverbindung von Ihnen hat",
  ],
  chooser: kassenChooser,
  variants: [
    rechnungVariante({
      label: "TK – Techniker Krankenkasse",
      app: "TK-App",
      unverified: true,
      steps: [
        {
          title: "„Einreichen & Mitteilen“ öffnen",
          text: "Tippen Sie unten auf „Services“. Tippen Sie dann auf „Einreichen & Mitteilen“.",
          tip: suchTipp("Einreichen"),
        },
        {
          title: "Art der Rechnung wählen",
          text: "Wählen Sie aus der Liste, worum es geht – zum Beispiel „Rechnung zur Kostenerstattung“ oder die passende Leistung wie „Professionelle Zahnreinigung“.",
        },
        rechnungFoto,
        {
          title: "Bankverbindung prüfen und absenden",
          text: "Prüfen Sie Ihre Bankverbindung (IBAN) – dorthin überweist die TK das Geld. Tippen Sie dann auf „Absenden“. Gehört eine ärztliche Verordnung dazu (z. B. bei Krankengymnastik), fotografieren Sie diese ebenfalls.",
        },
      ],
    }),
    rechnungVariante({
      label: "AOK",
      app: "Meine AOK",
      unverified: true,
      steps: [
        {
          title: "„Dokumente einreichen“ öffnen",
          text: "Tippen Sie auf der Startseite der App auf „Dokumente einreichen“ bzw. „Rechnung einreichen“.",
          tip: "Die AOK ist in Regionen aufgeteilt (z. B. AOK Bayern, AOK Nordost). Je nach Region sieht die App etwas anders aus. " + suchTipp("einreichen"),
        },
        {
          title: "Art der Rechnung und Person wählen",
          text: "Wählen Sie die Art der Rechnung aus der Liste. Ist die Rechnung für ein mitversichertes Familienmitglied, wählen Sie die Person aus.",
        },
        rechnungFoto,
        {
          title: "Absenden",
          text: "Prüfen Sie Ihre Angaben und tippen Sie auf „Absenden“. Den Bearbeitungsstand sehen Sie später in der App bei Ihren eingereichten Dokumenten.",
        },
      ],
    }),
    rechnungVariante({
      label: "BARMER",
      app: "BARMER-App",
      unverified: true,
      steps: [
        {
          title: "Einreichen öffnen",
          text: "Tippen Sie auf der Startseite auf „Dokumente einreichen“.",
          tip: suchTipp("einreichen"),
        },
        {
          title: "Art der Rechnung wählen",
          text: "Wählen Sie aus der Liste, worum es geht – zum Beispiel eine Rechnung für eine Impfung oder für das Bonusprogramm.",
        },
        rechnungFoto,
        {
          title: "Absenden",
          text: "Prüfen Sie Ihre Angaben und tippen Sie auf „Absenden“. Sie bekommen eine Eingangsbestätigung in der App.",
        },
      ],
    }),
    rechnungVariante({
      label: "DAK-Gesundheit",
      app: "DAK App",
      unverified: true,
      steps: [
        {
          title: "Einreichen öffnen",
          text: "Tippen Sie auf der Startseite auf „Dokumente hochladen“ bzw. „Einreichen“.",
          tip: suchTipp("hochladen"),
        },
        {
          title: "Thema wählen",
          text: "Wählen Sie das passende Thema aus der Liste, zum Beispiel „Rechnung / Kostenerstattung“.",
        },
        rechnungFoto,
        {
          title: "Absenden",
          text: "Prüfen Sie Ihre Angaben und tippen Sie auf „Absenden“.",
        },
      ],
    }),
    rechnungVariante({
      label: "IKK classic",
      app: "IKK classic",
      unverified: true,
      steps: [
        {
          title: "Dokument hochladen öffnen",
          text: "Tippen Sie auf der Startseite auf „Dokumente hochladen“.",
          tip: suchTipp("hochladen"),
        },
        {
          title: "Thema wählen",
          text: "Wählen Sie, worum es geht, zum Beispiel „Rechnung“ oder „Bescheinigung“.",
        },
        rechnungFoto,
        {
          title: "Absenden und Status verfolgen",
          text: "Tippen Sie auf „Absenden“. In der App können Sie später sehen, wie weit die Bearbeitung ist.",
        },
      ],
    }),
    rechnungVariante({
      label: "KKH",
      app: "Meine KKH",
      steps: [
        {
          title: "Auf „Einreichen“ tippen",
          text: "Tippen Sie nach der Anmeldung auf der Startseite auf „Einreichen“. (Oder: unten auf den Bereich „Services“ und dort auf Anträge, Dokumente und Rechnungen.)",
        },
        {
          title: "Kategorie wählen",
          text: "Wählen Sie die passende Kategorie für Ihre Rechnung. Passt keine, tippen Sie auf „Sonstige Dokumente einreichen“.",
        },
        { ...rechnungFoto, tip: "Sie können bis zu 5 Dateien auf einmal senden. Bei mehr Seiten schicken Sie einfach ein zweites Mal." },
        {
          title: "Absenden und Eingang prüfen",
          text: "Tippen Sie auf „Absenden“. Ob alles angekommen ist, sehen Sie unter „Online-Historie“ – dieser Punkt steht ganz am Ende der Liste im Bereich „Services“.",
        },
      ],
    }),
    rechnungVariante({
      label: "hkk",
      app: "hkk App",
      unverified: true,
      steps: [
        {
          title: "Einreichen öffnen",
          text: "Tippen Sie auf der Startseite auf „Dokumente einreichen“.",
          tip: suchTipp("einreichen"),
        },
        {
          title: "Thema wählen",
          text: "Wählen Sie aus der Liste das passende Thema für Ihre Rechnung.",
        },
        rechnungFoto,
        {
          title: "Absenden",
          text: "Prüfen Sie Ihre Angaben und tippen Sie auf „Absenden“.",
        },
      ],
    }),
  ],
};

// ---------------------------------------------------------------------------
// Elektronische Patientenakte (ePA)
// ---------------------------------------------------------------------------

const epaStart: Step[] = [
  {
    title: "Was ist die ePA?",
    text: "Die ePA ist eine digitale Akte für Ihre Gesundheitsdaten: Befunde, Arztbriefe und eine Liste Ihrer Medikamente. Seit 2025 haben alle gesetzlich Versicherten eine – außer sie haben widersprochen.",
  },
  {
    title: "Brauche ich die App überhaupt?",
    text: "Nein. Praxen und Apotheken können die ePA auch nutzen, wenn Sie die App nie öffnen. Die App brauchen Sie nur, wenn Sie selbst hineinschauen oder bestimmen möchten, wer was sehen darf.",
    tip: "Möchten Sie keine ePA? Dann können Sie bei Ihrer Krankenkasse widersprechen – per Brief, Telefon oder in der App.",
  },
];

const epaEnde: Step[] = [
  {
    title: "Eigenen App-Code festlegen",
    text: "Die App bittet Sie, einen 6-stelligen Zahlen-Code festzulegen. Geben Sie ihn zweimal gleich ein. Damit melden Sie sich künftig an. Auf Wunsch können Sie zusätzlich Fingerabdruck oder Gesichtserkennung einschalten.",
    warning: "Schreiben Sie den Code an einem sicheren Ort zu Hause auf – nicht auf das Handy und nicht auf die Karte.",
  },
  {
    title: "In die Akte schauen",
    text: "Tippen Sie auf „Dokumente“. Hier sehen Sie, was Praxen eingestellt haben. Unter „Medikationsliste“ finden Sie Ihre verordneten Medikamente.",
  },
  {
    title: "Zugriffe verwalten",
    text: "Unter „Berechtigungen“ bzw. „Zugriffe“ können Sie einzelnen Praxen den Zugriff entziehen oder einzelne Dokumente verbergen.",
  },
];

const karteAnsHandy: Step = {
  title: "Gesundheitskarte ans Handy halten",
  text: "Wählen Sie „Gesundheitskarte“ zum Ausweisen. Geben Sie die 6-stellige Zugangsnummer (CAN) ein – sie steht oben rechts auf der Vorderseite Ihrer Karte. Dann die PIN der Karte. Halten Sie die Karte flach an die Rückseite des Handys (iPhone: oben, Android: meist Mitte) und halten Sie still, bis „Erfolgreich“ erscheint.",
  tip: "Keine PIN für Ihre Gesundheitskarte? Die bestellen Sie kostenlos bei Ihrer Kasse – sie kommt per Post. Alternativ geht oft auch der Personalausweis mit PIN.",
};

function epaVariante(v: { label: string; app: string; unverified?: boolean; steps: Step[] }): Variant {
  return {
    label: v.label,
    hint: `App: ${v.app}`,
    unverified: v.unverified,
    steps: [...epaStart, ...v.steps, ...epaEnde],
  };
}

export const epaPatientenakte: Guide = {
  slug: "epa-patientenakte",
  title: "Die elektronische Patientenakte (ePA) verstehen und einrichten",
  summary: "Was die ePA ist, was sie für Sie bedeutet und wie Sie sie in der App Ihrer Krankenkasse einrichten – für TK, AOK, BARMER, DAK, IKK classic, KKH und hkk.",
  category: "gesundheit",
  app: "ePA-App Ihrer Krankenkasse (Auswahl vor den Schritten)",
  devices: ["android", "iphone"],
  difficulty: "anspruchsvoll",
  minutes: 30,
  access: "premium",
  priceCents: 399,
  checked: "2026-11",
  keywords: ["ePA", "Patientenakte", "GesundheitsID", "Befunde", "Widerspruch", "TK", "AOK", "BARMER", "DAK", "IKK", "KKH", "hkk"],
  needs: [
    "Ein neueres Handy mit NFC (fast alle Handys ab etwa 2020)",
    "Ihre Gesundheitskarte und die PIN dazu – oder Ihren Personalausweis mit Online-Funktion und PIN",
    "Etwa 30 Minuten Ruhe",
  ],
  chooser: kassenChooser,
  variants: [
    epaVariante({
      label: "TK – Techniker Krankenkasse",
      app: "TK-App (und TK-Ident)",
      unverified: true,
      steps: [
        {
          title: "Zwei Apps laden: TK-App und TK-Ident",
          text: "Bei der TK steckt die ePA in der normalen „TK-App“. Zum Ausweisen brauchen Sie einmalig zusätzlich die App „TK-Ident“. Laden Sie beide aus dem Play Store bzw. App Store.",
        },
        {
          title: "TK-App öffnen und ePA starten",
          text: "Öffnen Sie die TK-App und melden Sie sich an. Tippen Sie auf „TK-Safe“ bzw. „ePA“ und dann auf „Jetzt einrichten“.",
          tip: suchTipp("ePA"),
        },
        {
          title: "Mit TK-Ident ausweisen",
          text: "Die TK-App schickt Sie zur App „TK-Ident“. Dort legen Sie Ihre GesundheitsID an.",
        },
        karteAnsHandy,
      ],
    }),
    epaVariante({
      label: "AOK",
      app: "AOK Mein Leben (und AOK Ident)",
      unverified: true,
      steps: [
        {
          title: "AOK Mein Leben laden",
          text: "Die ePA-App der AOK heißt „AOK Mein Leben“. Zum Ausweisen nutzt sie die App „AOK Ident“. Laden Sie beide aus dem Play Store bzw. App Store.",
          warning: "AOK Mein Leben braucht seit Juli 2026 mindestens Android 14 bzw. iOS 18. Bei älteren Handys lässt sich die App nicht installieren.",
        },
        {
          title: "Registrierung starten",
          text: "Öffnen Sie „AOK Mein Leben“ und tippen Sie auf „Registrieren“. Wählen Sie Ihre regionale AOK aus.",
        },
        {
          title: "Mit AOK Ident ausweisen",
          text: "Die App leitet Sie zu „AOK Ident“ weiter, um Ihre GesundheitsID anzulegen.",
        },
        karteAnsHandy,
      ],
    }),
    epaVariante({
      label: "BARMER",
      app: "BARMER eCare",
      unverified: true,
      steps: [
        {
          title: "BARMER eCare laden",
          text: "Die ePA-App der BARMER heißt „BARMER eCare“ – nicht verwechseln mit der normalen „BARMER-App“. Laden Sie eCare aus dem Play Store bzw. App Store.",
        },
        {
          title: "Registrierung starten",
          text: "Öffnen Sie eCare und tippen Sie auf „Registrieren“. Folgen Sie den Hinweisen zum Ausweisen.",
          tip: "Die BARMER bietet eine ausführliche Registrierungs-Anleitung als PDF auf barmer.de (Suche: „eCare Registrierung“).",
        },
        karteAnsHandy,
      ],
    }),
    epaVariante({
      label: "DAK-Gesundheit",
      app: "DAK ePA",
      unverified: true,
      steps: [
        {
          title: "DAK ePA laden",
          text: "Die ePA-App der DAK heißt „DAK ePA“ – eine eigene App neben der normalen „DAK App“. Laden Sie sie aus dem Play Store bzw. App Store.",
        },
        {
          title: "Registrierung starten",
          text: "Öffnen Sie „DAK ePA“ und tippen Sie auf „Registrieren“. Wählen Sie, wie Sie sich ausweisen möchten.",
        },
        karteAnsHandy,
      ],
    }),
    epaVariante({
      label: "IKK classic",
      app: "IKK classic ePA",
      unverified: true,
      steps: [
        {
          title: "IKK classic ePA laden",
          text: "Laden Sie die App „IKK classic ePA“ aus dem Play Store bzw. App Store. Sie ist eine eigene App neben der normalen „IKK classic“-App.",
        },
        {
          title: "Registrierung starten",
          text: "Öffnen Sie die App und tippen Sie auf „Registrieren“. Wählen Sie, wie Sie sich ausweisen möchten.",
        },
        karteAnsHandy,
      ],
    }),
    epaVariante({
      label: "KKH",
      app: "KKH ePA",
      unverified: true,
      steps: [
        {
          title: "KKH ePA laden",
          text: "Laden Sie die App „KKH ePA“ aus dem Play Store bzw. App Store. Sie ist eine eigene App neben „Meine KKH“.",
        },
        {
          title: "Registrierung starten",
          text: "Öffnen Sie die App und tippen Sie auf „Registrieren“. Wählen Sie, wie Sie sich ausweisen möchten.",
        },
        karteAnsHandy,
      ],
    }),
    epaVariante({
      label: "hkk",
      app: "hkk ePA",
      unverified: true,
      steps: [
        {
          title: "hkk ePA laden",
          text: "Laden Sie die App „hkk ePA“ aus dem Play Store bzw. App Store. Sie ist eine eigene App neben der normalen „hkk App“.",
        },
        {
          title: "Registrierung starten",
          text: "Öffnen Sie die App und tippen Sie auf „Registrieren“. Wählen Sie, wie Sie sich ausweisen möchten.",
        },
        karteAnsHandy,
      ],
    }),
  ],
  takeaways: [
    "Die ePA funktioniert auch ohne App.",
    "Widerspruch ist jederzeit bei der Krankenkasse möglich.",
    "App-Code und Karten-PIN nie weitergeben.",
  ],
};

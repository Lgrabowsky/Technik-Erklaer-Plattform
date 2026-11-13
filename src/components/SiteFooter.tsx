import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="no-print mt-20 bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <p className="mb-3 text-lg font-semibold text-signal">Betrug bemerkt?</p>
          <p className="text-lg">
            Polizei: <a href="tel:110" className="font-bold text-white underline">110</a>
            <br />
            Karte sperren: <a href="tel:116116" className="font-bold text-white underline">116 116</a>
          </p>
        </div>
        {/* Gesetzlich vorgeschrieben: immer sichtbar (§ 312k BGB und Widerrufsbutton) */}
        <ul className="space-y-2 text-lg">
          <li><Link href="/kuendigen" className="font-semibold text-white underline">Verträge hier kündigen</Link></li>
          <li><Link href="/widerrufen" className="font-semibold text-white underline">Vertrag widerrufen</Link></li>
        </ul>
        <ul className="space-y-2 text-lg sm:text-right">
          <li><Link href="/preise" className="text-white underline">Preise</Link></li>
          <li>Impressum (folgt)</li>
          <li>Datenschutz (folgt)</li>
          <li>AGB &amp; Widerrufsbelehrung (folgt)</li>
        </ul>
      </div>
      {/* Platz für die feste Menüleiste am Handy */}
      <div className="h-[4.5rem] lg:hidden" aria-hidden="true" />
    </footer>
  );
}

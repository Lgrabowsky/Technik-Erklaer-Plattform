import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="no-print mt-16 border-t-4 border-primary bg-surface">
      <div className="mx-auto max-w-5xl space-y-3 px-4 py-8">
        <p className="text-lg">
          <strong>Hilfe bei Betrug:</strong> Polizei-Notruf <a href="tel:110" className="font-bold text-primary underline">110</a> ·
          Karten-Sperrnotruf <a href="tel:116116" className="font-bold text-primary underline">116 116</a>
        </p>
        <p className="flex flex-wrap gap-x-6">
          <Link href="/preise" className="text-primary underline">Preise</Link>
          <span>Impressum (folgt)</span>
          <span>Datenschutz (folgt)</span>
        </p>
      </div>
    </footer>
  );
}

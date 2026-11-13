import Link from "next/link";
import { TextSizeToggle } from "./TextSizeToggle";

const nav = [
  { href: "/", label: "Startseite" },
  { href: "/suche", label: "Suchen" },
  { href: "/preise", label: "Preise" },
  { href: "/konto", label: "Mein Zugang" },
];

export function SiteHeader() {
  return (
    <header className="no-print border-b-4 border-primary bg-surface">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="text-2xl font-bold text-primary no-underline">
          Schritt für Schritt
          <span className="block text-base font-normal text-muted">Technik einfach erklärt</span>
        </Link>
        <TextSizeToggle />
      </div>
      <nav aria-label="Hauptmenü" className="bg-primary">
        <ul className="mx-auto flex max-w-5xl flex-wrap gap-x-2 px-4">
          {nav.map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                className="inline-flex min-h-14 items-center px-4 text-lg font-bold text-white underline-offset-4 hover:underline"
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

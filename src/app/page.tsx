import Link from "next/link";
import { categories } from "@/content/categories";
import { guides } from "@/content/guides";
import { GuideCard } from "@/components/GuideCard";
import { CategoryTile } from "@/components/CategoryTile";
import { SearchForm } from "@/components/SearchForm";
import { eyebrow } from "@/components/ui";

const quickLinks = [
  { label: "Arzttermin buchen", href: "/anleitung/arzttermin-online-buchen" },
  { label: "Fahrkarte kaufen", href: "/anleitung/fahrplan-und-ticket-db-navigator" },
  { label: "Betrug erkennen", href: "/anleitung/betrug-erkennen-sms-anrufe" },
  { label: "Videoanruf", href: "/anleitung/whatsapp-videoanruf" },
  { label: "E-Rezept", href: "/anleitung/e-rezept-einloesen" },
];

export default function Home() {
  const free = guides.filter((g) => g.access === "free");
  return (
    <div className="space-y-14 sm:space-y-20">
      <section className="pt-2">
        <p className={`${eyebrow} mb-4`}>Technik einfach erklärt</p>
        <h1 className="mb-8 max-w-4xl text-[2.1rem] font-bold sm:text-6xl">
          Was möchten Sie heute lernen?
        </h1>
        <SearchForm label="Tippen Sie ein Stichwort ein:" />
        <div className="mt-6">
          <p className="mb-3 text-lg text-muted">Oder direkt starten:</p>
          <ul className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
            {quickLinks.map((q) => (
              <li key={q.href}>
                <Link
                  href={q.href}
                  className="flex min-h-12 h-full items-center justify-center rounded-2xl bg-surface px-3 py-2 text-center text-base font-semibold leading-snug text-ink no-underline ring-ink hover:ring-2 sm:inline-flex sm:rounded-full sm:px-5 sm:text-lg"
                >
                  {q.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="so-gehts">
        <h2 id="so-gehts" className="sr-only">So funktioniert es</h2>
        <ol className="grid gap-4 sm:grid-cols-3">
          {[
            ["Thema wählen", "Suchen Sie aus, wobei Sie Hilfe brauchen."],
            ["Schritt für Schritt", "Immer nur eine Sache auf dem Bildschirm."],
            ["Geschafft", "Am Ende wissen Sie, wie es geht – in Ihrem Tempo."],
          ].map(([title, text], i) => (
            <li key={title} className="flex gap-4 border-t-2 border-ink pt-5">
              <span className="shrink-0 whitespace-nowrap text-4xl font-bold leading-none text-ink">{String(i + 1).padStart(2, "0")}</span>
              <span>
                <span className="block text-xl font-bold">{title}</span>
                <span className="block text-ink-soft">{text}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="themen">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <h2 id="themen" className="text-[1.9rem] font-bold sm:text-4xl">Themen</h2>
          <Link href="/themen" className="text-lg font-semibold text-ink underline">Alle Themen ansehen</Link>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <CategoryTile key={c.slug} category={c} />
          ))}
        </ul>
      </section>

      <section aria-labelledby="kostenlos">
        <h2 id="kostenlos" className="mb-2 text-[1.9rem] font-bold sm:text-4xl">Kostenlos ausprobieren</h2>
        <p className="mb-6 text-xl text-ink-soft">Diese Anleitungen können Sie sofort und ohne Anmeldung nutzen.</p>
        <ul className="grid gap-4 lg:grid-cols-2">
          {free.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </ul>
      </section>
    </div>
  );
}

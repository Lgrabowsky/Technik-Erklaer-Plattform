import Link from "next/link";
import { categories } from "@/content/categories";
import { guides } from "@/content/guides";
import { GuideCard } from "@/components/GuideCard";
import { Icon } from "@/components/Icon";
import { SearchForm } from "@/components/SearchForm";

export default function Home() {
  const free = guides.filter((g) => g.access === "free");
  return (
    <div className="space-y-12">
      <section>
        <h1 className="mb-3 text-4xl font-bold">Technik einfach erklärt</h1>
        <p className="mb-6 max-w-3xl text-xl">
          Hier lernen Sie in Ruhe, wie Sie Ihr Smartphone, Tablet oder Ihren Computer benutzen.
          Jede Anleitung zeigt Ihnen einen Schritt nach dem anderen.
        </p>
        <SearchForm />
      </section>

      <section aria-labelledby="themen">
        <h2 id="themen" className="mb-5 text-3xl font-bold">
          Wobei brauchen Sie Hilfe?
        </h2>
        <ul className="grid gap-5 sm:grid-cols-2">
          {categories.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/kategorie/${c.slug}`}
                className="flex h-full items-start gap-4 rounded-2xl border-[3px] border-primary bg-surface p-6 no-underline hover:bg-primary-soft"
              >
                <span className="rounded-xl bg-primary p-3 text-white">
                  <Icon name={c.icon} className="h-10 w-10" />
                </span>
                <span>
                  <span className="block text-2xl font-bold text-primary underline">{c.title}</span>
                  <span className="block text-foreground">{c.description}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="kostenlos">
        <h2 id="kostenlos" className="mb-5 text-3xl font-bold">
          Kostenlos ausprobieren
        </h2>
        <ul className="grid gap-5 md:grid-cols-2">
          {free.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </ul>
      </section>
    </div>
  );
}

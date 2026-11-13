import type { Metadata } from "next";
import { Suspense } from "react";
import { searchGuides } from "@/content/guides";
import { GuideCard } from "@/components/GuideCard";
import { SearchForm } from "@/components/SearchForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = { title: "Suchen" };

export default function SearchPage({ searchParams }: PageProps<"/suche">) {
  return (
    <div>
      <Breadcrumbs items={[{ href: "/", label: "Start" }, { label: "Suchen" }]} />
      <h1 className="mb-8 text-[2rem] font-bold sm:text-5xl">Suchen</h1>
      <Suspense fallback={<SearchForm />}>
        <Results searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

async function Results({ searchParams }: { searchParams: PageProps<"/suche">["searchParams"] }) {
  const raw = (await searchParams).q;
  const q = (Array.isArray(raw) ? raw[0] : raw) ?? "";
  const results = searchGuides(q);
  return (
    <>
      <SearchForm defaultValue={q} />
      {q && (
        <section aria-live="polite" className="mt-10">
          <h2 className="mb-6 text-2xl font-bold">
            {results.length === 0
              ? `Leider nichts gefunden zu „${q}“. Versuchen Sie ein anderes Wort oder schauen Sie unter „Themen“.`
              : `${results.length} ${results.length === 1 ? "Anleitung" : "Anleitungen"} zu „${q}“`}
          </h2>
          <ul className="grid gap-4 lg:grid-cols-2">
            {results.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

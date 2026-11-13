import type { Metadata } from "next";
import { Suspense } from "react";
import { searchGuides } from "@/content/guides";
import { GuideCard } from "@/components/GuideCard";
import { SearchForm } from "@/components/SearchForm";

export const metadata: Metadata = { title: "Suchen" };

export default function SearchPage({ searchParams }: PageProps<"/suche">) {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Anleitung suchen</h1>
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
        <section aria-live="polite" className="space-y-5">
          <h2 className="text-2xl font-bold">
            {results.length === 0
              ? `Leider nichts gefunden zu „${q}“. Versuchen Sie ein anderes Wort.`
              : `${results.length} ${results.length === 1 ? "Anleitung" : "Anleitungen"} gefunden`}
          </h2>
          <ul className="grid gap-5 md:grid-cols-2">
            {results.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

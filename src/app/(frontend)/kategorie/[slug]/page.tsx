import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getCategory, getGuidesByCategory, getSubtopics } from "@/lib/content";
import { GuideCard } from "@/components/GuideCard";
import { SubtopicTile } from "@/components/SubtopicTile";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Icon } from "@/components/Icon";

export async function generateMetadata({ params }: PageProps<"/kategorie/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: (await getCategory(slug))?.title };
}

// params hinter Suspense lesen – so bleibt die Navigation sofort (Next.js "Instant Navigation").
export default function CategoryPage({ params }: PageProps<"/kategorie/[slug]">) {
  return (
    <Suspense fallback={<p className="text-xl">Wird geladen …</p>}>
      <CategoryContent params={params} />
    </Suspense>
  );
}

async function CategoryContent({ params }: { params: PageProps<"/kategorie/[slug]">["params"] }) {
  const { slug } = await params;
  const category = await getCategory(slug);
  if (!category) notFound();
  const [list, subtopics] = await Promise.all([getGuidesByCategory(slug), getSubtopics(slug)]);
  const withSubtopic = subtopics
    .map((s) => ({ s, count: list.filter((g) => g.subtopic === s.slug).length }))
    .filter((x) => x.count > 0);
  const loose = list.filter((g) => !g.subtopic || !withSubtopic.some((x) => x.s.slug === g.subtopic));

  return (
    <div>
      <Breadcrumbs items={[{ href: "/", label: "Start" }, { href: "/themen", label: "Themen" }, { label: category.title }]} />
      <div className="mb-10 flex items-center gap-5">
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-signal sm:h-20 sm:w-20">
          <Icon name={category.icon} className="h-11 w-11" />
        </span>
        <div>
          <h1 className="text-[2rem] font-bold sm:text-5xl">{category.title}</h1>
          <p className="mt-2 text-xl text-ink-soft">{category.description}</p>
        </div>
      </div>

      {list.length === 0 && <p className="text-xl">Hier kommen bald neue Anleitungen.</p>}

      {withSubtopic.length > 0 && (
        <section aria-labelledby="unterthemen" className="mb-12">
          <h2 id="unterthemen" className="mb-5 text-2xl font-bold">Wobei brauchen Sie Hilfe?</h2>
          <ul className="grid gap-4 lg:grid-cols-2">
            {withSubtopic.map(({ s, count }) => (
              <SubtopicTile key={s.slug} subtopic={s} count={count} />
            ))}
          </ul>
        </section>
      )}

      {loose.length > 0 && (
        <section aria-labelledby="weitere">
          {withSubtopic.length > 0 && <h2 id="weitere" className="mb-5 text-2xl font-bold">Weitere Anleitungen</h2>}
          <ul className="grid gap-4 lg:grid-cols-2">
            {loose.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

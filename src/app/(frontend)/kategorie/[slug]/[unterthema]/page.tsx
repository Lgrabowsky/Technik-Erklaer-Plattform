import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getCategory, getGuidesByCategory, getSubtopic, getSubtopics } from "@/lib/content";
import { GuideCard } from "@/components/GuideCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";

type Props = PageProps<"/kategorie/[slug]/[unterthema]">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, unterthema } = await params;
  return { title: (await getSubtopic(slug, unterthema))?.title };
}

export default function SubtopicPage({ params }: Props) {
  return (
    <Suspense fallback={<p className="text-xl">Wird geladen …</p>}>
      <SubtopicContent params={params} />
    </Suspense>
  );
}

async function SubtopicContent({ params }: { params: Props["params"] }) {
  const { slug, unterthema } = await params;
  const [category, subtopic] = await Promise.all([getCategory(slug), getSubtopic(slug, unterthema)]);
  if (!category || !subtopic) notFound();
  const [list, siblings] = await Promise.all([getGuidesByCategory(slug, unterthema), getSubtopics(slug)]);
  const all = await getGuidesByCategory(slug);
  const others = siblings.filter((s) => s.slug !== unterthema && all.some((g) => g.subtopic === s.slug));

  return (
    <div>
      <Breadcrumbs
        items={[
          { href: "/", label: "Start" },
          { href: "/themen", label: "Themen" },
          { href: `/kategorie/${category.slug}`, label: category.title },
          { label: subtopic.title },
        ]}
      />
      <p className="mb-2 text-lg font-semibold text-muted">{category.title}</p>
      <h1 className="text-[2rem] font-bold sm:text-5xl">{subtopic.title}</h1>
      {subtopic.description && <p className="mt-3 mb-10 text-xl text-ink-soft">{subtopic.description}</p>}
      {list.length === 0 ? (
        <p className="text-xl">Hier kommen bald neue Anleitungen.</p>
      ) : (
        <ul className="mt-8 grid gap-4 lg:grid-cols-2">
          {list.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </ul>
      )}
      {others.length > 0 && (
        <nav aria-labelledby="mehr" className="mt-14">
          <h2 id="mehr" className="mb-4 text-2xl font-bold">Mehr zu {category.title}</h2>
          <ul className="flex flex-wrap gap-3">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/kategorie/${category.slug}/${s.slug}`}
                  className="inline-flex min-h-12 items-center rounded-full bg-surface px-5 text-lg font-semibold text-ink no-underline ring-ink hover:ring-2"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { categories, getCategory } from "@/content/categories";
import { getGuidesByCategory } from "@/content/guides";
import { GuideCard } from "@/components/GuideCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Icon } from "@/components/Icon";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/kategorie/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: getCategory(slug)?.title };
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
  const category = getCategory(slug);
  if (!category) notFound();
  const list = getGuidesByCategory(slug);

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
      {list.length === 0 ? (
        <p className="text-xl">Hier kommen bald neue Anleitungen.</p>
      ) : (
        <ul className="grid gap-4 lg:grid-cols-2">
          {list.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </ul>
      )}
    </div>
  );
}

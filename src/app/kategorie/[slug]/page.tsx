import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory } from "@/content/categories";
import { getGuidesByCategory } from "@/content/guides";
import { GuideCard } from "@/components/GuideCard";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/kategorie/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: getCategory(slug)?.title };
}

export default async function CategoryPage({ params }: PageProps<"/kategorie/[slug]">) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const list = getGuidesByCategory(slug);

  return (
    <div className="space-y-6">
      <p>
        <Link href="/" className="text-lg font-bold text-primary underline">
          ← Zurück zur Startseite
        </Link>
      </p>
      <h1 className="text-4xl font-bold">{category.title}</h1>
      <p className="text-xl">{category.description}</p>
      {list.length === 0 ? (
        <p className="text-xl">Hier kommen bald neue Anleitungen.</p>
      ) : (
        <ul className="grid gap-5 md:grid-cols-2">
          {list.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </ul>
      )}
    </div>
  );
}

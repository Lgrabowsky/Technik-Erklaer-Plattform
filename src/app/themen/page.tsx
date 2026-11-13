import type { Metadata } from "next";
import { categories } from "@/content/categories";
import { CategoryTile } from "@/components/CategoryTile";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = { title: "Themen" };

export default function TopicsPage() {
  return (
    <div>
      <Breadcrumbs items={[{ href: "/", label: "Start" }, { label: "Themen" }]} />
      <h1 className="mb-3 text-[2rem] font-bold sm:text-5xl">Alle Themen</h1>
      <p className="mb-10 max-w-3xl text-xl text-ink-soft">Wählen Sie ein Thema. Danach sehen Sie alle passenden Anleitungen.</p>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <CategoryTile key={c.slug} category={c} />
        ))}
      </ul>
    </div>
  );
}

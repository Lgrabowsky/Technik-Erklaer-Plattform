import Link from "next/link";
import type { Category } from "@/content/types";
import { getGuidesByCategory } from "@/content/guides";
import { Icon } from "./Icon";

export function CategoryTile({ category }: { category: Category }) {
  const count = getGuidesByCategory(category.slug).length;
  return (
    <li>
      <Link
        href={`/kategorie/${category.slug}`}
        className="group flex h-full flex-col gap-6 rounded-4xl bg-surface p-7 no-underline transition-colors hover:bg-ink"
      >
        <span className="flex items-start justify-between">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-signal text-ink">
            <Icon name={category.icon} className="h-9 w-9" />
          </span>
          <span className="text-base font-semibold text-muted group-hover:text-white">
            {count} {count === 1 ? "Anleitung" : "Anleitungen"}
          </span>
        </span>
        <span>
          <span className="mb-1 block text-2xl font-bold text-ink group-hover:text-white">
            {category.title}
          </span>
          <span className="block text-ink-soft group-hover:text-white">{category.description}</span>
        </span>
      </Link>
    </li>
  );
}

import Link from "next/link";
import type { Subtopic } from "@/content/types";
import { Icon } from "./Icon";

/** Unterthema als große Kachel, z. B. „Deutschlandticket · 2 Anleitungen“ */
export function SubtopicTile({ subtopic, count }: { subtopic: Subtopic; count: number }) {
  return (
    <li>
      <Link
        href={`/kategorie/${subtopic.category}/${subtopic.slug}`}
        className="group flex h-full items-center gap-5 rounded-4xl bg-surface p-5 no-underline ring-ink transition-shadow hover:ring-2 sm:p-7"
      >
        <span className="flex-1">
          <span className="mb-1 block text-[1.35rem] font-bold text-ink sm:text-2xl">{subtopic.title}</span>
          {subtopic.description && <span className="block text-ink-soft">{subtopic.description}</span>}
          <span className="mt-2 block text-base font-semibold text-muted">
            {count} {count === 1 ? "Anleitung" : "Anleitungen"}
          </span>
        </span>
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-bg text-ink transition-colors group-hover:bg-signal" aria-hidden="true">
          <Icon name="arrow-right" className="h-7 w-7" />
        </span>
      </Link>
    </li>
  );
}

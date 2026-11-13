import Link from "next/link";
import type { Guide } from "@/content/types";
import { AccessBadge, DifficultyMeter, deviceList } from "./GuideMeta";
import { Icon } from "./Icon";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <li>
      <Link
        href={`/anleitung/${guide.slug}`}
        className="group flex h-full items-center gap-5 rounded-4xl bg-surface p-6 no-underline ring-ink transition-shadow hover:ring-2 sm:p-7"
      >
        <span className="flex-1">
          <span className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-base text-muted">
            <AccessBadge access={guide.access} />
            <DifficultyMeter difficulty={guide.difficulty} />
            <span>{guide.minutes} Min.</span>
          </span>
          <span className="mb-2 block text-2xl font-bold text-ink">{guide.title}</span>
          <span className="block text-ink-soft">{guide.summary}</span>
          <span className="mt-3 block text-base text-muted">Für {deviceList(guide.devices)}</span>
        </span>
        <span
          className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-bg text-ink transition-colors group-hover:bg-signal sm:flex"
          aria-hidden="true"
        >
          <Icon name="arrow-right" className="h-7 w-7" />
        </span>
      </Link>
    </li>
  );
}

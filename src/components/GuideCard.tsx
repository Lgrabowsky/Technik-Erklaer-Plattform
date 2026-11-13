import Link from "next/link";
import type { Guide } from "@/content/types";
import { DeviceList, DifficultyLabel, AccessBadge } from "./GuideMeta";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <li>
      <Link
        href={`/anleitung/${guide.slug}`}
        className="block h-full rounded-2xl border-2 border-border bg-surface p-6 no-underline hover:border-primary hover:bg-primary-soft"
      >
        <div className="mb-2">
          <AccessBadge access={guide.access} />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-primary underline">{guide.title}</h3>
        <p className="mb-3">{guide.summary}</p>
        <p className="text-muted">
          <DifficultyLabel difficulty={guide.difficulty} /> · ca. {guide.minutes} Minuten ·{" "}
          <DeviceList devices={guide.devices} />
        </p>
      </Link>
    </li>
  );
}

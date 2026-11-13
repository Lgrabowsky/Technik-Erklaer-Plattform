import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getGuide, guides } from "@/content/guides";
import { getCategory } from "@/content/categories";
import type { Guide } from "@/content/types";
import { canAccess, getEntitlements } from "@/lib/entitlements";
import { StepViewer } from "@/components/StepViewer";
import { StepContent } from "@/components/StepContent";
import { Paywall } from "@/components/Paywall";
import { AccessBadge, DeviceList, DifficultyLabel } from "@/components/GuideMeta";
import { Icon } from "@/components/Icon";
import { card } from "@/components/ui";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps<"/anleitung/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  return { title: guide?.title, description: guide?.summary };
}

export default async function GuidePage({ params }: PageProps<"/anleitung/[slug]">) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const category = getCategory(guide.category);

  return (
    <article className="space-y-8">
      <p className="no-print">
        <Link href={`/kategorie/${guide.category}`} className="text-lg font-bold text-primary underline">
          ← Zurück zu „{category?.title}“
        </Link>
      </p>

      <header className="space-y-3">
        <AccessBadge access={guide.access} />
        <h1 className="text-4xl font-bold">{guide.title}</h1>
        <p className="text-xl">{guide.summary}</p>
        <dl className="flex flex-wrap gap-x-8 gap-y-1 text-lg">
          <div>
            <dt className="inline font-bold">Schwierigkeit: </dt>
            <dd className="inline"><DifficultyLabel difficulty={guide.difficulty} /></dd>
          </div>
          <div>
            <dt className="inline font-bold">Dauer: </dt>
            <dd className="inline">ca. {guide.minutes} Minuten</dd>
          </div>
          <div>
            <dt className="inline font-bold">Für: </dt>
            <dd className="inline"><DeviceList devices={guide.devices} /></dd>
          </div>
        </dl>
      </header>

      <section aria-labelledby="vorbereitung" className={card}>
        <h2 id="vorbereitung" className="mb-3 text-2xl font-bold">Das brauchen Sie</h2>
        <ul className="space-y-2 text-xl">
          {guide.needs.map((n) => (
            <li key={n} className="flex gap-3">
              <Icon name="check" className="mt-1 h-7 w-7 shrink-0 text-success" /> {n}
            </li>
          ))}
        </ul>
      </section>

      <Suspense fallback={<p className="text-xl">Anleitung wird geladen …</p>}>
        <GuideBody guide={guide} />
      </Suspense>
    </article>
  );
}

/** Liest die Freischaltungen (Cookie) – deshalb zur Anfrage-Zeit und hinter Suspense. */
async function GuideBody({ guide }: { guide: Guide }) {
  const entitlements = await getEntitlements();

  if (canAccess(guide, entitlements)) {
    return (
      <>
        {guide.access === "premium" && (
          <p className="rounded-xl bg-success-soft p-4 text-lg font-bold text-success">
            <Icon name="check" className="mr-2 inline h-6 w-6" />
            Freigeschaltet – viel Erfolg!
          </p>
        )}
        <StepViewer steps={guide.steps} takeaways={guide.takeaways} />
      </>
    );
  }

  // Nicht freigeschaltet: Nur Schritt 1 als Vorschau. Die übrigen Schritte
  // werden gar nicht erst an den Browser geschickt.
  const preview = guide.steps[0];
  return (
    <>
      <section aria-labelledby="vorschau" className={card}>
        <p className="mb-2 text-lg font-bold">Schritt 1 von {guide.steps.length} (Vorschau)</p>
        <h2 id="vorschau" className="mb-5 text-3xl font-bold">{preview.title}</h2>
        <StepContent step={preview} />
      </section>
      <Paywall guide={guide} />
    </>
  );
}

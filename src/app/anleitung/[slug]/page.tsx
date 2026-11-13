import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { formatChecked, getFlows, getGuide, guides, stepCount } from "@/content/guides";
import { getCategory } from "@/content/categories";
import type { Guide } from "@/content/types";
import { canAccess, getEntitlements } from "@/lib/entitlements";
import { StepViewer } from "@/components/StepViewer";
import { StepContent } from "@/components/StepContent";
import { Paywall } from "@/components/Paywall";
import { AccessBadge, DifficultyMeter, deviceList } from "@/components/GuideMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Icon } from "@/components/Icon";
import { panel } from "@/components/ui";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps<"/anleitung/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  return { title: guide?.title, description: guide?.summary };
}

// Die URL-Daten (params) werden hinter einer Suspense-Grenze gelesen, damit die
// Navigation sofort reagiert (Next.js "Instant Navigation").
export default function GuidePage({ params }: PageProps<"/anleitung/[slug]">) {
  return (
    <Suspense fallback={<p className="text-xl">Anleitung wird geladen …</p>}>
      <GuideContent params={params} />
    </Suspense>
  );
}

async function GuideContent({ params }: { params: PageProps<"/anleitung/[slug]">["params"] }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const category = getCategory(guide.category);

  return (
    <article>
      <Breadcrumbs
        items={[
          { href: "/", label: "Start" },
          { href: `/kategorie/${guide.category}`, label: category?.title ?? "Thema" },
          { label: "Anleitung" },
        ]}
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_22rem]">
        <header>
          <div className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-lg text-ink-soft">
            <AccessBadge access={guide.access} />
            <DifficultyMeter difficulty={guide.difficulty} />
            <span>ca. {guide.minutes} Minuten</span>
            <span>{deviceList(guide.devices)}</span>
          </div>
          <h1 className="mb-4 text-[2rem] font-bold sm:text-5xl">{guide.title}</h1>
          <p className="text-xl text-ink-soft">{guide.summary}</p>
          <p className="mt-4 text-base text-muted">Zuletzt geprüft: {formatChecked(guide.checked)}</p>
        </header>

        <aside aria-labelledby="vorbereitung" className="self-start rounded-4xl border-2 border-ink p-6">
          <h2 id="vorbereitung" className="mb-4 text-xl font-bold">Das brauchen Sie</h2>
          <ul className="space-y-3">
            {guide.needs.map((n) => (
              <li key={n} className="flex gap-3">
                <Icon name="check" className="mt-1 h-6 w-6 shrink-0" /> {n}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="mt-10 space-y-6">
        <Suspense fallback={<p className="text-xl">Anleitung wird geladen …</p>}>
          <GuideBody guide={guide} />
        </Suspense>
      </div>
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
          <p className="inline-flex items-center gap-2 rounded-full bg-signal px-5 py-2 text-lg font-semibold">
            <Icon name="check" className="h-6 w-6" /> Freigeschaltet
          </p>
        )}
        <StepViewer flows={getFlows(guide)} takeaways={guide.takeaways} />
      </>
    );
  }

  // Nicht freigeschaltet: Nur Schritt 1 als Vorschau. Die übrigen Schritte
  // werden gar nicht erst an den Browser geschickt.
  const preview = getFlows(guide)[0].steps[0];
  return (
    <>
      <section aria-labelledby="vorschau" className={panel}>
        <p className="mb-3 text-lg font-semibold">
          Schritt <span className="text-2xl font-bold">01</span>
          <span className="text-muted"> / {String(stepCount(guide)).padStart(2, "0")} · Vorschau</span>
        </p>
        <h2 id="vorschau" className="mb-6 text-[1.6rem] font-bold sm:text-4xl">{preview.title}</h2>
        <StepContent step={preview} />
      </section>
      <Paywall guide={guide} />
    </>
  );
}

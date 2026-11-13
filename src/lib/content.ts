import "server-only";
import { cacheLife, cacheTag } from "next/cache";
import { getPayload } from "payload";
import config from "@payload-config";
import type { Category, Flow, Guide, Step, Subtopic } from "@/content/types";
import type { Guide as GuideDoc, Media } from "@/payload-types";

/**
 * Einzige Stelle, an der die Website Inhalte aus der Datenbank liest.
 * Alles wird zwischengespeichert und nach jeder Änderung im Admin-Bereich
 * automatisch neu geladen (siehe src/payload/hooks.ts).
 */

export type Pricing = {
  showSubscription: boolean;
  showSinglePurchase: boolean;
  subscription: { name: string; monthlyCents: number; yearlyCents: number; benefits: string[] };
  defaultGuideCents: number;
  taxNote: string;
};

export type Content = {
  categories: Category[];
  subtopics: Subtopic[];
  guides: Guide[];
  pricing: Pricing;
  home: { eyebrow: string; headline: string; quickLinks: { label: string; href: string }[] };
};

const cents = (euro: number | null | undefined) => (euro ? Math.round(euro * 100) : 0);

function slugOf(rel: unknown): string | undefined {
  return rel && typeof rel === "object" && "slug" in rel ? String((rel as { slug: string }).slug) : undefined;
}

type StepDoc = NonNullable<GuideDoc["steps"]>[number];

function toStep(s: StepDoc): Step {
  const img = s.image && typeof s.image === "object" ? (s.image as Media) : undefined;
  return {
    title: s.title,
    text: s.text,
    tip: s.tip || undefined,
    warning: s.warning || undefined,
    image: img?.url ? { src: img.sizes?.gross?.url || img.url, alt: img.alt } : undefined,
  };
}

function toGuide(d: GuideDoc): Guide {
  const variants =
    d.mode === "variants"
      ? (d.variants ?? []).map((v) => ({
          device: v.device ?? undefined,
          label: v.label || undefined,
          hint: v.hint || undefined,
          unverified: v.unverified ?? undefined,
          steps: (v.steps ?? []).map(toStep),
        }))
      : undefined;
  const chooser =
    d.mode === "variants" && d.chooser?.question
      ? {
          question: d.chooser.question,
          hint: d.chooser.hint ?? "",
          switchLabel: d.chooser.switchLabel || "Andere Auswahl",
          icon: d.chooser.icon ?? undefined,
        }
      : undefined;
  return {
    id: d.id,
    slug: d.slug,
    title: d.title,
    summary: d.summary,
    category: slugOf(d.category) ?? "",
    subtopic: slugOf(d.subtopic),
    app: d.app || undefined,
    devices: d.devices,
    difficulty: d.difficulty,
    minutes: d.minutes,
    access: d.access,
    priceCents: d.price ? cents(d.price) : undefined,
    needs: (d.needs ?? []).map((n) => n.text),
    steps: d.mode === "variants" ? undefined : (d.steps ?? []).map(toStep),
    variants,
    chooser,
    keywords: d.keywords ?? [],
    checked: (d.checked ?? d.updatedAt).slice(0, 7),
    related: (d.related ?? []).map(slugOf).filter((s): s is string => Boolean(s)),
    takeaways: (d.takeaways ?? []).map((t) => t.text),
  };
}

export async function getContent(): Promise<Content> {
  "use cache";
  cacheTag("inhalte");
  // Spätestens alle 5 Minuten frisch; Änderungen im Admin-Bereich wirken sofort (revalidateTag)
  cacheLife({ stale: 60, revalidate: 300, expire: 86400 });

  const payload = await getPayload({ config });
  const [cats, subs, docs, settings, home] = await Promise.all([
    payload.find({ collection: "categories", limit: 500, sort: "order", depth: 0 }),
    payload.find({ collection: "subtopics", limit: 1000, sort: "order", depth: 1 }),
    payload.find({ collection: "guides", limit: 2000, sort: "order", depth: 1, draft: false, where: { _status: { equals: "published" } } }),
    payload.findGlobal({ slug: "settings", depth: 0 }),
    payload.findGlobal({ slug: "homepage", depth: 1 }),
  ]);

  return {
    categories: cats.docs.map((c) => ({ slug: c.slug, title: c.title, description: c.description, icon: c.icon })),
    subtopics: subs.docs.map((s) => ({
      slug: s.slug,
      title: s.title,
      description: s.description || undefined,
      category: slugOf(s.category) ?? "",
    })),
    guides: docs.docs.map(toGuide),
    pricing: {
      showSubscription: settings.showSubscription ?? true,
      showSinglePurchase: settings.showSinglePurchase ?? true,
      subscription: {
        name: settings.subscriptionName || "Alles-Zugang",
        monthlyCents: cents(settings.monthlyPrice ?? 6.99),
        yearlyCents: cents(settings.yearlyPrice),
        benefits: (settings.benefits ?? []).map((b) => b.text),
      },
      defaultGuideCents: cents(settings.defaultGuidePrice ?? 2.99),
      taxNote: settings.taxNote ?? "",
    },
    home: {
      eyebrow: home.eyebrow ?? "",
      headline: home.headline || "Was möchten Sie heute lernen?",
      quickLinks: (home.quickLinks ?? [])
        .map((q) => ({ label: q.label, slug: slugOf(q.guide) }))
        .filter((q) => q.slug)
        .map((q) => ({ label: q.label, href: `/anleitung/${q.slug}` })),
    },
  };
}

export async function getCategories() {
  return (await getContent()).categories;
}

export async function getCategory(slug: string) {
  return (await getContent()).categories.find((c) => c.slug === slug);
}

export async function getSubtopics(category: string) {
  return (await getContent()).subtopics.filter((s) => s.category === category);
}

export async function getSubtopic(category: string, slug: string) {
  return (await getContent()).subtopics.find((s) => s.category === category && s.slug === slug);
}

export async function getGuides() {
  return (await getContent()).guides;
}

export async function getGuide(slug: string) {
  return (await getContent()).guides.find((g) => g.slug === slug);
}

export async function getGuidesByCategory(category: string, subtopic?: string) {
  return (await getContent()).guides.filter(
    (g) => g.category === category && (subtopic === undefined || g.subtopic === subtopic),
  );
}

export async function getPricing() {
  return (await getContent()).pricing;
}

export function guidePriceCents(guide: Guide, pricing: Pricing) {
  return guide.priceCents ?? pricing.defaultGuideCents;
}

/** Alle durchklickbaren Abläufe einer Anleitung (einer, oder einer je Gerät) */
export function getFlows(guide: Guide): Flow[] {
  if (guide.variants && guide.variants.length > 0) return guide.variants;
  return [{ steps: guide.steps ?? [] }];
}

/** Anzahl der Schritte (bei Varianten: die längste Variante) */
export function stepCount(guide: Guide) {
  return Math.max(0, ...getFlows(guide).map((f) => f.steps.length));
}

export function formatChecked(checked: string) {
  const [y, m] = checked.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1).toLocaleDateString("de-DE", { month: "long", year: "numeric" });
}

function normalize(s: string) {
  return s.toLowerCase().replace(/[-–]/g, " ");
}

export async function searchGuides(query: string) {
  const words = normalize(query).split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];
  return (await getGuides()).filter((g) => {
    const haystack = normalize(
      [g.title, g.summary, g.app ?? "", ...(g.keywords ?? []), ...getFlows(g).flatMap((f) => f.steps.map((s) => s.title))].join(" "),
    );
    return words.every((w) => haystack.includes(w));
  });
}

/**
 * Übernimmt die ursprünglichen Anleitungen, Themen und Unterthemen in die Datenbank.
 * Aufruf: npm run seed
 * Kann gefahrlos mehrfach laufen: Vorhandene Einträge (gleiche Adresse/Slug)
 * werden NICHT überschrieben – Änderungen aus dem Admin-Bereich bleiben erhalten.
 */
import { getPayload } from "payload";
import config from "@payload-config";
import { categories } from "./categories";
import { guides } from "./guides";
import { seedQuickLinks, seedSubtopics } from "./subtopics";
import type { Step } from "../content/types";

const payload = await getPayload({ config });

async function findId(collection: "categories" | "subtopics" | "guides", slug: string) {
  const r = await payload.find({ collection, where: { slug: { equals: slug } }, limit: 1, depth: 0, draft: true });
  return r.docs[0]?.id as number | undefined;
}

const toSteps = (steps: Step[] = []) =>
  steps.map((s) => ({ title: s.title, text: s.text, tip: s.tip, warning: s.warning }));

let created = 0;

const categoryIds: Record<string, number> = {};
for (const [i, c] of categories.entries()) {
  let id = await findId("categories", c.slug);
  if (!id) {
    id = (await payload.create({ collection: "categories", data: { ...c, order: (i + 1) * 10 } })).id;
    created++;
  }
  categoryIds[c.slug] = id;
}

const subtopicOfGuide: Record<string, number> = {};
for (const [i, s] of seedSubtopics.entries()) {
  let id = await findId("subtopics", s.slug);
  if (!id) {
    id = (
      await payload.create({
        collection: "subtopics",
        data: { title: s.title, slug: s.slug, description: s.description, category: categoryIds[s.category], order: (i + 1) * 10 },
      })
    ).id;
    created++;
  }
  for (const g of s.guides) subtopicOfGuide[g] = id;
}

const guideIds: Record<string, number> = {};
const newGuides: string[] = [];
for (const [i, g] of guides.entries()) {
  let id = await findId("guides", g.slug);
  if (!id) {
    const doc = await payload.create({
      collection: "guides",
      draft: false,
      data: {
        _status: "published",
        title: g.title,
        slug: g.slug,
        summary: g.summary,
        category: categoryIds[g.category],
        subtopic: subtopicOfGuide[g.slug],
        app: g.app,
        devices: g.devices,
        difficulty: g.difficulty,
        minutes: g.minutes,
        access: g.access,
        price: g.priceCents ? g.priceCents / 100 : undefined,
        needs: g.needs.map((text) => ({ text })),
        takeaways: (g.takeaways ?? []).map((text) => ({ text })),
        mode: g.variants?.length ? "variants" : "steps",
        steps: toSteps(g.steps),
        chooser: g.chooser,
        variants: (g.variants ?? []).map((v) => ({
          device: v.device,
          label: v.label,
          hint: v.hint,
          unverified: v.unverified ?? false,
          steps: toSteps(v.steps),
        })),
        keywords: g.keywords ?? [],
        checked: new Date(`${g.checked}-01T12:00:00Z`).toISOString(),
        order: (i + 1) * 10,
      },
    });
    id = doc.id;
    newGuides.push(g.slug);
    created++;
  }
  guideIds[g.slug] = id;
}

// Verknüpfungen erst setzen, wenn alle Anleitungen existieren
for (const g of guides) {
  if (!newGuides.includes(g.slug) || !g.related?.length) continue;
  await payload.update({
    collection: "guides",
    id: guideIds[g.slug],
    draft: false,
    data: { _status: "published", related: g.related.map((s) => guideIds[s]).filter(Boolean) },
  });
}

const home = await payload.findGlobal({ slug: "homepage" });
if (!home.quickLinks?.length) {
  await payload.updateGlobal({
    slug: "homepage",
    data: { quickLinks: seedQuickLinks.map((q) => ({ label: q.label, guide: guideIds[q.guide] })) },
  });
}
// Preise mit Standardwerten anlegen, falls noch nie gespeichert
await payload.updateGlobal({ slug: "settings", data: await payload.findGlobal({ slug: "settings" }) });

payload.logger.info(`Fertig: ${created} neue Einträge, ${guides.length} Anleitungen insgesamt.`);
process.exit(0);

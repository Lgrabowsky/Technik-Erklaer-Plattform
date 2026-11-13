import type { CollectionConfig } from "payload";
import { isAdmin } from "../access";
import { orderField, slugField } from "../fields";
import { contentHooks } from "../hooks";

/** Unterpunkte innerhalb eines Themengebiets, z. B. Bus & Bahn → Deutschlandticket */
export const Subtopics: CollectionConfig = {
  slug: "subtopics",
  labels: { singular: "Unterthema", plural: "Unterthemen" },
  admin: {
    useAsTitle: "title",
    group: "Inhalte",
    defaultColumns: ["title", "category", "order"],
    description: "Unterpunkte innerhalb eines Themengebiets, z. B. „Bus & Bahn“ → „Deutschlandticket“.",
  },
  defaultSort: "order",
  access: { read: isAdmin, create: isAdmin, update: isAdmin, delete: isAdmin },
  hooks: contentHooks,
  fields: [
    { name: "title", label: "Titel", type: "text", required: true },
    {
      name: "category",
      label: "Gehört zum Themengebiet",
      type: "relationship",
      relationTo: "categories",
      required: true,
      index: true,
    },
    { name: "description", label: "Kurzbeschreibung", type: "textarea" },
    slugField(),
    orderField,
  ],
};

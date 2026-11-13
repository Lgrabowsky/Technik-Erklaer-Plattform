import type { CollectionConfig } from "payload";
import { isAdmin } from "../access";
import { orderField, slugField } from "../fields";
import { contentHooks } from "../hooks";

export const Categories: CollectionConfig = {
  slug: "categories",
  labels: { singular: "Themengebiet", plural: "Themengebiete" },
  admin: {
    useAsTitle: "title",
    group: "Inhalte",
    defaultColumns: ["title", "description", "order"],
    description: "Die großen Themen auf der Startseite, z. B. „Bus & Bahn“.",
  },
  defaultSort: "order",
  access: { read: isAdmin, create: isAdmin, update: isAdmin, delete: isAdmin },
  hooks: contentHooks,
  fields: [
    { name: "title", label: "Titel", type: "text", required: true },
    { name: "description", label: "Kurzbeschreibung", type: "textarea", required: true },
    {
      name: "icon",
      label: "Symbol",
      type: "select",
      required: true,
      defaultValue: "phone",
      options: [
        { label: "Smartphone", value: "phone" },
        { label: "Herz (Gesundheit)", value: "heart" },
        { label: "Zug", value: "train" },
        { label: "Bankkarte", value: "card" },
        { label: "Schild (Sicherheit)", value: "shield" },
      ],
    },
    slugField(),
    orderField,
    {
      name: "subtopics",
      label: "Unterthemen",
      type: "join",
      collection: "subtopics",
      on: "category",
      defaultSort: "order",
      admin: { description: "Unterthemen legen Sie unter „Unterthemen“ an." },
    },
  ],
};

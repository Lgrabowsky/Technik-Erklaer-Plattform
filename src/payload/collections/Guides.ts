import type { CollectionConfig } from "payload";
import { isAdmin } from "../access";
import { orderField, slugField, stepsField } from "../fields";
import { contentHooks } from "../hooks";

const deviceOptions = [
  { label: "Android-Handy / -Tablet", value: "android" },
  { label: "iPhone / iPad", value: "iphone" },
  { label: "Computer", value: "computer" },
];

export const Guides: CollectionConfig = {
  slug: "guides",
  labels: { singular: "Anleitung", plural: "Anleitungen" },
  admin: {
    useAsTitle: "title",
    group: "Inhalte",
    defaultColumns: ["title", "category", "subtopic", "access", "_status", "checked"],
    listSearchableFields: ["title", "summary", "app"],
    description: "Alle Schritt-für-Schritt-Anleitungen. „Entwurf speichern“ = noch nicht sichtbar, „Veröffentlichen“ = sofort online.",
    preview: (doc) => (doc?.slug ? `/anleitung/${doc.slug}` : null),
  },
  defaultSort: "order",
  versions: { drafts: true, maxPerDoc: 30 },
  access: { read: isAdmin, create: isAdmin, update: isAdmin, delete: isAdmin, readVersions: isAdmin },
  hooks: contentHooks,
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Allgemein",
          fields: [
            { name: "title", label: "Titel", type: "text", required: true },
            { name: "summary", label: "Kurzbeschreibung", type: "textarea", required: true },
            {
              type: "row",
              fields: [
                {
                  name: "category",
                  label: "Themengebiet",
                  type: "relationship",
                  relationTo: "categories",
                  required: true,
                  index: true,
                },
                {
                  name: "subtopic",
                  label: "Unterthema (optional)",
                  type: "relationship",
                  relationTo: "subtopics",
                  index: true,
                  filterOptions: ({ data }) => (data?.category ? { category: { equals: data.category } } : true),
                  admin: { description: "Nur Unterthemen des gewählten Themengebiets." },
                },
              ],
            },
            {
              name: "app",
              label: "Gilt für (App / Webseite)",
              type: "text",
              admin: { description: "Genau eine App, z. B. „DB Navigator“. Wird als „Gilt für:“ angezeigt." },
            },
            {
              type: "row",
              fields: [
                { name: "devices", label: "Geräte", type: "select", hasMany: true, required: true, options: deviceOptions },
                {
                  name: "difficulty",
                  label: "Schwierigkeit",
                  type: "select",
                  required: true,
                  defaultValue: "leicht",
                  options: [
                    { label: "leicht", value: "leicht" },
                    { label: "mittel", value: "mittel" },
                    { label: "anspruchsvoll", value: "anspruchsvoll" },
                  ],
                },
                { name: "minutes", label: "Dauer (Minuten)", type: "number", required: true, min: 1, defaultValue: 10 },
              ],
            },
            {
              name: "needs",
              label: "Das brauchen Sie",
              type: "array",
              labels: { singular: "Punkt", plural: "Punkte" },
              fields: [{ name: "text", label: "Text", type: "text", required: true }],
            },
            {
              name: "takeaways",
              label: "Das haben Sie gelernt (am Ende)",
              type: "array",
              labels: { singular: "Punkt", plural: "Punkte" },
              fields: [{ name: "text", label: "Text", type: "text", required: true }],
            },
          ],
        },
        {
          label: "Schritte",
          description:
            "Gleicher Ablauf auf allen Geräten → „Ein Ablauf für alle“. Unterschiedlicher Ablauf (z. B. Android/iPhone oder je Krankenkasse) → „Mehrere Varianten“.",
          fields: [
            {
              name: "mode",
              label: "Aufbau",
              type: "radio",
              required: true,
              defaultValue: "steps",
              options: [
                { label: "Ein Ablauf für alle", value: "steps" },
                { label: "Mehrere Varianten (Gerät, Krankenkasse …)", value: "variants" },
              ],
            },
            stepsField((data) => data?.mode !== "variants"),
            {
              name: "chooser",
              label: "Auswahl-Frage vor den Schritten",
              type: "group",
              admin: {
                condition: (data) => data?.mode === "variants",
                description: "Leer lassen für die Standard-Frage „Welches Gerät haben Sie?“.",
              },
              fields: [
                { name: "question", label: "Frage", type: "text", admin: { placeholder: "Bei welcher Krankenkasse sind Sie?" } },
                { name: "hint", label: "Erklärung unter der Frage", type: "text" },
                { name: "switchLabel", label: "Text zum Wechseln", type: "text", admin: { placeholder: "Andere Krankenkasse wählen" } },
                {
                  name: "icon",
                  label: "Symbol",
                  type: "select",
                  options: [
                    { label: "Smartphone", value: "phone" },
                    { label: "Herz", value: "heart" },
                  ],
                },
              ],
            },
            {
              name: "variants",
              label: "Varianten",
              type: "array",
              labels: { singular: "Variante", plural: "Varianten" },
              admin: {
                condition: (data) => data?.mode === "variants",
                components: { RowLabel: "@/payload/components/VariantRowLabel#VariantRowLabel" },
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    { name: "device", label: "Gerät (bei Geräte-Varianten)", type: "select", options: deviceOptions },
                    { name: "label", label: "Name auf dem Knopf (sonst Gerätename)", type: "text" },
                    { name: "hint", label: "Zusatz unter dem Namen", type: "text", admin: { placeholder: "App: TK-App" } },
                  ],
                },
                {
                  name: "unverified",
                  label: "Knopf-Namen noch nicht in der echten App geprüft",
                  type: "checkbox",
                  admin: { description: "Nur intern – Besucher sehen das nicht." },
                },
                stepsField(),
              ],
            },
          ],
        },
        {
          label: "Verknüpfungen & Suche",
          fields: [
            {
              name: "related",
              label: "Passende Anleitungen",
              type: "relationship",
              relationTo: "guides",
              hasMany: true,
              admin: { description: "Werden unter der Anleitung verlinkt." },
            },
            {
              name: "keywords",
              label: "Zusätzliche Suchbegriffe",
              type: "text",
              hasMany: true,
              admin: { description: "Wörter, nach denen Besucher suchen könnten, z. B. „Videotelefonie“." },
            },
          ],
        },
      ],
    },
    // Seitenleiste
    slugField(),
    {
      name: "access",
      label: "Zugang",
      type: "select",
      required: true,
      defaultValue: "premium",
      options: [
        { label: "Kostenlos für alle", value: "free" },
        { label: "Kostenpflichtig (Abo oder Einzelkauf)", value: "premium" },
      ],
      admin: { position: "sidebar" },
    },
    {
      name: "price",
      label: "Einzelpreis in Euro",
      type: "number",
      min: 0.5,
      admin: {
        position: "sidebar",
        step: 0.01,
        condition: (data) => data?.access === "premium",
        description: "Leer lassen = Standardpreis aus „Preise & Verkauf“.",
      },
    },
    {
      name: "checked",
      label: "Zuletzt mit der echten App geprüft",
      type: "date",
      hooks: { beforeValidate: [({ value }) => value || new Date().toISOString()] },
      admin: {
        position: "sidebar",
        date: { pickerAppearance: "monthOnly", displayFormat: "MMMM yyyy" },
        description: "Leer lassen = aktueller Monat. Spätestens alle 6 Monate neu prüfen.",
      },
    },
    orderField,
  ],
};

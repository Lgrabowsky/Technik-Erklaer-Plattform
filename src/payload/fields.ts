import type { Field } from "payload";

/** Adress-Teil der Seite, z. B. "deutschlandticket" → /…/deutschlandticket */
export const slugField = (fromField = "title"): Field => ({
  name: "slug",
  label: "Adresse (Slug)",
  type: "text",
  required: true,
  unique: true,
  index: true,
  admin: {
    position: "sidebar",
    description:
      "Wird automatisch aus dem Titel erzeugt. Nur Kleinbuchstaben, Zahlen und Bindestriche. Nach dem Veröffentlichen möglichst nicht mehr ändern – sonst funktionieren alte Links nicht mehr.",
  },
  hooks: {
    beforeValidate: [
      ({ value, data }) => {
        const source = typeof value === "string" && value.trim() ? value : (data?.[fromField] as string | undefined);
        return source ? slugify(source) : value;
      },
    ],
  },
});

export function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const orderField: Field = {
  name: "order",
  label: "Reihenfolge",
  type: "number",
  defaultValue: 100,
  admin: { position: "sidebar", description: "Kleinere Zahl = weiter vorne." },
};

/** Ein Schritt einer Anleitung */
export const stepsField = (condition?: (data: Record<string, unknown>) => boolean): Field => ({
  name: "steps",
  label: "Schritte",
  type: "array",
  labels: { singular: "Schritt", plural: "Schritte" },
  admin: {
    initCollapsed: true,
    condition: condition ? (data) => condition(data) : undefined,
    components: { RowLabel: "@/payload/components/StepRowLabel#StepRowLabel" },
  },
  fields: [
    { name: "title", label: "Überschrift", type: "text", required: true },
    {
      name: "text",
      label: "Anweisung",
      type: "textarea",
      required: true,
      admin: { description: "Kurz und klar. Ein Schritt = eine Handlung. Knöpfe in „Anführungszeichen“, genau wie auf dem Gerät." },
    },
    { name: "tip", label: "Tipp (optional)", type: "textarea" },
    { name: "warning", label: "Warnhinweis (optional)", type: "textarea", admin: { description: "z. B. Betrugsgefahr" } },
    { name: "image", label: "Bild / Screenshot (optional)", type: "upload", relationTo: "media" },
  ],
});

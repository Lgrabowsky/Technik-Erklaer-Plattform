import type { GlobalConfig } from "payload";
import { isAdmin } from "../access";
import { revalidateContent } from "../hooks";

export const Homepage: GlobalConfig = {
  slug: "homepage",
  label: "Startseite",
  admin: { group: "Inhalte" },
  access: { read: isAdmin, update: isAdmin },
  hooks: { afterChange: [() => revalidateContent()] },
  fields: [
    { name: "eyebrow", label: "Kleine Zeile über der Überschrift", type: "text", defaultValue: "Technik einfach erklärt" },
    { name: "headline", label: "Überschrift", type: "text", required: true, defaultValue: "Was möchten Sie heute lernen?" },
    {
      name: "quickLinks",
      label: "„Oder direkt starten“-Knöpfe",
      type: "array",
      maxRows: 8,
      fields: [
        {
          type: "row",
          fields: [
            { name: "label", label: "Text auf dem Knopf", type: "text", required: true },
            { name: "guide", label: "Anleitung", type: "relationship", relationTo: "guides", required: true },
          ],
        },
      ],
    },
  ],
};

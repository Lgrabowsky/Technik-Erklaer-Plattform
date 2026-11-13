import type { GlobalConfig } from "payload";
import { isAdmin } from "../access";
import { revalidateContent } from "../hooks";

/** Preise und welche Kaufwege angezeigt werden */
export const Settings: GlobalConfig = {
  slug: "settings",
  label: "Preise & Verkauf",
  admin: { group: "Verkauf" },
  access: { read: isAdmin, update: isAdmin },
  hooks: { afterChange: [() => revalidateContent()] },
  fields: [
    {
      type: "row",
      fields: [
        { name: "showSubscription", label: "Alles-Zugang (Abo) anbieten", type: "checkbox", defaultValue: true },
        { name: "showSinglePurchase", label: "Einzelkauf anbieten", type: "checkbox", defaultValue: true },
      ],
    },
    { name: "subscriptionName", label: "Name des Abos", type: "text", required: true, defaultValue: "Alles-Zugang" },
    {
      type: "row",
      fields: [
        { name: "monthlyPrice", label: "Preis pro Monat (Euro)", type: "number", required: true, defaultValue: 6.99, min: 0.5, admin: { step: 0.01 } },
        {
          name: "yearlyPrice",
          label: "Preis pro Jahr (Euro)",
          type: "number",
          defaultValue: 59,
          min: 0,
          admin: { step: 0.01, description: "Leer oder 0 = kein Jahres-Abo anbieten." },
        },
        { name: "defaultGuidePrice", label: "Standardpreis Einzelkauf (Euro)", type: "number", required: true, defaultValue: 2.99, min: 0.5, admin: { step: 0.01 } },
      ],
    },
    {
      name: "benefits",
      label: "Vorteile des Abos (Aufzählung)",
      type: "array",
      fields: [{ name: "text", label: "Text", type: "text", required: true }],
      defaultValue: [
        { text: "Alle Anleitungen ohne Einschränkung" },
        { text: "Neue Anleitungen jeden Monat" },
        { text: "Jederzeit monatlich kündbar" },
      ],
    },
    {
      name: "taxNote",
      label: "Hinweis unter den Preisen",
      type: "text",
      defaultValue: "Alle Preise inkl. MwSt.",
      admin: { description: "Als Kleinunternehmer z. B.: „Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.“" },
    },
  ],
};

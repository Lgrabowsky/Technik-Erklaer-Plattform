import type { CollectionConfig } from "payload";
import { isAdmin } from "../access";

/** Jede erfolgreiche Zahlung (Abo-Abschluss, Abo-Verlängerung, Einzelkauf) */
export const Purchases: CollectionConfig = {
  slug: "purchases",
  labels: { singular: "Zahlung", plural: "Zahlungen" },
  admin: {
    useAsTitle: "description",
    group: "Verkauf",
    defaultColumns: ["createdAt", "customer", "kind", "description", "amount"],
    description: "Wird automatisch von Stripe befüllt. Rückerstattungen bitte im Stripe-Dashboard vornehmen.",
  },
  defaultSort: "-createdAt",
  access: { read: isAdmin, create: () => false, update: isAdmin, delete: isAdmin },
  fields: [
    { name: "customer", label: "Kunde", type: "relationship", relationTo: "customers", required: true, index: true },
    {
      name: "kind",
      label: "Art",
      type: "select",
      required: true,
      options: [
        { label: "Alles-Zugang (Abo)", value: "subscription" },
        { label: "Einzelkauf", value: "guide" },
      ],
    },
    { name: "guide", label: "Anleitung", type: "relationship", relationTo: "guides" },
    { name: "description", label: "Beschreibung", type: "text" },
    { name: "amount", label: "Betrag (Euro)", type: "number" },
    {
      name: "stripeId",
      label: "Stripe-Beleg-ID",
      type: "text",
      unique: true,
      admin: { readOnly: true, description: "Rechnung (in_…) oder Checkout-Sitzung (cs_…)" },
    },
  ],
};

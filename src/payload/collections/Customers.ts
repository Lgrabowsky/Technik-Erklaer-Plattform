import type { CollectionConfig } from "payload";
import { isAdmin } from "../access";

/**
 * Kundinnen und Kunden der Website. Sie melden sich ohne Passwort an –
 * per Link, der an ihre E-Mail-Adresse geschickt wird.
 */
export const Customers: CollectionConfig = {
  slug: "customers",
  labels: { singular: "Kunde", plural: "Kunden" },
  admin: {
    useAsTitle: "email",
    group: "Verkauf",
    defaultColumns: ["email", "subscriptionStatus", "currentPeriodEnd", "createdAt"],
    description: "Wird automatisch beim ersten Kauf oder der ersten Anmeldung angelegt.",
  },
  access: { read: isAdmin, create: isAdmin, update: isAdmin, delete: isAdmin },
  fields: [
    { name: "email", label: "E-Mail", type: "email", required: true, unique: true, index: true },
    { name: "name", label: "Name", type: "text" },
    {
      type: "collapsible",
      label: "Alles-Zugang (Abo)",
      fields: [
        {
          name: "subscriptionStatus",
          label: "Status",
          type: "select",
          defaultValue: "none",
          options: [
            { label: "Kein Abo", value: "none" },
            { label: "Aktiv", value: "active" },
            { label: "Testphase", value: "trialing" },
            { label: "Zahlung offen", value: "past_due" },
            { label: "Beendet", value: "canceled" },
          ],
        },
        {
          name: "subscriptionInterval",
          label: "Zahlweise",
          type: "select",
          options: [
            { label: "monatlich", value: "month" },
            { label: "jährlich", value: "year" },
          ],
        },
        { name: "currentPeriodEnd", label: "Bezahlt bis", type: "date", admin: { date: { pickerAppearance: "dayOnly" } } },
        { name: "cancelAtPeriodEnd", label: "Gekündigt zum Laufzeitende", type: "checkbox" },
        {
          name: "manualAccess",
          label: "Alles-Zugang geschenkt (ohne Zahlung)",
          type: "checkbox",
          admin: { description: "z. B. für Testpersonen oder Familie." },
        },
      ],
    },
    {
      name: "purchasedGuides",
      label: "Gekaufte Anleitungen",
      type: "relationship",
      relationTo: "guides",
      hasMany: true,
    },
    {
      name: "purchases",
      label: "Zahlungen",
      type: "join",
      collection: "purchases",
      on: "customer",
    },
    {
      type: "collapsible",
      label: "Technisch",
      admin: { initCollapsed: true },
      fields: [
        { name: "stripeCustomerId", label: "Stripe-Kunden-ID", type: "text", index: true, admin: { readOnly: true } },
        { name: "stripeSubscriptionId", label: "Stripe-Abo-ID", type: "text", index: true, admin: { readOnly: true } },
        { name: "loginTokenHash", type: "text", hidden: true },
        { name: "loginTokenExpires", type: "date", hidden: true },
        { name: "sessionVersion", type: "number", defaultValue: 1, hidden: true },
      ],
    },
  ],
};

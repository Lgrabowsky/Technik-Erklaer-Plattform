import type { CollectionConfig } from "payload";
import { isAdmin } from "../access";

/** Eingegangene Kündigungen (§ 312k BGB) und Widerrufe – mit Eingangszeit als Nachweis */
export const Requests: CollectionConfig = {
  slug: "requests",
  labels: { singular: "Kündigung / Widerruf", plural: "Kündigungen & Widerrufe" },
  admin: {
    useAsTitle: "email",
    group: "Verkauf",
    defaultColumns: ["createdAt", "type", "email", "status", "result"],
    description:
      "Kommen über „Verträge hier kündigen“ und „Vertrag widerrufen“ herein. Abos werden automatisch zum Laufzeitende gekündigt; Widerrufe und Erstattungen bitte prüfen und im Stripe-Dashboard erstatten.",
  },
  defaultSort: "-createdAt",
  access: { read: isAdmin, create: () => false, update: isAdmin, delete: isAdmin },
  fields: [
    {
      name: "type",
      label: "Art",
      type: "select",
      required: true,
      options: [
        { label: "Kündigung", value: "kuendigung" },
        { label: "Widerruf", value: "widerruf" },
      ],
    },
    {
      name: "status",
      label: "Bearbeitung",
      type: "select",
      defaultValue: "neu",
      options: [
        { label: "Neu", value: "neu" },
        { label: "Erledigt", value: "erledigt" },
      ],
      admin: { position: "sidebar" },
    },
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "E-Mail", type: "email", required: true },
    { name: "customer", label: "Kunde", type: "relationship", relationTo: "customers" },
    { name: "contract", label: "Vertrag", type: "text" },
    {
      name: "cancelKind",
      label: "Kündigungsart",
      type: "select",
      options: [
        { label: "Ordentlich (zum nächstmöglichen Zeitpunkt)", value: "ordentlich" },
        { label: "Außerordentlich (fristlos)", value: "ausserordentlich" },
      ],
    },
    { name: "reason", label: "Grund / Nachricht", type: "textarea" },
    { name: "result", label: "Ergebnis", type: "text", admin: { readOnly: true } },
  ],
};

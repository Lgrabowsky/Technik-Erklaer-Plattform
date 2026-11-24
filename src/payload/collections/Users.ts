import type { CollectionConfig } from "payload";

/** Admins und Redakteure – Zugang zum Admin-Bereich unter /admin */
export const Users: CollectionConfig = {
  slug: "users",
  labels: { singular: "Admin", plural: "Admins" },
  auth: { tokenExpiration: 60 * 60 * 24 * 7 },
  admin: { useAsTitle: "email", group: "Einstellungen", defaultColumns: ["name", "email"] },
  fields: [{ name: "name", label: "Name", type: "text" }],
};

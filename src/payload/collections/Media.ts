import type { CollectionConfig } from "payload";
import { isAdmin } from "../access";

/** Bilder, z. B. Screenshots für einzelne Schritte */
export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "Bild", plural: "Bilder" },
  admin: { group: "Inhalte" },
  access: { read: () => true, create: isAdmin, update: isAdmin, delete: isAdmin },
  upload: {
    staticDir: process.env.MEDIA_DIR || "media",
    mimeTypes: ["image/*"],
    imageSizes: [{ name: "gross", width: 1400 }],
  },
  fields: [
    {
      name: "alt",
      label: "Bildbeschreibung",
      type: "text",
      required: true,
      admin: { description: "Was ist auf dem Bild zu sehen? Wird vorgelesen, wenn jemand das Bild nicht sehen kann." },
    },
  ],
};

import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import { de } from "@payloadcms/translations/languages/de";
import sharp from "sharp";

import { Users } from "./payload/collections/Users";
import { Media } from "./payload/collections/Media";
import { Categories } from "./payload/collections/Categories";
import { Subtopics } from "./payload/collections/Subtopics";
import { Guides } from "./payload/collections/Guides";
import { Customers } from "./payload/collections/Customers";
import { Purchases } from "./payload/collections/Purchases";
import { Requests } from "./payload/collections/Requests";
import { Settings } from "./payload/globals/Settings";
import { Homepage } from "./payload/globals/Homepage";
import { migrations } from "./migrations";

const useMigrations = process.env.DATABASE_MIGRATIONS === "true";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const smtp = process.env.SMTP_HOST
  ? nodemailerAdapter({
      defaultFromAddress: process.env.MAIL_FROM_ADDRESS || "hallo@example.com",
      defaultFromName: process.env.MAIL_FROM_NAME || "Schritt für Schritt",
      transportOptions: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      },
    })
  : undefined;

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    meta: { titleSuffix: " – Admin Schritt für Schritt" },
    dateFormat: "dd.MM.yyyy HH:mm",
    avatar: "default",
  },
  i18n: { supportedLanguages: { de }, fallbackLanguage: "de" },
  collections: [Guides, Categories, Subtopics, Media, Customers, Purchases, Requests, Users],
  globals: [Homepage, Settings],
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: { outputFile: path.resolve(dirname, "payload-types.ts") },
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL || "" },
    // Lokal passt Payload die Tabellen automatisch an ("push").
    // Auf dem Server (DATABASE_MIGRATIONS=true) laufen stattdessen beim Start
    // die Migrationen aus src/migrations – sicher und nachvollziehbar.
    push: !useMigrations,
    prodMigrations: useMigrations ? migrations : undefined,
  }),
  email: smtp,
  sharp,
  telemetry: false,
});

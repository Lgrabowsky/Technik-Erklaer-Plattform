import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Neuer Gerätewert "samsung" für Anleitungs-Varianten (iPhone / Samsung / Google Pixel und andere).
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_guides_variants_device" ADD VALUE IF NOT EXISTS 'samsung';
  ALTER TYPE "public"."enum__guides_v_version_variants_device" ADD VALUE IF NOT EXISTS 'samsung';`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  // Samsung-Varianten werden zu "Google Pixel und andere", dann wird der Wert entfernt.
  await db.execute(sql`
   UPDATE "guides_variants" SET "device" = 'android' WHERE "device" = 'samsung';
  UPDATE "_guides_v_version_variants" SET "device" = 'android' WHERE "device" = 'samsung';
  ALTER TABLE "guides_variants" ALTER COLUMN "device" SET DATA TYPE text;
  DROP TYPE "public"."enum_guides_variants_device";
  CREATE TYPE "public"."enum_guides_variants_device" AS ENUM('android', 'iphone', 'computer');
  ALTER TABLE "guides_variants" ALTER COLUMN "device" SET DATA TYPE "public"."enum_guides_variants_device" USING "device"::"public"."enum_guides_variants_device";
  ALTER TABLE "_guides_v_version_variants" ALTER COLUMN "device" SET DATA TYPE text;
  DROP TYPE "public"."enum__guides_v_version_variants_device";
  CREATE TYPE "public"."enum__guides_v_version_variants_device" AS ENUM('android', 'iphone', 'computer');
  ALTER TABLE "_guides_v_version_variants" ALTER COLUMN "device" SET DATA TYPE "public"."enum__guides_v_version_variants_device" USING "device"::"public"."enum__guides_v_version_variants_device";`)
}

import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_categories_icon" ADD VALUE 'building';
  ALTER TABLE "guides" ADD COLUMN "unverified" boolean;
  ALTER TABLE "guides" ADD COLUMN "review_note" varchar;
  ALTER TABLE "_guides_v" ADD COLUMN "version_unverified" boolean;
  ALTER TABLE "_guides_v" ADD COLUMN "version_review_note" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "categories" ALTER COLUMN "icon" SET DATA TYPE text;
  ALTER TABLE "categories" ALTER COLUMN "icon" SET DEFAULT 'phone'::text;
  DROP TYPE "public"."enum_categories_icon";
  CREATE TYPE "public"."enum_categories_icon" AS ENUM('phone', 'heart', 'train', 'card', 'shield');
  ALTER TABLE "categories" ALTER COLUMN "icon" SET DEFAULT 'phone'::"public"."enum_categories_icon";
  ALTER TABLE "categories" ALTER COLUMN "icon" SET DATA TYPE "public"."enum_categories_icon" USING "icon"::"public"."enum_categories_icon";
  ALTER TABLE "guides" DROP COLUMN "unverified";
  ALTER TABLE "guides" DROP COLUMN "review_note";
  ALTER TABLE "_guides_v" DROP COLUMN "version_unverified";
  ALTER TABLE "_guides_v" DROP COLUMN "version_review_note";`)
}

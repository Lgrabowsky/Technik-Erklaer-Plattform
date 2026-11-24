import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_guides_devices" AS ENUM('android', 'iphone', 'computer');
  CREATE TYPE "public"."enum_guides_variants_device" AS ENUM('android', 'iphone', 'computer');
  CREATE TYPE "public"."enum_guides_difficulty" AS ENUM('leicht', 'mittel', 'anspruchsvoll');
  CREATE TYPE "public"."enum_guides_mode" AS ENUM('steps', 'variants');
  CREATE TYPE "public"."enum_guides_chooser_icon" AS ENUM('phone', 'heart');
  CREATE TYPE "public"."enum_guides_access" AS ENUM('free', 'premium');
  CREATE TYPE "public"."enum_guides_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__guides_v_version_devices" AS ENUM('android', 'iphone', 'computer');
  CREATE TYPE "public"."enum__guides_v_version_variants_device" AS ENUM('android', 'iphone', 'computer');
  CREATE TYPE "public"."enum__guides_v_version_difficulty" AS ENUM('leicht', 'mittel', 'anspruchsvoll');
  CREATE TYPE "public"."enum__guides_v_version_mode" AS ENUM('steps', 'variants');
  CREATE TYPE "public"."enum__guides_v_version_chooser_icon" AS ENUM('phone', 'heart');
  CREATE TYPE "public"."enum__guides_v_version_access" AS ENUM('free', 'premium');
  CREATE TYPE "public"."enum__guides_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_categories_icon" AS ENUM('phone', 'heart', 'train', 'card', 'shield');
  CREATE TYPE "public"."enum_customers_subscription_status" AS ENUM('none', 'active', 'trialing', 'past_due', 'canceled');
  CREATE TYPE "public"."enum_customers_subscription_interval" AS ENUM('month', 'year');
  CREATE TYPE "public"."enum_purchases_kind" AS ENUM('subscription', 'guide');
  CREATE TYPE "public"."enum_requests_type" AS ENUM('kuendigung', 'widerruf');
  CREATE TYPE "public"."enum_requests_status" AS ENUM('neu', 'erledigt');
  CREATE TYPE "public"."enum_requests_cancel_kind" AS ENUM('ordentlich', 'ausserordentlich');
  CREATE TABLE "guides_devices" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_guides_devices",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "guides_needs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "guides_takeaways" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "guides_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"tip" varchar,
  	"warning" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE "guides_variants_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"tip" varchar,
  	"warning" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE "guides_variants" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"device" "enum_guides_variants_device",
  	"label" varchar,
  	"hint" varchar,
  	"unverified" boolean
  );
  
  CREATE TABLE "guides" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"summary" varchar,
  	"category_id" integer,
  	"subtopic_id" integer,
  	"app" varchar,
  	"difficulty" "enum_guides_difficulty" DEFAULT 'leicht',
  	"minutes" numeric DEFAULT 10,
  	"mode" "enum_guides_mode" DEFAULT 'steps',
  	"chooser_question" varchar,
  	"chooser_hint" varchar,
  	"chooser_switch_label" varchar,
  	"chooser_icon" "enum_guides_chooser_icon",
  	"slug" varchar,
  	"access" "enum_guides_access" DEFAULT 'premium',
  	"price" numeric,
  	"checked" timestamp(3) with time zone,
  	"order" numeric DEFAULT 100,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_guides_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "guides_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "guides_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"guides_id" integer
  );
  
  CREATE TABLE "_guides_v_version_devices" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__guides_v_version_devices",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_guides_v_version_needs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_guides_v_version_takeaways" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_guides_v_version_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"tip" varchar,
  	"warning" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_guides_v_version_variants_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"tip" varchar,
  	"warning" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_guides_v_version_variants" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"device" "enum__guides_v_version_variants_device",
  	"label" varchar,
  	"hint" varchar,
  	"unverified" boolean,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_guides_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_summary" varchar,
  	"version_category_id" integer,
  	"version_subtopic_id" integer,
  	"version_app" varchar,
  	"version_difficulty" "enum__guides_v_version_difficulty" DEFAULT 'leicht',
  	"version_minutes" numeric DEFAULT 10,
  	"version_mode" "enum__guides_v_version_mode" DEFAULT 'steps',
  	"version_chooser_question" varchar,
  	"version_chooser_hint" varchar,
  	"version_chooser_switch_label" varchar,
  	"version_chooser_icon" "enum__guides_v_version_chooser_icon",
  	"version_slug" varchar,
  	"version_access" "enum__guides_v_version_access" DEFAULT 'premium',
  	"version_price" numeric,
  	"version_checked" timestamp(3) with time zone,
  	"version_order" numeric DEFAULT 100,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__guides_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_guides_v_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "_guides_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"guides_id" integer
  );
  
  CREATE TABLE "categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"icon" "enum_categories_icon" DEFAULT 'phone' NOT NULL,
  	"slug" varchar NOT NULL,
  	"order" numeric DEFAULT 100,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "subtopics" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"category_id" integer NOT NULL,
  	"description" varchar,
  	"slug" varchar NOT NULL,
  	"order" numeric DEFAULT 100,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_gross_url" varchar,
  	"sizes_gross_width" numeric,
  	"sizes_gross_height" numeric,
  	"sizes_gross_mime_type" varchar,
  	"sizes_gross_filesize" numeric,
  	"sizes_gross_filename" varchar
  );
  
  CREATE TABLE "customers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"email" varchar NOT NULL,
  	"name" varchar,
  	"subscription_status" "enum_customers_subscription_status" DEFAULT 'none',
  	"subscription_interval" "enum_customers_subscription_interval",
  	"current_period_end" timestamp(3) with time zone,
  	"cancel_at_period_end" boolean,
  	"manual_access" boolean,
  	"stripe_customer_id" varchar,
  	"stripe_subscription_id" varchar,
  	"login_token_hash" varchar,
  	"login_token_expires" timestamp(3) with time zone,
  	"session_version" numeric DEFAULT 1,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "customers_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"guides_id" integer
  );
  
  CREATE TABLE "purchases" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"customer_id" integer NOT NULL,
  	"kind" "enum_purchases_kind" NOT NULL,
  	"guide_id" integer,
  	"description" varchar,
  	"amount" numeric,
  	"stripe_id" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "requests" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum_requests_type" NOT NULL,
  	"status" "enum_requests_status" DEFAULT 'neu',
  	"name" varchar,
  	"email" varchar NOT NULL,
  	"customer_id" integer,
  	"contract" varchar,
  	"cancel_kind" "enum_requests_cancel_kind",
  	"reason" varchar,
  	"result" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"reset_password_requested_at" timestamp(3) with time zone,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"guides_id" integer,
  	"categories_id" integer,
  	"subtopics_id" integer,
  	"media_id" integer,
  	"customers_id" integer,
  	"purchases_id" integer,
  	"requests_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "homepage_quick_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"guide_id" integer NOT NULL
  );
  
  CREATE TABLE "homepage" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Technik einfach erklärt',
  	"headline" varchar DEFAULT 'Was möchten Sie heute lernen?' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "settings_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"show_subscription" boolean DEFAULT true,
  	"show_single_purchase" boolean DEFAULT true,
  	"subscription_name" varchar DEFAULT 'Alles-Zugang' NOT NULL,
  	"monthly_price" numeric DEFAULT 6.99 NOT NULL,
  	"yearly_price" numeric DEFAULT 59,
  	"default_guide_price" numeric DEFAULT 2.99 NOT NULL,
  	"tax_note" varchar DEFAULT 'Alle Preise inkl. MwSt.',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "guides_devices" ADD CONSTRAINT "guides_devices_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guides_needs" ADD CONSTRAINT "guides_needs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guides_takeaways" ADD CONSTRAINT "guides_takeaways_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guides_steps" ADD CONSTRAINT "guides_steps_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "guides_steps" ADD CONSTRAINT "guides_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guides_variants_steps" ADD CONSTRAINT "guides_variants_steps_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "guides_variants_steps" ADD CONSTRAINT "guides_variants_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guides_variants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guides_variants" ADD CONSTRAINT "guides_variants_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guides" ADD CONSTRAINT "guides_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "guides" ADD CONSTRAINT "guides_subtopic_id_subtopics_id_fk" FOREIGN KEY ("subtopic_id") REFERENCES "public"."subtopics"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "guides_texts" ADD CONSTRAINT "guides_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guides_rels" ADD CONSTRAINT "guides_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "guides_rels" ADD CONSTRAINT "guides_rels_guides_fk" FOREIGN KEY ("guides_id") REFERENCES "public"."guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guides_v_version_devices" ADD CONSTRAINT "_guides_v_version_devices_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_guides_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guides_v_version_needs" ADD CONSTRAINT "_guides_v_version_needs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guides_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guides_v_version_takeaways" ADD CONSTRAINT "_guides_v_version_takeaways_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guides_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guides_v_version_steps" ADD CONSTRAINT "_guides_v_version_steps_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guides_v_version_steps" ADD CONSTRAINT "_guides_v_version_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guides_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guides_v_version_variants_steps" ADD CONSTRAINT "_guides_v_version_variants_steps_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guides_v_version_variants_steps" ADD CONSTRAINT "_guides_v_version_variants_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guides_v_version_variants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guides_v_version_variants" ADD CONSTRAINT "_guides_v_version_variants_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_guides_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guides_v" ADD CONSTRAINT "_guides_v_parent_id_guides_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."guides"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guides_v" ADD CONSTRAINT "_guides_v_version_category_id_categories_id_fk" FOREIGN KEY ("version_category_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guides_v" ADD CONSTRAINT "_guides_v_version_subtopic_id_subtopics_id_fk" FOREIGN KEY ("version_subtopic_id") REFERENCES "public"."subtopics"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guides_v_texts" ADD CONSTRAINT "_guides_v_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_guides_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guides_v_rels" ADD CONSTRAINT "_guides_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_guides_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_guides_v_rels" ADD CONSTRAINT "_guides_v_rels_guides_fk" FOREIGN KEY ("guides_id") REFERENCES "public"."guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "subtopics" ADD CONSTRAINT "subtopics_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "customers_rels" ADD CONSTRAINT "customers_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."customers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "customers_rels" ADD CONSTRAINT "customers_rels_guides_fk" FOREIGN KEY ("guides_id") REFERENCES "public"."guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "purchases" ADD CONSTRAINT "purchases_customer_id_customers_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "purchases" ADD CONSTRAINT "purchases_guide_id_guides_id_fk" FOREIGN KEY ("guide_id") REFERENCES "public"."guides"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "requests" ADD CONSTRAINT "requests_customer_id_customers_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_guides_fk" FOREIGN KEY ("guides_id") REFERENCES "public"."guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_subtopics_fk" FOREIGN KEY ("subtopics_id") REFERENCES "public"."subtopics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_customers_fk" FOREIGN KEY ("customers_id") REFERENCES "public"."customers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_purchases_fk" FOREIGN KEY ("purchases_id") REFERENCES "public"."purchases"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_requests_fk" FOREIGN KEY ("requests_id") REFERENCES "public"."requests"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_quick_links" ADD CONSTRAINT "homepage_quick_links_guide_id_guides_id_fk" FOREIGN KEY ("guide_id") REFERENCES "public"."guides"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_quick_links" ADD CONSTRAINT "homepage_quick_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "settings_benefits" ADD CONSTRAINT "settings_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."settings"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "guides_devices_order_idx" ON "guides_devices" USING btree ("order");
  CREATE INDEX "guides_devices_parent_idx" ON "guides_devices" USING btree ("parent_id");
  CREATE INDEX "guides_needs_order_idx" ON "guides_needs" USING btree ("_order");
  CREATE INDEX "guides_needs_parent_id_idx" ON "guides_needs" USING btree ("_parent_id");
  CREATE INDEX "guides_takeaways_order_idx" ON "guides_takeaways" USING btree ("_order");
  CREATE INDEX "guides_takeaways_parent_id_idx" ON "guides_takeaways" USING btree ("_parent_id");
  CREATE INDEX "guides_steps_order_idx" ON "guides_steps" USING btree ("_order");
  CREATE INDEX "guides_steps_parent_id_idx" ON "guides_steps" USING btree ("_parent_id");
  CREATE INDEX "guides_steps_image_idx" ON "guides_steps" USING btree ("image_id");
  CREATE INDEX "guides_variants_steps_order_idx" ON "guides_variants_steps" USING btree ("_order");
  CREATE INDEX "guides_variants_steps_parent_id_idx" ON "guides_variants_steps" USING btree ("_parent_id");
  CREATE INDEX "guides_variants_steps_image_idx" ON "guides_variants_steps" USING btree ("image_id");
  CREATE INDEX "guides_variants_order_idx" ON "guides_variants" USING btree ("_order");
  CREATE INDEX "guides_variants_parent_id_idx" ON "guides_variants" USING btree ("_parent_id");
  CREATE INDEX "guides_category_idx" ON "guides" USING btree ("category_id");
  CREATE INDEX "guides_subtopic_idx" ON "guides" USING btree ("subtopic_id");
  CREATE UNIQUE INDEX "guides_slug_idx" ON "guides" USING btree ("slug");
  CREATE INDEX "guides_updated_at_idx" ON "guides" USING btree ("updated_at");
  CREATE INDEX "guides_created_at_idx" ON "guides" USING btree ("created_at");
  CREATE INDEX "guides__status_idx" ON "guides" USING btree ("_status");
  CREATE INDEX "guides_texts_order_parent" ON "guides_texts" USING btree ("order","parent_id");
  CREATE INDEX "guides_rels_order_idx" ON "guides_rels" USING btree ("order");
  CREATE INDEX "guides_rels_parent_idx" ON "guides_rels" USING btree ("parent_id");
  CREATE INDEX "guides_rels_path_idx" ON "guides_rels" USING btree ("path");
  CREATE INDEX "guides_rels_guides_id_idx" ON "guides_rels" USING btree ("guides_id");
  CREATE INDEX "_guides_v_version_devices_order_idx" ON "_guides_v_version_devices" USING btree ("order");
  CREATE INDEX "_guides_v_version_devices_parent_idx" ON "_guides_v_version_devices" USING btree ("parent_id");
  CREATE INDEX "_guides_v_version_needs_order_idx" ON "_guides_v_version_needs" USING btree ("_order");
  CREATE INDEX "_guides_v_version_needs_parent_id_idx" ON "_guides_v_version_needs" USING btree ("_parent_id");
  CREATE INDEX "_guides_v_version_takeaways_order_idx" ON "_guides_v_version_takeaways" USING btree ("_order");
  CREATE INDEX "_guides_v_version_takeaways_parent_id_idx" ON "_guides_v_version_takeaways" USING btree ("_parent_id");
  CREATE INDEX "_guides_v_version_steps_order_idx" ON "_guides_v_version_steps" USING btree ("_order");
  CREATE INDEX "_guides_v_version_steps_parent_id_idx" ON "_guides_v_version_steps" USING btree ("_parent_id");
  CREATE INDEX "_guides_v_version_steps_image_idx" ON "_guides_v_version_steps" USING btree ("image_id");
  CREATE INDEX "_guides_v_version_variants_steps_order_idx" ON "_guides_v_version_variants_steps" USING btree ("_order");
  CREATE INDEX "_guides_v_version_variants_steps_parent_id_idx" ON "_guides_v_version_variants_steps" USING btree ("_parent_id");
  CREATE INDEX "_guides_v_version_variants_steps_image_idx" ON "_guides_v_version_variants_steps" USING btree ("image_id");
  CREATE INDEX "_guides_v_version_variants_order_idx" ON "_guides_v_version_variants" USING btree ("_order");
  CREATE INDEX "_guides_v_version_variants_parent_id_idx" ON "_guides_v_version_variants" USING btree ("_parent_id");
  CREATE INDEX "_guides_v_parent_idx" ON "_guides_v" USING btree ("parent_id");
  CREATE INDEX "_guides_v_version_version_category_idx" ON "_guides_v" USING btree ("version_category_id");
  CREATE INDEX "_guides_v_version_version_subtopic_idx" ON "_guides_v" USING btree ("version_subtopic_id");
  CREATE INDEX "_guides_v_version_version_slug_idx" ON "_guides_v" USING btree ("version_slug");
  CREATE INDEX "_guides_v_version_version_updated_at_idx" ON "_guides_v" USING btree ("version_updated_at");
  CREATE INDEX "_guides_v_version_version_created_at_idx" ON "_guides_v" USING btree ("version_created_at");
  CREATE INDEX "_guides_v_version_version__status_idx" ON "_guides_v" USING btree ("version__status");
  CREATE INDEX "_guides_v_created_at_idx" ON "_guides_v" USING btree ("created_at");
  CREATE INDEX "_guides_v_updated_at_idx" ON "_guides_v" USING btree ("updated_at");
  CREATE INDEX "_guides_v_latest_idx" ON "_guides_v" USING btree ("latest");
  CREATE INDEX "_guides_v_texts_order_parent" ON "_guides_v_texts" USING btree ("order","parent_id");
  CREATE INDEX "_guides_v_rels_order_idx" ON "_guides_v_rels" USING btree ("order");
  CREATE INDEX "_guides_v_rels_parent_idx" ON "_guides_v_rels" USING btree ("parent_id");
  CREATE INDEX "_guides_v_rels_path_idx" ON "_guides_v_rels" USING btree ("path");
  CREATE INDEX "_guides_v_rels_guides_id_idx" ON "_guides_v_rels" USING btree ("guides_id");
  CREATE UNIQUE INDEX "categories_slug_idx" ON "categories" USING btree ("slug");
  CREATE INDEX "categories_updated_at_idx" ON "categories" USING btree ("updated_at");
  CREATE INDEX "categories_created_at_idx" ON "categories" USING btree ("created_at");
  CREATE INDEX "subtopics_category_idx" ON "subtopics" USING btree ("category_id");
  CREATE UNIQUE INDEX "subtopics_slug_idx" ON "subtopics" USING btree ("slug");
  CREATE INDEX "subtopics_updated_at_idx" ON "subtopics" USING btree ("updated_at");
  CREATE INDEX "subtopics_created_at_idx" ON "subtopics" USING btree ("created_at");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_gross_sizes_gross_filename_idx" ON "media" USING btree ("sizes_gross_filename");
  CREATE UNIQUE INDEX "customers_email_idx" ON "customers" USING btree ("email");
  CREATE INDEX "customers_stripe_customer_id_idx" ON "customers" USING btree ("stripe_customer_id");
  CREATE INDEX "customers_stripe_subscription_id_idx" ON "customers" USING btree ("stripe_subscription_id");
  CREATE INDEX "customers_updated_at_idx" ON "customers" USING btree ("updated_at");
  CREATE INDEX "customers_created_at_idx" ON "customers" USING btree ("created_at");
  CREATE INDEX "customers_rels_order_idx" ON "customers_rels" USING btree ("order");
  CREATE INDEX "customers_rels_parent_idx" ON "customers_rels" USING btree ("parent_id");
  CREATE INDEX "customers_rels_path_idx" ON "customers_rels" USING btree ("path");
  CREATE INDEX "customers_rels_guides_id_idx" ON "customers_rels" USING btree ("guides_id");
  CREATE INDEX "purchases_customer_idx" ON "purchases" USING btree ("customer_id");
  CREATE INDEX "purchases_guide_idx" ON "purchases" USING btree ("guide_id");
  CREATE UNIQUE INDEX "purchases_stripe_id_idx" ON "purchases" USING btree ("stripe_id");
  CREATE INDEX "purchases_updated_at_idx" ON "purchases" USING btree ("updated_at");
  CREATE INDEX "purchases_created_at_idx" ON "purchases" USING btree ("created_at");
  CREATE INDEX "requests_customer_idx" ON "requests" USING btree ("customer_id");
  CREATE INDEX "requests_updated_at_idx" ON "requests" USING btree ("updated_at");
  CREATE INDEX "requests_created_at_idx" ON "requests" USING btree ("created_at");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_guides_id_idx" ON "payload_locked_documents_rels" USING btree ("guides_id");
  CREATE INDEX "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("categories_id");
  CREATE INDEX "payload_locked_documents_rels_subtopics_id_idx" ON "payload_locked_documents_rels" USING btree ("subtopics_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_customers_id_idx" ON "payload_locked_documents_rels" USING btree ("customers_id");
  CREATE INDEX "payload_locked_documents_rels_purchases_id_idx" ON "payload_locked_documents_rels" USING btree ("purchases_id");
  CREATE INDEX "payload_locked_documents_rels_requests_id_idx" ON "payload_locked_documents_rels" USING btree ("requests_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "homepage_quick_links_order_idx" ON "homepage_quick_links" USING btree ("_order");
  CREATE INDEX "homepage_quick_links_parent_id_idx" ON "homepage_quick_links" USING btree ("_parent_id");
  CREATE INDEX "homepage_quick_links_guide_idx" ON "homepage_quick_links" USING btree ("guide_id");
  CREATE INDEX "settings_benefits_order_idx" ON "settings_benefits" USING btree ("_order");
  CREATE INDEX "settings_benefits_parent_id_idx" ON "settings_benefits" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "guides_devices" CASCADE;
  DROP TABLE "guides_needs" CASCADE;
  DROP TABLE "guides_takeaways" CASCADE;
  DROP TABLE "guides_steps" CASCADE;
  DROP TABLE "guides_variants_steps" CASCADE;
  DROP TABLE "guides_variants" CASCADE;
  DROP TABLE "guides" CASCADE;
  DROP TABLE "guides_texts" CASCADE;
  DROP TABLE "guides_rels" CASCADE;
  DROP TABLE "_guides_v_version_devices" CASCADE;
  DROP TABLE "_guides_v_version_needs" CASCADE;
  DROP TABLE "_guides_v_version_takeaways" CASCADE;
  DROP TABLE "_guides_v_version_steps" CASCADE;
  DROP TABLE "_guides_v_version_variants_steps" CASCADE;
  DROP TABLE "_guides_v_version_variants" CASCADE;
  DROP TABLE "_guides_v" CASCADE;
  DROP TABLE "_guides_v_texts" CASCADE;
  DROP TABLE "_guides_v_rels" CASCADE;
  DROP TABLE "categories" CASCADE;
  DROP TABLE "subtopics" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "customers" CASCADE;
  DROP TABLE "customers_rels" CASCADE;
  DROP TABLE "purchases" CASCADE;
  DROP TABLE "requests" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "homepage_quick_links" CASCADE;
  DROP TABLE "homepage" CASCADE;
  DROP TABLE "settings_benefits" CASCADE;
  DROP TABLE "settings" CASCADE;
  DROP TYPE "public"."enum_guides_devices";
  DROP TYPE "public"."enum_guides_variants_device";
  DROP TYPE "public"."enum_guides_difficulty";
  DROP TYPE "public"."enum_guides_mode";
  DROP TYPE "public"."enum_guides_chooser_icon";
  DROP TYPE "public"."enum_guides_access";
  DROP TYPE "public"."enum_guides_status";
  DROP TYPE "public"."enum__guides_v_version_devices";
  DROP TYPE "public"."enum__guides_v_version_variants_device";
  DROP TYPE "public"."enum__guides_v_version_difficulty";
  DROP TYPE "public"."enum__guides_v_version_mode";
  DROP TYPE "public"."enum__guides_v_version_chooser_icon";
  DROP TYPE "public"."enum__guides_v_version_access";
  DROP TYPE "public"."enum__guides_v_version_status";
  DROP TYPE "public"."enum_categories_icon";
  DROP TYPE "public"."enum_customers_subscription_status";
  DROP TYPE "public"."enum_customers_subscription_interval";
  DROP TYPE "public"."enum_purchases_kind";
  DROP TYPE "public"."enum_requests_type";
  DROP TYPE "public"."enum_requests_status";
  DROP TYPE "public"."enum_requests_cancel_kind";`)
}

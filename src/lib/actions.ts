"use server";

import { redirect } from "next/navigation";
import { getGuide } from "@/content/guides";
import { getEntitlements, saveEntitlements } from "./entitlements";

/*
 * DEMO-Kauf: Es fließt kein Geld. Später wird hier eine Stripe-Checkout-Session
 * erzeugt und der Besucher zu Stripe weitergeleitet. Die Freischaltung erfolgt
 * dann im Webhook, nicht hier.
 */

export async function buySubscription(formData: FormData) {
  const e = await getEntitlements();
  await saveEntitlements({ ...e, subscription: true });
  const back = String(formData.get("zurueck") ?? "");
  redirect(back.startsWith("/") && !back.startsWith("//") ? back : "/konto");
}

export async function buyGuide(formData: FormData) {
  const slug = String(formData.get("slug") ?? "");
  if (!getGuide(slug)) redirect("/");
  const e = await getEntitlements();
  if (!e.guides.includes(slug)) {
    await saveEntitlements({ ...e, guides: [...e.guides, slug] });
  }
  redirect(`/anleitung/${slug}`);
}

export async function resetDemo() {
  await saveEntitlements({ subscription: false, guides: [] });
  redirect("/konto");
}

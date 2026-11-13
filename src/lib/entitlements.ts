import "server-only";
import type { Guide } from "@/content/types";
import type { Customer } from "@/payload-types";
import { getCustomer } from "./session";

/**
 * Freischaltungen einer Person. Einzige Stelle, an der Zugriff geprüft wird.
 * Daten kommen aus der Datenbank; befüllt werden sie von Stripe (Webhook).
 */
export type Entitlements = {
  subscription: boolean;
  guides: string[];
};

export function entitlementsOf(c: Customer | null): Entitlements {
  if (!c) return { subscription: false, guides: [] };
  const active = ["active", "trialing", "past_due"].includes(c.subscriptionStatus ?? "none");
  return {
    subscription: Boolean(c.manualAccess) || active,
    guides: (c.purchasedGuides ?? []).flatMap((g) => (typeof g === "object" && g ? [g.slug] : [])),
  };
}

export async function getEntitlements(): Promise<Entitlements> {
  return entitlementsOf(await getCustomer());
}

export function canAccess(guide: Guide, e: Entitlements) {
  return guide.access === "free" || e.subscription || e.guides.includes(guide.slug);
}

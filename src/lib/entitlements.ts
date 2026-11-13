import "server-only";
import { cookies } from "next/headers";
import type { Guide } from "@/content/types";

/**
 * Freischaltungen ("Entitlements") eines Besuchers.
 *
 * MVP / DEMO: Die Daten liegen in einem Cookie und sind NICHT fälschungssicher.
 * Für den echten Betrieb wird das ersetzt durch:
 *   - Benutzerkonto (Login) + Datenbank
 *   - Stripe Checkout (mode "subscription" für das Abo, mode "payment" für Einzelkäufe)
 *   - Stripe-Webhook, der nach erfolgreicher Zahlung die Freischaltung speichert
 * Die Funktionen hier bleiben dabei die einzige Stelle, an der Zugriff geprüft wird.
 */
export type Entitlements = {
  subscription: boolean;
  guides: string[];
};

export const ENTITLEMENT_COOKIE = "demo_freischaltungen";

export async function getEntitlements(): Promise<Entitlements> {
  const raw = (await cookies()).get(ENTITLEMENT_COOKIE)?.value;
  if (!raw) return { subscription: false, guides: [] };
  try {
    const parsed = JSON.parse(raw) as Partial<Entitlements>;
    return {
      subscription: parsed.subscription === true,
      guides: Array.isArray(parsed.guides)
        ? parsed.guides.filter((g): g is string => typeof g === "string")
        : [],
    };
  } catch {
    return { subscription: false, guides: [] };
  }
}

export function canAccess(guide: Guide, e: Entitlements) {
  return guide.access === "free" || e.subscription || e.guides.includes(guide.slug);
}

export async function saveEntitlements(e: Entitlements) {
  (await cookies()).set(ENTITLEMENT_COOKIE, JSON.stringify(e), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
}

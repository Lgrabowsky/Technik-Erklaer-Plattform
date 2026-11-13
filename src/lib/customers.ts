import "server-only";
import type Stripe from "stripe";
import { getPayload } from "payload";
import config from "@payload-config";
import type { Customer } from "@/payload-types";
import { stripe } from "./stripe";

/**
 * Verknüpft Stripe mit unseren Kundendaten. Alle Funktionen sind "idempotent":
 * Kommt dieselbe Stripe-Meldung zweimal an, wird nichts doppelt gebucht.
 */

const db = () => getPayload({ config });

export const normalizeEmail = (e: string) => e.trim().toLowerCase();

export async function findCustomerByEmail(email: string) {
  const payload = await db();
  const r = await payload.find({ collection: "customers", where: { email: { equals: normalizeEmail(email) } }, limit: 1, depth: 0 });
  return r.docs[0] ?? null;
}

export async function findOrCreateCustomer({ email, stripeCustomerId }: { email?: string | null; stripeCustomerId?: string | null }) {
  const payload = await db();
  if (stripeCustomerId) {
    const r = await payload.find({ collection: "customers", where: { stripeCustomerId: { equals: stripeCustomerId } }, limit: 1, depth: 0 });
    if (r.docs[0]) return r.docs[0];
    if (!email) {
      const c = await stripe().customers.retrieve(stripeCustomerId);
      if (!c.deleted) email = c.email;
    }
  }
  if (!email) throw new Error("Kunde ohne E-Mail-Adresse");
  const existing = await findCustomerByEmail(email);
  if (existing) {
    if (stripeCustomerId && existing.stripeCustomerId !== stripeCustomerId) {
      return payload.update({ collection: "customers", id: existing.id, data: { stripeCustomerId }, depth: 0 });
    }
    return existing;
  }
  return payload.create({ collection: "customers", data: { email: normalizeEmail(email), stripeCustomerId: stripeCustomerId ?? undefined }, depth: 0 });
}

const idOf = (x: string | { id: string } | null | undefined) => (typeof x === "string" ? x : x?.id ?? null);

/** Abo-Stand aus Stripe übernehmen */
export async function syncSubscription(sub: Stripe.Subscription) {
  const payload = await db();
  const customer = await findOrCreateCustomer({ stripeCustomerId: idOf(sub.customer) });
  const s = String(sub.status);
  const status: NonNullable<Customer["subscriptionStatus"]> =
    s === "active" || s === "trialing" || s === "past_due" ? s : s === "incomplete" ? "none" : "canceled";
  const item = sub.items.data[0];
  const periodEnd = item?.current_period_end;
  // Ein älteres, beendetes Abo darf ein neueres aktives nicht überschreiben
  if (customer.stripeSubscriptionId && customer.stripeSubscriptionId !== sub.id && status === "canceled") return customer;
  return payload.update({
    collection: "customers",
    id: customer.id,
    depth: 0,
    data: {
      stripeSubscriptionId: sub.id,
      subscriptionStatus: status,
      subscriptionInterval: item?.price.recurring?.interval === "year" ? "year" : "month",
      currentPeriodEnd: periodEnd ? new Date(periodEnd * 1000).toISOString() : undefined,
      cancelAtPeriodEnd: sub.cancel_at_period_end || Boolean(sub.cancel_at),
    },
  });
}

async function recordPurchase(data: {
  customer: number;
  kind: "subscription" | "guide";
  guide?: number;
  description: string;
  amount: number;
  stripeId: string;
}) {
  const payload = await db();
  const dup = await payload.find({ collection: "purchases", where: { stripeId: { equals: data.stripeId } }, limit: 1, depth: 0 });
  if (dup.docs[0]) return;
  await payload.create({ collection: "purchases", data, overrideAccess: true }).catch((e: unknown) => {
    // gleichzeitige doppelte Meldung → eindeutige stripeId verhindert Doppelbuchung
    payload.logger.warn(`Zahlung ${data.stripeId} nicht doppelt gespeichert: ${String(e)}`);
  });
}

/** Nach erfolgreicher Zahlung im Checkout: Kunde anlegen und freischalten. Gibt den Kunden zurück. */
export async function fulfillCheckout(session: Stripe.Checkout.Session) {
  const payload = await db();
  const customer = await findOrCreateCustomer({
    email: session.customer_details?.email ?? session.customer_email,
    stripeCustomerId: idOf(session.customer),
  });

  if (session.mode === "subscription" && session.subscription) {
    const sub = typeof session.subscription === "string" ? await stripe().subscriptions.retrieve(session.subscription) : session.subscription;
    return syncSubscription(sub);
  }

  if (session.mode === "payment" && session.payment_status === "paid" && session.metadata?.art === "anleitung") {
    const guideId = Number(session.metadata.anleitungId);
    const owned = (customer.purchasedGuides ?? []).map((g) => (typeof g === "number" ? g : g.id));
    let updated = customer;
    if (!owned.includes(guideId)) {
      updated = await payload.update({ collection: "customers", id: customer.id, depth: 0, data: { purchasedGuides: [...owned, guideId] } });
    }
    await recordPurchase({
      customer: customer.id,
      kind: "guide",
      guide: guideId,
      description: `Einzelkauf: ${session.metadata.titel ?? ""}`.trim(),
      amount: (session.amount_total ?? 0) / 100,
      stripeId: session.id,
    });
    return updated;
  }
  return customer;
}

/** Jede bezahlte Abo-Rechnung (Abschluss und Verlängerungen) als Zahlung festhalten */
export async function recordInvoice(invoice: Stripe.Invoice) {
  const subId = idOf(invoice.parent?.subscription_details?.subscription);
  if (!subId || !invoice.id) return;
  const customer = await findOrCreateCustomer({ stripeCustomerId: idOf(invoice.customer), email: invoice.customer_email });
  await recordPurchase({
    customer: customer.id,
    kind: "subscription",
    description: invoice.billing_reason === "subscription_create" ? "Alles-Zugang abgeschlossen" : "Alles-Zugang verlängert",
    amount: invoice.amount_paid / 100,
    stripeId: invoice.id,
  });
}

import "server-only";
import Stripe from "stripe";

let client: Stripe | undefined;

/** Stripe ist eingerichtet, sobald STRIPE_SECRET_KEY gesetzt ist. Ohne Schlüssel läuft die Seite im Demo-Modus. */
export const stripeEnabled = () => Boolean(process.env.STRIPE_SECRET_KEY);

export function stripe() {
  if (!process.env.STRIPE_SECRET_KEY) throw new Error("STRIPE_SECRET_KEY fehlt in der .env-Datei");
  client ??= new Stripe(process.env.STRIPE_SECRET_KEY);
  return client;
}

export const siteUrl = () => (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

/**
 * Preis für das Abo in Stripe – wird beim ersten Kauf automatisch angelegt.
 * Ändern Sie den Preis im Admin-Bereich, entsteht ein neuer Stripe-Preis;
 * bestehende Abos behalten ihren alten Preis.
 */
export async function subscriptionPrice(name: string, interval: "month" | "year", amountCents: number) {
  const s = stripe();
  const lookupKey = `alles-zugang-${interval}-${amountCents}`;
  const found = await s.prices.list({ lookup_keys: [lookupKey], active: true, limit: 1 });
  if (found.data[0]) return found.data[0].id;
  const products = await s.products.search({ query: "metadata['art']:'alles-zugang'", limit: 1 });
  const product =
    products.data[0] ?? (await s.products.create({ name, metadata: { art: "alles-zugang" } }));
  const price = await s.prices.create({
    product: product.id,
    currency: "eur",
    unit_amount: amountCents,
    recurring: { interval },
    lookup_key: lookupKey,
    nickname: `${name} ${interval === "month" ? "monatlich" : "jährlich"}`,
  });
  return price.id;
}

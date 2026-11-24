import type Stripe from "stripe";
import { getPayload } from "payload";
import config from "@payload-config";
import { fulfillCheckout, recordInvoice, syncSubscription } from "@/lib/customers";
import { stripe } from "@/lib/stripe";

/**
 * Stripe meldet hier jede Zahlung und jede Abo-Änderung.
 * Im Stripe-Dashboard als Webhook-Ziel eintragen: https://IHRE-DOMAIN/zahlung/webhook
 */
export async function POST(req: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) return new Response("STRIPE_WEBHOOK_SECRET fehlt", { status: 500 });

  let event: Stripe.Event;
  try {
    event = stripe().webhooks.constructEvent(await req.text(), req.headers.get("stripe-signature") ?? "", secret);
  } catch {
    return new Response("Ungültige Signatur", { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
      case "checkout.session.async_payment_succeeded":
        await fulfillCheckout(event.data.object);
        break;
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted":
        await syncSubscription(event.data.object);
        break;
      case "invoice.paid":
        await recordInvoice(event.data.object);
        break;
    }
  } catch (e) {
    (await getPayload({ config })).logger.error(`Stripe-Webhook ${event.type}: ${String(e)}`);
    return new Response("Fehler", { status: 500 }); // Stripe versucht es später erneut
  }
  return Response.json({ ok: true });
}

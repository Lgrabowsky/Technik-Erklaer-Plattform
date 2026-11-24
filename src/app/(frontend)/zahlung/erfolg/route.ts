import { NextResponse, type NextRequest } from "next/server";
import { fulfillCheckout } from "@/lib/customers";
import { setSession } from "@/lib/session";
import { stripe } from "@/lib/stripe";

/**
 * Rückkehr von Stripe nach dem Bezahlen. Schaltet sofort frei (falls die
 * Stripe-Meldung noch unterwegs ist) und meldet die Person auf diesem Gerät an.
 */
export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("session_id") ?? "";
  const weiter = req.nextUrl.searchParams.get("weiter") ?? "/konto";
  const target = weiter.startsWith("/") && !weiter.startsWith("//") ? weiter : "/konto";
  if (!id.startsWith("cs_")) return NextResponse.redirect(new URL("/konto", req.url));

  const session = await stripe().checkout.sessions.retrieve(id);
  // Anmeldung über diesen Link nur kurz nach dem Kauf möglich
  const fresh = Date.now() / 1000 - session.created < 60 * 60 * 3;
  if (session.status !== "complete" || !fresh) return NextResponse.redirect(new URL("/konto", req.url));

  const customer = await fulfillCheckout(session);
  await setSession(customer);
  const pending = session.payment_status !== "paid" && session.mode === "payment";
  const url = new URL(pending ? "/konto?zahlung=ausstehend" : `${target}${target.includes("?") ? "&" : "?"}gekauft=1`, req.url);
  return NextResponse.redirect(url);
}

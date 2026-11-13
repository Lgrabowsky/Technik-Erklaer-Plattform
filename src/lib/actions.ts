"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";
import { getGuide, getPricing, guidePriceCents } from "./content";
import { findCustomerByEmail, findOrCreateCustomer, normalizeEmail } from "./customers";
import { clearSession, getCustomer, hashToken, newToken } from "./session";
import { mailConfigured, notifyAdmin, sendMail } from "./mail";
import { siteUrl, stripe, stripeEnabled, subscriptionPrice } from "./stripe";

const safePath = (p: unknown, fallback = "/konto") => {
  const s = String(p ?? "");
  return s.startsWith("/") && !s.startsWith("//") ? s : fallback;
};
const isEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

/* ───────────── Anmelden per E-Mail-Link ───────────── */

export async function requestLogin(formData: FormData) {
  const email = normalizeEmail(String(formData.get("email") ?? ""));
  const weiter = safePath(formData.get("weiter"));
  if (!isEmail(email)) redirect(`/anmelden?fehler=email&weiter=${encodeURIComponent(weiter)}`);

  const payload = await getPayload({ config });
  const customer = await findOrCreateCustomer({ email });
  const token = newToken();
  await payload.update({
    collection: "customers",
    id: customer.id,
    data: { loginTokenHash: hashToken(token), loginTokenExpires: new Date(Date.now() + 30 * 60 * 1000).toISOString() },
  });
  const link = `${siteUrl()}/anmelden/link?k=${customer.id}&t=${token}&weiter=${encodeURIComponent(weiter)}`;
  await sendMail({
    to: email,
    subject: "Ihr Anmelde-Link",
    lines: ["Guten Tag,", "tippen Sie auf den Knopf, um sich anzumelden. Der Link gilt 30 Minuten.", "Sie haben keine Anmeldung angefordert? Dann können Sie diese E-Mail einfach löschen."],
    button: { label: "Jetzt anmelden", url: link },
  });
  if (!mailConfigured() && process.env.NODE_ENV !== "production") {
    // Nur lokal ohne E-Mail-Versand: Link direkt anzeigen, damit man testen kann
    (await cookies()).set("dev_anmeldelink", link, { httpOnly: true, maxAge: 600, path: "/anmelden" });
  }
  redirect(`/anmelden?gesendet=1&an=${encodeURIComponent(email)}`);
}

export async function logout() {
  await clearSession();
  redirect("/");
}

/* ───────────── Kaufen ───────────── */

export async function startCheckout(formData: FormData) {
  const art = String(formData.get("art"));
  const slug = String(formData.get("slug") ?? "");
  const intervall = formData.get("intervall") === "year" ? "year" : "month";
  const back = `/bestellen?art=${art}${slug ? `&slug=${encodeURIComponent(slug)}` : ""}${art === "abo" ? `&intervall=${intervall}` : ""}`;

  if (formData.get("verzicht") !== "ja") redirect(`${back}&fehler=zustimmung`);
  if (!stripeEnabled()) redirect(`${back}&fehler=stripe`);

  const pricing = await getPricing();
  const customer = await getCustomer();
  const who = customer?.stripeCustomerId
    ? { customer: customer.stripeCustomerId }
    : customer
      ? { customer_email: customer.email }
      : {};
  const consent = { verzicht_widerruf: "ja", zustimmung_zeit: new Date().toISOString() };

  let url: string | null;
  if (art === "abo") {
    if (!pricing.showSubscription) redirect("/preise");
    const amount = intervall === "year" ? pricing.subscription.yearlyCents : pricing.subscription.monthlyCents;
    if (!amount) redirect("/preise");
    const price = await subscriptionPrice(pricing.subscription.name, intervall, amount);
    const session = await stripe().checkout.sessions.create({
      mode: "subscription",
      locale: "de",
      line_items: [{ price, quantity: 1 }],
      ...who,
      metadata: { art: "abo", ...consent },
      subscription_data: { metadata: { art: "abo", ...consent } },
      success_url: `${siteUrl()}/zahlung/erfolg?session_id={CHECKOUT_SESSION_ID}&weiter=${encodeURIComponent(safePath(formData.get("weiter")))}`,
      cancel_url: `${siteUrl()}${back}&abgebrochen=1`,
    });
    url = session.url;
  } else {
    const guide = await getGuide(slug);
    if (!guide || guide.access !== "premium" || !guide.id || !pricing.showSinglePurchase) redirect("/preise");
    const session = await stripe().checkout.sessions.create({
      mode: "payment",
      locale: "de",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "eur",
            unit_amount: guidePriceCents(guide, pricing),
            product_data: { name: `Anleitung: ${guide.title}` },
          },
        },
      ],
      ...who,
      ...(who.customer ? {} : { customer_creation: "always" as const }),
      invoice_creation: { enabled: true },
      metadata: { art: "anleitung", anleitungId: String(guide.id), slug: guide.slug, titel: guide.title.slice(0, 450), ...consent },
      success_url: `${siteUrl()}/zahlung/erfolg?session_id={CHECKOUT_SESSION_ID}&weiter=${encodeURIComponent(`/anleitung/${guide.slug}`)}`,
      cancel_url: `${siteUrl()}${back}&abgebrochen=1`,
    });
    url = session.url;
  }
  redirect(url ?? back);
}

/** Zahlungsart ändern, Rechnungen ansehen – über die sichere Stripe-Seite */
export async function openBillingPortal() {
  const customer = await getCustomer();
  if (!customer?.stripeCustomerId || !stripeEnabled()) redirect("/konto");
  const portal = await stripe().billingPortal.sessions.create({
    customer: customer.stripeCustomerId,
    return_url: `${siteUrl()}/konto`,
    locale: "de",
  });
  redirect(portal.url);
}

/* ───────────── Kündigen (§ 312k BGB) und Widerrufen ───────────── */

function fmtDate(iso?: string | null) {
  return iso ? new Date(iso).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" }) : "";
}

export async function submitCancellation(formData: FormData) {
  const email = normalizeEmail(String(formData.get("email") ?? ""));
  const name = String(formData.get("name") ?? "").slice(0, 200);
  const cancelKind = formData.get("art") === "ausserordentlich" ? "ausserordentlich" : "ordentlich";
  const reason = String(formData.get("grund") ?? "").slice(0, 4000);
  if (!isEmail(email)) redirect("/kuendigen?fehler=email");

  const payload = await getPayload({ config });
  const receivedAt = new Date();
  const customer = await findCustomerByEmail(email);
  let result = "Kein Abo zu dieser E-Mail-Adresse gefunden – bitte von Hand prüfen.";
  let endDate = "";

  if (customer?.stripeSubscriptionId && ["active", "trialing", "past_due"].includes(customer.subscriptionStatus ?? "")) {
    if (stripeEnabled()) {
      const sub = await stripe().subscriptions.update(customer.stripeSubscriptionId, { cancel_at_period_end: true });
      const end = sub.items.data[0]?.current_period_end;
      endDate = end ? fmtDate(new Date(end * 1000).toISOString()) : fmtDate(customer.currentPeriodEnd);
      await payload.update({ collection: "customers", id: customer.id, data: { cancelAtPeriodEnd: true } });
      result = `Abo gekündigt zum ${endDate}.${cancelKind === "ausserordentlich" ? " Außerordentliche Kündigung gewünscht – bitte prüfen." : ""}`;
    }
  } else if (customer?.manualAccess) {
    result = "Geschenkter Zugang – bitte von Hand entfernen.";
  }

  await payload.create({
    collection: "requests",
    overrideAccess: true,
    data: { type: "kuendigung", name, email, customer: customer?.id, contract: "Alles-Zugang (Abo)", cancelKind, reason, result },
  });

  const when = receivedAt.toLocaleString("de-DE", { timeZone: "Europe/Berlin", dateStyle: "long", timeStyle: "short" });
  await sendMail({
    to: email,
    subject: "Eingangsbestätigung Ihrer Kündigung",
    lines: [
      `Guten Tag${name ? ` ${name}` : ""},`,
      `wir haben Ihre Kündigung am ${when} Uhr erhalten.`,
      endDate
        ? `Ihr Alles-Zugang endet zum ${endDate}. Bis dahin können Sie alle Anleitungen weiter nutzen. Es wird nichts mehr abgebucht.`
        : "Wir prüfen Ihre Kündigung und melden uns, falls wir noch etwas von Ihnen brauchen.",
      cancelKind === "ausserordentlich" ? "Sie haben eine außerordentliche Kündigung gewählt. Wir prüfen diese und melden uns." : "",
    ].filter(Boolean),
  }).catch(() => undefined);
  await notifyAdmin("Neue Kündigung", [`${email} hat gekündigt (${cancelKind}).`, result, reason]);

  redirect(`/kuendigen/bestaetigt?zeit=${encodeURIComponent(receivedAt.toISOString())}${endDate ? `&ende=${encodeURIComponent(endDate)}` : ""}`);
}

export async function submitWithdrawal(formData: FormData) {
  const email = normalizeEmail(String(formData.get("email") ?? ""));
  const name = String(formData.get("name") ?? "").slice(0, 200);
  const contract = String(formData.get("vertrag") ?? "").slice(0, 500);
  const reason = String(formData.get("nachricht") ?? "").slice(0, 4000);
  if (!isEmail(email)) redirect("/widerrufen?fehler=email");

  const payload = await getPayload({ config });
  const customer = await findCustomerByEmail(email);
  const receivedAt = new Date();
  await payload.create({
    collection: "requests",
    overrideAccess: true,
    data: { type: "widerruf", name, email, customer: customer?.id, contract, reason, result: "Bitte prüfen und ggf. im Stripe-Dashboard erstatten." },
  });
  const when = receivedAt.toLocaleString("de-DE", { timeZone: "Europe/Berlin", dateStyle: "long", timeStyle: "short" });
  await sendMail({
    to: email,
    subject: "Eingangsbestätigung Ihres Widerrufs",
    lines: [
      `Guten Tag${name ? ` ${name}` : ""},`,
      `wir haben Ihren Widerruf am ${when} Uhr erhalten.`,
      contract ? `Betroffener Vertrag: ${contract}` : "",
      "Wir bearbeiten ihn umgehend und melden uns bei Ihnen.",
    ].filter(Boolean),
  }).catch(() => undefined);
  await notifyAdmin("Neuer Widerruf", [`${email}: ${contract}`, reason]);
  redirect(`/widerrufen/bestaetigt?zeit=${encodeURIComponent(receivedAt.toISOString())}`);
}

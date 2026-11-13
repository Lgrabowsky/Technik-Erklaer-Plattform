import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { getGuide, getPricing, guidePriceCents } from "@/lib/content";
import { formatEuro } from "@/lib/format";
import { startCheckout } from "@/lib/actions";
import { getCustomer } from "@/lib/session";
import { entitlementsOf } from "@/lib/entitlements";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Notice } from "@/components/Notice";
import { btnPrimary, panel } from "@/components/ui";

export const metadata: Metadata = { title: "Bestellung prüfen", robots: { index: false } };

export default function OrderPage({ searchParams }: PageProps<"/bestellen">) {
  return (
    <div className="max-w-3xl">
      <Breadcrumbs items={[{ href: "/", label: "Start" }, { href: "/preise", label: "Preise" }, { label: "Bestellung" }]} />
      <h1 className="mb-8 text-[2rem] font-bold sm:text-5xl">Ihre Bestellung</h1>
      <Suspense fallback={<p className="text-xl">Wird geladen …</p>}>
        <Order searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";

async function Order({ searchParams }: { searchParams: PageProps<"/bestellen">["searchParams"] }) {
  const sp = await searchParams;
  const art = one(sp.art) === "anleitung" ? "anleitung" : "abo";
  const fehler = one(sp.fehler);
  const [pricing, customer] = await Promise.all([getPricing(), getCustomer()]);
  const e = entitlementsOf(customer);

  let title: string;
  let priceLine: React.ReactNode;
  let terms: string;
  let weiter = one(sp.weiter) || "/konto";
  const slug = one(sp.slug);
  let interval: "month" | "year" = one(sp.intervall) === "year" ? "year" : "month";

  if (art === "abo") {
    if (!pricing.showSubscription) redirect("/preise");
    if (e.subscription) {
      return (
        <Notice>
          Sie haben den {pricing.subscription.name} bereits – alle Anleitungen sind frei.{" "}
          <Link href="/konto" className="font-semibold underline">Zu „Mein Zugang“</Link>
        </Notice>
      );
    }
    if (!pricing.subscription.yearlyCents) interval = "month";
    title = pricing.subscription.name;
    priceLine = null;
    terms =
      "Das Abo verlängert sich automatisch um die gewählte Laufzeit, wenn Sie nicht kündigen. Sie können jederzeit zum Ende der laufenden Laufzeit kündigen – mit einem Klick unter „Verträge hier kündigen“.";
  } else {
    const guide = await getGuide(slug);
    if (!guide || guide.access !== "premium" || !pricing.showSinglePurchase) redirect("/preise");
    if (e.subscription || e.guides.includes(guide.slug)) redirect(`/anleitung/${guide.slug}`);
    title = `Anleitung: ${guide.title}`;
    priceLine = (
      <p className="text-2xl">
        <strong className="text-4xl">{formatEuro(guidePriceCents(guide, pricing))}</strong> einmalig
      </p>
    );
    terms = "Einmalige Zahlung. Kein Abo, es entstehen keine weiteren Kosten.";
    weiter = `/anleitung/${guide.slug}`;
  }

  return (
    <>
      {one(sp.abgebrochen) && <Notice tone="info">Die Bezahlung wurde abgebrochen. Es wurde nichts abgebucht.</Notice>}
      {fehler === "zustimmung" && (
        <Notice tone="error">Bitte setzen Sie unten das Häkchen. Ohne Ihre Zustimmung können wir den Zugang nicht sofort freischalten.</Notice>
      )}
      {fehler === "stripe" && (
        <Notice tone="error">Die Bezahlung ist noch nicht eingerichtet (Stripe-Schlüssel fehlt in der .env-Datei).</Notice>
      )}

      <form action={startCheckout} className="space-y-6">
        <input type="hidden" name="art" value={art} />
        <input type="hidden" name="slug" value={slug} />
        <input type="hidden" name="weiter" value={weiter} />

        <section className={panel} aria-labelledby="produkt">
          <p className="mb-1 text-lg text-muted">Sie bestellen</p>
          <h2 id="produkt" className="mb-4 text-2xl font-bold sm:text-3xl">{title}</h2>
          {art === "abo" ? (
            <fieldset className="space-y-3">
              <legend className="mb-3 text-lg font-semibold">Wie möchten Sie zahlen?</legend>
              <label className="flex min-h-16 cursor-pointer items-center gap-4 rounded-3xl border-2 border-ink p-4 text-xl has-[:checked]:bg-signal">
                <input type="radio" name="intervall" value="month" defaultChecked={interval === "month"} className="h-7 w-7 accent-ink" />
                <span><strong>{formatEuro(pricing.subscription.monthlyCents)}</strong> pro Monat</span>
              </label>
              {pricing.subscription.yearlyCents > 0 && (
                <label className="flex min-h-16 cursor-pointer items-center gap-4 rounded-3xl border-2 border-ink p-4 text-xl has-[:checked]:bg-signal">
                  <input type="radio" name="intervall" value="year" defaultChecked={interval === "year"} className="h-7 w-7 accent-ink" />
                  <span><strong>{formatEuro(pricing.subscription.yearlyCents)}</strong> pro Jahr</span>
                </label>
              )}
            </fieldset>
          ) : (
            priceLine
          )}
          <p className="mt-5 text-lg text-ink-soft">{terms}</p>
          {pricing.taxNote && <p className="mt-2 text-lg text-ink-soft">{pricing.taxNote}</p>}
        </section>

        <section className={panel} aria-labelledby="konto-hinweis">
          <h2 id="konto-hinweis" className="sr-only">Ihr Zugang</h2>
          {customer ? (
            <p className="text-lg">Angemeldet als <strong>{customer.email}</strong>. Der Kauf wird diesem Zugang gutgeschrieben.</p>
          ) : (
            <p className="text-lg">
              Im nächsten Schritt geben Sie Ihre <strong>E-Mail-Adresse</strong> und die Zahlungsart ein. Damit können Sie sich später auf
              jedem Gerät wieder anmelden – ganz ohne Passwort.{" "}
              <Link href={`/anmelden?weiter=${encodeURIComponent(`/bestellen?art=${art}${slug ? `&slug=${slug}` : ""}`)}`} className="font-semibold underline">
                Schon Kunde? Erst anmelden
              </Link>
            </p>
          )}
          <p className="mt-3 text-lg">Bezahlen können Sie per Lastschrift, Karte, PayPal, Apple Pay oder Google Pay – über unseren Zahlungsdienst Stripe.</p>
        </section>

        <label className="flex cursor-pointer gap-4 rounded-3xl border-2 border-ink p-5 text-lg">
          <input type="checkbox" name="verzicht" value="ja" required className="mt-1 h-7 w-7 shrink-0 accent-ink" />
          <span>
            Ich möchte <strong>sofort</strong> Zugang zu den Anleitungen. Ich stimme ausdrücklich zu, dass Sie vor Ablauf der Widerrufsfrist
            mit der Leistung beginnen. Mir ist bekannt, dass ich dadurch mein Widerrufsrecht verliere, sobald der Zugang freigeschaltet ist.
          </span>
        </label>

        <p className="text-lg text-ink-soft">
          Es gelten unsere AGB. Informationen zum Widerruf finden Sie in der Widerrufsbelehrung.
        </p>

        <button type="submit" className={`${btnPrimary} min-h-16 w-full text-xl sm:w-auto`}>
          Zahlungspflichtig bestellen
        </button>
        <p className="text-lg text-ink-soft">Danach öffnet sich die sichere Bezahlseite. Sie können dort noch abbrechen.</p>
      </form>
    </>
  );
}

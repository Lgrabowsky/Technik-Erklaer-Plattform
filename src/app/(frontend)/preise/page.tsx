import type { Metadata } from "next";
import Link from "next/link";
import { getPricing } from "@/lib/content";
import { formatEuro } from "@/lib/format";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { btnSignal, panel } from "@/components/ui";

export const metadata: Metadata = { title: "Preise" };

const singleBenefits = ["Nur bezahlen, was Sie brauchen", "Kein Abo, nichts zu kündigen", "Für immer freigeschaltet"];

export default async function PricingPage() {
  const pricing = await getPricing();
  return (
    <div>
      <Breadcrumbs items={[{ href: "/", label: "Start" }, { label: "Preise" }]} />
      <h1 className="mb-3 text-[2rem] font-bold sm:text-5xl">Preise</h1>
      <p className="mb-10 max-w-3xl text-xl text-ink-soft">
        Viele Anleitungen sind kostenlos. Für alle weiteren gibt es zwei Wege – Sie entscheiden.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {pricing.showSubscription && (
          <section className="flex flex-col rounded-4xl bg-ink p-6 text-white sm:p-8">
            <p className="mb-4 self-start rounded-full bg-signal px-4 py-1 font-semibold text-ink">Empfohlen</p>
            <h2 className="text-3xl font-bold">{pricing.subscription.name}</h2>
            <p className="mb-1 mt-3">
              <span className="text-[2.6rem] font-bold sm:text-5xl">{formatEuro(pricing.subscription.monthlyCents)}</span>{" "}
              <span className="text-lg text-white/85">pro Monat</span>
            </p>
            {pricing.subscription.yearlyCents > 0 && (
              <p className="mb-6 text-lg text-white/85">oder {formatEuro(pricing.subscription.yearlyCents)} im Jahr</p>
            )}
            <ul className="mb-8 flex-1 space-y-3 text-lg">
              {pricing.subscription.benefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <Icon name="check" className="mt-1 h-6 w-6 shrink-0 text-signal" /> {b}
                </li>
              ))}
            </ul>
            <Link href="/bestellen?art=abo" className={`${btnSignal} w-full min-h-16`}>
              {pricing.subscription.name} wählen
            </Link>
          </section>
        )}
        {pricing.showSinglePurchase && (
          <section className={`${panel} flex flex-col`}>
            <h2 className="mt-12 text-3xl font-bold">Einzelne Anleitung</h2>
            <p className="mb-6 mt-3">
              <span className="text-lg text-muted">ab </span>
              <span className="text-[2.6rem] font-bold sm:text-5xl">{formatEuro(pricing.defaultGuideCents)}</span>{" "}
              <span className="text-lg text-muted">einmalig</span>
            </p>
            <ul className="mb-8 flex-1 space-y-3 text-lg">
              {singleBenefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <Icon name="check" className="mt-1 h-6 w-6 shrink-0" /> {b}
                </li>
              ))}
            </ul>
            <p className="rounded-3xl bg-bg p-5 text-lg">Den Kauf-Knopf finden Sie direkt in jeder Anleitung.</p>
          </section>
        )}
      </div>
      <p className="mt-6 text-lg text-ink-soft">
        {pricing.taxNote} Bezahlen per Lastschrift, Karte, PayPal, Apple Pay oder Google Pay.
      </p>
    </div>
  );
}

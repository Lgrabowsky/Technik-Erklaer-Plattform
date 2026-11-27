import Link from "next/link";
import type { Guide } from "@/content/types";
import { formatEuro } from "@/lib/format";
import { guidePriceCents, stepCount, type Pricing } from "@/lib/content";
import { Icon } from "./Icon";
import { btnGhost, btnSignal } from "./ui";

export function Paywall({ guide, pricing }: { guide: Guide; pricing: Pricing }) {
  const price = guidePriceCents(guide, pricing);
  const rest = stepCount(guide) - 1;
  const back = `/anleitung/${guide.slug}`;
  return (
    <section aria-labelledby="paywall-titel" className="rounded-4xl bg-ink p-5 text-white sm:p-10">
      <div className="mb-8 flex items-center gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-signal text-ink">
          <Icon name="lock" className="h-7 w-7" />
        </span>
        <div>
          <h2 id="paywall-titel" className="text-3xl font-bold">
            Noch {rest} {rest === 1 ? "Schritt" : "Schritte"} bis zum Ziel
          </h2>
          <p className="text-lg text-white/85">Wählen Sie, wie Sie weitermachen möchten.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {pricing.showSubscription && (
          <div className="flex flex-col rounded-3xl bg-surface p-6 text-ink">
            <p className="mb-3 self-start rounded-full bg-signal px-4 py-1 font-semibold">Empfohlen</p>
            <h3 className="text-2xl font-bold">{pricing.subscription.name}</h3>
            <p className="mb-4 mt-1">
              <span className="text-4xl font-bold">{formatEuro(pricing.subscription.monthlyCents)}</span>{" "}
              <span className="text-lg text-muted">pro Monat</span>
            </p>
            <ul className="mb-6 flex-1 space-y-2">
              {pricing.subscription.benefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <Icon name="check" className="mt-1 h-6 w-6 shrink-0" /> {b}
                </li>
              ))}
            </ul>
            <Link href={`/bestellen?art=abo&weiter=${encodeURIComponent(back)}`} className={`${btnSignal} w-full min-h-16 ring-2 ring-ink`}>
              {pricing.subscription.name} wählen
            </Link>
          </div>
        )}

        {pricing.showSinglePurchase && (
          <div className="flex flex-col rounded-3xl bg-surface p-6 text-ink">
            <h3 className="mt-1 text-2xl font-bold">Nur diese Anleitung</h3>
            <p className="mb-4 mt-1">
              <span className="text-4xl font-bold">{formatEuro(price)}</span>{" "}
              <span className="text-lg text-muted">einmalig</span>
            </p>
            <p className="mb-6 flex-1">Einmal zahlen, für immer behalten. Kein Abo, nichts zu kündigen.</p>
            <Link href={`/bestellen?art=anleitung&slug=${encodeURIComponent(guide.slug)}`} className={`${btnGhost} w-full min-h-16`}>
              Diese Anleitung wählen
            </Link>
          </div>
        )}
      </div>

      <p className="mt-6 text-lg text-white/85">
        Schon gekauft?{" "}
        <Link href={`/anmelden?weiter=${encodeURIComponent(back)}`} className="font-semibold text-white underline">
          Hier anmelden
        </Link>
      </p>
    </section>
  );
}

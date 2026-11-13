import Link from "next/link";
import type { Guide } from "@/content/types";
import { formatEuro, pricing } from "@/config/pricing";
import { buyGuide, buySubscription } from "@/lib/actions";
import { Icon } from "./Icon";
import { btnPrimary, btnSecondary } from "./ui";

export function Paywall({ guide }: { guide: Guide }) {
  const price = guide.priceCents ?? pricing.defaultGuideCents;
  return (
    <section
      aria-labelledby="paywall-titel"
      className="rounded-2xl border-[3px] border-primary bg-primary-soft p-6"
    >
      <h2 id="paywall-titel" className="mb-2 flex items-center gap-3 text-2xl font-bold">
        <Icon name="lock" /> So geht es weiter
      </h2>
      <p className="mb-6 text-xl">
        Den ersten Schritt haben Sie oben gesehen. Für alle {guide.steps.length} Schritte wählen
        Sie bitte eine der beiden Möglichkeiten:
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {pricing.showSubscription && (
          <div className="rounded-xl border-[3px] border-success bg-surface p-5">
            <p className="mb-1 inline-block rounded-md bg-success px-3 py-1 font-bold text-white">
              Empfohlen
            </p>
            <h3 className="text-xl font-bold">{pricing.subscription.name}</h3>
            <p className="mb-3 text-3xl font-bold">
              {formatEuro(pricing.subscription.monthlyCents)}{" "}
              <span className="text-lg font-normal">pro Monat</span>
            </p>
            <ul className="mb-4 space-y-1">
              {pricing.subscription.benefits.map((b) => (
                <li key={b} className="flex gap-2">
                  <Icon name="check" className="mt-1 h-6 w-6 shrink-0 text-success" /> {b}
                </li>
              ))}
            </ul>
            <form action={buySubscription}>
              <input type="hidden" name="zurueck" value={`/anleitung/${guide.slug}`} />
              <button type="submit" className={`${btnPrimary} w-full`}>
                Alles-Zugang starten
              </button>
            </form>
          </div>
        )}

        {pricing.showSinglePurchase && (
          <div className="rounded-xl border-2 border-border bg-surface p-5">
            <h3 className="text-xl font-bold">Nur diese Anleitung</h3>
            <p className="mb-3 text-3xl font-bold">
              {formatEuro(price)} <span className="text-lg font-normal">einmalig</span>
            </p>
            <p className="mb-4">Sie zahlen einmal und behalten die Anleitung für immer. Kein Abo.</p>
            <form action={buyGuide}>
              <input type="hidden" name="slug" value={guide.slug} />
              <button type="submit" className={`${btnSecondary} w-full`}>
                Anleitung kaufen
              </button>
            </form>
          </div>
        )}
      </div>

      <p className="mt-5 rounded-lg bg-warning-soft p-3 text-warning">
        <strong>Demo-Version:</strong> Es wird kein Geld abgebucht. Die Freischaltung wird nur in
        diesem Browser gespeichert. <Link href="/konto" className="font-bold underline">Freischaltungen ansehen</Link>
      </p>
    </section>
  );
}

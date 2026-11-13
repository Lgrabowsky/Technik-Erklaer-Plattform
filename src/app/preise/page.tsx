import type { Metadata } from "next";
import { formatEuro, pricing } from "@/config/pricing";
import { buySubscription } from "@/lib/actions";
import { Icon } from "@/components/Icon";
import { btnPrimary, card } from "@/components/ui";

export const metadata: Metadata = { title: "Preise" };

export default function PricingPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Preise</h1>
      <p className="max-w-3xl text-xl">
        Viele Anleitungen sind kostenlos. Für alle weiteren haben Sie zwei Möglichkeiten. Sie
        entscheiden selbst, was besser zu Ihnen passt.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {pricing.showSubscription && (
          <section className="rounded-2xl border-[3px] border-success bg-surface p-6">
            <p className="mb-2 inline-block rounded-md bg-success px-3 py-1 font-bold text-white">
              Empfohlen
            </p>
            <h2 className="text-2xl font-bold">{pricing.subscription.name}</h2>
            <p className="my-3 text-4xl font-bold">
              {formatEuro(pricing.subscription.monthlyCents)}{" "}
              <span className="text-lg font-normal">pro Monat</span>
            </p>
            <p className="mb-4 text-lg">
              oder {formatEuro(pricing.subscription.yearlyCents)} im Jahr
            </p>
            <ul className="mb-6 space-y-2 text-lg">
              {pricing.subscription.benefits.map((b) => (
                <li key={b} className="flex gap-2">
                  <Icon name="check" className="mt-1 h-6 w-6 shrink-0 text-success" /> {b}
                </li>
              ))}
            </ul>
            <form action={buySubscription}>
              <input type="hidden" name="zurueck" value="/konto" />
              <button type="submit" className={`${btnPrimary} w-full`}>
                Alles-Zugang starten (Demo)
              </button>
            </form>
          </section>
        )}
        {pricing.showSinglePurchase && (
          <section className={card}>
            <h2 className="text-2xl font-bold">Einzelne Anleitung</h2>
            <p className="my-3 text-4xl font-bold">
              ab {formatEuro(pricing.defaultGuideCents)}{" "}
              <span className="text-lg font-normal">einmalig</span>
            </p>
            <ul className="space-y-2 text-lg">
              <li className="flex gap-2">
                <Icon name="check" className="mt-1 h-6 w-6 shrink-0 text-success" /> Nur bezahlen, was Sie brauchen
              </li>
              <li className="flex gap-2">
                <Icon name="check" className="mt-1 h-6 w-6 shrink-0 text-success" /> Kein Abo, keine Kündigung nötig
              </li>
              <li className="flex gap-2">
                <Icon name="check" className="mt-1 h-6 w-6 shrink-0 text-success" /> Für immer freigeschaltet
              </li>
            </ul>
            <p className="mt-4 text-lg">Den Kauf-Knopf finden Sie direkt in jeder Anleitung.</p>
          </section>
        )}
      </div>
    </div>
  );
}

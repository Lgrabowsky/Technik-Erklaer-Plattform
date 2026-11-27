import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { getPricing } from "@/lib/content";
import { getCustomer } from "@/lib/session";
import { entitlementsOf } from "@/lib/entitlements";
import { logout, openBillingPortal } from "@/lib/actions";
import { formatDate } from "@/lib/format";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Icon } from "@/components/Icon";
import { Notice } from "@/components/Notice";
import { btnGhost, btnPrimary, panel } from "@/components/ui";

export const metadata: Metadata = { title: "Mein Zugang", robots: { index: false } };

export default function AccountPage({ searchParams }: PageProps<"/konto">) {
  return (
    <div>
      <Breadcrumbs items={[{ href: "/", label: "Start" }, { label: "Mein Zugang" }]} />
      <h1 className="mb-10 text-[2rem] font-bold sm:text-5xl">Mein Zugang</h1>
      <div className="space-y-4">
        <Suspense fallback={<p className="text-xl">Wird geladen …</p>}>
          <AccountDetails searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}

async function AccountDetails({ searchParams }: { searchParams: PageProps<"/konto">["searchParams"] }) {
  const [sp, customer, pricing] = await Promise.all([searchParams, getCustomer(), getPricing()]);

  if (!customer) {
    return (
      <section className={`${panel} max-w-2xl`}>
        <p className="mb-3 text-2xl font-bold">Sie sind nicht angemeldet.</p>
        <p className="mb-6 text-lg text-ink-soft">
          Melden Sie sich an, um Ihre gekauften Anleitungen auf diesem Gerät zu sehen. Sie brauchen dafür nur Ihre E-Mail-Adresse.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/anmelden" className={btnPrimary}>Anmelden</Link>
          <Link href="/preise" className={btnGhost}>Preise ansehen</Link>
        </div>
      </section>
    );
  }

  const e = entitlementsOf(customer);
  const bought = (customer.purchasedGuides ?? []).flatMap((g) => (typeof g === "object" && g ? [g] : []));
  const status = customer.subscriptionStatus;

  return (
    <>
      {sp.gekauft && <Notice>Vielen Dank für Ihren Kauf! Ihr Zugang ist freigeschaltet.</Notice>}
      {sp.angemeldet && <Notice>Sie sind jetzt angemeldet.</Notice>}
      {sp.zahlung === "ausstehend" && (
        <Notice tone="info">Vielen Dank! Ihre Zahlung wird noch bearbeitet (z. B. bei Lastschrift). Wir schalten frei, sobald sie da ist.</Notice>
      )}
      <p className="text-lg">Angemeldet als <strong>{customer.email}</strong></p>

      <section className={panel}>
        <p className="mb-2 text-lg text-muted">{pricing.subscription.name}</p>
        {e.subscription ? (
          <>
            <p className="mb-2 flex items-center gap-3 text-2xl font-bold">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-signal"><Icon name="check" className="h-6 w-6" /></span>
              Aktiv – alle Anleitungen sind frei.
            </p>
            {customer.manualAccess && <p className="text-lg text-ink-soft">Geschenkter Zugang.</p>}
            {customer.currentPeriodEnd && !customer.manualAccess && (
              <p className="text-lg text-ink-soft">
                {customer.cancelAtPeriodEnd
                  ? `Gekündigt – Sie können alles noch bis zum ${formatDate(customer.currentPeriodEnd)} nutzen.`
                  : `Verlängert sich am ${formatDate(customer.currentPeriodEnd)} (${customer.subscriptionInterval === "year" ? "jährlich" : "monatlich"}).`}
              </p>
            )}
            {status === "past_due" && (
              <p className="mt-2 text-lg font-semibold text-danger">Die letzte Zahlung hat nicht geklappt. Bitte prüfen Sie Ihre Zahlungsart.</p>
            )}
          </>
        ) : (
          <>
            <p className="mb-5 text-2xl font-bold">{status === "canceled" ? "Beendet" : "Nicht aktiv"}</p>
            <Link href="/bestellen?art=abo" className={btnPrimary}>{pricing.subscription.name} wählen</Link>
          </>
        )}
      </section>

      <section className={panel}>
        <p className="mb-3 text-lg text-muted">Gekaufte Anleitungen</p>
        {bought.length === 0 ? (
          <p className="text-2xl font-bold">Noch keine</p>
        ) : (
          <ul className="space-y-3 text-xl">
            {bought.map((g) => (
              <li key={g.id}>
                <Link href={`/anleitung/${g.slug}`} className="font-semibold text-ink underline">{g.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className={`${panel} flex flex-wrap gap-3`}>
        {customer.stripeCustomerId && (
          <form action={openBillingPortal}>
            <button type="submit" className={btnGhost}>Zahlungsart ändern &amp; Rechnungen</button>
          </form>
        )}
        {e.subscription && !customer.cancelAtPeriodEnd && !customer.manualAccess && (
          <Link href="/kuendigen" className={btnGhost}>Abo kündigen</Link>
        )}
        <form action={logout}>
          <button type="submit" className={btnGhost}>Abmelden</button>
        </form>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { getGuide } from "@/content/guides";
import { getEntitlements } from "@/lib/entitlements";
import { resetDemo } from "@/lib/actions";
import { btnPrimary, btnSecondary, card } from "@/components/ui";

export const metadata: Metadata = { title: "Mein Zugang" };

export default function AccountPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Mein Zugang</h1>
      <Suspense fallback={<p className="text-xl">Wird geladen …</p>}>
        <AccountDetails />
      </Suspense>
    </div>
  );
}

async function AccountDetails() {
  const e = await getEntitlements();
  const bought = e.guides.map(getGuide).filter((g) => g !== undefined);
  return (
    <>
      <section className={card}>
        <h2 className="mb-2 text-2xl font-bold">Alles-Zugang</h2>
        {e.subscription ? (
          <p className="text-xl font-bold text-success">Aktiv – Sie können alle Anleitungen nutzen.</p>
        ) : (
          <>
            <p className="mb-4 text-xl">Nicht aktiv.</p>
            <Link href="/preise" className={btnPrimary}>Preise ansehen</Link>
          </>
        )}
      </section>
      <section className={card}>
        <h2 className="mb-2 text-2xl font-bold">Gekaufte Anleitungen</h2>
        {bought.length === 0 ? (
          <p className="text-xl">Noch keine.</p>
        ) : (
          <ul className="list-disc space-y-2 pl-8 text-xl">
            {bought.map((g) => (
              <li key={g.slug}>
                <Link href={`/anleitung/${g.slug}`} className="text-primary underline">{g.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </section>
      <section className="rounded-2xl bg-warning-soft p-6">
        <p className="mb-4 text-lg text-warning">
          <strong>Demo-Version:</strong> Käufe sind nur simuliert und in diesem Browser gespeichert.
        </p>
        <form action={resetDemo}>
          <button type="submit" className={btnSecondary}>Demo zurücksetzen</button>
        </form>
      </section>
    </>
  );
}

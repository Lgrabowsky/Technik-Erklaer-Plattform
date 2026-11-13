import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { getGuide } from "@/content/guides";
import { getEntitlements } from "@/lib/entitlements";
import { resetDemo } from "@/lib/actions";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Icon } from "@/components/Icon";
import { btnGhost, btnPrimary, panel } from "@/components/ui";

export const metadata: Metadata = { title: "Mein Zugang" };

export default function AccountPage() {
  return (
    <div>
      <Breadcrumbs items={[{ href: "/", label: "Start" }, { label: "Mein Zugang" }]} />
      <h1 className="mb-10 text-[2rem] font-bold sm:text-5xl">Mein Zugang</h1>
      <div className="space-y-4">
        <Suspense fallback={<p className="text-xl">Wird geladen …</p>}>
          <AccountDetails />
        </Suspense>
      </div>
    </div>
  );
}

async function AccountDetails() {
  const e = await getEntitlements();
  const bought = e.guides.map(getGuide).filter((g) => g !== undefined);
  return (
    <>
      <section className={panel}>
        <p className="mb-2 text-lg text-muted">Alles-Zugang</p>
        {e.subscription ? (
          <p className="flex items-center gap-3 text-2xl font-bold">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-signal"><Icon name="check" className="h-6 w-6" /></span>
            Aktiv – alle Anleitungen sind frei.
          </p>
        ) : (
          <>
            <p className="mb-5 text-2xl font-bold">Nicht aktiv</p>
            <Link href="/preise" className={btnPrimary}>Preise ansehen</Link>
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
              <li key={g.slug}>
                <Link href={`/anleitung/${g.slug}`} className="font-semibold text-ink underline">{g.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </section>
      <section className="rounded-4xl border-2 border-dashed border-ink p-6 sm:p-8">
        <p className="mb-4 text-lg">
          <strong>Demo-Version:</strong> Käufe sind nur simuliert und in diesem Browser gespeichert.
        </p>
        <form action={resetDemo}>
          <button type="submit" className={btnGhost}>Demo zurücksetzen</button>
        </form>
      </section>
    </>
  );
}

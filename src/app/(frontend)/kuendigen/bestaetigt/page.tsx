import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { Notice } from "@/components/Notice";
import { btnGhost } from "@/components/ui";

export const metadata: Metadata = { title: "Kündigung eingegangen", robots: { index: false } };

export default function Confirmed({ searchParams }: PageProps<"/kuendigen/bestaetigt">) {
  return (
    <div className="max-w-3xl">
      <h1 className="mb-8 text-[2rem] font-bold sm:text-5xl">Ihre Kündigung ist eingegangen</h1>
      <Suspense fallback={null}>
        <Details searchParams={searchParams} />
      </Suspense>
      <Link href="/" className={btnGhost}>Zur Startseite</Link>
    </div>
  );
}

async function Details({ searchParams }: { searchParams: PageProps<"/kuendigen/bestaetigt">["searchParams"] }) {
  const sp = await searchParams;
  const zeit = typeof sp.zeit === "string" ? new Date(sp.zeit) : new Date();
  const ende = typeof sp.ende === "string" ? sp.ende : "";
  return (
    <Notice>
      <p>
        Eingang: <strong>{zeit.toLocaleString("de-DE", { timeZone: "Europe/Berlin", dateStyle: "long", timeStyle: "short" })} Uhr</strong>
      </p>
      {ende ? (
        <p>Ihr Alles-Zugang endet zum <strong>{ende}</strong>. Bis dahin können Sie alles weiter nutzen. Es wird nichts mehr abgebucht.</p>
      ) : (
        <p>Wir prüfen Ihre Kündigung und melden uns, falls wir noch etwas brauchen.</p>
      )}
      <p>Eine Bestätigung haben wir Ihnen per E-Mail geschickt. Bitte speichern oder drucken Sie diese Seite.</p>
    </Notice>
  );
}

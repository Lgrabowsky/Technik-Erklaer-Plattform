import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { Notice } from "@/components/Notice";
import { btnGhost } from "@/components/ui";

export const metadata: Metadata = { title: "Widerruf eingegangen", robots: { index: false } };

export default function Confirmed({ searchParams }: PageProps<"/widerrufen/bestaetigt">) {
  return (
    <div className="max-w-3xl">
      <h1 className="mb-8 text-[2rem] font-bold sm:text-5xl">Ihr Widerruf ist eingegangen</h1>
      <Suspense fallback={null}>
        <Details searchParams={searchParams} />
      </Suspense>
      <Link href="/" className={btnGhost}>Zur Startseite</Link>
    </div>
  );
}

async function Details({ searchParams }: { searchParams: PageProps<"/widerrufen/bestaetigt">["searchParams"] }) {
  const sp = await searchParams;
  const zeit = typeof sp.zeit === "string" ? new Date(sp.zeit) : new Date();
  return (
    <Notice>
      <p>
        Eingang: <strong>{zeit.toLocaleString("de-DE", { timeZone: "Europe/Berlin", dateStyle: "long", timeStyle: "short" })} Uhr</strong>
      </p>
      <p>Wir bearbeiten Ihren Widerruf umgehend und melden uns per E-Mail. Eine Eingangsbestätigung ist bereits unterwegs.</p>
    </Notice>
  );
}

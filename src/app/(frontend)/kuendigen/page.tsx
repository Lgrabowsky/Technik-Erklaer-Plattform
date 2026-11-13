import type { Metadata } from "next";
import { Suspense } from "react";
import { getCustomer } from "@/lib/session";
import { CancelForm } from "@/components/CancelForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = { title: "Verträge hier kündigen" };

/** Kündigungsbutton nach § 312k BGB – ohne Anmeldung erreichbar */
export default function CancelPage() {
  return (
    <div className="max-w-3xl">
      <Breadcrumbs items={[{ href: "/", label: "Start" }, { label: "Verträge hier kündigen" }]} />
      <h1 className="mb-4 text-[2rem] font-bold sm:text-5xl">Verträge hier kündigen</h1>
      <p className="mb-8 text-xl text-ink-soft">
        Hier können Sie Ihren Alles-Zugang (Abo) kündigen. Sie brauchen sich dafür nicht anzumelden. Sie erhalten sofort eine
        Bestätigung per E-Mail.
      </p>
      <Suspense fallback={<CancelForm />}>
        <Prefilled />
      </Suspense>
    </div>
  );
}

async function Prefilled() {
  const customer = await getCustomer();
  return <CancelForm email={customer?.email} name={customer?.name ?? undefined} />;
}

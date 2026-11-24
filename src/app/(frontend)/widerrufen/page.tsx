import type { Metadata } from "next";
import { Suspense } from "react";
import { getCustomer } from "@/lib/session";
import { submitWithdrawal } from "@/lib/actions";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { btnPrimary, panel } from "@/components/ui";

export const metadata: Metadata = { title: "Vertrag widerrufen" };

const input = "min-h-16 w-full rounded-2xl border-2 border-ink bg-white px-5 text-xl";

/** Widerrufsbutton – ohne Anmeldung erreichbar */
export default function WithdrawPage() {
  return (
    <div className="max-w-3xl">
      <Breadcrumbs items={[{ href: "/", label: "Start" }, { label: "Vertrag widerrufen" }]} />
      <h1 className="mb-4 text-[2rem] font-bold sm:text-5xl">Vertrag widerrufen</h1>
      <p className="mb-8 text-xl text-ink-soft">
        Hier können Sie einen Kauf oder ein Abo widerrufen. Sie erhalten sofort eine Eingangsbestätigung per E-Mail.
      </p>
      <Suspense fallback={<Form />}>
        <Prefilled />
      </Suspense>
    </div>
  );
}

async function Prefilled() {
  const c = await getCustomer();
  return <Form email={c?.email} name={c?.name ?? undefined} />;
}

function Form({ email = "", name = "" }: { email?: string; name?: string }) {
  return (
    <form action={submitWithdrawal} className={`${panel} space-y-6`}>
      <label className="block">
        <span className="mb-2 block text-xl font-semibold">Ihr Name</span>
        <input name="name" defaultValue={name} autoComplete="name" className={input} />
      </label>
      <label className="block">
        <span className="mb-2 block text-xl font-semibold">Ihre E-Mail-Adresse (mit der Sie gekauft haben)</span>
        <input type="email" name="email" required defaultValue={email} autoComplete="email" className={input} />
      </label>
      <label className="block">
        <span className="mb-2 block text-xl font-semibold">Welchen Vertrag möchten Sie widerrufen?</span>
        <input name="vertrag" required className={input} placeholder="z. B. Alles-Zugang vom 13.11.2026" />
      </label>
      <label className="block">
        <span className="mb-2 block text-xl font-semibold">Nachricht (freiwillig)</span>
        <textarea name="nachricht" rows={3} className={`${input} py-4`} />
      </label>
      <button type="submit" className={`${btnPrimary} min-h-16 w-full sm:w-auto`}>Widerruf bestätigen</button>
    </form>
  );
}

import type { Metadata } from "next";
import { Suspense } from "react";
import { cookies } from "next/headers";
import { requestLogin } from "@/lib/actions";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Notice } from "@/components/Notice";
import { btnPrimary, panel } from "@/components/ui";

export const metadata: Metadata = { title: "Anmelden", robots: { index: false } };

export default function LoginPage({ searchParams }: PageProps<"/anmelden">) {
  return (
    <div className="max-w-2xl">
      <Breadcrumbs items={[{ href: "/", label: "Start" }, { href: "/konto", label: "Mein Zugang" }, { label: "Anmelden" }]} />
      <h1 className="mb-4 text-[2rem] font-bold sm:text-5xl">Anmelden</h1>
      <Suspense fallback={null}>
        <LoginForm searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";

async function LoginForm({ searchParams }: { searchParams: PageProps<"/anmelden">["searchParams"] }) {
  const sp = await searchParams;
  if (one(sp.gesendet)) {
    const devLink = (await cookies()).get("dev_anmeldelink")?.value;
    return (
      <>
        <Notice>
          <p className="font-bold">E-Mail ist unterwegs.</p>
          <p>
            Wir haben einen Anmelde-Link an <strong>{one(sp.an)}</strong> geschickt. Öffnen Sie Ihr E-Mail-Postfach und tippen Sie in der
            E-Mail auf „Jetzt anmelden“.
          </p>
        </Notice>
        <p className="text-lg text-ink-soft">Keine E-Mail da? Schauen Sie auch im Ordner „Spam“ nach. Der Link gilt 30 Minuten.</p>
        {devLink && (
          <p className="mt-6 rounded-3xl border-2 border-dashed border-ink p-5 text-lg">
            <strong>Nur lokal sichtbar</strong> (kein E-Mail-Versand eingerichtet):{" "}
            <a href={devLink} className="break-all underline">Anmelde-Link öffnen</a>
          </p>
        )}
      </>
    );
  }
  const fehler = one(sp.fehler);
  return (
    <>
      <p className="mb-8 text-xl text-ink-soft">
        Sie brauchen kein Passwort. Geben Sie Ihre E-Mail-Adresse ein – wir schicken Ihnen einen Link, mit dem Sie sich anmelden.
      </p>
      {fehler === "abgelaufen" && <Notice tone="error">Der Anmelde-Link ist abgelaufen oder ungültig. Bitte fordern Sie einen neuen an.</Notice>}
      {fehler === "email" && <Notice tone="error">Bitte prüfen Sie die E-Mail-Adresse.</Notice>}
      <form action={requestLogin} className={`${panel} space-y-5`}>
        <input type="hidden" name="weiter" value={one(sp.weiter) || "/konto"} />
        <label className="block">
          <span className="mb-2 block text-xl font-semibold">Ihre E-Mail-Adresse</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            inputMode="email"
            className="min-h-16 w-full rounded-2xl border-2 border-ink bg-white px-5 text-xl"
            placeholder="name@beispiel.de"
          />
        </label>
        <button type="submit" className={`${btnPrimary} min-h-16 w-full`}>Anmelde-Link schicken</button>
      </form>
    </>
  );
}

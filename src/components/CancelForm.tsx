"use client";

import { useState } from "react";
import { submitCancellation } from "@/lib/actions";
import { btnGhost, btnPrimary, panel } from "./ui";

const input = "min-h-16 w-full rounded-2xl border-2 border-ink bg-white px-5 text-xl";

/**
 * Zwei Schritte wie vom Gesetz verlangt (§ 312k BGB):
 * 1. Angaben machen → „Weiter zur Bestätigung“
 * 2. Angaben prüfen → „Jetzt kündigen“
 */
export function CancelForm({ email = "", name = "" }: { email?: string; name?: string }) {
  const [step, setStep] = useState<1 | 2>(1);
  const [data, setData] = useState({ name, email, art: "ordentlich", grund: "" });
  const set = (k: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData({ ...data, [k]: e.target.value });

  if (step === 2) {
    return (
      <form action={submitCancellation} className="space-y-6">
        {Object.entries(data).map(([k, v]) => (
          <input key={k} type="hidden" name={k} value={v} />
        ))}
        <section className={panel}>
          <h2 className="mb-4 text-2xl font-bold">Bitte prüfen Sie Ihre Angaben</h2>
          <dl className="grid gap-3 text-lg sm:grid-cols-[12rem_1fr]">
            <dt className="text-muted">Vertrag</dt>
            <dd className="font-semibold">Alles-Zugang (Abo)</dd>
            <dt className="text-muted">Name</dt>
            <dd className="font-semibold">{data.name || "–"}</dd>
            <dt className="text-muted">E-Mail</dt>
            <dd className="font-semibold break-all">{data.email}</dd>
            <dt className="text-muted">Kündigungsart</dt>
            <dd className="font-semibold">
              {data.art === "ordentlich" ? "Ordentlich, zum nächstmöglichen Zeitpunkt" : "Außerordentlich (fristlos)"}
            </dd>
            {data.grund && (
              <>
                <dt className="text-muted">Grund</dt>
                <dd>{data.grund}</dd>
              </>
            )}
          </dl>
        </section>
        <div className="flex flex-wrap gap-3">
          <button type="submit" className={`${btnPrimary} min-h-16 text-xl`}>Jetzt kündigen</button>
          <button type="button" onClick={() => setStep(1)} className={btnGhost}>Angaben ändern</button>
        </div>
      </form>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setStep(2);
      }}
      className={`${panel} space-y-6`}
    >
      <p className="text-lg"><strong>Vertrag:</strong> Alles-Zugang (Abo)</p>
      <label className="block">
        <span className="mb-2 block text-xl font-semibold">Ihr Name</span>
        <input name="name" value={data.name} onChange={set("name")} autoComplete="name" className={input} />
      </label>
      <label className="block">
        <span className="mb-2 block text-xl font-semibold">Ihre E-Mail-Adresse (mit der Sie gekauft haben)</span>
        <input type="email" name="email" required value={data.email} onChange={set("email")} autoComplete="email" className={input} />
      </label>
      <fieldset className="space-y-3">
        <legend className="mb-2 text-xl font-semibold">Wie möchten Sie kündigen?</legend>
        {[
          ["ordentlich", "Ordentlich – zum nächstmöglichen Zeitpunkt"],
          ["ausserordentlich", "Außerordentlich – fristlos aus wichtigem Grund"],
        ].map(([v, l]) => (
          <label key={v} className="flex min-h-16 cursor-pointer items-center gap-4 rounded-3xl border-2 border-ink p-4 text-lg has-[:checked]:bg-signal">
            <input type="radio" name="art" value={v} checked={data.art === v} onChange={set("art")} className="h-7 w-7 accent-ink" />
            {l}
          </label>
        ))}
      </fieldset>
      {data.art === "ausserordentlich" && (
        <label className="block">
          <span className="mb-2 block text-xl font-semibold">Grund der Kündigung</span>
          <textarea name="grund" value={data.grund} onChange={set("grund")} rows={4} className={`${input} py-4`} />
        </label>
      )}
      <button type="submit" className={`${btnPrimary} min-h-16 w-full sm:w-auto`}>Weiter zur Bestätigung</button>
    </form>
  );
}

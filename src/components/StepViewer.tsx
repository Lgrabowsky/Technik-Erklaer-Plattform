"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Chooser, Device, Flow } from "@/content/types";
import { Icon } from "./Icon";
import { ReadAloud } from "./ReadAloud";
import { StepContent, stepSpeechText } from "./StepContent";
import { btnGhost, btnPrimary, btnSignal, panel } from "./ui";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Zeigt eine Anleitung Schritt für Schritt: immer nur ein Schritt auf dem Bildschirm,
 * große "Zurück"/"Weiter"-Knöpfe, Fortschritt als Segmente und Vorlesefunktion.
 */
const deviceChoices: Record<Device, { label: string; hint: string }> = {
  android: { label: "Android-Handy", hint: "z. B. Samsung, Xiaomi, Motorola, Google Pixel" },
  iphone: { label: "iPhone", hint: "von Apple – hinten ist ein Apfel abgebildet" },
  computer: { label: "Computer", hint: "Laptop oder PC" },
};

const deviceChooser: Chooser = {
  question: "Welches Gerät haben Sie?",
  hint: "Die Schritte sind je nach Gerät etwas anders. Tippen Sie auf Ihr Gerät.",
  switchLabel: "Anderes Gerät wählen",
  icon: "phone",
};

function flowLabel(f: Flow) {
  return f.label ?? deviceChoices[f.device ?? "android"].label;
}

function flowHint(f: Flow) {
  return f.hint ?? (f.device ? deviceChoices[f.device].hint : undefined);
}

export function StepViewer({
  flows,
  takeaways,
  chooser = deviceChooser,
}: {
  flows: Flow[];
  takeaways?: string[];
  chooser?: Chooser;
}) {
  // Bei mehreren Abläufen (Android / iPhone) zuerst fragen, welches Gerät man hat.
  const [flowIndex, setFlowIndex] = useState<number | null>(flows.length > 1 ? null : 0);
  const [index, setIndex] = useState(0);
  const [allAtOnce, setAllAtOnce] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);
  const steps = flowIndex === null ? [] : flows[flowIndex].steps;
  const done = flowIndex !== null && index >= steps.length;

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    // Fokus auf die neue Überschrift: Bildschirmleser lesen sie vor, die Seite springt zum Schritt.
    headingRef.current?.focus({ preventScroll: true });
    document.getElementById("schritt-start")?.scrollIntoView({ block: "start" });
  }, [index, flowIndex]);

  if (flowIndex === null) {
    return (
      <section aria-labelledby="geraet-frage" id="schritt-start" className="scroll-mt-28">
        <div className={panel}>
          <h2 id="geraet-frage" className="mb-2 text-[1.8rem] font-bold sm:text-4xl">{chooser.question}</h2>
          <p className="mb-6 text-lg text-ink-soft">{chooser.hint}</p>
          <ul className={`grid gap-3 ${flows.length > 2 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}>
            {flows.map((f, i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => {
                    setFlowIndex(i);
                    setIndex(0);
                  }}
                  className="flex h-full min-h-16 w-full items-center gap-4 rounded-3xl border-[3px] border-ink bg-surface p-4 text-left hover:bg-signal sm:p-5"
                >
                  <span className={`h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ink text-signal ${flows.length > 2 ? "hidden sm:flex" : "flex"}`}>
                    <Icon name={chooser.icon ?? "phone"} className="h-8 w-8" />
                  </span>
                  <span>
                    <span className="block text-xl font-bold">{flowLabel(f)}</span>
                    {flowHint(f) && <span className="block text-base text-ink-soft">{flowHint(f)}</span>}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  const deviceLabel = flows.length > 1 ? flowLabel(flows[flowIndex]) : null;
  const switchDevice = deviceLabel && (
    <p className="no-print mb-4 flex flex-wrap items-center gap-x-3 text-lg">
      <span>
        Anleitung für: <strong>{deviceLabel}</strong>
      </span>
      <button type="button" className="min-h-12 font-semibold underline underline-offset-4" onClick={() => setFlowIndex(null)}>
        {chooser.switchLabel}
      </button>
    </p>
  );

  if (allAtOnce) {
    return (
      <section aria-label="Alle Schritte">
        {switchDevice}
        <div className="no-print mb-6 flex flex-wrap gap-3">
          <button type="button" className={btnGhost} onClick={() => setAllAtOnce(false)}>
            Zurück zur Schritt-Ansicht
          </button>
          <button type="button" className={btnPrimary} onClick={() => window.print()}>
            <Icon name="print" className="h-6 w-6" /> Drucken
          </button>
        </div>
        <ol className="space-y-4">
          {steps.map((s, i) => (
            <li key={i} className={panel}>
              <p className="mb-2 text-lg font-semibold text-muted">Schritt {pad(i + 1)}</p>
              <h2 className="mb-4 text-3xl font-bold">{s.title}</h2>
              <StepContent step={s} />
            </li>
          ))}
        </ol>
      </section>
    );
  }

  return (
    <section aria-label="Anleitung" id="schritt-start" className="scroll-mt-28">
      {switchDevice}
      {/* Fortschritt: ein Segment pro Schritt */}
      <div className="mb-5 flex items-center gap-4">
        <p className="shrink-0 text-lg font-semibold tabular-nums" aria-live="polite">
          {done ? "Fertig" : (
            <>
              Schritt <span className="text-2xl font-bold">{pad(index + 1)}</span>
              <span className="text-muted"> / {pad(steps.length)}</span>
            </>
          )}
        </p>
        <div className="flex flex-1 gap-[6px]" aria-hidden="true">
          {steps.map((_, i) => (
            <span
              key={i}
              className={`h-3 flex-1 rounded-full ${i < index || done ? "bg-ink" : i === index ? "bg-signal ring-2 ring-ink" : "bg-line"}`}
            />
          ))}
        </div>
      </div>

      <div className={`${panel} min-h-72`}>
        {done ? (
          <div className="space-y-5">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-signal">
              <Icon name="check" className="h-11 w-11" />
            </span>
            <h2 ref={headingRef} tabIndex={-1} className="text-[2.2rem] font-bold sm:text-5xl">
              Geschafft!
            </h2>
            <p className="text-[1.35rem]">Sehr gut gemacht. Sie haben alle Schritte erledigt.</p>
            {takeaways && takeaways.length > 0 && (
              <div className="rounded-3xl bg-bg p-6">
                <p className="mb-3 text-xl font-bold">Das sollten Sie sich merken</p>
                <ul className="space-y-3 text-xl">
                  {takeaways.map((t) => (
                    <li key={t} className="flex gap-3">
                      <Icon name="check" className="mt-1 h-6 w-6 shrink-0" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
              <h2 ref={headingRef} tabIndex={-1} className="text-[1.6rem] font-bold sm:text-4xl">
                {steps[index].title}
              </h2>
              <ReadAloud key={index} text={stepSpeechText(steps[index])} />
            </div>
            <StepContent step={steps[index]} />
          </>
        )}
      </div>

      {/* Am Handy klebt die Knopfleiste über dem Menü, damit "Weiter" immer erreichbar ist */}
      <nav
        aria-label="Schritte"
        className="no-print sticky bottom-[calc(4.25rem+env(safe-area-inset-bottom))] z-30 -mx-4 mt-4 flex gap-3 bg-bg/95 px-4 py-3 backdrop-blur sm:static sm:mx-0 sm:mt-5 sm:justify-between sm:bg-transparent sm:p-0 lg:bottom-0"
      >
        {index > 0 ? (
          <button type="button" className={`${btnGhost} min-h-16 px-5`} onClick={() => setIndex(index - 1)}>
            <Icon name="arrow-left" className="h-6 w-6" /> Zurück
          </button>
        ) : (
          <span className="hidden sm:block" />
        )}
        {done ? (
          <Link href="/themen" className={`${btnPrimary} min-h-16 flex-1 sm:flex-none sm:min-w-64`}>
            Nächstes Thema wählen
          </Link>
        ) : (
          <button
            type="button"
            className={`${btnSignal} min-h-16 flex-1 text-xl ring-2 ring-ink sm:flex-none sm:min-w-64`}
            onClick={() => setIndex(index + 1)}
          >
            {index === steps.length - 1 ? "Fertig" : "Weiter"}
            <Icon name="arrow-right" className="h-7 w-7" />
          </button>
        )}
      </nav>

      <p className="no-print mt-8 text-center sm:text-left">
        <button
          type="button"
          className="min-h-12 text-lg font-semibold text-ink underline underline-offset-4"
          onClick={() => setAllAtOnce(true)}
        >
          Alle Schritte auf einer Seite (zum Ausdrucken)
        </button>
      </p>
    </section>
  );
}

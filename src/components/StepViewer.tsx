"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Step } from "@/content/types";
import { Icon } from "./Icon";
import { ReadAloud } from "./ReadAloud";
import { StepContent, stepSpeechText } from "./StepContent";
import { btnGhost, btnPrimary, btnSignal, panel } from "./ui";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Zeigt eine Anleitung Schritt für Schritt: immer nur ein Schritt auf dem Bildschirm,
 * große "Zurück"/"Weiter"-Knöpfe, Fortschritt als Segmente und Vorlesefunktion.
 */
export function StepViewer({ steps, takeaways }: { steps: Step[]; takeaways?: string[] }) {
  const [index, setIndex] = useState(0);
  const [allAtOnce, setAllAtOnce] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);
  const done = index >= steps.length;

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    // Fokus auf die neue Überschrift: Bildschirmleser lesen sie vor, die Seite springt zum Schritt.
    headingRef.current?.focus({ preventScroll: true });
    document.getElementById("schritt-start")?.scrollIntoView({ block: "start" });
  }, [index]);

  if (allAtOnce) {
    return (
      <section aria-label="Alle Schritte">
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
            <h2 ref={headingRef} tabIndex={-1} className="text-5xl font-bold">
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
              <h2 ref={headingRef} tabIndex={-1} className="text-[2rem] font-bold sm:text-4xl">
                {steps[index].title}
              </h2>
              <ReadAloud key={index} text={stepSpeechText(steps[index])} />
            </div>
            <StepContent step={steps[index]} />
          </>
        )}
      </div>

      <nav aria-label="Schritte" className="no-print mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        {index > 0 ? (
          <button type="button" className={btnGhost} onClick={() => setIndex(index - 1)}>
            <Icon name="arrow-left" className="h-6 w-6" /> Zurück
          </button>
        ) : (
          <span className="hidden sm:block" />
        )}
        {done ? (
          <Link href="/themen" className={`${btnPrimary} min-h-16 sm:min-w-64`}>
            Nächstes Thema wählen
          </Link>
        ) : (
          <button
            type="button"
            className={`${btnSignal} min-h-16 text-xl sm:min-w-64`}
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

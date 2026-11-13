"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Step } from "@/content/types";
import { Icon } from "./Icon";
import { ReadAloud } from "./ReadAloud";
import { StepContent, stepSpeechText } from "./StepContent";
import { btnPrimary, btnSecondary, card } from "./ui";

/**
 * Zeigt eine Anleitung Schritt für Schritt: immer nur ein Schritt auf dem Bildschirm,
 * große "Zurück"/"Weiter"-Knöpfe, Fortschrittsanzeige und Vorlesefunktion.
 */
export function StepViewer({
  steps,
  takeaways,
}: {
  steps: Step[];
  takeaways?: string[];
}) {
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
    // Fokus auf die neue Überschrift setzen: Bildschirmleser lesen sie vor,
    // und die Seite springt nach oben zum neuen Schritt.
    headingRef.current?.focus();
    headingRef.current?.scrollIntoView({ block: "start" });
  }, [index]);

  if (allAtOnce) {
    return (
      <section aria-label="Alle Schritte">
        <div className="no-print mb-6 flex flex-wrap gap-3">
          <button type="button" className={btnSecondary} onClick={() => setAllAtOnce(false)}>
            Schritt für Schritt anzeigen
          </button>
          <button type="button" className={btnSecondary} onClick={() => window.print()}>
            <Icon name="print" className="h-6 w-6" /> Drucken
          </button>
        </div>
        <ol className="space-y-6">
          {steps.map((s, i) => (
            <li key={i} className={card}>
              <h2 className="mb-4 text-2xl font-bold">
                Schritt {i + 1}: {s.title}
              </h2>
              <StepContent step={s} />
            </li>
          ))}
        </ol>
      </section>
    );
  }

  return (
    <section aria-label="Anleitung">
      <div className="mb-4" aria-hidden={done}>
        <p className="mb-2 text-lg font-bold" aria-live="polite">
          {done ? "Alle Schritte geschafft" : `Schritt ${index + 1} von ${steps.length}`}
        </p>
        <div className="h-4 w-full overflow-hidden rounded-full border-2 border-border bg-surface">
          <div
            className="h-full bg-success"
            style={{ width: `${(Math.min(index + 1, steps.length) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      <div className={`${card} min-h-64`}>
        {done ? (
          <div className="space-y-4">
            <h2 ref={headingRef} tabIndex={-1} className="flex items-center gap-3 text-3xl font-bold text-success">
              <Icon name="check" className="h-10 w-10" /> Geschafft!
            </h2>
            <p className="text-xl">Sehr gut gemacht. Sie haben alle Schritte erledigt.</p>
            {takeaways && takeaways.length > 0 && (
              <>
                <p className="text-xl font-bold">Das sollten Sie sich merken:</p>
                <ul className="list-disc space-y-2 pl-8 text-xl">
                  {takeaways.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ) : (
          <>
            <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
              <h2 ref={headingRef} tabIndex={-1} className="text-3xl font-bold">
                {steps[index].title}
              </h2>
              <ReadAloud key={index} text={stepSpeechText(steps[index])} />
            </div>
            <StepContent step={steps[index]} />
          </>
        )}
      </div>

      <nav aria-label="Schritte" className="no-print mt-6 flex flex-wrap justify-between gap-4">
        {index > 0 ? (
          <button type="button" className={btnSecondary} onClick={() => setIndex(index - 1)}>
            <Icon name="arrow-left" className="h-6 w-6" /> Zurück
          </button>
        ) : (
          <span />
        )}
        {done ? (
          <Link href="/" className={btnPrimary}>
            Zur Startseite
          </Link>
        ) : (
          <button type="button" className={btnPrimary} onClick={() => setIndex(index + 1)}>
            {index === steps.length - 1 ? "Fertig" : "Weiter"}
            <Icon name="arrow-right" className="h-6 w-6" />
          </button>
        )}
      </nav>

      <p className="no-print mt-8">
        <button
          type="button"
          className="min-h-12 font-bold text-primary underline"
          onClick={() => setAllAtOnce(true)}
        >
          Alle Schritte auf einer Seite anzeigen (zum Ausdrucken)
        </button>
      </p>
    </section>
  );
}

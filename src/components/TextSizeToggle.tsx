"use client";

import { useSyncExternalStore } from "react";

const sizes = [
  { id: "normal", label: "Normale Schrift", glyph: "text-[16px]" },
  { id: "gross", label: "Große Schrift", glyph: "text-[21px]" },
  { id: "sehr-gross", label: "Sehr große Schrift", glyph: "text-[27px]" },
] as const;

type Size = (typeof sizes)[number]["id"];

// Die Schriftgröße steht als data-Attribut am <html>-Element und in localStorage.
const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function readSize(): Size {
  const v = document.documentElement.dataset.textsize;
  return sizes.some((s) => s.id === v) ? (v as Size) : "normal";
}

function applySize(next: Size) {
  document.documentElement.dataset.textsize = next;
  try {
    localStorage.setItem("textsize", next);
  } catch {}
  listeners.forEach((l) => l());
}

/** Drei "A" in steigender Größe – so erkennt man ohne Lesen, was der Schalter tut. */
export function TextSizeToggle() {
  const size = useSyncExternalStore(subscribe, readSize, () => "normal" as Size);

  return (
    <div role="group" aria-label="Schriftgröße" className="flex shrink-0 items-center gap-1 rounded-full bg-bg p-1">
      {sizes.map((s) => (
        <button
          key={s.id}
          type="button"
          onClick={() => applySize(s.id)}
          aria-pressed={size === s.id}
          aria-label={s.label}
          title={s.label}
          className={`flex h-[46px] w-[46px] items-center justify-center rounded-full font-bold leading-none ${s.glyph} ${
            size === s.id ? "bg-ink text-signal" : "text-ink hover:bg-surface"
          }`}
        >
          A
        </button>
      ))}
    </div>
  );
}

/** Setzt die gespeicherte Schriftgröße, bevor die Seite sichtbar wird (kein Springen). */
export const textSizeScript = `try{var s=localStorage.getItem("textsize");if(s)document.documentElement.dataset.textsize=s}catch(e){}`;

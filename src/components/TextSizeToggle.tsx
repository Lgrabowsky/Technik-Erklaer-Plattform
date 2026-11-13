"use client";

import { useSyncExternalStore } from "react";

const sizes = [
  { id: "normal", label: "Normal" },
  { id: "gross", label: "Groß" },
  { id: "sehr-gross", label: "Sehr groß" },
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

export function TextSizeToggle() {
  const size = useSyncExternalStore(subscribe, readSize, () => "normal" as Size);

  return (
    <div role="group" aria-label="Schriftgröße" className="flex flex-wrap items-center gap-2">
      <span className="font-bold">Schrift:</span>
      {sizes.map((s) => (
        <button
          key={s.id}
          type="button"
          onClick={() => applySize(s.id)}
          aria-pressed={size === s.id}
          className={`min-h-12 rounded-lg border-2 border-primary px-3 font-bold ${
            size === s.id ? "bg-primary text-white" : "bg-surface text-primary"
          }`}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}

/** Setzt die gespeicherte Schriftgröße, bevor die Seite sichtbar wird (kein Springen). */
export const textSizeScript = `try{var s=localStorage.getItem("textsize");if(s)document.documentElement.dataset.textsize=s}catch(e){}`;

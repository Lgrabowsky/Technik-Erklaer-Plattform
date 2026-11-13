/** Gemeinsame Klassen. Knöpfe sind mindestens 60px hoch und tragen immer Text. */
const base =
  "inline-flex min-h-[3rem] items-center justify-center gap-3 rounded-full px-7 text-lg font-semibold no-underline transition-[background-color,transform] active:scale-[0.98]";
export const btnPrimary = `${base} bg-ink text-white hover:bg-ink-soft`;
export const btnSignal = `${base} bg-signal text-ink hover:brightness-95`;
export const btnGhost = `${base} border-2 border-ink bg-transparent text-ink hover:bg-surface`;
export const panel = "rounded-4xl bg-surface p-6 sm:p-8";
export const eyebrow = "text-base font-semibold uppercase tracking-[0.12em] text-muted";

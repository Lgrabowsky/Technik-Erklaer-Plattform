import { Icon } from "./Icon";

/** Große, gut sichtbare Meldung: Erfolg (Limette) oder Problem (Rot) */
export function Notice({ tone = "ok", children }: { tone?: "ok" | "error" | "info"; children: React.ReactNode }) {
  const styles = {
    ok: "bg-signal text-ink",
    error: "bg-danger-soft text-danger",
    info: "bg-surface text-ink",
  }[tone];
  return (
    <div role={tone === "error" ? "alert" : "status"} className={`mb-8 flex gap-4 rounded-3xl p-5 text-lg ${styles}`}>
      {tone === "ok" ? (
        <Icon name="check" className="mt-0.5 h-7 w-7 shrink-0" />
      ) : (
        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-base font-bold text-white ${tone === "error" ? "bg-danger" : "bg-ink"}`} aria-hidden="true">
          {tone === "error" ? "!" : "i"}
        </span>
      )}
      <div>{children}</div>
    </div>
  );
}

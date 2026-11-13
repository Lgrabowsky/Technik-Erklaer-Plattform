import type { Access, Device, Difficulty } from "@/content/types";

const deviceNames: Record<Device, string> = {
  android: "Android",
  iphone: "iPhone",
  computer: "Computer",
};

export function deviceList(devices: Device[]) {
  return devices.map((d) => deviceNames[d]).join(", ");
}

export function difficultyLabel(difficulty: Difficulty) {
  return { leicht: "Leicht", mittel: "Mittel", anspruchsvoll: "Etwas schwieriger" }[difficulty];
}

/** Schwierigkeit als 3 Balken – auf einen Blick erfassbar, zusätzlich mit Text. */
export function DifficultyMeter({ difficulty }: { difficulty: Difficulty }) {
  const level = { leicht: 1, mittel: 2, anspruchsvoll: 3 }[difficulty];
  return (
    <span className="inline-flex items-center gap-2">
      <span className="inline-flex items-end gap-[3px]" aria-hidden="true">
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className={`w-[5px] rounded-full ${i <= level ? "bg-ink" : "bg-line"}`}
            style={{ height: `${6 + i * 4}px` }}
          />
        ))}
      </span>
      {difficultyLabel(difficulty)}
    </span>
  );
}

export function AccessBadge({ access }: { access: Access }) {
  return access === "free" ? (
    <span className="inline-flex items-center rounded-full bg-signal px-4 py-1 text-base font-semibold text-ink">
      Kostenlos
    </span>
  ) : (
    <span className="inline-flex items-center rounded-full border-2 border-ink px-4 py-[2px] text-base font-semibold text-ink">
      Im Abo
    </span>
  );
}

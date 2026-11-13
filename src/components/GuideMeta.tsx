import type { Access, Device, Difficulty } from "@/content/types";

const deviceNames: Record<Device, string> = {
  android: "Android",
  iphone: "iPhone",
  computer: "Computer",
};

export function DeviceList({ devices }: { devices: Device[] }) {
  return <>{devices.map((d) => deviceNames[d]).join(", ")}</>;
}

export function DifficultyLabel({ difficulty }: { difficulty: Difficulty }) {
  const label = { leicht: "Leicht", mittel: "Mittel", anspruchsvoll: "Etwas schwieriger" }[difficulty];
  return <>{label}</>;
}

export function AccessBadge({ access }: { access: Access }) {
  return access === "free" ? (
    <span className="inline-block rounded-md bg-success px-3 py-1 text-base font-bold text-white">
      Kostenlos
    </span>
  ) : (
    <span className="inline-block rounded-md border-2 border-primary px-3 py-1 text-base font-bold text-primary">
      Im Abo enthalten
    </span>
  );
}

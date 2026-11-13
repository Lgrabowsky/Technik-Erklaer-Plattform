import type { Category } from "@/content/types";

const paths: Record<Category["icon"] | "lock" | "check" | "search" | "arrow-left" | "arrow-right" | "speaker" | "print", string> = {
  phone: "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 16h.01",
  heart: "M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6C19 16.5 12 21 12 21z",
  train: "M6 3h12a2 2 0 0 1 2 2v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a2 2 0 0 1 2-2zm-2 8h16M8 15h.01M16 15h.01M8 18l-2 3M16 18l2 3",
  card: "M3 6h18a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm-1 4h20M6 15h4",
  shield: "M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3zm-3 10l2 2 4-4",
  lock: "M6 10h12a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm2 0V7a4 4 0 0 1 8 0v3",
  check: "M4 12l5 5L20 6",
  search: "M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm5 12l5 5",
  "arrow-left": "M19 12H5m6-6l-6 6 6 6",
  "arrow-right": "M5 12h14m-6-6l6 6-6 6",
  speaker: "M4 9h4l5-4v14l-5-4H4V9zm12 0a4 4 0 0 1 0 6m2.5-8.5a7.5 7.5 0 0 1 0 11",
  print: "M7 9V3h10v6M7 17H4v-7h16v7h-3M7 14h10v7H7z",
};

export function Icon({
  name,
  className = "h-8 w-8",
}: {
  name: keyof typeof paths;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}

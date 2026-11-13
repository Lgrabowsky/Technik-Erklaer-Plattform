"use client";

import { useRowLabel } from "@payloadcms/ui";

export function StepRowLabel() {
  const { data, rowNumber } = useRowLabel<{ title?: string }>();
  return <span>{`Schritt ${(rowNumber ?? 0) + 1}${data?.title ? `: ${data.title}` : ""}`}</span>;
}

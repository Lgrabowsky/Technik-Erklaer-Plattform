"use client";

import { useRowLabel } from "@payloadcms/ui";

const devices: Record<string, string> = { android: "Android", iphone: "iPhone", computer: "Computer" };

export function VariantRowLabel() {
  const { data, rowNumber } = useRowLabel<{ label?: string; device?: string; steps?: unknown[] }>();
  const name = data?.label || (data?.device ? devices[data.device] : "") || `Variante ${(rowNumber ?? 0) + 1}`;
  return <span>{`${name} · ${data?.steps?.length ?? 0} Schritte`}</span>;
}

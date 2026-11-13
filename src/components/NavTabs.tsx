"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";

export const tabs = [
  { href: "/", label: "Start", icon: "home" },
  { href: "/themen", label: "Themen", icon: "grid" },
  { href: "/suche", label: "Suchen", icon: "search" },
  { href: "/konto", label: "Mein Zugang", short: "Konto", icon: "user" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/themen") return pathname.startsWith("/themen") || pathname.startsWith("/kategorie") || pathname.startsWith("/anleitung");
  return pathname.startsWith(href);
}

/** Hauptmenü: oben am Computer, als feste Leiste unten am Handy (wie bei Handy-Apps gewohnt). */
export function NavTabs({ variant }: { variant: "top" | "bottom" }) {
  const pathname = usePathname();

  if (variant === "top") {
    return (
      <ul className="flex items-center gap-1">
        {tabs.map((t) => {
          const active = isActive(pathname, t.href);
          return (
            <li key={t.href}>
              <Link
                href={t.href}
                aria-current={active ? "page" : undefined}
                className={`inline-flex min-h-12 items-center gap-2 rounded-full px-5 font-semibold no-underline ${
                  active ? "bg-ink text-white" : "text-ink hover:bg-bg"
                }`}
              >
                <Icon name={t.icon} className="h-6 w-6" />
                {t.label}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className="grid grid-cols-4">
      {tabs.map((t) => {
        const active = isActive(pathname, t.href);
        return (
          <li key={t.href}>
            <Link
              href={t.href}
              aria-current={active ? "page" : undefined}
              className="flex min-h-[4.25rem] flex-col items-center justify-center gap-1 px-1 text-[0.8rem] font-semibold leading-tight text-white no-underline"
            >
              <span
                className={`flex h-9 w-14 items-center justify-center rounded-full ${
                  active ? "bg-signal text-ink" : ""
                }`}
              >
                <Icon name={t.icon} className="h-6 w-6" />
              </span>
              <span className="whitespace-nowrap">{"short" in t ? t.short : t.label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

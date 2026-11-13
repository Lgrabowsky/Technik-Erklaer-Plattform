import Link from "next/link";
import { Suspense } from "react";
import { NavTabs } from "./NavTabs";
import { TextSizeToggle } from "./TextSizeToggle";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 no-underline" aria-label="Schritt für Schritt – zur Startseite">
      <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-2xl bg-ink" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="var(--signal)" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19h5v-5h5V9h5V4" />
        </svg>
      </span>
      {/* Feste Pixelgröße, damit Kopfzeile auch bei "Sehr groß" auf schmale Handys passt */}
      <span className="text-[19px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[22px]">
        <span className="block sm:inline">Schritt für</span> Schritt
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <>
      <header className="no-print sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <Logo />
          <nav aria-label="Hauptmenü" className="hidden lg:block">
            <Suspense>
              <NavTabs variant="top" />
            </Suspense>
          </nav>
          <TextSizeToggle />
        </div>
      </header>
      {/* Handy & Tablet: Menü fest am unteren Rand, in Daumen-Reichweite */}
      <nav
        aria-label="Hauptmenü"
        className="no-print fixed inset-x-0 bottom-0 z-40 bg-ink pb-[env(safe-area-inset-bottom)] lg:hidden"
      >
        <Suspense>
          <NavTabs variant="bottom" />
        </Suspense>
      </nav>
    </>
  );
}

import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { textSizeScript } from "@/components/TextSizeToggle";
import "./globals.css";

// Lexend wurde entwickelt, um das Lesen zu erleichtern – klar, modern, gut unterscheidbare Buchstaben.
const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Schritt für Schritt – Technik einfach erklärt",
    template: "%s – Schritt für Schritt",
  },
  description:
    "Einfache Anleitungen für Smartphone, Computer und Internet: Apps installieren, Arzttermine buchen, Fahrkarten kaufen und Betrug erkennen.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${lexend.variable} h-full`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: textSizeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-signal focus:px-6 focus:py-3 focus:text-lg focus:font-bold"
        >
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <main id="inhalt" className="mx-auto w-full max-w-6xl flex-1 px-4 pt-8 pb-12 sm:pt-12">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

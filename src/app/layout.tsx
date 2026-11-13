import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { textSizeScript } from "@/components/TextSizeToggle";
import "./globals.css";

// Schrift, die speziell für gute Lesbarkeit bei Sehschwäche entwickelt wurde.
const readable = Atkinson_Hyperlegible({
  variable: "--font-readable",
  subsets: ["latin"],
  weight: ["400", "700"],
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
    <html lang="de" className={`${readable.variable} h-full`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: textSizeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-surface focus:p-4 focus:text-lg focus:font-bold"
        >
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <main id="inhalt" className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

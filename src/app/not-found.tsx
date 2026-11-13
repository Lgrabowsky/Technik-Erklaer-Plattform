import Link from "next/link";
import { btnSignal } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-[2.2rem] font-bold sm:text-5xl">Diese Seite gibt es leider nicht</h1>
      <p className="text-xl">Vielleicht hat sich ein Tippfehler eingeschlichen. Das ist nicht schlimm.</p>
      <Link href="/" className={btnSignal}>Zur Startseite</Link>
    </div>
  );
}

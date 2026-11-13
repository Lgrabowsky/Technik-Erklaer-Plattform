import Link from "next/link";
import { btnPrimary } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Diese Seite gibt es leider nicht</h1>
      <p className="text-xl">Vielleicht hat sich ein Tippfehler eingeschlichen. Das ist nicht schlimm.</p>
      <Link href="/" className={btnPrimary}>Zur Startseite</Link>
    </div>
  );
}

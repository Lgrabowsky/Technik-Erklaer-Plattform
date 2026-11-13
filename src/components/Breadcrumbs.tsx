import Link from "next/link";

/** "Sie sind hier": zeigt immer, wo man ist und wie man zurückkommt. */
export function Breadcrumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Sie sind hier" className="no-print mb-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-lg">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true" className="text-muted">/</span>}
            {item.href ? (
              <Link href={item.href} className="font-semibold text-ink underline">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-muted">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

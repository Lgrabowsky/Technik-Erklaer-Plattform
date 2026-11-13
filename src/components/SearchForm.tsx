import { Icon } from "./Icon";
import { btnPrimary } from "./ui";

export function SearchForm({ defaultValue = "" }: { defaultValue?: string }) {
  return (
    <form action="/suche" role="search" className="flex max-w-3xl flex-wrap gap-3">
      <label htmlFor="suche" className="w-full text-xl font-bold">
        Was möchten Sie lernen?
      </label>
      <input
        id="suche"
        name="q"
        type="search"
        defaultValue={defaultValue}
        placeholder="z. B. Arzttermin, Fahrkarte, WhatsApp"
        className="min-h-14 flex-1 rounded-xl border-[3px] border-border bg-surface px-4 text-xl"
      />
      <button type="submit" className={btnPrimary}>
        <Icon name="search" className="h-6 w-6" /> Suchen
      </button>
    </form>
  );
}

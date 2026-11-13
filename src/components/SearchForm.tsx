import { Icon } from "./Icon";

export function SearchForm({ defaultValue = "", label = "Wonach suchen Sie?" }: { defaultValue?: string; label?: string }) {
  return (
    <form action="/suche" role="search" className="max-w-3xl">
      <label htmlFor="suche" className="mb-3 block text-xl font-semibold">
        {label}
      </label>
      <div className="flex items-center gap-2 rounded-full border-[3px] border-ink bg-surface p-2 focus-within:shadow-[0_0_0_6px_var(--signal)]">
        <Icon name="search" className="ml-2 h-6 w-6 shrink-0 text-muted sm:ml-3 sm:h-7 sm:w-7" />
        <input
          id="suche"
          name="q"
          type="search"
          defaultValue={defaultValue}
          placeholder="z. B. Rezept"
          className="min-h-12 min-w-0 flex-1 bg-transparent text-xl outline-none placeholder:text-muted"
        />
        <button
          type="submit"
          className="min-h-12 shrink-0 rounded-full bg-ink px-5 text-lg sm:px-6 font-semibold text-white hover:bg-ink-soft"
        >
          Suchen
        </button>
      </div>
    </form>
  );
}

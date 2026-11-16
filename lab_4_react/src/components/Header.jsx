function Header({ theme, onToggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <header className="bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500 px-6 pb-20 pt-12 text-white shadow-lg">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/15 font-display text-3xl font-bold ring-2 ring-white/40">
            ЮР
          </div>
          <div>
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Юрасов Роман</h1>
            <p className="mt-1 text-lg tracking-wide text-brand-100">
              Junior frontend-розробник · Кібербезпека
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Перемкнути тему"
            className="rounded-full border-2 border-white/70 px-4 py-2 text-sm font-semibold transition hover:scale-105 hover:bg-white hover:text-brand-700"
          >
            {isDark ? '☀ День' : '🌙 Ніч'}
          </button>
          <span className="rounded-full border-2 border-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-widest transition hover:scale-105 hover:bg-white hover:text-brand-700">
            Відкритий до стажування
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;

function Footer() {
  return (
    <footer className="bg-slate-900 px-6 py-10 text-center text-slate-300">
      <h2 className="mb-4 font-display text-2xl font-bold text-white">Контакти</h2>
      <ul className="mb-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
        <li>
          <a
            href="mailto:roman.yurasov.kb.2025@lpnu.ua"
            className="text-brand-100 underline-offset-4 transition hover:text-amber-400 hover:underline"
          >
            ✉ roman.yurasov.kb.2025@lpnu.ua
          </a>
        </li>
        <li>
          <a
            href="https://github.com/romanyurasovkb2025-ui"
            target="_blank"
            rel="noreferrer"
            className="text-brand-100 underline-offset-4 transition hover:text-amber-400 hover:underline"
          >
            GitHub ↗
          </a>
        </li>
        <li>📍 Львів</li>
      </ul>
      <p className="text-sm tracking-wide text-slate-500">© 2026 Юрасов Роман</p>
    </footer>
  );
}

export default Footer;

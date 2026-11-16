import { useEffect, useState } from 'react';

function Footer() {
  const [storedInfo, setStoredInfo] = useState([]);

  useEffect(() => {
    // Зберігаємо системну інформацію браузера
    localStorage.setItem('userAgent', navigator.userAgent);
    localStorage.setItem('platform', navigator.platform);

    // Зчитуємо всі записи з localStorage
    const entries = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      entries.push([key, localStorage.getItem(key)]);
    }
    setStoredInfo(entries);
  }, []);

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

      <div className="mx-auto mb-6 max-w-2xl text-left">
        <h3 className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-slate-400">
          Інформація з localStorage
        </h3>
        <ul className="space-y-2 rounded-xl bg-slate-800 p-4 text-xs">
          {storedInfo.map(([key, value]) => (
            <li key={key} className="break-all">
              <span className="font-semibold text-amber-400">{key}:</span> {value}
            </li>
          ))}
        </ul>
      </div>

      <p className="text-sm tracking-wide text-slate-500">© 2026 Юрасов Роман</p>
    </footer>
  );
}

export default Footer;

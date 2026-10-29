const skills = ['HTML5', 'CSS3', 'Tailwind CSS', 'React', 'Vite', 'Git / GitHub', 'JavaScript', 'Мережева безпека'];

function Education() {
  return (
    <>
      <section className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
        <h2 className="mb-4 border-b-2 border-amber-400 pb-2 font-display text-2xl font-bold text-brand-900">
          Освіта
        </h2>
        <p className="font-semibold text-slate-900">Національний університет «Львівська політехніка»</p>
        <p className="text-slate-600">Спеціальність: Кібербезпека</p>
        <p className="mb-3 text-sm text-slate-500">Бакалаврат · 2024 – донині</p>
        <a
          href="https://lpnu.ua"
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-700 focus:outline-none focus:ring-4 focus:ring-brand-100"
        >
          lpnu.ua ↗
        </a>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
        <h2 className="mb-4 border-b-2 border-amber-400 pb-2 font-display text-2xl font-bold text-brand-900">
          Навички
        </h2>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="cursor-default rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-sm text-brand-700 transition hover:scale-105 hover:border-brand-500"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
        <h2 className="mb-4 border-b-2 border-amber-400 pb-2 font-display text-2xl font-bold text-brand-900">
          Мови
        </h2>
        <ul className="divide-y divide-slate-200">
          <li className="flex justify-between py-2">
            <span>Українська</span>
            <span className="font-medium text-slate-500">рідна</span>
          </li>
          <li className="flex justify-between py-2">
            <span>Англійська</span>
            <span className="font-medium text-slate-500">B1</span>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Education;

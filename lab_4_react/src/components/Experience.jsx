const jobs = [
  {
    title: 'Junior frontend-розробник (стажування)',
    meta: 'Локальна IT-компанія, Львів · 2025 – 2026',
    items: [
      'Верстав адаптивні сторінки за макетами з Figma.',
      'Створював компоненти інтерфейсу на React для внутрішнього сервісу.',
      'Працював у команді через Git: гілки, коміти, pull request-и.',
      'Виправляв помилки відображення в різних браузерах.',
    ],
  },
  {
    title: 'Фрилансер, верстальник',
    meta: 'Віддалено · 2024 – 2025',
    items: [
      'Зробив два сайти-візитки для малого бізнесу.',
      'Налаштував публікацію сайтів та обмін файлами з замовниками.',
    ],
  },
  {
    title: 'Навчальні проєкти',
    meta: 'НУ «Львівська політехніка» · 2026',
    items: [
      'Резюме на HTML та React (лабораторна робота №2).',
      'Стилізація резюме за допомогою CSS і Tailwind CSS (лабораторна робота №3).',
      'Консольний застосунок для керування паролями (курсовий проєкт).',
    ],
  },
];

function Experience() {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700 md:p-8">
      <h2 className="mb-6 border-b-2 border-amber-400 pb-2 font-display text-2xl font-bold text-brand-900 dark:text-brand-100">
        Досвід роботи
      </h2>

      <div className="space-y-5">
        {jobs.map((job) => (
          <article
            key={job.title}
            className="group rounded-xl border-l-4 border-brand-500 bg-slate-50 p-5 transition duration-200 hover:-translate-y-0.5 hover:bg-brand-50 hover:shadow-md dark:bg-slate-900 dark:hover:bg-slate-700"
          >
            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-700 dark:text-slate-100 dark:group-hover:text-brand-100">{job.title}</h3>
            <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">{job.meta}</p>
            <ul className="list-disc space-y-1 pl-5 marker:text-brand-500">
              {job.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;

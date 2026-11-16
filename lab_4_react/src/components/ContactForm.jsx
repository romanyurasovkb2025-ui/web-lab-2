import { useEffect, useState } from 'react';

// Замініть на свій endpoint із Formspree (https://formspree.io/f/XXXXXXXX)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzerekkp';
const OPEN_DELAY_MS = 60000;
const DISMISSED_KEY = 'contactFormDismissed';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Якщо користувач уже закривав вікно, більше його не показуємо
    if (localStorage.getItem(DISMISSED_KEY) === 'true') return;

    const timer = setTimeout(() => setIsOpen(true), OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    localStorage.setItem(DISMISSED_KEY, 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const fieldClass =
    'w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100';
  const labelClass = 'mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-800"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 id="contact-title" className="font-display text-2xl font-bold text-brand-900 dark:text-brand-100">
            Зворотний зв'язок
          </h2>
          <button
            type="button"
            onClick={handleClose}
            className="rounded-lg px-3 py-1 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-700 dark:hover:text-slate-100"
          >
            Закрити
          </button>
        </div>

        <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-4">
          <div>
            <label htmlFor="name" className={labelClass}>Ім'я</label>
            <input id="name" name="name" type="text" required className={fieldClass} />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>Email</label>
            <input id="email" name="email" type="email" required className={fieldClass} />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>Номер телефону</label>
            <input id="phone" name="phone" type="tel" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="message" className={labelClass}>Повідомлення</label>
            <textarea id="message" name="message" rows="4" className={fieldClass} />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-brand-600 px-4 py-2 font-medium text-white transition hover:bg-brand-700 focus:outline-none focus:ring-4 focus:ring-brand-100"
          >
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

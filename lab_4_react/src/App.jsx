import { useEffect, useState } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// Денна тема: 07:00–21:00, інакше нічна
function getThemeByTime(date = new Date()) {
  const hours = date.getHours();
  return hours >= 7 && hours < 21 ? 'light' : 'dark';
}

function App() {
  const [theme, setTheme] = useState('light');

  // Автоматичне визначення теми при завантаженні
  useEffect(() => {
    setTheme(getThemeByTime());
  }, []);

  // Застосовуємо клас dark до <body>
  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 antialiased dark:bg-slate-950 dark:text-slate-200">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className="mx-auto -mt-10 grid max-w-5xl gap-6 px-4 pb-12 md:grid-cols-3">
        <div className="flex flex-col gap-6 md:col-span-2">
          <Experience />
          <Reviews />
        </div>
        <div className="flex flex-col gap-6">
          <Education />
        </div>
      </main>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';

// Варіант №24: jsonplaceholder.typicode.com/posts/24/comments
const REVIEWS_URL = 'https://jsonplaceholder.typicode.com/posts/24/comments';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let ignore = false;

    fetch(REVIEWS_URL)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then((data) => {
        if (!ignore) {
          setReviews(data);
          setStatus('success');
        }
      })
      .catch((error) => {
        console.error('Помилка завантаження відгуків:', error);
        if (!ignore) setStatus('error');
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <section className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700 md:p-8">
      <h2 className="mb-6 border-b-2 border-amber-400 pb-2 font-display text-2xl font-bold text-brand-900 dark:text-brand-100">
        Відгуки
      </h2>

      {status === 'loading' && <p className="text-slate-500 dark:text-slate-400">Завантаження відгуків…</p>}
      {status === 'error' && (
        <p className="text-red-600 dark:text-red-400">Не вдалося завантажити відгуки. Спробуйте пізніше.</p>
      )}

      {status === 'success' && (
        <div className="grid gap-4 sm:grid-cols-2">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="rounded-xl border-l-4 border-brand-500 bg-slate-50 p-5 shadow-sm dark:bg-slate-900"
            >
              <h3 className="font-semibold capitalize text-slate-900 dark:text-slate-100">{review.name}</h3>
              <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">{review.email}</p>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{review.body}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Reviews;

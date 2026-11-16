// Варіант №24
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/posts/24/comments';
// Замініть на свій endpoint із Formspree (https://formspree.io/f/XXXXXXXX)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzerekkp';
const DISMISSED_KEY = 'contactFormDismissed';

// 1. Зберігаємо системну інформацію та показуємо всі записи localStorage у футері
localStorage.setItem('userAgent', navigator.userAgent);
localStorage.setItem('platform', navigator.platform);

function renderStorage() {
  const list = document.getElementById('storage-list');
  list.innerHTML = '';
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.className = 'key';
    span.textContent = key + ': ';
    li.append(span, document.createTextNode(localStorage.getItem(key)));
    list.appendChild(li);
  }
}
renderStorage();

// 2. Отримуємо коментарі з сервера і виводимо картками у порядку отримання
async function loadReviews() {
  const box = document.getElementById('reviews');
  try {
    const response = await fetch(COMMENTS_URL);
    if (!response.ok) throw new Error('HTTP ' + response.status);
    const comments = await response.json();
    box.innerHTML = '';
    comments.forEach((comment) => {
      const card = document.createElement('article');
      card.className = 'card';
      const name = document.createElement('h3');
      name.textContent = comment.name;
      const email = document.createElement('p');
      email.className = 'muted';
      email.textContent = comment.email;
      const body = document.createElement('p');
      body.textContent = comment.body;
      card.append(name, email, body);
      box.appendChild(card);
    });
  } catch (error) {
    console.error(error);
    box.textContent = 'Не вдалося завантажити відгуки.';
  }
}
loadReviews();

// 3. Модальне вікно через 1 хвилину; після закриття більше не показуємо
const modal = document.getElementById('contact-modal');
document.getElementById('contact-form').action = FORMSPREE_ENDPOINT;
if (localStorage.getItem(DISMISSED_KEY) !== 'true') {
  setTimeout(() => { modal.hidden = false; }, 60000);
}
document.getElementById('close-modal').addEventListener('click', () => {
  localStorage.setItem(DISMISSED_KEY, 'true');
  modal.hidden = true;
  renderStorage();
});

// 4. Тема: авто за часом (07:00–21:00 денна) + ручне перемикання
const themeBtn = document.getElementById('theme-toggle');
function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
  themeBtn.textContent = theme === 'dark' ? '☀ День' : '🌙 Ніч';
}
function themeByTime(date = new Date()) {
  const hours = date.getHours();
  return hours >= 7 && hours < 21 ? 'light' : 'dark';
}
applyTheme(themeByTime());
themeBtn.addEventListener('click', () => {
  applyTheme(document.body.classList.contains('dark') ? 'light' : 'dark');
});

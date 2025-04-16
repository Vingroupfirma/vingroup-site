
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggleLang = document.createElement('button');
  toggleLang.textContent = '🇷🇺 / 🇬🇧';
  toggleLang.style.position = 'fixed';
  toggleLang.style.bottom = '20px';
  toggleLang.style.right = '20px';
  toggleLang.style.padding = '10px';
  toggleLang.style.zIndex = '999';
  document.body.appendChild(toggleLang);

  let currentLang = 'en';

  toggleLang.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    document.querySelectorAll('[lang]').forEach(el => {
      el.style.display = el.getAttribute('lang') === currentLang ? '' : 'none';
    });
  });

  // инициализация — показываем только английский
  document.querySelectorAll('[lang]').forEach(el => {
    el.style.display = el.getAttribute('lang') === currentLang ? '' : 'none';
  });
});

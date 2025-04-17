document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.getElementById('langToggle');
  let currentLang = 'en';

  function updateLanguage() {
    document.querySelectorAll('[lang]').forEach(el => {
      el.style.display = (el.getAttribute('lang') === currentLang) ? '' : 'none';
    });
  }

  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    updateLanguage();
  });

  updateLanguage(); // Initial call
});
// Scroll animation (optional basic setup)
window.addEventListener("scroll", () => {
  document.querySelectorAll('.card, .fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("fade-in");
    }
  });
});
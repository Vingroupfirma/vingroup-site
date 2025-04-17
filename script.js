
document.addEventListener('DOMContentLoaded', function () {
  const reveals = document.querySelectorAll(".reveal");
  window.addEventListener("scroll", function () {
    for (let el of reveals) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("active");
      }
    }
  });
});

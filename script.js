document.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll(".fade-in");
  fadeInElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.3}s`;
    el.classList.add("visible");
  });
});

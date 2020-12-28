const btn = document.querySelector(".seo__btn");
const content_part = document.querySelector(".seo__content-part:last-child");

btn.addEventListener("click", () => {
  if (window.innerWidth > 760) return;

  content_part.classList.toggle("active");
  if (content_part.classList.contains("active")) {
    btn.textContent = "-";
  } else {
    btn.textContent = "+";
  }
});

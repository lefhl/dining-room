const overlay = document.querySelector(".overlay");

overlay.addEventListener("click", () => {
  const active_elements = document.querySelectorAll(".active");

  active_elements.forEach((item) => {
    item.classList.remove("active");
  });
});

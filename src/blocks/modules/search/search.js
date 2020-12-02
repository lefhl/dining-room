// Поисковая строка
const search = document.querySelector(".search");
const search_filter = document.querySelector(".search__filter");
const search_menu = search_filter.querySelector(".search__categories");
const search_line = document.querySelector(".search__search-line");
const results_wrap = document.querySelector(".search__results-wrapper");
const results = document.querySelector(".search__results");
const result = results.querySelectorAll(".search__result");

// Дистрибьюторы и корзина
const distr = document.querySelector(".search__distributors");
const cart_value = document.querySelector(".search__cart-cost");
const cart_text_arr = cart_value.textContent.split("");
const cart = document.querySelector(".search__cart");
const cart_icon = cart.querySelector(".search__icon");

// Телефон
const search_phone_block = document.querySelector(".search__phone");

results.style.left =
  search_line.getBoundingClientRect().left + pageXOffset + "px";
results.style.width = search_line.getBoundingClientRect().width + "px";

cart_value.textContent =
  cart_text_arr.reduce((res, letter, i) => {
    if ((i + 1) % 3 === 0 && cart_text_arr.length !== i + 1) {
      letter += " ";
    }
    res += letter;
    return res;
  }) + " руб.";

search_filter.addEventListener("click", (e) => {
  if (e.target.closest(".search__categories")) return;

  search_menu.classList.toggle("active");
});

window.addEventListener("click", (e) => {
  if (e.target.closest(".search__filter")) return;

  search_menu.classList.remove("active");
});

search_line.addEventListener("input", () => {
  if (search_line.value == "") {
    results_wrap.classList.remove("active");
    return;
  }
  results_wrap.classList.add("active");
});

window.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("search__search-line") ||
    e.target.closest(".search__results")
  )
    return;

  results_wrap.classList.remove("active");
});

search_menu.addEventListener("click", (e) => {
  if (!e.target.closest(".search__categories-item")) return;

  let selected_category = search_filter.querySelector(
    ".search__selected-category"
  );

  search_menu
    .querySelectorAll(".search__categories-item")
    .forEach((child) => child.classList.remove("active"));

  let list_item = e.target.closest(".search__categories-item");
  list_item.classList.add("active");

  selected_category.textContent = e.target.textContent;
  search_menu.classList.remove("active");
});

distr.addEventListener("mouseenter", () => {
  let icon = distr.querySelector(".search__icon");
  icon.src = "../../../img/distr_hover.png";
});

distr.addEventListener("mouseleave", () => {
  let icon = distr.querySelector(".search__icon");
  icon.src = "../../../img/distr.png";
});

cart.addEventListener("mouseenter", () => {
  cart_icon.src = "../../../img/cart-hover.png";
});
cart.addEventListener("mouseleave", () => {
  cart_icon.src = "../../../img/cart.png";
});

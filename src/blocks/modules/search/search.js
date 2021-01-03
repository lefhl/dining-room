document.addEventListener('DOMContentLoaded', () => {
    // Поисковая строка
  const search = document.querySelector(".search");
  const search_container = search.querySelector(".search__search-container");
  const search_filter = document.querySelector(".search__filter");
  const search_menu = search_filter.querySelector(".search__categories");
  const search_line = document.querySelector(".search__search-line");;
  const search_btn = search.querySelector(".search__btn");
  const results = document.querySelector(".search__results");
  const overlay = document.querySelector('.overlay');

  // Дистрибьюторы и корзина
  const distr = document.querySelector(".search__distributors");
  const cart_value = document.querySelector(".search__cart-cost");
  const cart = document.querySelector(".search__cart");
  const cart_icon = cart.querySelector(".search__icon");

  
  cart_value.textContent = cart_value.textContent.split('')
    .reduce((res, lr, i, arr) => (i + 1) % 3 === 0 && arr.length !== i + 1 ? res += lr + ' ' : res += lr) + " руб.";

  window.addEventListener(`resize`, () => placeResults());

  search_filter.addEventListener("click", (e) => {
    if (e.target.closest(".search__categories")) return;

    search_menu.classList.toggle("active");
  });

  search_line.addEventListener("input", () => {
    if (search_line.value == "") {
      results.classList.remove("active");
      overlay.classList.remove('active', 'active--search');
      return;
    }
    results.classList.add("active");
    placeResults();
    
    if(window.matchMedia("(max-width: 1050px)").matches) return;
    overlay.classList.add('active', 'active--search');
  });

  search_menu.addEventListener("click", (e) => {
    if (!e.target.closest(".search__categories-item")) return;

    let selected_category = search_filter.querySelector(".search__selected-category");

    search_menu.querySelectorAll(".search__categories-item").forEach((child) => child.classList.remove("active"));

    let list_item = e.target.closest(".search__categories-item");
    list_item.classList.add("active");

    selected_category.textContent = e.target.textContent;
    search_menu.classList.remove("active");
  });

  distr.addEventListener("mouseenter", () => {
    let icon = distr.querySelector(".search__icon");
    icon.src = "./img/distr_hover.png";
  });

  distr.addEventListener("mouseleave", () => {
    let icon = distr.querySelector(".search__icon");
    icon.src = "./img/distr.png";
  });

  cart.addEventListener("mouseenter", () => {
    cart_icon.src = "./img/cart-hover.png";
  });
  cart.addEventListener("mouseleave", () => {
    cart_icon.src = "./img/cart.png";
  });

  search_container.addEventListener('click', (e) => {
    if(e.target.classList.contains('search__search-container')) {
      const overlay = e.target;
      overlay.classList.remove('active');
      hideAllIn(e.target);
    }
  })
  search_btn.addEventListener('click', (e) => {
    e.stopPropagation();
    search_container.classList.toggle("active");
  })

  function placeResults() {
    setTimeout(() => {
      if (window.matchMedia("(max-width: 1050px)").matches) {
        placeUnder(results);
      } else {
        placeSomehow(results);
      }
    }, 300)
  }
  function placeUnder(el) {
    el.style.width = search_line.getBoundingClientRect().width + "px";
    el.style.left = search_line.getBoundingClientRect().x + "px";
  }
  function placeSomehow(el) {
    el.style.width = search_line.getBoundingClientRect().width + "px";
    el.style.left = 1 + search_filter.getBoundingClientRect().width + "px";
  }
  function hideAllIn(parent) {
    const active = parent.querySelectorAll('.active');
    active.forEach(el => {
      el.classList.remove('active');
    })
  }
})
const menu = document.querySelector(".menu");
const submenu_b = document.querySelector(".menu__submenu--big");
const submenu_s = document.querySelector(".menu__submenu--small");
const overlay = document.querySelector(".menu__overlay");
const body = document.querySelector("body");
const small_menu_list_id = ["1", "3", "5", "7", "9", "11"];
let current_menu_item = 0;

// Прячем меню при скролле вверх и показываем в обратном случае
let previous_top_offset = 0;

// общая функция, которая будет показывать большое или маленькое меню, в зависимости от дата-атрибута id

menu.addEventListener("click", (e) => {
  if (!e.target.closest(".menu__item")) return;

  menu
    .querySelectorAll(".menu__item")
    .forEach((item, i) => (item.dataset.id = i + 1));

  if (small_menu_list_id.includes(e.target.closest(".menu__item").dataset.id)) {
    toggleSmallMenu(e.target);
    return;
  }

  toggleBigMenu(e.target);
});

// удаляем все активные классы при клике на фон

overlay.addEventListener("click", () => {
  submenu_b.classList.remove("active");
  submenu_s.classList.remove("active");
  overlay.classList.remove("active");
  body.classList.remove("unscrollable");
  current_menu_item = 0;
});

// логика открытия и закрытия маленького подменю

const toggleSmallMenu = (submenu) => {
  if (submenu.closest(".menu__item").dataset.id == current_menu_item) {
    submenu_s.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("unscrollable");
    current_menu_item = 0;
    return;
  }

  submenu_b.classList.remove("active");
  submenu_s.classList.add("active");
  overlay.classList.add("active");
  body.classList.add("unscrollable");
  current_menu_item = submenu.closest(".menu__item").dataset.id;
};

// логика открытия и закрытия большого подменю

const toggleBigMenu = (submenu) => {
  if (submenu.closest(".menu__item").dataset.id == current_menu_item) {
    submenu_b.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("unscrollable");
    current_menu_item = 0;
    return;
  }

  submenu_s.classList.remove("active");
  submenu_b.classList.add("active");
  overlay.classList.add("active");
  body.classList.add("unscrollable");
  current_menu_item = submenu.closest(".menu__item").dataset.id;
};

// прячем и показываем меню при скролле

window.addEventListener("scroll", () => {
  if (document.body.clientWidth < 1050) return;
  let current_top_offset = pageYOffset;
  if (previous_top_offset - current_top_offset < 0) {
    menu.style.display = "none";
    menu.classList.remove("active");
  } else {
    menu.style.display = "block";
    menu.classList.add("active");
  }
  previous_top_offset = current_top_offset;
});

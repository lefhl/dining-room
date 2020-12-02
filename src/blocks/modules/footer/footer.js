const main = document.querySelector(".footer__main");
const menus = main.querySelectorAll(".footer__menu");
const menu_title = main.querySelectorAll(".footer__menu-title");

menu_title.forEach((item) => {
  item.addEventListener("click", (e) => {
    let menu = item.closest(".footer__menu");
    menu.classList.toggle("active");
    checkMenuStatus(menu);
  });
});

const checkMenuStatus = (selected) => {
  let filteredMenus = [];
  for (menu of menus) {
    if (menu != selected) {
      filteredMenus.push(menu);
    }
  }
  filteredMenus.forEach((item) => {
    item.classList.remove("active");
  });
};

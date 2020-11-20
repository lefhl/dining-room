const menu = document.querySelector('.menu');
const submenu_b = document.querySelector('.menu__submenu--big');
const submenu_s = document.querySelector('.menu__submenu--small');
const overlay = document.querySelector('.menu__overlay');
const small_menu_list_id = ['1','3','5','7', '9', '11'];
let current_menu_item = 0;


menu.addEventListener('click', (e) => {
    if(!e.target.closest('.menu__item')) return;

    menu.querySelectorAll('.menu__item').forEach((item, i) => item.dataset.id = i + 1);

    if(small_menu_list_id.includes(e.target.closest('.menu__item').dataset.id)) {
        toggleSmallMenu(e.target);
        return;
    }

    toggleBigMenu(e.target);

})

overlay.addEventListener('click', () => {
    submenu_b.classList.remove('active');
    submenu_s.classList.remove('active');
    overlay.classList.remove('active');
    current_menu_item = 0;
})

const toggleSmallMenu = submenu => {
    if(submenu.closest('.menu__item').dataset.id == current_menu_item) {
        submenu_s.classList.remove('active');
        overlay.classList.remove('active');
        current_menu_item = 0;
        return;
    }

    submenu_b.classList.remove('active');
    submenu_s.classList.add('active');
    overlay.classList.add('active');
    current_menu_item = submenu.closest('.menu__item').dataset.id;
}

const toggleBigMenu = submenu => {
    if(submenu.closest('.menu__item').dataset.id == current_menu_item) {
        submenu_b.classList.remove('active');
        overlay.classList.remove('active');
        current_menu_item = 0;
        return;
    }

    submenu_s.classList.remove('active');
    submenu_b.classList.add('active');
    overlay.classList.add('active');
    current_menu_item = submenu.closest('.menu__item').dataset.id;
}
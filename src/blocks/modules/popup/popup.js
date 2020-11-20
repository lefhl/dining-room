const popup = document.querySelector('.popup');
const popup_close = popup.querySelector('.popup__close');

popup.addEventListener('click', (e) => {
    if(!e.target.classList.contains('popup') && !e.target.classList.contains('popup__close')
    ) return;

    popup.classList.remove('active');
});


// mail copy button

const mail = document.querySelector(".mail");
const copy_mail_btn = document.querySelector(".mail .nav__btn");

// popup

const phone_block = document.querySelector(".nav__item--tel");
const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup");
const popup_close = popup.querySelector(".popup__close");

phone_block.addEventListener("click", (e) => open_phone(e));



popup_close.addEventListener("click", () => {
  popup_close.closest(".popup").classList.remove("active");
  overlay.classList.remove("active");
});

mail.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.classList.contains("nav__link")) return;

  mail.classList.add("clicked");
  copy_mail_btn.style.display = "block";
});

copy_mail_btn.addEventListener("click", () => {
  // Выборка ссылки с электронной почтой
  let mail_link = mail.querySelector("a");
  var range = document.createRange();
  range.selectNode(mail_link);
  window.getSelection().addRange(range);

  // Теперь, когда мы выбрали текст ссылки, выполним команду копирования
  document.execCommand("copy");

  // Снятие выделения - ВНИМАНИЕ: вы должны использовать
  // removeRange(range) когда это возможно
  window.getSelection().removeAllRanges();
  copy_mail_btn.style.display = "none";

  let alert_block = document.querySelector(".alert");
  alert_block.classList.add("active");
  mail.classList.remove("clicked");
  setTimeout(() => {
    alert_block.classList.remove("active");
  }, 3000);
});

window.addEventListener("click", (e) => {
  if (e.target.closest(".mail")) return;
  mail.classList.remove("clicked");
  copy_mail_btn.style.display = "none";
});

window.addEventListener('resize', () => {
  if(!popup.classList.contains('active')) return;
  if(window.matchMedia('(min-width: 1050px)').matches) {
    locatePopup(true);
  } else {
    locatePopup(false);
  }
})

function locatePopup(isScreenBig) {
  setTimeout(() => {
    if(isScreenBig) {
      popup.style.right = 'auto';
      popup.style.left = phone_block.getBoundingClientRect().x + phone_block.getBoundingClientRect().width  - popup.getBoundingClientRect().width + 'px';
      popup.style.top = phone_block.getBoundingClientRect().y + phone_block.getBoundingClientRect().height + 'px';
    } else {
      const width = document.body.getBoundingClientRect().width;
      popup.style.left = 'auto';
      popup.style.right = width / 2 - popup.getBoundingClientRect().width / 2 + 'px';
      popup.style.top = '96px';
    }
  }, 300)
}

function open_phone(e) {
  if (e.target.classList.contains("popup__close")) return;

  if(window.matchMedia('(min-width: 1050px)').matches) {
    locatePopup(true);
  } else {
    locatePopup(false);
  }
  popup.classList.add("active");
  overlay.classList.add("active");
};
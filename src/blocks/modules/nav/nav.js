const mail = document.querySelector(".mail");
const copy_mail_btn = document.querySelector(".mail .nav__btn");
const phone_block = document.querySelector(".nav__item--tel");

phone_block.addEventListener("click", () => {
  const popup = document.querySelector(".popup");
  const popup_inner = document.querySelector(".popup__container");

  popup.classList.add("active");

  popup_inner.style.marginLeft =
    phone_block.getBoundingClientRect().left +
    phone_block.getBoundingClientRect().width -
    popup_inner.getBoundingClientRect().width +
    "px";

  popup.style.top = phone_block.clientHeight + "px";
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

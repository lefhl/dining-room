import Swiper, { Autoplay, Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination, Autoplay]);

const swiper = new Swiper(".swiper-container.promo__slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// const brands_swiper = new Swiper(".swiper-container.brands-bar", {
//   slidesPerView: "auto",
//   spaceBetween: 0,
// });

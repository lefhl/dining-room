import Swiper, { Autoplay, Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination, Autoplay]);

const swiper = new Swiper(".swiper-container.promo__slider", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const brands_swiper = new Swiper(".swiper-container.brands-bar", {
  slidesPerView: "auto",
  spaceBetween: 0,
});

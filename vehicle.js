var thumbsSwiper = new Swiper(".swiper-thumbs", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  centerInsufficientSlides: true,
  breakpoints: {
    640: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    769: {
      slidesPerView: 6,
      spaceBetween: 20
    }
  }
});

var swiper = new Swiper(".main-slider", {
  speed: 800,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  thumbs: {
    swiper: thumbsSwiper,
  },
});

const swiper = new Swiper('.slide', {
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
  },
  slidesPerView: 1,
  // centeredSlides: true,
  spaceBetween: 20,
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  }
});
const swiperHeader = new Swiper('.swiper-header', {
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
  },
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
});
$(".mobile_btn").on("click", function () {
  $(".nav_menu").toggleClass("active");
});

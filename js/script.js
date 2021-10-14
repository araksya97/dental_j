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
  spaceBetween: 20,
  breakpoints: {
    420: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 3,
    },
    1080: {
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

const swiper = new Swiper(".card__wrapper", {
  // Optional parameters
  direction: "horizontal", // chiều trượt
  loop: true,
  spaceBetween: 30, // khoảng cách giữa các slide

  // I pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

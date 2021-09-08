const swiper = new Swiper('.collection-main-container', {
    slidesPerView: 'auto',
    spaceBetween: 25,
    // centeredSlides:true,
    // loop: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".collection__next",
      prevEl: ".collection__prev",
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
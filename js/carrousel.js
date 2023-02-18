window.onload = (event) => {

    const swiper = new Swiper('.mySwiper', {
      effect: "coverflow",
      // grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: false,
      coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 2,
        slideShadows: false
      },
      navigation: {
        nextEl: ".swiper-button-next-1",
        prevEl: ".swiper-button-prev-1"
      },
      noSwiping: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    });

    const swiperText = new Swiper('.mySwiperText', {
    effect: "coverflow",
    // grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: false,
    coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 200,
      modifier: 2,
      slideShadows: false
    },
    navigation: {
      nextEl: ".swiper-button-next-1",
      prevEl: ".swiper-button-prev-1"
    },
    noSwiping: true
    });

    const swiper2 = new Swiper('.mySwiper2', {
      effect: "coverflow",
      // grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: false,
      coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 2,
        slideShadows: false
      },
      navigation: {
        nextEl: ".swiper-button-next-2",
        prevEl: ".swiper-button-prev-2"
      },
      noSwiping: true
    });

    const swiperText2 = new Swiper('.mySwiperText2', {
    effect: "coverflow",
    // grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: false,
    coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 200,
      modifier: 2,
      slideShadows: false
    },
    navigation: {
      nextEl: ".swiper-button-next-2",
      prevEl: ".swiper-button-prev-2"
    },
    noSwiping: true
    });

    const swiper3 = new Swiper('.mySwiper3', {
      effect: "coverflow",
      // grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: false,
      coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 2,
        slideShadows: false
      },
      navigation: {
        nextEl: ".swiper-button-next-3",
        prevEl: ".swiper-button-prev-3"
      },
      noSwiping: true
    });

    const swiperText3 = new Swiper('.mySwiperText3', {
    effect: "coverflow",
    // // grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: false,
    coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 200,
      modifier: 2,
      slideShadows: false
    },
    navigation: {
      nextEl: ".swiper-button-next-3",
      prevEl: ".swiper-button-prev-3"
    },
    noSwiping: true
    });
    // swiper[0].controller.control = swiperText;
    // swiperText[0].controller.control = swiper;
};
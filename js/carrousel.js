window.onload = (event) => {

    const swiper = new Swiper('.mySwiper', {
      effect: "coverflow",
      // grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 2,
        slideShadows: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      noSwiping: true
    });

    const swiperText = new Swiper('.mySwiperText', {
    effect: "coverflow",
    // grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 200,
      modifier: 2,
      slideShadows: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    noSwiping: true
    });

    const swiper2 = new Swiper('.mySwiper2', {
      effect: "coverflow",
      // grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 2,
        slideShadows: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      noSwiping: true
    });

    const swiperText2 = new Swiper('.mySwiperText2', {
    effect: "coverflow",
    // grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 200,
      modifier: 2,
      slideShadows: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    noSwiping: true
    });


    const swiper3 = new Swiper('.mySwiper3', {
      effect: "coverflow",
      // grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 2,
        slideShadows: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      noSwiping: true
    });

    const swiperText3 = new Swiper('.mySwiperText3', {
    effect: "coverflow",
    // // grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 200,
      modifier: 2,
      slideShadows: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    noSwiping: true
    });

    
    

    // swiper[0].controller.control = swiperText;
    // swiperText[0].controller.control = swiper;
};
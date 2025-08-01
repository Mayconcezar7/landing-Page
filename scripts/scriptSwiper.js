const swiper = new Swiper('.slider-wrapper', {

    loop: true,
    grabCursor: true,
    spacebetween: 20,
    

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    breakpoints: {
        0:{
            slidesPerView: 1
        },
        600:{
            slidesPerView: 1
        },

       955:{
            slidesPerView: 3
        }
    }


});
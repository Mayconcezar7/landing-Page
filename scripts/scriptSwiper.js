const swiper = new Swiper('.swiper', {

    loop: true,
    grabCursor: true,
    
    

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
            slidesPerView: 1,
            spacebetween: 18
        },
        600:{
            slidesPerView: 2,
            spacebetween: 18
        },

       955:{
            slidesPerView: 3,
            spacebetween: 24
        }
    }


});
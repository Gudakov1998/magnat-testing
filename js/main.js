$(document).ready(() => {

    new WOW({                                       //wow js
        animateClass: 'animate__animated',
    }).init();

    $('.main__container .main__slider_items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: false,
    });


    $('.prev-btn').click(function () {
        $('.main__slider_items').slick('slickPrev');

    });

    $('.next-btn').click(function () {
        $('.main__slider_items').slick('slickNext');

    });

    $('.header__burger').click(function () {
        $('.').css('display', 'block');
    });


});

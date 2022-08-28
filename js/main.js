$(document).ready(() => {

    new WOW({                                       //wow js
        animateClass: 'animate__animated',
    }).init();

    $('.').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: true,
    });


    $('.prev').click(function () {
        $('.').slick('slickPrev');

    });

    $('.next').click(function () {
        $('.').slick('slickNext');

    });

    $('.header__burger').click(function () {
        $('.').css('display', 'block');
    });

    $('.close').click(function () {
        $('.').css('display', 'none');
    });


});

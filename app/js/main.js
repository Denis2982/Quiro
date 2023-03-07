$(function () {

    $('.main__slick').slick({
      dots: true,
      arrows: false,
      // autoplay: true
    });


    $('.nav__burger').on('click', function() {
      $('.nav__list').toggleClass('nav__list--open');
      $('.nav__burger').toggleClass('nav__burger--open');
    });



})
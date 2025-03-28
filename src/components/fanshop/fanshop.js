$(document).ready(function () {
  if ($(window).width() <= 720) {
    $(".fanshop__list").slick({
      dots: false,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  }

  $(window).resize(function () {
    if (
      $(window).width() <= 720 &&
      !$(".fanshop__list").hasClass("slick-initialized")
    ) {
      $(".fanshop__list").slick({
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    } else if (
      $(window).width() > 720 &&
      $(".fanshop__list").hasClass("slick-initialized")
    ) {
      $(".fanshop__list").slick("unslick");
    }
  });
});

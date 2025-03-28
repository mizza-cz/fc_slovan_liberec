function initMixitUp() {
  var containerEl = document.querySelector(".socialStream__content");

  if (containerEl && window.innerWidth >= 720) {
    var mixer = mixitup(containerEl, {
      animation: {
        effects: "fade translateZ(-200px)",
        effectsIn: "fade translateY(-200%)",
        easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
    });
  }
}

initMixitUp();

$(document).ready(function () {
  if ($(window).width() <= 720) {
    $(".socialStream__content").slick({
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
      !$(".socialStream__content").hasClass("slick-initialized")
    ) {
      $(".socialStream__content").slick({
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    } else if (
      $(window).width() > 720 &&
      $(".socialStream__content").hasClass("slick-initialized")
    ) {
      $(".socialStream__content").slick("unslick");
    }
  });
});

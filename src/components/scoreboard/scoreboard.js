$(function () {
  const sliderOpts = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  function initSlider(selector) {
    const $s = $(selector);
    const items = $s.children(".scoreboard__item");
    let idx = items.index(items.filter(".current").first());
    if (idx < 0) idx = 0;

    $s.slick($.extend({}, sliderOpts, { initialSlide: idx }));
    $s.slick("slickGoTo", idx, false);
  }

  function destroySlider(selector) {
    const $s = $(selector);
    if ($s.hasClass("slick-initialized")) {
      $s.slick("unslick");
    }
  }

  function toggle(selector) {
    const isSmall = $(window).width() < 1320;
    if (isSmall && !$(selector).hasClass("slick-initialized")) {
      initSlider(selector);
    }
    if (!isSmall && $(selector).hasClass("slick-initialized")) {
      destroySlider(selector);
    }
  }

  // инициализируем оба
  toggle(".slider-games");
  toggle(".slider-table");

  $(window).on("resize", function () {
    toggle(".slider-games");
    toggle(".slider-table");
  });
});

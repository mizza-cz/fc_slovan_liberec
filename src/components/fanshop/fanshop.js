// $(document).ready(function () {
//   if ($(window).width() <= 840) {
//     $(".fanshop__list").slick({
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     });
//   }

//   $(window).resize(function () {
//     if (
//       $(window).width() <= 840 &&
//       !$(".fanshop__list").hasClass("slick-initialized")
//     ) {
//       $(".fanshop__list").slick({
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       });
//     } else if (
//       $(window).width() > 840 &&
//       $(".fanshop__list").hasClass("slick-initialized")
//     ) {
//       $(".fanshop__list").slick("unslick");
//     }
//   });
// });

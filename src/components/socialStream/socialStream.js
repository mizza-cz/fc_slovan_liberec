// $(".socialStream .tab").on("click", function (event) {
//   var id = $(this).attr("data-id");
//   $(".socialStream")
//     .find(".socialStream__content")
//     .removeClass("tab-active")
//     .hide();
//   $(".socialStream .socialStream__icons").find(".tab").removeClass("active");
//   $(this).addClass("active");
//   $("#" + id)
//     .addClass("tab-active")
//     .fadeIn();
//   return false;
// });
var containerEl = document.querySelector(".socialStream__content");
if (containerEl) {
  var mixer = mixitup(containerEl, {
    animation: {
      effects: "fade translateZ(-200px)",
      effectsIn: "fade translateY(-200%)",
      easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    },
  });
}

 
 
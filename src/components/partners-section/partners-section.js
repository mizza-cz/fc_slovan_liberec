var $page = $("html, body");
$('partners-section section-header__links a[href*="#"]').click(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    400
  );
  return false;
});

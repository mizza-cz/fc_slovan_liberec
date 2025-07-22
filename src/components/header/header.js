headerNavOpenerClick();
function headerNavOpenerClick() {
  const bodyEl = document.querySelector("body");
  const headerNavOpener = document.querySelector(".js-header__opener");
  if (!bodyEl || !headerNavOpener) {
    return;
  }
  headerNavOpener.addEventListener("click", function () {
    if (!this.classList.contains("is-open")) {
      bodyEl.classList.add("is-nav-open");
      this.classList.add("is-open");
    } else {
      bodyEl.classList.remove("is-nav-open");
      this.classList.remove("is-open");
    }
  });
}
(function () {
  $(".header-top__search").click(function () {
    $("#mobile-search, .header-top__search").toggleClass("active");
  });
})();

(function initHeaderScroll() {
  const header = document.querySelector(".header");
  const scrolledClass = "scrolled";

  if (!header) {
    return;
  }

  function onScroll() {
    if (window.pageYOffset > 0) {
      header.classList.add(scrolledClass);
    } else {
      header.classList.remove(scrolledClass);
    }
  }

  onScroll();

  window.addEventListener("scroll", onScroll);
})();

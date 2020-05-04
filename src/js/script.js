$(document).ready(function () {
  $(".slider__inner").slick({
    speed: 700,
    // autoplay: true,
    prevArrow:
      '<img class ="slick-prev" src = "../img/icons/prev.svg" alt="slide">',
    nextArrow: '<img class="slick-next" src="../img/icons/next.svg">',
  });

  $("ul.catalog__tabs").on("click", "li:not(.active)", function () {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .closest("div.container")
      .find("div.catalog__content")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active");
  });

  $(".catalog__item-link").each(function (i) {
    $(this).on("click", function (e) {
      e.preventDefault();
      $(".catalog__item-content").eq(i).toggleClass("active");
      $(".catalog__item-list").eq(i).toggleClass("active");
    });
  });
  $(".catalog__item-back").each(function (i) {
    $(this).on("click", function (e) {
      e.preventDefault();
      $(".catalog__item-content").eq(i).toggleClass("active");
      $(".catalog__item-list").eq(i).toggleClass("active");
    });
  });
});

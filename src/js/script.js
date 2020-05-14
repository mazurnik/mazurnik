$(document).ready(function () {
  $(".slider__inner").slick({
    speed: 700,
    // autoplay: true,
    prevArrow: '<img class ="slick-prev" src="img/icons/prev.svg" alt="slide">',
    nextArrow: '<img class="slick-next" src="img/icons/next.svg">',
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
  //формы
  $("[data-modal=consultation]").on("click", function () {
    $(".shadow, #consultation").fadeIn("slow");
  });
  $(".modal__close").on("click", function () {
    $(".shadow, #consultation, #thanks, #order").fadeOut("slow");
  });

  $(".button__mini").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__subtitle").text(
        $(".catalog__item-subtitle").eq(i).text()
      );
      $(".shadow, #order").fadeIn("slow");
    });
  });
  //validate

  function valideForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        phone: {
          required: true,
          phone: true,
        },
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: "Пожалуйста, введите своё имя",
          minlength: jQuery.validator.format("Введите {0} символа!"),
        },

        phone: "Пожалуйста, введите свой телефон",

        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты",
        },
      },
    });
  }

  valideForms("#consultation-form");
  valideForms("#consultation form");
  valideForms("#order form");

  // отправка почты на сервер

  $("form").submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      $("#consultation, #order").fadeOut();
      $(".shadow, #thanks").fadeIn("slow");

      $("form").trigger("reset");
    });
    return false;
  });
});
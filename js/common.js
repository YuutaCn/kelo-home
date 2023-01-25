$(function () {
  jQuery(document).ready(function (e) {
    jQuery(document).on("click", ".mob-menu", function () {
      jQuery(".menu").slideDown(500);
    }),
      jQuery(document).on("click", ".close-mob", function () {
        jQuery(".menu").slideUp(500), jQuery(".mob-menu").show(500);
      }),
      jQuery(document).on("click", ".form .buttons button", function (t) {
        t.preventDefault(),
          jQuery(".form .buttons button").removeClass("active"),
          jQuery(this).addClass("active"),
          e('[name="button"]').val(jQuery(this).children("span").text()),
          "E-mail" == e(this).children("span").text()
            ? (e(this).parents("form").find("[name='phone']").prop("hidden", !0), e(this).parents("form").find("[name='mail']").prop("hidden", !1))
            : "WhatsApp" == e(this).children("span").text()
            ? (e(this).parents("form").find("[name='phone']").prop("hidden", !1),
              e(this).parents("form").find("[name='phone']").attr("placeholder", "Введите номер WhatsApp"),
              e(this).parents("form").find("[name='mail']").prop("hidden", !0))
            : "Telegram" == e(this).children("span").text()
            ? (e(this).parents("form").find("[name='phone']").prop("hidden", !1), e(this).parents("form").find("[name='phone']").attr("placeholder", "Введите свой Telegram"), e(this).parents("form").find("[name='mail']").prop("hidden", !0))
            : (e(this).parents("form").find("[name='phone']").prop("hidden", !1), e(this).parents("form").find("[name='phone']").attr("placeholder", "Введите свой телефон"), e(this).parents("form").find("[name='mail']").prop("hidden", !0));
      }),
      [].forEach.call(document.querySelectorAll("img[data-src]"), function (e) {
        e.setAttribute("src", e.getAttribute("data-src")),
          (e.onload = function () {
            e.removeAttribute("data-src");
          });
      }),
      jQuery(document).on("click", ".vopros.item-1 .otvet .item", function (t) {
        e(".item-1 .otvet .item").removeClass("active"),
          e(this).addClass("active"),
          e("[name='otvet1']").attr("value", e(this).find(".desk").text()),
          console.log(e(this).find(".desk").text()),
          e(".vopros .otvet .item").removeClass("error");
      }),
      jQuery(document).on("click", ".vopros.item-2 .otvet .item", function (t) {
        e(".item-2 .otvet .item").removeClass("active"), e(this).addClass("active"), e("[name='otvet2']").attr("value", e(this).find(".desk").text()), e(".vopros .otvet .item").removeClass("error");
      }),
      jQuery(document).on("click", ".vopros.item-3 .otvet .item", function (t) {
        e(".item-3 .otvet .item").removeClass("active"), e(this).addClass("active"), e("[name='otvet3']").attr("value", e(this).find(".desk").text()), e(".vopros .otvet .item").removeClass("error");
      }),
      jQuery(document).on("click", ".vopros.item-4 .otvet .item", function (t) {
        e(this).addClass("active"), e("[name='otvet-4']").val(" ");
        var o = "";
        e(".vopros.item-4 .otvet .item.active").each(function (t) {
          o += e(this).find(".desk").text();
        }),
          e("[name='otvet4']").attr("value", o),
          e(".vopros .otvet .item").removeClass("error");
      }),
      jQuery(document).on("click", ".vopros.item-5 .otvet .item", function (t) {
        e(".item-5 .otvet .item").removeClass("active"), e(this).addClass("active"), e("[name='otvet5']").attr("value", e(this).find(".desk").text()), e(".vopros .otvet .item").removeClass("error");
      }),
      jQuery(document).on("click", ".vopros.item-1 .btn_red", function (t) {
        t.preventDefault();
        var o = e(this).parents(".vopros").find(".otvet .item");
        e(".vopros .otvet .item").removeClass("error"),
          o.each(function (t) {
            e(this).hasClass("active")
              ? (e(".vopros").hide(), e(".vopros.item-2").show(), e(this).addClass("active"), e("[name='otvet-1']").val(e(this).find(".desk").text()), e(".indicator .span-1").addClass("active"), e(".vasha span").text("1%"))
              : e(".vopros.item-1 .otvet .item").addClass("error");
          });
      }),
      jQuery(document).on("click", ".vopros.item-2 .btn_red", function (t) {
        t.preventDefault();
        var o = e(this).parents(".vopros").find(".otvet .item");
        e(".vopros .otvet .item").removeClass("error"),
          o.each(function (t) {
            e(this).hasClass("active")
              ? (e(".vopros").hide(), e(".vopros.item-3").show(), e(this).addClass("active"), e("[name='otvet-2']").val(e(this).find(".desk").text()), e(".indicator .span-2").addClass("active"), e(".vasha span").text("2%"))
              : e(".vopros.item-2 .otvet .item").addClass("error");
          });
      }),
      jQuery(document).on("click", ".vopros.item-3 .btn_red", function (t) {
        t.preventDefault();
        var o = e(this).parents(".vopros").find(".otvet .item");
        e(".vopros .otvet .item").removeClass("error"),
          o.each(function (t) {
            e(this).hasClass("active")
              ? (e(".vopros").hide(), e(".vopros.item-4").show(), e(this).addClass("active"), e("[name='otvet-3']").val(e(this).find(".desk").text()), e(".indicator .span-3").addClass("active"), e(".vasha span").text("3%"))
              : e(".vopros.item-3 .otvet .item").addClass("error");
          });
      }),
      jQuery(document).on("click", ".vopros.item-4 .btn_red", function (t) {
        t.preventDefault();
        var o = e(this).parents(".vopros").find(".otvet .item");
        e(".vopros .otvet .item").removeClass("error"),
          o.each(function (t) {
            e(this).hasClass("active")
              ? (e(".vopros").hide(), e(".vopros.item-5").show(), e(this).addClass("active"), e(".indicator .span-4").addClass("active"), e(".vasha span").text("4%"))
              : e(".vopros.item-4 .otvet .item").addClass("error");
          });
      }),
      jQuery(document).on("click", ".vopros.item-5 .btn_red", function (t) {
        t.preventDefault();
        var o = e(this).parents(".vopros").find(".otvet .item");
        e(".vopros .otvet .item").removeClass("error"),
          o.each(function (t) {
            e(this).hasClass("active")
              ? (e("[name='otvet-5']").val(e(this).find(".desk").text()),
                e(".modal").modal("hide"),
                e("#otvet").modal("show"),
                e(".vopros.item-1").show(),
                e(".vopros.item-5").hide(),
                e(".otvet .item").removeClass("active"),
                e(".indicator .span-5").addClass("active"),
                e(".vasha span").text("5%"))
              : e(".vopros.item-5 .otvet .item").addClass("error");
          });
      }),
      e(window).width(),
      e(".send-form").submit(function (t) {
        t.preventDefault();
        var o = e(this);
        console.log(o),
          e.ajax({
            // url: "mail.php",
            type: "POST",
            data: o.serialize(),
            success: function (t) {
              console.log(t),
                o.trigger("reset"),
                e(".modal").modal("hide"),
                e("#senk").modal("show"),
                setTimeout(function () {
                  e("#senk").modal("hide");
                }, 3e3);
            },
            error: function (e) {
              console.log(e);
            },
          });
      }),
      e('form label.checkbox input[type="checkbox"]').click(function () {
        e(this).is(":checked") ? e(this).parents("form").find("[type='submit']").prop("disabled", !1) : e(this).parents("form").find("[type='submit']").prop("disabled", !0);
      }),
      e('form label.checkbox input[type="checkbox"]').each(function (t) {
        e(this).prop("checked", !0);
      }),
      e("header .bottom .flex").slick({
        infinite: !1,
        arrows: !0,
        focusOnSelect: !0,
        dots: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: !0, dots: !0 } },
          { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }),
      e('[name="phone"]').mask("+7 (999) 999-99-99"),
      e('a[href^="#"].yak').click(function () {
        return (elementClick = e(this).attr("href")), (destination = e(elementClick).offset().top), e("body,html").animate({ scrollTop: destination }, 1100), !1;
      });
  });
});

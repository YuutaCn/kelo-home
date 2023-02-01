
$(function () {
  jQuery(document).ready(function (e) {
    jQuery(document).on("click", ".mob-menu", function () {
      jQuery(".menu").slideDown(500);
    }),
      jQuery(document).on("click", ".vopros.item-1 .otvet .item", function (t) {
        e(".item-1 .otvet .item").removeClass("active"),
          e(this).addClass("active"),
          e("[name='otvet1']").attr("value", e(this).find(".desk").text()),
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
        e('#otvet-form-vvod').html('');
        var o = e(this).parents(".vopros").find(".otvet .item");
        e(".vopros .otvet .item").removeClass("error"),
          o.each(function (t) {
            if (e(this).hasClass("active")) {
              e("[name='otvet-5']").val(e(this).find(".desk").text());
              e(".modal").modal("hide");
              
              let html = '';

              const cheToTam = e("#quiz-form").serializeArray();
              cheToTam.forEach(el => {
                html += `<input type="hidden" name="${el.name}" value="${el.value}">`;
              });

              e("#otvet-form-vvod").html(html);
              e("#otvet").modal("show");
              e(".vopros.item-1").show();
              e(".vopros.item-5").hide();
              e(".otvet .item").removeClass("active");
              e(".indicator .span-5").addClass("active");
              e(".vasha span").text("5%");
            } else {
              e(".vopros.item-5 .otvet .item").addClass("error");
            };
          });
      }),
      e('a[href^="#"].yak').click(function () {
        return (elementClick = e(this).attr("href")), (destination = e(elementClick).offset().top), e("body,html").animate({ scrollTop: destination }, 1100), !1;
      });
  });
});
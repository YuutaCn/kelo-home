"use strict";

var mapStatus = !1;
$(window).scroll(function () {
  var e = $(this).scrollTop();

  if (!0 != mapStatus) {
    if (0 != e) {
      mapStatus = !0;
      var t = document.createElement("script");
      t.type = "text/javascript", t.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=<вашAPI-ключ>"', document.getElementById("map").appendChild(t), setTimeout(function () {
        ymaps.ready(function () {
          var e = new ymaps.Map("map", {
            center: [55.574508, 37.474084],
            zoom: 12
          }, {
            searchControlProvider: "yandex#search"
          }),
              t = (ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'), new ymaps.Placemark(e.getCenter(), {
            hintContent: "Kelo Home",
            balloonContent: "Москва, ул. Александры Монаховой, 7А"
          }, {
            iconLayout: "default#image",
            iconImageHref: "images/svg/mark.svg",
            iconImageSize: [30, 42],
            iconImageOffset: [-5, -38]
          }));
          e.geoObjects.add(t);
        });
      }, 1e3);
    }
  }
});
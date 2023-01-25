let mapStatus = false;

$(window).scroll(function () {

  var target = $(this).scrollTop();

  if (mapStatus == true) {
    return
  } else {

    if (target == 0) {
      return
    } else {
      mapStatus = true;
      var elem = document.createElement('script');
      elem.type = 'text/javascript';
      elem.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=<вашAPI-ключ>"';
      // elem.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2f3bc407f01db228b618edd58a7908176915a52db1e09f247fb698db4a9ea9bc&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true';
      document.getElementById('map').appendChild(elem);

      setTimeout(function () {
        ymaps.ready(function () {
          var myMap = new ymaps.Map('map', {
            center: [55.574508, 37.474084],
            zoom: 12
          }, {
            searchControlProvider: 'yandex#search'
          }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'Kelo Home',
              balloonContent: 'Москва, ул. Александры Монаховой, 7А'
            }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: 'images/svg/mark.svg',
              // Размеры метки.
              iconImageSize: [30, 42],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-5, -38]
            });

          myMap.geoObjects
            .add(myPlacemark);
        });
      }, 1000);

    }

  }

});
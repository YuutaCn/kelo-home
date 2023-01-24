
setTimeout(function(){
	var elem = document.createElement('script');
	elem.type = 'text/javascript';
	elem.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=<вашAPI-ключ>"';
	document.getElementsByTagName('body')[0].appendChild(elem);
}, 3000);

setTimeout(function(){
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
}, 3500);
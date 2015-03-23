ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [47.21, 39.71],
            zoom: 12,
            controls: ['zoomControl']
        });
        
        myMap.behaviors
        // Отключаем часть включенных по умолчанию поведений:
        //  - drag - перемещение карты при нажатой левой кнопки мыши;
        //  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
        .disable(['rightMouseButtonMagnifier', 'scrollZoom', 'dblClickZoom']);
        // Включаем линейку.
        // .enable('ruler');
        


    // Создаем геообъект с типом геометрии "Точка".
        
    var building1HTML = "\
      <img src='pics/objects/icons/building1.png' style='width: 100px;'>\
      <div style='text-align: center; margin-left: -75px; width: 250px; height: auto; background-color: white; opacity: 0.9; border-radius: 10px; padding: 10px;'>\
        <span style=' font-weight: bold;'>8-этажный дом на ул. Шестакова 13</span>\
          <div class='progress' style='margin: 10px 0 10px 0;'>\
            <div class='progress-bar progress-bar-primary progress-bar-striped active' role='progressbar' aria-valuenow='54' aria-valuemin='0' aria-valuemax='100' style='width: 54%;'>\
              <span class=''>Построен на 54%</span>\
            </div>\
          </div>\
      </div>";
    
    var building1Layout = ymaps.templateLayoutFactory.createClass(building1HTML);
      
      
    myGeoObject = new ymaps.GeoObject({
        // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [47.25, 39.62]
        },
        // Свойства.
        properties: {
            // Контент метки.
            hintContent: '8-этажный дом на ул. Шестакова 13'
            // balloonContentBody: "<div style=''>Новостройка на Вятской</div>"
        }
    }, {
        // Опции.

        iconLayout: building1Layout,
        iconShape: {
                      type: 'Rectangle',
                      // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
                      coordinates: [
                          [0, 0], [100, 100]
                      ]
                    },
        
        // iconLayout: 'default#image',
        // iconImageHref: 'pics/objects/icons/building1.png',
        // iconImageSize: [98, 98],

        // Метку можно перемещать.
        draggable: false
        // hideIconOnBalloonOpen: false
    });
    
    
    var building2HTML = "\
      <a href='object.html'><img src='pics/objects/icons/building2.png' style='width: 100px;'></a>\
      <div style='text-align: center; margin-left: -75px; width: 250px; height: auto; background-color: white; opacity: 0.9; border-radius: 10px; padding: 10px;'>\
        <span style=' font-weight: bold;'>4-этажный дом на ул. Венеры 21</span>\
          <div class='progress' style='margin: 10px 0 10px 0;'>\
            <div class='progress-bar progress-bar-warning progress-bar-striped active' role='progressbar' aria-valuenow='24' aria-valuemin='0' aria-valuemax='100' style='width: 24%;'>\
              <span class=''>24%</span>\
            </div>\
          </div>\
      </div>";
    
    var building2Layout = ymaps.templateLayoutFactory.createClass(building2HTML);

    myGeoObject2 = new ymaps.GeoObject({
        // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [47.29, 39.72]
        },
        // Свойства.
        properties: {
            // Контент метки.
            hintContent: '4-этажный дом на ул. Венеры 21'
            // balloonContentBody: "<div style=''>Новостройка на Вятской 2</div>"
        }
    }, {
        // Опции.

        iconLayout: building2Layout,
        iconShape: {
                      type: 'Rectangle',
                      // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
                      coordinates: [
                          [0, 0], [100, 100]
                      ]
                    },
                    
        // iconLayout: 'default#image',
        // iconImageHref: 'pics/objects/icons/building2.png',
        // iconImageSize: [98, 98],
        // iconImageOffset: [-3, -42],

        // Метку можно перемещать.
        draggable: false
        // hideIconOnBalloonOpen: false
    });
    
    
    var building3HTML = "\
      <img src='pics/objects/icons/building3.png' style='width: 100px;'>\
      <div style='text-align: center; margin-left: -75px; width: 250px; height: auto; background-color: white; opacity: 0.9; border-radius: 10px; padding: 10px;'>\
        <span style=' font-weight: bold;'>16-этажный дом на ул. Левобережной 14</span>\
          <div class='progress' style='margin: 10px 0 10px 0;'>\
            <div class='progress-bar progress-bar-success progress-bar-striped active' role='progressbar' aria-valuenow='82' aria-valuemin='0' aria-valuemax='100' style='width: 82%;'>\
              <span class=''>Построен на 82%</span>\
            </div>\
          </div>\
      </div>";
  
    var building3Layout = ymaps.templateLayoutFactory.createClass(building3HTML);

    myGeoObject3 = new ymaps.GeoObject({
        // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [47.22, 39.78]
        },
        // Свойства.
        properties: {
            // Контент метки.
            hintContent: '16-этажный дом на ул. Левобережной 14'
            // balloonContentBody: "<div style=''>Новостройка на Вятской 2</div>"
        }
    }, {
        // Опции.

        iconLayout: building3Layout,
        iconShape: {
                      type: 'Rectangle',
                      // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
                      coordinates: [
                          [0, 0], [100, 150]
                      ]
                    },
                  
        // iconLayout: 'default#image',
        // iconImageHref: 'pics/objects/icons/building2.png',
        // iconImageSize: [98, 98],
        // iconImageOffset: [-3, -42],

        // Метку можно перемещать.
        draggable: false
        // hideIconOnBalloonOpen: false
    });


    myMap.geoObjects.add(myGeoObject).add(myGeoObject2).add(myGeoObject3);

    myGeoObject.events.add("click", function () {

      swal({   
        title: "Вход на сайт",   
        text: "Для продолжения войдите через социальную сеть",   
        type: "warning",   
        showCancelButton: true,   
        cancelButtonText: "Отмена",   
        confirmButtonColor: "orange",
        confirmButtonText: "Одноклассники",   
        closeOnConfirm: false }, 
        function(){   
          swal("Отлично!", "Вы успешно вошли на сайт через Одноклассники", "success"); 
        });

    });
    myGeoObject2.events.add("click", function () {

      swal({   
        title: "Вход на сайт",   
        text: "Для продолжения войдите через социальную сеть",   
        type: "warning",   
        showCancelButton: true,   
        cancelButtonText: "Отмена",   
        confirmButtonColor: "orange",
        confirmButtonText: "Одноклассники",   
        closeOnConfirm: false }, 
        function(){   
          swal("Отлично!", "Вы успешно вошли на сайт через Одноклассники", "success"); 
        });

    });
    myGeoObject3.events.add("click", function () {

      swal({   
        title: "Вход на сайт",   
        text: "Для продолжения войдите через социальную сеть",   
        type: "warning",   
        showCancelButton: true,   
        cancelButtonText: "Отмена",   
        confirmButtonColor: "orange",
        confirmButtonText: "Одноклассники",   
        closeOnConfirm: false }, 
        function(){   
          swal("Отлично!", "Вы успешно вошли на сайт через Одноклассники", "success"); 
        });

    });

}

// JavaScript Document
  var map;
  function initMap() {

    // マップ基本設定
    var latLng = new google.maps.LatLng(35.775967, 139.726998);
    map = new google.maps.Map(
      document.getElementById("map1"),
      {
        zoom: 16,  // 拡大率
        center: latLng,
        scrollwheel: false  // マウスホイールで拡縮しなくなる
      }
    );


    // マーカー設定
var markerImg = {
  url: 'img/pin.png',
  scaledSize : new google.maps.Size(40,40)
};
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      icon: markerImg,
	  title: 'カーマ工房',
	  animation: google.maps.Animation.BOUNCE
    });

    /***********************************************************************
    変更部分ここから
    **********************************************************************/
// 地図をグレースケールに
    var mapStyle = [
      {
          "stylers": [
            { "saturation": -100 }
          ]
      }
    ];
    var mapType = new google.maps.StyledMapType(mapStyle);
    map.mapTypes.set('GrayScaleMap', mapType);
    map.setMapTypeId('GrayScaleMap');
	    /***********************************************************************
    変更部分ここまで
    **********************************************************************/


  }


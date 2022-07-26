var mapContainer = document.getElementById('map'),
mapOption = {
    center: new kakao.maps.LatLng(37.55780674631167, 126.92640670830215),
    level: 3
};

var map = new kakao.maps.Map(mapContainer, mapOption);

var mapTypeControl = new kakao.maps.MapTypeControl();

map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

var imageSrc = 'icon/location.svg',
imageSize = new kakao.maps.Size(38, 60),
imageOption = {offset: new kakao.maps.Point(19, 60)};

var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
markerPosition = new kakao.maps.LatLng(37.55780674631167, 126.92640670830215);

var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage
});

marker.setMap(map);


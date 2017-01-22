var map;


function initMap() {
    var mapOptions = {
        zoom: 2,
        center: new google.maps.LatLng(0, 0),
        styles: mapStyles,
        mapTypeControl: false,
        scaleControl: true,
        zoomControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        //    https://developers.google.com/maps/documentation/javascript/styling TODO
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    //http://stackoverflow.com/questions/29810345/using-google-maps-polyline-to-draw-bezier-curve TODO

    google.maps.event.addListener(map, 'click', function (event) {
        console.log("{lat: " + event.latLng.lat() + ", lng: " + event.latLng.lng() + "},");
    });
    addLines();


    // renderMarkers(); TODO
}


function addLines() {
    var asiaEurope = new google.maps.Polyline({
        path: lines["asiaEurope"],
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 0.5,
        strokeWeight: 5
    });


    var europeSouthAmerica = new google.maps.Polyline({
        path: lines["europeSouthAmerica"],
        geodesic: true,
        strokeColor: '#00FF00',
        strokeOpacity: 0.5,
        strokeWeight: 5
    });


    var asiaNorthAmerica = new google.maps.Polyline({
        path: lines["asiaNorthAmerica"],
        geodesic: true,
        strokeColor: '#0000FF',
        strokeOpacity: 0.5,
        strokeWeight: 5
    });


    var northAmericaSouthAmericaAfrica = new google.maps.Polyline({
        path: lines["northAmericaSouthAmericaAfrica"],
        geodesic: true,
        strokeColor: '#FF00FF',
        strokeOpacity: 0.5,
        strokeWeight: 5
    });

    var northAmericaEurope = new google.maps.Polyline({
        path: lines["northAmericaEurope"],
        geodesic: true,
        strokeColor: '#00FFFF',
        strokeOpacity: 0.5,
        strokeWeight: 5
    });

    asiaEurope.setMap(map);
    europeSouthAmerica.setMap(map);
    asiaNorthAmerica.setMap(map);
    northAmericaSouthAmericaAfrica.setMap(map);
    northAmericaEurope.setMap(map);
}

function renderMarkers() {

    var icons = {
        ship: {
            icon: iconBase + 'images/ship.svg'
        }
    };

    function addMarker(feature) {
        var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
        });
    }

    var features = [
        {
            position: new google.maps.LatLng(-33.91721, 151.22630),
            type: 'ship'
        }, {
            position: new google.maps.LatLng(-33.91539, 151.22820),
            type: 'ship'
        }, {
            position: new google.maps.LatLng(-33.91747, 151.22912),
            type: 'ship'
        }, {
            position: new google.maps.LatLng(-33.91910, 151.22907),
            type: 'ship'
        }, {
            position: new google.maps.LatLng(-33.91725, 151.23011),
            type: 'ship'
        }, {
            position: new google.maps.LatLng(-33.91872, 151.23089),
            type: 'ship'
        }, {
            position: new google.maps.LatLng(-33.91784, 151.23094),
            type: 'ship'
        }, {
            position: new google.maps.LatLng(-33.91682, 151.23149),
            type: 'ship'
        }, {
            position: new google.maps.LatLng(-33.91790, 151.23463),
            type: 'ship'
        }, {
            position: new google.maps.LatLng(-33.91666, 151.23468),
            type: 'ship'
        }, {
            position: new google.maps.LatLng(-33.916988, 151.233640),
            type: 'ship'
        }, {
            position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
            type: 'ship'
        }, {
            position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
            type: 'ship'
        }, {
            position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
            type: 'ship'
        }, {
            position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
            type: 'ship'
        }, {
            position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
            type: 'ship'
        }, {
            position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
            type: 'ship'
        }, {
            position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
            type: 'ship'
        }, {
            position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
            type: 'ship'
        }
    ];

    for (var i = 0, feature; feature = features[i]; i++) {
        addMarker(feature);
    }
}

var mapStyles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}];
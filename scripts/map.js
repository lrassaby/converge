var map;


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: new google.maps.LatLng(0, 0),
        mapTypeId: 'terrain'
        //    https://developers.google.com/maps/documentation/javascript/styling TODO
    });
    //http://stackoverflow.com/questions/29810345/using-google-maps-polyline-to-draw-bezier-curve TODO

    google.maps.event.addListener(map, 'click', function (event) {
        console.log("{lat: " + event.latLng.lat() + ", lng: " + event.latLng.lng() + "},");
    });
    addLines();


    // renderMarkers(); TODO
}


function addLines() {

    var shanghai = {lat: 31.222197032103175, lng: 121.552734375};
    var hongkong = {lat: 22.248428704383628, lng: 114.14794921875};
    var shanghaiToHongKong = [
        {lat: 30.977609093348686, lng: 123.0029296875},
        {lat: 28.998531814051795, lng: 122.80517578125},
        {lat: 27.0982539061379, lng: 121.5966796875},
        {lat: 24.647017162630366, lng: 120.41015625},
        {lat: 23.12015362169561, lng: 118.71826171875},
        {lat: 21.94304553343818, lng: 116.38916015625},
        {lat: 20.92039691397189, lng: 114.697265625}
    ];
    var hongKongToSingapore = [
        {lat: 20.92039691397189, lng: 114.697265625},
        {lat: 9.665738395188692, lng: 111.1376953125},
        {lat: 0.7909904981540058, lng: 104.7216796875}
    ];
    var singaporeToPortSaid = [
        {lat: 0.615222552406841, lng: 103.974609375},
        {lat: 2.986927393334876, lng: 100.72265625},
        {lat: 5.878332109674328, lng: 98.173828125},
        {lat: 6.315298538330034, lng: 95.2734375},
        {lat: 5.00339434502215, lng: 77.431640625},
        {lat: 13.068776734357693, lng: 50.80078125},
        {lat: 12.382928338487396, lng: 43.857421875},
        {lat: 27.215556209029693, lng: 34.60693359375},
        {lat: 27.780771643348196, lng: 33.7939453125},
        {lat: 29.688052749856798, lng: 32.5634765625},
        {lat: 31.615965936476076, lng: 32.255859375}
    ];
    var portSaidToGibrlatar = [
        {lat: 37.50972584293751, lng: 11.1181640625},
        {lat: 35.96022296929667, lng: -5.537109375}
    ];
    var gibraltarToRotterdam = [
        {lat: 35.92464453144099, lng: -6.9873046875},
        {lat: 36.33282808737917, lng: -8.349609375},
        {lat: 37.50972584293751, lng: -10.26123046875},
        {lat: 42.68243539838623, lng: -11.513671875},
        {lat: 47.51720069783942, lng: -7.119140625},
        {lat: 49.49667452747045, lng: -3.779296875},
        {lat: 50.12057809796007, lng: -1.494140625},
        {lat: 50.583236614805884, lng: 0.76904296875},
        {lat: 51.44031275716012, lng: 1.99951171875},
        {lat: 54.07228265560388, lng: 5.07568359375}
    ];
    var gibraltarToRio = [
        {lat: 37.49883141715704, lng: -10.27496337890625},
        {lat: -9.188870084473393, lng: -34.62890625},
        {lat: -24.367113562651262, lng: -41.1328125}
    ];

    var rioToNorthGibraltar = [
        {lat: -36.17335693522159, lng: 20.91796875},
        {lat: -35.88905007936091, lng: 27.0703125},
        {lat: 6.315298538330034, lng: 95.2734375}
    ];

    var shanghaiToPanama = [
        {lat: 30.977609093348686, lng: 123.0029296875},
        {lat: 33.687781758439364, lng: 128.7158203125},
        {lat: 41.27780646738183, lng: 140.1416015625},
        {lat: 41.77131167976406, lng: 141.5478515625},
        {lat: 41.21172151054787, lng: 145.1513671875},
        {lat: 50.17689812200107, lng: -177.71484375},
        {lat: 51.39920565355378, lng: -131.1328125},
        {lat: 48.516604348867475, lng: -127.177734375},
        {lat: 46.4378568950242, lng: -125.15625},
        {lat: 41.77131167976406, lng: -125.68359375},
        {lat: 38.95940879245423, lng: -125.244140625},
        {lat: 36.4566360115962, lng: -123.3984375},
        {lat: 19.642587534013032, lng: -110.7421875},
        {lat: 8.102738577783168, lng: -83.49609375},
        {lat: 6.751896464843375, lng: -79.8046875},
        {lat: 8.928487062665504, lng: -79.5465087890625},
        {lat: 9.104808725563041, lng: -79.73876953125},
        {lat: 9.39216149311645, lng: -79.96673583984375}
    ];

    var houstonToPortoLaCruz = [
        {lat: 29.24806324379658, lng: -94.658203125},
        {lat: 21.514406720030294, lng: -86.0888671875},
        {lat: 12.490213662533307, lng: -66.81884765625},
        {lat: 12.361465967347371, lng: -63.193359375}
    ];

    var portoLaCruzToCapeTown = [
        {lat: 10.14193168613103, lng: -54.84375},
        {lat: 6.839169626342807, lng: -42.890625},
        {lat: 0, lng: -26.89453125},
        {lat: -35.88905007936091, lng: 20.390625}
    ];

    var newYorkLondon = [
        {lat: 40.38839687388361, lng: -73.839111328125},
        {lat: 40.94671366508002, lng: -69.7412109375},
        {lat: 45.82879925192134, lng: -53.0859375},
        {lat: 49.52520834197442, lng: -3.9111328125}
    ];

    var asiaEurope = new google.maps.Polyline({
        path: shanghaiToHongKong.concat(hongKongToSingapore).concat(singaporeToPortSaid).concat(portSaidToGibrlatar).concat(gibraltarToRotterdam),
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });


    var europeSouthAmerica = new google.maps.Polyline({
        path: gibraltarToRio.concat(rioToNorthGibraltar),
        geodesic: true,
        strokeColor: '#00FF00',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });


    var asiaNorthAmerica = new google.maps.Polyline({
        path: shanghaiToPanama,
        geodesic: true,
        strokeColor: '#0000FF',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });


    var northAmericaSouthAmericaAfrica = new google.maps.Polyline({
        path: houstonToPortoLaCruz.concat(portoLaCruzToCapeTown),
        geodesic: true,
        strokeColor: '#FF00FF',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    var northAmericaEurope = new google.maps.Polyline({
        path: newYorkLondon,
        geodesic: true,
        strokeColor: '#00FFFF',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    asiaEurope.setMap(map);
    europeSouthAmerica.setMap(map);
    asiaNorthAmerica.setMap(map);
    northAmericaSouthAmericaAfrica.setMap(map);
    northAmericaEurope.setMap(map);
}

function renderMarkers() {

    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var icons = {
        parking: {
            icon: iconBase + 'parking_lot_maps.png'
        },
        library: {
            icon: iconBase + 'library_maps.png'
        },
        info: {
            icon: iconBase + 'info-i_maps.png'
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
            type: 'info'
        }, {
            position: new google.maps.LatLng(-33.91539, 151.22820),
            type: 'info'
        }, {
            position: new google.maps.LatLng(-33.91747, 151.22912),
            type: 'info'
        }, {
            position: new google.maps.LatLng(-33.91910, 151.22907),
            type: 'info'
        }, {
            position: new google.maps.LatLng(-33.91725, 151.23011),
            type: 'info'
        }, {
            position: new google.maps.LatLng(-33.91872, 151.23089),
            type: 'info'
        }, {
            position: new google.maps.LatLng(-33.91784, 151.23094),
            type: 'info'
        }, {
            position: new google.maps.LatLng(-33.91682, 151.23149),
            type: 'info'
        }, {
            position: new google.maps.LatLng(-33.91790, 151.23463),
            type: 'info'
        }, {
            position: new google.maps.LatLng(-33.91666, 151.23468),
            type: 'info'
        }, {
            position: new google.maps.LatLng(-33.916988, 151.233640),
            type: 'info'
        }, {
            position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
            type: 'parking'
        }, {
            position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
            type: 'parking'
        }, {
            position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
            type: 'parking'
        }, {
            position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
            type: 'parking'
        }, {
            position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
            type: 'parking'
        }, {
            position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
            type: 'parking'
        }, {
            position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
            type: 'parking'
        }, {
            position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
            type: 'library'
        }
    ];

    for (var i = 0, feature; feature = features[i]; i++) {
        addMarker(feature);
    }
}
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
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    google.maps.event.addListener(map, 'click', function (event) {
        console.log("{lat: " + event.latLng.lat() + ", lng: " + event.latLng.lng() + "},");
    });
    addLines();


    renderMarkers();
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
    var markers = [];

    function addConvoy(convoy) {
        var icon = {
            path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
            fillColor: '#F0F0F0',
            fillOpacity: .8,
            anchor: new google.maps.Point(0,0),
            strokeWeight: 0,
            scale: 0.5
        };

        var marker = new google.maps.Marker({
            position: convoy.position(),
            map: map,
            draggable: false,
            icon: icon,
            zIndex : -20,
            id: `#convoy_${convoy.id}`
        });

        google.maps.event.addListener(marker, "click", function(ev){
            console.log('just clicked marker...', marker);
            $convoy = $(marker.id);
            $convoy.addClass("active");
            $convoy.children("ul").addClass("menu-open").css("display", "block");
            $convoy.siblings().removeClass("active");
            $convoy.siblings().children("ul").removeClass("menu-open").css("display", "none");
        });

        markers.push(marker);

        var interval = window.setInterval(function() {
            convoy.advance();
            marker.setPosition(convoy.position());
        }, 100);
    }

    for (var i in convoys) {
        addConvoy(convoys[i]);
    }
    window.markers = markers;
}

var mapStyles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}];


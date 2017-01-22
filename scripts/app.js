(function(){

    //add ships to list
    let $shipsList = $("#shipsListView");
    $shipsList.append(window.ships.map((ship, index) => window.shipView(ship, index)));

    //add ships to list
    let $convoyList = $("#convoyListView");
    $convoyList.append(window.convoys.map(convoy => window.convoyView(convoy)));

    let $shipCount = $("#shipCount"),
        $convoyCount = $("#convoyCount");

    //add cities to new ship form
    let $origins = $("#origins"),
        $destinations = $("#destinations");

    $origins.append(window.cities.map(city => `<option value="${city.id}">${city.name}, ${city.country}</option>`));
    $destinations.append(window.cities.map(city => `<option value="${city.id}">${city.name}, ${city.country}</option>`));

    $shipCount.text(window.ships.length);
    $convoyCount.text(window.convoys.length);


    $("#saveShip").click(function(evt){
        var shipForm = $("#newShipForm");
        var text = shipForm.children("input:text").val();
        var ship = new Ship(text);
        var $shipSelect = $("#shipsFromUser");

        window.ships.push(ship);
        var numShips = window.ships.length;

        $shipsList.append(shipView(ship, numShips));
        $shipCount.text(numShips);

        $shipSelect.append(`<option value="${ship.id}">${ship.id}</option>"`);

        shipForm.children("input:text").val('');
    });

    $("#saveShipToConvoy").click(function(ev){
        var convoyForm = $("#addShipToConvoyForm");
        var text = convoyForm.children("select").val();

        var curCount = window.currentConvoyView.find(".convoyShipCount").text();
        window.currentConvoyView.find(".convoyShipCount").text(parseInt(curCount) + 1);

        var markerId = `#convoy_${window.currentConvoy.id}`
        $(markerId).css("background-color", "#FF0000"); //doesnt rerender the marker
        for (i in markers) {
            if (markers[i].id == markerId) {
                markers[i].setIcon({
                    path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
                    fillColor: '#3C8DBC',
                    fillOpacity: .8,
                    anchor: new google.maps.Point(0,0),
                    strokeWeight: 0,
                    scale: 0.5
                })
            }
        }
    })
})();
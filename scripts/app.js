(function(){

    //add ships to list
    let $shipsList = $("#shipsListView");
    $shipsList.append(window.ships.map(ship => window.shipView(ship)));

    //add cities to new ship form

    let $origins = $("#origins"),
        $destinations = $("#destinations");

    $origins.append(window.cities.map(city => `<option value="${city.id}">${city.name}, ${city.country}</option>`))
    $destinations.append(window.cities.map(city => `<option value="${city.id}">${city.name}, ${city.country}</option>`))
})();
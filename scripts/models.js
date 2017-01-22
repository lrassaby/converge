/**
 * Created by lerenzo on 1/21/17.
 */
(function(){
    var cities = [
        {
            name: "Kepall",
            country: "Singapore"
        },
        {
            name: "Capetown",
            country: "South Africa"
        },
        {
            name: "Hong Kong",
            country: "China"
        },
        {
            name: "Mumbai",
            country: "India"
        },
        {
            name: "Shanghai",
            country: "China"
        },
        {
            name: "Rio de Janeiro",
            country: "Brazil"
        },
        {
            name: "London",
            country: "United Kingdom"
        },
        {
            name: "New York City",
            country: "United States"
        },
        {
            name: "Los Angeles",
            country: "United States"
        },
        {
            name: "Puerto la Cruz",
            country: "Colombia"
        },
        {
            name: "Tokyo",
            country: "Japan"
        }
    ];

    function generateShips(){
        var ships = [];
        for(var i = 0; i < Math.floor(Math.random()*100); i++){
            ships.push({
                id: i,
                origin: cities[i%(cities.length - 1)],
                destination: cities[Math.floor(Math.random()*(cities.length - 1))]
            })
        }
        return ships
    }

    var Convoy = function(ships){
        this.ships = ships || [];
    };
    Convoy.prototype.addShip = function(ship){this.ships.push(ship)};

    function generateConvoys(){
        var convoys = [];
        for(var i = 0; i < Math.floor(Math.random()*100); i++){
            convoys.push({
                id: i
            })
        }
        return convoys
    }

    window.convoys = generateConvoys();
    window.cities = cities;
    window.ships = generateShips();
})();
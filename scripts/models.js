(function () {
    function haversine(p1, p2) {
        Number.prototype.toRad = function() {
            return this * Math.PI / 180;
        };

        var R = 6371; // km
        var x1 = p2.lat-p1.lat;
        var dLat = x1.toRad();
        var x2 = p2.lng-p1.lng;
        var dLon = x2.toRad();
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(p1.lat.toRad()) * Math.cos(p2.lat.toRad()) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;
        return d;
    }

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
            country: "China",
            position: {lat: 22.248428704383628, lng: 114.14794921875}
        },
        {
            name: "Mumbai",
            country: "India"
        },
        {
            name: "Shanghai",
            country: "China",
            position: {lat: 31.222197032103175, lng: 121.552734375}
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

    function Ship(id){
        this.id = id;
    }

    function generateShips(){
        var ships = [];
        for(var i = 0; i < Math.floor(Math.random()*100); i++){
            ships.push(new Ship(new Date().toISOString() + i))
        }
        return ships;
    }

    var routes = {
        "shanghaiToHongKong": [
            {lat: 30.977609093348686, lng: 123.0029296875},
            {lat: 28.998531814051795, lng: 122.80517578125},
            {lat: 27.0982539061379, lng: 121.5966796875},
            {lat: 24.647017162630366, lng: 120.41015625},
            {lat: 23.12015362169561, lng: 118.71826171875},
            {lat: 21.94304553343818, lng: 116.38916015625},
            {lat: 20.92039691397189, lng: 114.697265625}
        ],
        "hongKongToSingapore": [
            {lat: 20.92039691397189, lng: 114.697265625},
            {lat: 9.665738395188692, lng: 111.1376953125},
            {lat: 0.7909904981540058, lng: 104.7216796875}
        ],
        "singaporeToPortSaid": [
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
        ],
        "portSaidToGibrlatar": [
            {lat: 37.50972584293751, lng: 11.1181640625},
            {lat: 35.96022296929667, lng: -5.537109375}
        ],
        "gibraltarToRotterdam": [
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
        ],
        "gibraltarToRio": [
            {lat: 37.49883141715704, lng: -10.27496337890625},
            {lat: -9.188870084473393, lng: -34.62890625},
            {lat: -24.367113562651262, lng: -41.1328125}
        ],
        "rioToNorthGibraltar": [
            {lat: -36.17335693522159, lng: 20.91796875},
            {lat: -35.88905007936091, lng: 27.0703125},
            {lat: 6.315298538330034, lng: 95.2734375}
        ],
        "shanghaiToPanama": [
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
        ],
        "houstonToPortoLaCruz": [
            {lat: 29.24806324379658, lng: -94.658203125},
            {lat: 21.514406720030294, lng: -86.0888671875},
            {lat: 12.490213662533307, lng: -66.81884765625},
            {lat: 12.361465967347371, lng: -63.193359375}
        ],
        "portoLaCruzToCapeTown": [
            {lat: 10.14193168613103, lng: -54.84375},
            {lat: 6.839169626342807, lng: -42.890625},
            {lat: 0, lng: -26.89453125},
            {lat: -35.88905007936091, lng: 20.390625}
        ],
        "newYorkLondon": [
            {lat: 40.38839687388361, lng: -73.839111328125},
            {lat: 40.94671366508002, lng: -69.7412109375},
            {lat: 45.82879925192134, lng: -53.0859375},
            {lat: 49.52520834197442, lng: -3.9111328125}
        ],
        "panamaToGibraltar": [
            {lat: 11.43695521614319, lng: -78.4423828125},
            {lat: 16.97274101999902, lng: -63.8525390625},
            {lat: 19.02057711096681, lng: -60.7763671875},
            {lat: 37.54457732085582, lng: -10.37109375}
        ]
    };

    function combineRoutes(routeNames) {
        var positions = [];
        for (i in routeNames) {
            positions.push(routes[routeNames[i]]);
        }
        return [].concat.apply([], positions);
    }

    var lines = {
        "asiaEurope": combineRoutes(["shanghaiToHongKong", "hongKongToSingapore", "singaporeToPortSaid", "portSaidToGibrlatar", "gibraltarToRotterdam"]),
        "europeSouthAmerica": combineRoutes(["gibraltarToRio", "rioToNorthGibraltar"]),
        "asiaNorthAmerica": combineRoutes(["shanghaiToPanama", "panamaToGibraltar"]),
        "northAmericaSouthAmericaAfrica": combineRoutes(["houstonToPortoLaCruz", "portoLaCruzToCapeTown"]),
        "northAmericaEurope": combineRoutes(["newYorkLondon"])
    };
    var lineKeys = Object.keys(lines);


    function randomIndex(array) {
        return Math.floor(Math.random() * array.length);
    }


    window.routes = routes;
    window.lines = lines;
    var Convoy = function(id, ships){
        this.id = id;
        this.ships = ships || [];
        this.line = lineKeys[randomIndex(lineKeys)];
        this.positionIndex = 2 + Math.floor(randomIndex(lines[this.line]) / 2);
        this.progress = Math.random() / 5; // between 0 and 1
        this.speed = 1;
        this.direction = 1;
        this.previousStop = function() {
            return lines[this.line][this.positionIndex];
        };
        this.nextStop = function() {
            return lines[this.line][this.positionIndex + this.direction];
        };
        this.advance = function() {
            this.progress = this.progress + this.speed * this.direction / haversine(this.previousStop(), this.nextStop());
        };
        this.position = function() {
            var previousPosition = this.previousStop();
            var nextPosition = this.nextStop();

            return {lat: previousPosition.lat + (nextPosition.lat - previousPosition.lat) * this.progress,
                    lng: previousPosition.lng + (nextPosition.lng - previousPosition.lng) * this.progress}
        };
    };
    Convoy.prototype.addShip = function(ship){this.ships.push(ship)};

    function generateConvoys() {
        var convoys = [];
        for (var i = 0; i < 10; i++) {
            var convoy = new Convoy();
            convoy.id = i;
            convoy.ships = generateShips();
            convoys.push(convoy);
        }
        return convoys;
    }

    window.Ship = Ship;
    window.Convoy = Convoy;
    window.convoys = generateConvoys();
    window.cities = cities;
    window.ships = [];
})();
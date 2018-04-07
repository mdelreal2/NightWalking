var array_of_addresses = [""];

document.onreadystatechange = function() {
    initMap();
}

var coordinates = {lat: 0, lng: 0};
var person;
function getData()
{
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200" && data === undefined) {
            data = JSON.parse(xobj.responseText);
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                
                coordinates.lat = data[i].Latitude;
                coordinates.lng = data[i].Longitude;
                person = data[i].URL;
                //console.log(data[i].URL);
                //console.log(coordinates.lat);
                //console.log(coordinates.lng);
                //addMarker(coordinates, data[i].URL);
                addMarker(coordinates, person);
                
            }
        }
    };
    xobj.send(null);
}

var url = "https://appsdoc.wi.gov/public/offenderdetails?id=5330";
var kenoshaCoords = {lat: 42.5847, lng: -87.8212};
var ppCoords = {lat: 42.5531, lng: -87.9334};
var map, geocoder, data;

function initMap() {
    geocoder = new google.maps.Geocoder();    
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: kenoshaCoords
    });

    google.maps.event.addListener(map, 'idle', function() {
        getData();
    });
    
    // addMarker(kenoshaCoords, url);
    // addMarker(ppCoords, url);
}

//add marker function
function addMarker(coords, url)
{
    //console.log(String(url))
    var marker = new google.maps.Marker({
        position: coords,
        map: map,
        profile: String(url)
        //profile: "https://appsdoc.wi.gov/public/offenderdetails?id=5330"
        //icon: "https://appsdoc.wi.gov/public/secure/ImageServer?photoId=3641272&size=30"
    });

    google.maps.event.addListener(marker, 'click', function(){
        window.open(this.profile);
    });
}

/*
function geoCoord(address, url)
{
    //array_of_addresses.push("adf");
    var addr = "1286 40TH AVE KENOSHA, WI 53144-2900";

    geocoder.geocode({'address': address}, function(results, status)
    {
        console.log(results)
        console.log(status)
        if (results && results.length > 0) {
            var lat = results[0].geometry.location.lat();
            var long = results[0].geometry.location.lng();

            
            var geo = {lat: lat, lng: long};
            console.log(geo)
            addMarker(geo, url);
        }
    });

    // alert(array_of_addresses.length);
}
*/
function showAlert(interview_data) {
    console.log(interview_data);
    var favorite_color = interview_data['favorite_color'];
    var favorite_city = interview_data['favorite_city'];
    alert("Your favorite color is " + favorite_color + " and your favorite city is " + favorite_city);
}

var map;
var placesService;

function initMap() {
    var mumbai = new google.maps.LatLng(19.0760, 72.8777);
    map = new google.maps.Map(document.getElementById('map'), { center: mumbai, zoom: 8 });
    placesService = new google.maps.places.PlacesService(map);
}

function searchAndAddMarker(query) {
    var mumbaiLocationBias = { radius: 80000, center: mumbai };
    var request = {
        query: query,
        fields: ['name', 'geometry'],
        locationBias: mumbaiLocationBias
    };
    placesService.findPlaceFromQuery(request, function(results, status) {
        console.log(results);
        console.log(status);
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                var marker = new google.maps.Marker({
                    position: results[i].geometry.location,
                    title: results[i].name
                });
                marker.setMap(map);
            }
            map.setCenter(results[0].geometry.location);
        }
    });
}
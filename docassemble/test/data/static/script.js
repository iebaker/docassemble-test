function showAlert(interview_data) {
    console.log(interview_data);
    var favorite_color = interview_data['favorite_color'];
    var favorite_city = interview_data['favorite_city'];
    alert("Your favorite color is " + favorite_color + " and your favorite city is " + favorite_city);
}

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}
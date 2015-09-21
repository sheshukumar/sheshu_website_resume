// google map script start


function initMap() {
    var markerPos = {
        lat: 17.4368,
        lng: 78.4439
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 6,
        zoomController: false,
        center: markerPos
    });

    var contentString = '<div id="content"><h4 id="firstHeading" class="firstHeading" style="color:black;">I am Here</h4></div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: markerPos,
        map: map,
        title: 'Job'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}



// google map script end

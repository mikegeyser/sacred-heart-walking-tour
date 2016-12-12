declare var google;

export class PointOfInterest {
    latitude: number;
    longitude: number;
    title: string;
    info: string = "This is a test.";

    createMarker(map: any) {
        var marker = new google.maps.Marker({
            position: { lat: this.latitude, lng: this.longitude },
            title: this.title,
            map: map
        });

        var infowindow = new google.maps.InfoWindow({
          content: this.info
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    }

    navigate(){
        alert("navigated!");
    }
}

var test = new PointOfInterest();
test.latitude = -26.17385;
test.longitude = 28.075028;
test.title = "The Gate";
test.info = `
<strong>${test.title}</strong>
<div>Some brief blurb about the gate.</div>
<button type="button" onclick="mapNavigate('aww yiss')">Go</button>
`;
export var Test = test;
declare var google;
import { Component } from '@angular/core';

export class PointOfInterest {
    info: string = "This is a test.";

    constructor(
        public id: string,
        public title: string,
        public latitude: number,
        public longitude: number,
        public page: Component
    ) {
        this.info = `<button class="pin-btn" ion-button onclick="mapNavigate(${this.id})">
                     <strong>${this.title}</strong>
                     <div>Some brief blurb about the poi.</div>
                     </button>`;
    }
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

    navigate() {
        alert("navigated!");
    }
}

var allPointsOfInterest: { [id: string]: PointOfInterest; } = {};
export var AllPointsOfInterest = allPointsOfInterest;

export function addPointOfInterest(poi: PointOfInterest) {
    allPointsOfInterest[poi.id] = poi;
};

export function getPointOfInterest(id: string) {
    return allPointsOfInterest[id];
};
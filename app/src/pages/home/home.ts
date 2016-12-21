import { Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { AllPointsOfInterest, getPointOfInterest } from '../../data/index';
import { PointOfInterestPage } from '../point-of-interest/point-of-interest';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;

  map: any;
  bounds: any;
  apiKey: any = "AIzaSyAJymzPSBYve3q0KoFEJf69LN_1hEPRtuk";
  latitude: number = -26.173247;
  longitude: number = 28.075560;
  zoom: number = 327;

  constructor(public nav: NavController, private _ngZone: NgZone) {
    this.loadGoogleMaps(_ngZone);
  }

  loadGoogleMaps(_ngZone: NgZone) {
    if (typeof google == "undefined" || typeof google.maps == "undefined") {
      console.log("online, loading map");

      //Load the SDK
      window['mapInit'] = () => {
        this.initMap();
      }

      window['mapNavigate'] = (id) => {
        _ngZone.run(() => {
          let poi = getPointOfInterest(id);

          console.log(`Navigating to POI  ${poi.id} - ${poi.title}`);
          this.nav.push(PointOfInterestPage, { id: poi.id });
        });
      };

      let script = document.createElement("script");
      script.id = "googleMaps";

      if (this.apiKey) {
        script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
      } else {
        script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
      }

      document.body.appendChild(script);
    }
  }

  initMap() {
    Geolocation.getCurrentPosition().then((position) => {

      let center = new google.maps.LatLng(this.latitude, this.longitude);

      let mapOptions = {
        center: center,
        zoom: 327,
        mapTypeId: google.maps.MapTypeId.HYBRID
      }

      this.bounds = new google.maps.LatLngBounds();

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      for (let key in AllPointsOfInterest) {
        AllPointsOfInterest[key].createMarker(this.map, this.bounds);
      }

      this.map.fitBounds(this.bounds);

      // Create a geo-mask for the school.
      var polygonMask = new google.maps.Polygon({
        map: this.map,
        strokeColor: '#000000',
        strokeOpacity: 0.5,
        strokeWeight: 2,
        fillColor: '#CACACA',
        fillOpacity: 0.7,
        paths: [
          [
            new google.maps.LatLng(-26.183953, 28.061637),
            new google.maps.LatLng(-26.160843, 28.061637),
            new google.maps.LatLng(-26.160843, 28.089639),
            new google.maps.LatLng(-26.183953, 28.089639),
            new google.maps.LatLng(-26.183953, 28.061637)
          ],
          [
            new google.maps.LatLng(-26.174166, 28.072348),
            new google.maps.LatLng(-26.174109, 28.078989),
            new google.maps.LatLng(-26.171149, 28.078933),
            new google.maps.LatLng(-26.171115, 28.078732),
            new google.maps.LatLng(-26.170561, 28.078381),
            new google.maps.LatLng(-26.172253, 28.073801),
            new google.maps.LatLng(-26.173025, 28.073312),
            new google.maps.LatLng(-26.173202, 28.072869),
            new google.maps.LatLng(-26.174166, 28.072348)
          ]
        ]
      });
    });
  }
}
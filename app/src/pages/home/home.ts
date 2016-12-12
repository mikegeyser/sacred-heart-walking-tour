import { Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { SebmGoogleMap, MapTypeStyle } from 'angular2-google-maps/core';
import { Test } from '../../Models/point-of-interest';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;

  map: any;
  apiKey: any = "AIzaSyAJymzPSBYve3q0KoFEJf69LN_1hEPRtuk";
  latitude: number = -26.173247;
  longitude: number = 28.075560;
  zoom: number = 327;

  constructor(public navCtrl: NavController, private _ngZone: NgZone) {
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
          alert('did some stuff with id: ' + id);
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

      let latLng = new google.maps.LatLng(this.latitude, this.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 327,
        mapTypeId: google.maps.MapTypeId.HYBRID
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      var marker = Test.createMarker(this.map);
    });
  }
}
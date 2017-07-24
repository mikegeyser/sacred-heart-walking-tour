declare var google: any;

import { Component, ElementRef, ViewChild, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllPointsOfInterest, getPointOfInterest } from '../data/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('map') mapElement: ElementRef;

  map: any;
  bounds: any;
  apiKey: any = 'AIzaSyAJymzPSBYve3q0KoFEJf69LN_1hEPRtuk';
  latitude: number = -26.173247;
  longitude: number = 28.075560;
  zoom: number = 327;

  constructor(private _ngZone: NgZone, private router: Router) { }

  ngOnInit() {
    this.loadGoogleMaps(this._ngZone);
  }

  help(event) {
    // let popover = this.popoverCtrl.create(HelpPage);
    // popover.present({
    //   ev: event
    // });
  };

  loadGoogleMaps(_ngZone: NgZone) {
    if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
      console.log('online, loading map');

      // Load the SDK
      window['mapInit'] = () => {
        this.initMap();
      }

      window['mapNavigate'] = (id) => {
        _ngZone.run(() => {
          let poi = getPointOfInterest(id);

          console.log(`Navigating to POI  ${poi.id} - ${poi.title}`);
          this.router.navigate(['/p', poi.id]);
          // this.nav.push(PointOfInterestPage, { id: poi.id });
        });
      };

      let script = document.createElement('script');
      script.id = 'googleMaps';

      if (this.apiKey) {
        script.src = 'https://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
      } else {
        script.src = 'https://maps.google.com/maps/api/js?callback=mapInit';
      }

      document.body.appendChild(script);
    } else {
      this.initMap();
    }
  }

  initMap() {

    let center = new google.maps.LatLng(this.latitude, this.longitude);

    let mapOptions = {
      tilt: 0,
      center: center,
      zoom: 327,
      mapTypeId: google.maps.MapTypeId.HYBRID,
      scaleControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      rotateControl: false
    }

    this.bounds = new google.maps.LatLngBounds();

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let selectedMarker;
    let infowindow;
    const iconBase = 'assets/images/';
    const greyIcon = iconBase + 'marker-2-grey.png';
    const colourIcon = iconBase + 'marker-yellow.png';

    for (let key in AllPointsOfInterest) {
      let poi = AllPointsOfInterest[key];

      let marker = new google.maps.Marker({
        position: poi.getLatLng(),
        title: poi.title,
        icon: colourIcon,
        map: this.map
      });

      let closeSelectedMarker = () => {
        // selectedMarker.setIcon(greyIcon);
        selectedMarker = null;
      }

      marker.addListener('click', () => {
        if (selectedMarker) {
          closeSelectedMarker();
        }

        selectedMarker = marker;
        // marker.setIcon(colourIcon);

        // if (infowindow) {
        //   infowindow.close();
        // }

        // infowindow = new google.maps.InfoWindow({
        //   content: poi.info
        // });

        // infowindow.open(this.map, marker);

        // google.maps.event.addListener(infowindow, 'closeclick', function () {
        //   closeSelectedMarker();
        // });
        this._ngZone.run(() => this.router.navigate(['/p', poi.id]));
      });

      this.bounds.extend(marker.getPosition());
    }

    this.map.fitBounds(this.bounds);

    // Create a geo-mask for the school.
    let border = new google.maps.Polygon({
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
  }
}

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { AllPointsOfInterest, getPointOfInterest } from '../../data/index';
import { PointOfInterestPage } from '../point-of-interest/point-of-interest';
var HomePage = (function () {
    function HomePage(nav, _ngZone) {
        this.nav = nav;
        this._ngZone = _ngZone;
        this.apiKey = "AIzaSyAJymzPSBYve3q0KoFEJf69LN_1hEPRtuk";
        this.latitude = -26.173247;
        this.longitude = 28.075560;
        this.zoom = 327;
        this.loadGoogleMaps(_ngZone);
    }
    HomePage.prototype.loadGoogleMaps = function (_ngZone) {
        var _this = this;
        if (typeof google == "undefined" || typeof google.maps == "undefined") {
            console.log("online, loading map");
            //Load the SDK
            window['mapInit'] = function () {
                _this.initMap();
            };
            window['mapNavigate'] = function (id) {
                _ngZone.run(function () {
                    var poi = getPointOfInterest(id);
                    console.log("Navigating to POI  " + poi.id + " - " + poi.title);
                    _this.nav.push(PointOfInterestPage, { id: poi.id });
                });
            };
            var script = document.createElement("script");
            script.id = "googleMaps";
            if (this.apiKey) {
                script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
            }
            else {
                script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
            }
            document.body.appendChild(script);
        }
    };
    HomePage.prototype.initMap = function () {
        var _this = this;
        Geolocation.getCurrentPosition().then(function (position) {
            var center = new google.maps.LatLng(_this.latitude, _this.longitude);
            var mapOptions = {
                center: center,
                zoom: 327,
                mapTypeId: google.maps.MapTypeId.HYBRID
            };
            _this.bounds = new google.maps.LatLngBounds();
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            for (var key in AllPointsOfInterest) {
                AllPointsOfInterest[key].createMarker(_this.map, _this.bounds);
            }
            _this.map.fitBounds(_this.bounds);
            // Create a geo-mask for the school.
            new google.maps.Polygon({
                map: _this.map,
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
    };
    return HomePage;
}());
__decorate([
    ViewChild('map'),
    __metadata("design:type", ElementRef)
], HomePage.prototype, "mapElement", void 0);
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController, NgZone])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map
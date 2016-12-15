import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PointOfInterest, addPointOfInterest } from '../point-of-interest';

@Component({
  selector: 'page-pre-primary',
  templateUrl: 'pre-primary.html'
})
export class PrePrimaryPage {
  constructor() { }
}

// var poi = new PointOfInterest("9", "Pre Primary", -26.173365, 28.074303, PrePrimaryPage);
// poi.addElement({ description: "Info", url: "assets/images/points-of-interest/pre-primary/cover.jpg"});
// poi.addElement({ description: "Info", url: "assets/images/points-of-interest/pre-primary/1.jpg"});
// poi.addElement({ description: "Info", url: "assets/images/points-of-interest/pre-primary/2.jpg"});
// poi.addElement({ description: "Info", url: "assets/images/points-of-interest/pre-primary/3.jpg"});
// poi.addElement({ description: "Info", url: "assets/images/points-of-interest/pre-primary/4.jpg"});
// addPointOfInterest(poi);
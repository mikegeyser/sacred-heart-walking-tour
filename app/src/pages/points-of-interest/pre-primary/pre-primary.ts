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

var poi = new PointOfInterest("9", "Pre Primary", -26.173365, 28.074303, PrePrimaryPage);

addPointOfInterest(poi);
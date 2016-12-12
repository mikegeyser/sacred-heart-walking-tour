import { Component } from '@angular/core';
import { PointOfInterest, addPointOfInterest } from '../point-of-interest';

@Component({
  selector: 'page-gate',
  templateUrl: 'gate.html'
})
export class GatePage {

  constructor() { }
}

var poi = new PointOfInterest("6", "The Gate", -26.17385, 28.075028, GatePage);

addPointOfInterest(poi);

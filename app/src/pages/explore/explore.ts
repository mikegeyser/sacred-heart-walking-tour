import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AllPointsOfInterest } from '../../data/index';
import { PointOfInterest } from '../../models/point-of-interest';
import { PointOfInterestPage } from '../point-of-interest/point-of-interest';

@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})
export class ExplorePage {
  allPointsOfInterest: PointOfInterest[] = [];

  constructor(public nav: NavController) {
    for (let key in AllPointsOfInterest) {
      this.allPointsOfInterest.push(AllPointsOfInterest[key]);
    }
  }

  navigate(poi) {
    console.log(poi);
    return this.nav.push(PointOfInterestPage, { id: poi.id });
  }
}

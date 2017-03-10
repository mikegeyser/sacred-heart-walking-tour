import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { PointOfInterest } from '../../models/point-of-interest';
import { getPoiForTheme } from '../../data/index';
import { PointOfInterestPage } from '../point-of-interest/point-of-interest';

@Component({
  selector: 'page-theme',
  templateUrl: 'theme.html'
})
export class ThemePage {
  theme: string;

  constructor(private params: NavParams, private nav: NavController) {
    this.theme = params.get('theme');
  }

  navigate(poi) {
    return this.nav.push(PointOfInterestPage, { id: poi.id });
  }
}

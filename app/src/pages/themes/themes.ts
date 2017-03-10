import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PointOfInterest } from '../../models/point-of-interest';
import { Themes } from '../../data/index';
import { ThemePage } from '../theme/theme';

@Component({
  selector: 'page-themes',
  templateUrl: 'themes.html'
})
export class ThemesPage {
  public themes = Themes;

  constructor(private nav: NavController) { }

  showPoi(theme: string) {
    return this.nav.push(ThemePage, { theme: theme });
  }
}

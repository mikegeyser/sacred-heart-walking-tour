import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ExplorePage } from '../explore/explore';
import { ThemesPage } from '../themes/themes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ExplorePage;
  tab3Root: any = ThemesPage;

  constructor() {

  }
}

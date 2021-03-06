import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { ConnectivityService } from '../providers/connectivity-service';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { SafePipe } from '../pipes/safe';
import { HttpModule }      from '@angular/http';

// All pages (sucks)
import { AboutPage } from '../pages/about/about';
import { ThemesPage } from '../pages/themes/themes';
import { ThemePage } from '../pages/theme/theme';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HelpPage } from '../pages/help/help';
import { PointOfInterestPage } from '../pages/point-of-interest/point-of-interest';
import { ExplorePage } from '../pages/explore/explore';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '7a63e725'
  }
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ThemesPage,
    ThemePage,
    HomePage,
    TabsPage,
    PointOfInterestPage,
    ExplorePage,
    HelpPage,
    SafePipe
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    IonicImageViewerModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ThemesPage,
    ThemePage,
    HomePage,
    TabsPage,
    PointOfInterestPage,
    ExplorePage,
    HelpPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConnectivityService
  ]
})
export class AppModule { }

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { ConnectivityService } from '../providers/connectivity-service';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { SafePipe } from '../pipes/safe';

// All pages (sucks)
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PointOfInterestPage } from '../pages/point-of-interest/point-of-interest';
import { ExplorePage } from '../pages/explore/explore';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '8AF22537'
  }
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    // PrePrimaryPage,
    PointOfInterestPage,
    ExplorePage,
    SafePipe
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    // PrePrimaryPage,
    PointOfInterestPage,
    ExplorePage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConnectivityService
  ]
})
export class AppModule { }

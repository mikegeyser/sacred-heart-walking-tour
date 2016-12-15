import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { ConnectivityService } from '../providers/connectivity-service';
import { PointsOfInterestModule } from '../pages/points-of-interest/points-of-interest.module';
import { IonicImageViewerModule } from 'ionic-img-viewer';

// All pages (sucks)
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { GatePage } from '../pages/points-of-interest/gate/gate';
// import { PrePrimaryPage } from '../pages/points-of-interest/pre-primary/pre-primary';
import { PointOfInterestPage } from '../pages/points-of-interest/point-of-interest/point-of-interest';

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
    GatePage,
    // PrePrimaryPage,
    PointOfInterestPage
  ],
  imports: [
    PointsOfInterestModule,
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
    GatePage,
    // PrePrimaryPage,
    PointOfInterestPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConnectivityService
  ]
})
export class AppModule { }

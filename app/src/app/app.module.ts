import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { ConnectivityService } from '../providers/connectivity-service';
import { AgmCoreModule } from 'angular2-google-maps/core';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '8AF22537'
  }
};

const api_key: string = "AIzaSyAJymzPSBYve3q0KoFEJf69LN_1hEPRtuk";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    AgmCoreModule.forRoot({
      apiKey: api_key
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    ConnectivityService
  ]
})
export class AppModule {}

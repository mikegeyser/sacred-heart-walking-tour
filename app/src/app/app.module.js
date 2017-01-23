var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CloudModule } from '@ionic/cloud-angular';
import { ConnectivityService } from '../providers/connectivity-service';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { SafePipe } from '../pipes/safe';
import { HttpModule } from '@angular/http';
// All pages (sucks)
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PointOfInterestPage } from '../pages/point-of-interest/point-of-interest';
import { ExplorePage } from '../pages/explore/explore';
var cloudSettings = {
    'core': {
        'app_id': '7a63e725'
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
            IonicImageViewerModule,
            HttpModule
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
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map
// Core
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

// Components
import { GatePage } from './gate/gate';
import { PrePrimaryPage } from './pre-primary/pre-primary';

var pagesToImport = [], pagesToDeclare = [], pagesToExport = [], entryComponents = [];

[
    // GatePage,
    // PrePrimaryPage
].forEach((page) => {
    pagesToImport.push(IonicModule.forRoot(page));
    pagesToDeclare.push(page);
    pagesToExport.push(page);
    
});

@NgModule({
    imports: pagesToImport,
    declarations: pagesToDeclare,
    entryComponents: entryComponents,
    exports: pagesToExport
})
export class PointsOfInterestModule {
}
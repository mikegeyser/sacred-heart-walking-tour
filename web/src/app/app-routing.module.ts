import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PointOfInterestComponent } from './point-of-interest/point-of-interest.component';

const routes: Routes = [
  {
    path: 'p/:id',
    component: PointOfInterestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

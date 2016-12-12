import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Gate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-gate',
  templateUrl: 'gate.html'
})
export class GatePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello GatePage Page');
  }
}

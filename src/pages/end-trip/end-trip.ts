import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-end-trip',
  templateUrl: 'end-trip.html'
})
export class EndTripPage {

  constructor(public navCtrl: NavController) {
  }

  finish(){
  this.navCtrl.setRoot(HomePage);
  }

}

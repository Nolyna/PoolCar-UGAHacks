import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-end-trip2',
  templateUrl: 'end-trip2.html'
})
export class EndTrip2Page {

  constructor(public navCtrl: NavController) {
  }

  finish(){
    this.navCtrl.setRoot(HomePage);
  }
}

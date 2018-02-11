import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EndTripPage } from '../end-trip/end-trip';
import { EndTrip2Page } from '../end-trip2/end-trip2';

@Component({
  selector: 'page-start-trip',
  templateUrl: 'start-trip.html'
})
export class StartTripPage {

  type: any;

  constructor(public navCtrl: NavController) {
    this.type = localStorage.getItem('type');
  }

  started(){
    if( localStorage.getItem('type') == "rider"){
      this.navCtrl.push(EndTripPage);
    }else{
      this.navCtrl.push(EndTrip2Page);
    }

  }

}

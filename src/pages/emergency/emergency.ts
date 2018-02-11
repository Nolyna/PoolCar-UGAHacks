import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DriverDetailsPage } from '../driver-details/driver-details';

@Component({
  selector: 'page-emergency',
  templateUrl: 'emergency.html'
})
export class EmergencyPage {

  constructor(public navCtrl: NavController) {
  }
  goToDriverDetails(params){
    if (!params) params = {};
    this.navCtrl.push(DriverDetailsPage);
  }
}

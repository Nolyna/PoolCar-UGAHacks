import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DriverDetailsPage } from '../driver-details/driver-details';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {
  }
  goToDriverDetails(params){
    if (!params) params = {};
    this.navCtrl.push(DriverDetailsPage);
  }
}

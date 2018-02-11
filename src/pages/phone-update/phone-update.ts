import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { DriverDetailsPage } from '../driver-details/driver-details';

@Component({
  selector: 'page-phone-update',
  templateUrl: 'phone-update.html'
})
export class PhoneUpdatePage {

  constructor(public navCtrl: NavController) {
  }
  goToProfile(params){
    if (!params) params = {};
    this.navCtrl.push(ProfilePage);
  }goToDriverDetails(params){
    if (!params) params = {};
    this.navCtrl.push(DriverDetailsPage);
  }
}

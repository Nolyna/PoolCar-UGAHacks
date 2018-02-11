import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { DriverDetailsPage } from '../driver-details/driver-details';

@Component({
  selector: 'page-password-update',
  templateUrl: 'password-update.html'
})
export class PasswordUpdatePage {

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

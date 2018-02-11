import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { ProfilePage } from '../profile/profile';
import { DriverDetailsPage } from '../driver-details/driver-details';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }goToProfile(params){
    if (!params) params = {};
    this.navCtrl.push(ProfilePage);
  }goToDriverDetails(params){
    if (!params) params = {};
    this.navCtrl.push(DriverDetailsPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
}

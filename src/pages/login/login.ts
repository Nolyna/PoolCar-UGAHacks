import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';
import { DriverDetailsPage } from '../driver-details/driver-details';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
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

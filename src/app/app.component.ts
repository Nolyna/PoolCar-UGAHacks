import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ProfilePage } from '../pages/profile/profile';
import { StartTripPage } from '../pages/start-trip/start-trip';
import { DriverDetailsPage } from '../pages/driver-details/driver-details';
import { PlanningPage } from '../pages/planning/planning';
import { MessagePage } from '../pages/message/message';
import { HistoryPage } from '../pages/history/history';
import { HelpPage } from '../pages/help/help';
import { SettingsPage } from '../pages/settings/settings';
import { MatchingPage } from '../pages/matching/matching';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToProfile(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ProfilePage);
  }goToDriverDetails(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DriverDetailsPage);
  }goToPlanning(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PlanningPage);
  }goToMessage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MessagePage);
  }goToMatching(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MatchingPage);
  }goToHistory(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HistoryPage);
  }goToTrip(params){
    if (!params) params = {};
    this.navCtrl.setRoot(StartTripPage);
  }goToHelp(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HelpPage);
  }goToSettings(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SettingsPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SignupPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }
}

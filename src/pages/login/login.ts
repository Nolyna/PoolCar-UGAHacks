import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
//import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';
import { DriverDetailsPage } from '../driver-details/driver-details';
import { HomePage } from '../home/home';


//added
import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

//addded
user = {} as User;


  //before, navctrl only
  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController) {
  }

//add
async login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        localStorage.setItem('email', user.email);
        localStorage.setItem('uid', result.uid);
        console.log("id",result.uid);
        //replaced 'HomePage' with HomePage
        this.navCtrl.setRoot(HomePage);
      }
    }
    catch (e) {
      console.error(e);
    }
  }
//add
/*
  async register(user: User) {
      try {
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(
          user.email,
          user.password
        );
        if (result) {
          this.navCtrl.setRoot('HomePage');
        }

      } catch (e) {
        console.error(e);
      }
    }

*/

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

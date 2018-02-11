import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DriverDetailsPage } from '../driver-details/driver-details';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  name: any;
  phone: any = "";
  email:any;
  type:any;
  UID: "BoFLTdU58USExgZA9RAIIw36ayV2";
  db: any;



  constructor(public navCtrl: NavController) {
    this.UID = localStorage.getItem('uid');
    this.db = firebase.database();
    this.email = localStorage.getItem('email');
    this.name = localStorage.getItem('name');
    this.type = localStorage.getItem('type');

    this.db.ref(this.UID+'/profile/name/').on('value',function(result) {
      this.name  = result.val();
    });

    this.db.ref(this.UID+'/profile/type/').on('value',function(result) {
        this.type = result.val();
    });

    this.db.ref(this.UID+'/profile/phone/').on('value',function(result) {
      console.log(result.val());
      //this.phone = result.val() || "";
    });
  }
  goToDriverDetails(params){
    if (!params) params = {};
    this.navCtrl.push(DriverDetailsPage);
  }
}

import { Component } from '@angular/core';
import { NavController,  AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-planning',
  templateUrl: 'planning.html'
})
export class PlanningPage {

    UID: "BoFLTdU58USExgZA9RAIIw36ayV2";
    db:any;
    req = {} as Req;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.db = firebase.database();
    this.UID = localStorage.getItem('uid');
    console.log(this.UID);
  }

async writeRequete(req: Req) {
    firebase.database().ref('request/').push({
      user:this.UID,
      arrivalCity: req.arrivalCity,
      arrivalZip: req.arrivalZip,
      date: req.datesplan,
      departCity: req.departCity,
      departZip: req.departZip
  });
  showAlert();
}

showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Great!',
      subTitle: 'Your request has been submit!',
      buttons: ['OK']
    });
    alert.present();
  }


}

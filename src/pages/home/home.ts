import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: any;
  db: any;
  UID: any;
  lists:any = [];

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.UID = localStorage.getItem('uid');
    this.email = localStorage.getItem('email');
    var testlists = [];
    this.db = firebase.database();

    this.db.ref(this.UID+'/profile/name').on('value',function(result) {
      localStorage.setItem('name',result.val());
    });

    this.db.ref(this.UID+'/profile/type').on('value',function(result) {
      localStorage.setItem('type',result.val());
    });

//dpc = departure city, dpzc = departure zip code,arc = arrival city, arzc = arrival city zip code
    this.db.ref('request/').on('value',function(result) {
      result.forEach(function(data) {
        var value = data.val();
        var Rname = "";
        var Rtype = "";
        var db = firebase.database();
        db.ref(value.user+'/profile/name').on('value',function(res) {
          localStorage.setItem('tmp_name',res.val());
          console.log(res.val());
        });
        db.ref(value.user+'/profile/type').on('value',function(res) {
           localStorage.setItem('tmp_type',res.val());
        });
        Rname = localStorage.getItem('tmp_name');
        Rtype = localStorage.getItem('tmp_type');
        console.log(Rname);
        testlists.push({date: value.date,dpc: value.departCity, dpzc: value.departZip, arc: value.arrivalCity, arzc: value.arrivalZip, key: data.key, name: Rname, type: Rtype});
        });
      })
    //driver@uga.com

    this.lists = testlists;
    console.log(this.lists);
  }// end costructor

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})
export class MessagePage {
UID: any;
  constructor(public navCtrl: NavController) {
    this.UID = localStorage.getItem('uid');
  }

}

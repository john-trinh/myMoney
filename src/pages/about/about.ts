import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// import { Storage } from '@ionic/storage';
import { Wallet } from '../../app/wallet';
import { ID } from '../../app/const';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  data: Wallet;

  constructor(public navCtrl: NavController,
    public navParams: NavParams
    // private storage: Storage
  ) {
    this.getCurrentData(navParams.get(ID));
  }

  getCurrentData(walletId) {

  }

  updateData() {

  }
}

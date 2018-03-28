import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { Wallet } from '../../app/wallet';
import { WALLETDB } from '../../app/const';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  data = new Wallet();
  db;
  isNull: boolean;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage
  ) {
    this.data.date = new Date().toISOString();
    this.db = new Array();
  }

  saveData() {
    this.storage.get(WALLETDB).then(dataStored=> {
      if (!dataStored) {
        this.isNull = true;
        this.storage.set(WALLETDB, JSON.stringify(this.db.push(this.data)));
      } else {
        this.isNull = false;
        console.log('db 1', this.db, dataStored);

        this.db = JSON.parse(dataStored);
        this.db.push(this.data);
        console.log('db 2', this.db);
        this.storage.set(WALLETDB, JSON.stringify(this.db));
        // this.storage.set(WALLETDB, dataStored.push(this.data));
      }
    });
    // if (this.isNull) {

    // } else {
    //   console.log('db', this.db);
    //   this.db.push(this.data);
    //   console.log('db after', this.db);
    //   this.storage.set(WALLETDB, JSON.stringify(this.db));
    // }
    // this.storage.get(WALLETDB).then(dataStored => console.log(dataStored));

  }
}

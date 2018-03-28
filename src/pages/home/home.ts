import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Toast } from '@ionic-native/toast';

import { Wallet } from '../../app/wallet';
import { ContactPage } from '../contact/contact';
import { Storage } from '@ionic/storage';
import { AboutPage } from '../about/about';
import { WALLETDB } from '../../app/const';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  expenses: Wallet[];
  totalIncome = 0;
  totalExpense = 0;
  balance: any;

  constructor(
    public navCtrl: NavController,
    private storage: Storage
  ) {}

  ionViewDidLoad() {
    this.getData();
  }
  ionViewWillEnter() {
    this.getData();
  }

  getData() {
    this.storage.get(WALLETDB)
    .then(data => {
      if (data) {
        this.expenses = JSON.parse(data);
        this.expenses.forEach(x => this.balance = x.amount);
      } else {
        this.balance = "No Wallet added yet";
      }
    });
  }

  addData() {
    this.navCtrl.push(ContactPage);
  }

  editData(walletId) {
    this.navCtrl.push(AboutPage, {
      walletId: walletId
    });
  }

  deleteData(walletId) {

  }

}

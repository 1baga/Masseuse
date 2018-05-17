import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ManPage } from '../man/man';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  manPage: any;

  constructor(public navCtrl: NavController) {
    this.manPage = ManPage;

  }

}

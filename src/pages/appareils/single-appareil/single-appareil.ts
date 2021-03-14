import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-single-appareil',
  templateUrl: 'single-appareil.html',
})
export class SingleAppareilPage implements OnInit {
  name:string;

  constructor(public navParams: NavParams) {
  }

  ngOnInit() {
    this.name = this.navParams.get('appareilName');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleAppareilPage');
  }

}

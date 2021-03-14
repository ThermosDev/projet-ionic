import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-single-appareil',
  templateUrl: 'single-appareil.html',
})
export class SingleAppareilPage implements OnInit {
  appareil: {
    name: string,
    description: string[]
  };

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ngOnInit() {
    this.appareil = this.navParams.get('appareil');
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

}

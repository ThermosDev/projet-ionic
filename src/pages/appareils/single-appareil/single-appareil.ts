import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { Appareil } from '../../../models/Appareil';
import { AppareilsService } from '../../../services/appareils.service';

@Component({
  selector: 'page-single-appareil',
  templateUrl: 'single-appareil.html',
})
export class SingleAppareilPage implements OnInit {
  index: number;
  appareil: Appareil;

  constructor(public navParams: NavParams,
    public viewCtrl: ViewController,
    public appareilService: AppareilsService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.appareil = this.appareilService.appareilsList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleAppareil() {
    this.appareil.isOn = !this.appareil.isOn;
  }
  
  onSubmitForm(form: NgForm) {
    console.log(form.value);
    this.dismissModal();
  }

  onDeleteHours() {
    this.appareil.startTime = '';
    this.appareil.endTime = '';
    this.dismissModal();
  }

}

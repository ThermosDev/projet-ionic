import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { Appareil } from '../../models/Appareil';
import { AppareilsService } from '../../services/appareils.service';
import { AppareilFormPage } from './appareil-form/appareil-form';
import { SingleAppareilPage } from './single-appareil/single-appareil';

@Component({
  selector: 'page-appareils',
  templateUrl: 'appareils.html'
})
export class AppareilsPage {
  appareilsList: Appareil[];

  constructor(private modalCtrl: ModalController,
    private appareilsService: AppareilsService, private navCtrl: NavController) { }

  ionViewWillEnter() {
    this.appareilsList = this.appareilsService.appareilsList.slice();
  }

  onLoadAppareil(index: number) {
    let modal = this.modalCtrl.create(SingleAppareilPage, { index: index });
    modal.present();
  }
  onNewAppareil() {
    this.navCtrl.push(AppareilFormPage);
  }
}
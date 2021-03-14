import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { SingleAppareilPage } from './single-appareil/single-appareil';

@Component({
  selector: 'page-appareils',
  templateUrl: 'appareils.html'
})
export class AppareilsPage {

  constructor(private modalCtrl: ModalController) { }

  appareilsList = [
    {
      name: 'Machine à laver',
      description: [
        'Volume: 6 litres',
        'Temps de lavage: 2 heures',
        'Consommation: 173 kWh/an',
        'Prix: 399,00 €',
      ]
    },
    {
      name: 'Télévision',
      description: [
        'Dimensions: 40 pouces',
        'Consommation: 22 kWh/an',
        'Prix: 649,00 €'
      ]
    },
    {
      name: 'Ordinateur',
      description: [
        'Marque: fait maison',
        'Consommation: 500 kWh/an',
        'Prix: 1699,00€'
      ]
    }
  ];

  onLoadAppareil(appareil: { name: string, description: string[] }) {
    let modal = this.modalCtrl.create(SingleAppareilPage, { appareil: appareil })
    modal.present();
  }
}
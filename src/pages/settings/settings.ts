import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  statut = 'Allumé !';

  constructor(private alertCtrl: AlertController){}

  onToggleLights(){
    let alert = this.alertCtrl.create({
      title:'Êtes-vous certain(e) de vouloir continuer ??',
      subTitle:'Cette action allumera ou éteindra toutes les lumières de la maison !',
      buttons : [
        {
          text:'Annuler',
          role: 'cancel'
        },
        {
          text: 'Confirmer',
          handler: () => this.setStatut()
        }
      ]
    });
    alert.present();
  }
  setStatut(): boolean | void {
    console.log(this.statut)
    if(this.statut == 'Allumé !'){
      this.statut = 'Éteint !';
      return;
    }
    if(this.statut == 'Éteint !'){
      this.statut = 'Allumé !';
      return;
    }
  }

}
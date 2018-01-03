import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DuvidaPage } from '../duvida/duvida';

@Component({
  selector: 'page-informacao',
  templateUrl: 'informacao.html'
})
export class InformacaoPage {

  constructor(public navCtrl: NavController) {

  }
  chamarDuvida(){
    this.navCtrl.push(DuvidaPage);
  }
}

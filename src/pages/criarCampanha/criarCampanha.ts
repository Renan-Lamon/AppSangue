import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-criarCampanha',
  templateUrl: 'criarCampanha.html'
})
export class criarCampanhaPage {

  constructor(public navCtrl: NavController) {

  }

  adicionarCampanha(titulo: String, tipoSangue:String, local:String, data:Date, alvo:String, nomeAlvo:String, descricao:String){

  }
}

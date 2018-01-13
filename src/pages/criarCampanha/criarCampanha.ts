import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IdentificadorPage} from '../identificador/identificador';
import {NoticiaPage} from '../noticia/noticia';
import {AgendamentoPage} from '../agendamento/agendamento';
import { HemocentroPage } from '../hemocentro/hemocentro';
import { InformacaoPage } from '../informacao/informacao';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-criarCampanha',
  templateUrl: 'criarCampanha.html'
})
export class criarCampanhaPage {

  constructor(public navCtrl: NavController) {

  }

  chamarHome(){
    this.navCtrl.setRoot(HomePage);
  }
  chamarHemocentro(){
    this.navCtrl.setRoot(HemocentroPage);
  }
  chamarNoticia(){
    this.navCtrl.setRoot(NoticiaPage);
  }
  chamarAgendamento(){
    this.navCtrl.setRoot(AgendamentoPage);
  }
  chamarInformacoes(){
    this.navCtrl.setRoot(InformacaoPage);
  }
  chamarIdentificador(){
    this.navCtrl.setRoot(IdentificadorPage);
  }
  
  adicionarCampanha(titulo: String, tipoSangue:String, local:String, data:Date, alvo:String, nomeAlvo:String, descricao:String){

  }
}

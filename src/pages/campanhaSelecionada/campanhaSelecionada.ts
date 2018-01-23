import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IdentificadorPage} from '../identificador/identificador';
import {NoticiaPage} from '../noticia/noticia';
import {AgendamentoPage} from '../agendamento/agendamento';
import { HemocentroPage } from '../hemocentro/hemocentro';
import { InformacaoPage } from '../informacao/informacao';
import { HomePage } from '../home/home';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  selector: 'page-campanhaSelecionada',
  templateUrl: 'campanhaSelecionada.html'
})
export class CampanhaSelecionadaPage {
  campanhas: any;

  constructor(public navCtrl: NavController,
              public parametro: NavParams) {
    this.campanhas = parametro.get('campanhas');
    
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
  
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DuvidaPage } from '../duvida/duvida';
import { HemocentroPage } from '../hemocentro/hemocentro';
import { CampanhaPage } from '../campanha/campanha';
import {IdentificadorPage} from '../identificador/identificador';
import {NoticiaPage} from '../noticia/noticia';
import {AgendamentoPage} from '../agendamento/agendamento';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-informacao',
  templateUrl: 'informacao.html'
})
export class InformacaoPage {

  constructor(public navCtrl: NavController) {

  }

  chamarHome(){
    this.navCtrl.setRoot(HomePage);
  }
  chamarCampanha(){
    this.navCtrl.setRoot(CampanhaPage);
  }
  chamarNoticia(){
    this.navCtrl.setRoot(NoticiaPage);
  }
  chamarAgendamento(){
    this.navCtrl.setRoot(AgendamentoPage);
  }
  chamarHemocentro(){
    this.navCtrl.setRoot(HemocentroPage);
  }
  chamarIdentificador(){
    this.navCtrl.setRoot(IdentificadorPage);
  }

  chamarDuvida(){
    this.navCtrl.push(DuvidaPage);
  }
}

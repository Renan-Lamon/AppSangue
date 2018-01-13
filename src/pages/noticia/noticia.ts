import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoticiaSelecionadaPage } from '../noticiaSelecionada/noticiaSelecionada';
import { HemocentroPage } from '../hemocentro/hemocentro';
import { CampanhaPage } from '../campanha/campanha';
import {IdentificadorPage} from '../identificador/identificador';
import {AgendamentoPage} from '../agendamento/agendamento';
import { InformacaoPage } from '../informacao/informacao';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-noticia',
  templateUrl: 'noticia.html'
})
export class NoticiaPage {
local:string='todos';

  constructor(public navCtrl: NavController) {

  }
 
  chamarHome(){
    this.navCtrl.setRoot(HomePage);
  }
  chamarCampanha(){
    this.navCtrl.setRoot(CampanhaPage);
  }
  chamarHemocentro(){
    this.navCtrl.setRoot(HemocentroPage);
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

  chamarNoticiaSelecionada(){
    this.navCtrl.push(NoticiaSelecionadaPage);
  }

}

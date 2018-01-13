import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HemocentroPage } from '../hemocentro/hemocentro';
import { CampanhaPage } from '../campanha/campanha';
import {IdentificadorPage} from '../identificador/identificador';
import {AgendamentoPage} from '../agendamento/agendamento';
import { InformacaoPage } from '../informacao/informacao';


@Component({
  selector: 'page-noticiaSelecionada',
  templateUrl: 'noticiaSelecionada.html'
})
export class NoticiaSelecionadaPage {
  a = new HomePage(this.navCtrl);
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

  testeClasse(){
    let cu = new HomePage(this.navCtrl);
    cu.imagemPerfil = 'shdushd';
  }
}

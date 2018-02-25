import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HemocentroPage } from '../hemocentro/hemocentro';
import { CampanhaPage } from '../campanha/campanha';
import {IdentificadorPage} from '../identificador/identificador';
import {NoticiaPage} from '../noticia/noticia';
import {AgendamentoPage} from '../agendamento/agendamento';
import { HomePage } from '../home/home';
import { RegistrarDoacaoPage } from '../registrarDoacao/registrarDoacao';


@Component({
  selector: 'page-duvida',
  templateUrl: 'duvida.html'
})
export class DuvidaPage {
  constructor(public navCtrl: NavController) {
    
  }

  chamarRegistrarDoacao(){
    this.navCtrl.setRoot(RegistrarDoacaoPage);
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
 
}

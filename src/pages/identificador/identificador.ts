import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HemocentroPage } from '../hemocentro/hemocentro';
import { CampanhaPage } from '../campanha/campanha';
import {NoticiaPage} from '../noticia/noticia';
import {AgendamentoPage} from '../agendamento/agendamento';
import { InformacaoPage } from '../informacao/informacao';
import { HomePage } from '../home/home';
import { RegistrarDoacaoPage } from '../registrarDoacao/registrarDoacao';

@Component({
  selector: 'page-identificador',
  templateUrl: 'identificador.html'
})
export class IdentificadorPage {
  QRUsuario:String = "../../assets/imgs/QRcoude.png";
  
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
  chamarInformacoes(){
    this.navCtrl.setRoot(InformacaoPage);
  }
  chamarHemocentro(){
    this.navCtrl.setRoot(HemocentroPage);
  }
}

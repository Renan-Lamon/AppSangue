import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HemocentroSelecionadoPage } from '../hemocentroSelecionado/hemocentroSelecionado';
import { CampanhaPage } from '../campanha/campanha';
import {IdentificadorPage} from '../identificador/identificador';
import {NoticiaPage} from '../noticia/noticia';
import {AgendamentoPage} from '../agendamento/agendamento';
import { InformacaoPage } from '../informacao/informacao';
import { HemocentroPage } from '../hemocentro/hemocentro';
import { RegistrarDoacaoPage } from '../registrarDoacao/registrarDoacao';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
  
  constructor(public navCtrl: NavController) {
    
  }
  
  chamarRegistrarDoacao(){
    this.navCtrl.setRoot(RegistrarDoacaoPage);
  }
  chamarHemocentro(){
    this.navCtrl.setRoot(HemocentroPage);
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
  chamarIdentificador(){
    this.navCtrl.setRoot(IdentificadorPage);
  }

  chamarHemocentroSelecionado(){
    this.navCtrl.push(HemocentroSelecionadoPage);
  }
}

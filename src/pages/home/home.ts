import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IdentificadorPage} from '../identificador/identificador';
import {NoticiaPage} from '../noticia/noticia';
import {AgendamentoPage} from '../agendamento/agendamento';
import { CampanhaPage } from '../campanha/campanha';
import { HemocentroPage } from '../hemocentro/hemocentro';
import { InformacaoPage } from '../informacao/informacao';
import { RankPage } from '../rank/rank';
import { PerfilPage } from '../perfil/perfil';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imagemPerfil:String = "../../assets/imgs/imagemPerfil1.jpg";
  nomeUsuario:String = "Juca Cabuloso da Silva";
  nomeHemocentro:String = "Santa Casa";
  levelUsuario:String = "Lv20  (100/350)";
  
  constructor(public navCtrl: NavController) {  
    
  }

  chamarCampanha(){
    this.navCtrl.setRoot(CampanhaPage);
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
  
  chamarNoticiaPush(){
    this.navCtrl.push(NoticiaPage);
  }
  chamarAgendamentoPush(){
    this.navCtrl.push(AgendamentoPage);
  }
  chamarRankPush(){
    this.navCtrl.push(RankPage);
  }
  chamarPerfilPush(){
    this.navCtrl.push(PerfilPage);
  }

  chamarLoginPush(){
    this.navCtrl.push(LoginPage);
  }
}

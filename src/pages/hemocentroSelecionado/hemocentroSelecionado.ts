import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IdentificadorPage} from '../identificador/identificador';
import {NoticiaPage} from '../noticia/noticia';
import {AgendamentoPage} from '../agendamento/agendamento';
import { CampanhaPage } from '../campanha/campanha';
import { InformacaoPage } from '../informacao/informacao';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-hemocentroSelecionado',
  templateUrl: 'hemocentroSelecionado.html'
})
export class HemocentroSelecionadoPage {
  imagemPerfil:String = "../../assets/imgs/imagemPerfil1.jpg";
  nomeUsuario:String = "Juca Cabuloso da Silva";
  nomeHemocentro:String = "Santa Casa";
  levelUsuario:String = "Lv20  (100/350)";
  
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
  chamarInformacoes(){
    this.navCtrl.setRoot(InformacaoPage);
  }
  chamarIdentificador(){
    this.navCtrl.setRoot(IdentificadorPage);
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IdentificadorPage} from '../identificador/identificador';
import {NoticiaPage} from '../noticia/noticia';
import {AgendamentoPage} from '../agendamento/agendamento';
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

  chamarNoticia(){
    this.navCtrl.push(NoticiaPage);
  }
  chamarAgendamento(){
    this.navCtrl.push(AgendamentoPage);
  }
  chamarIdentificador(){
    this.navCtrl.push(IdentificadorPage);
  }
}

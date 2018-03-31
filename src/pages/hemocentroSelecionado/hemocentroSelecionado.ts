import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IdentificadorPage} from '../identificador/identificador';
import {NoticiaPage} from '../noticia/noticia';
import {AgendamentoPage} from '../agendamento/agendamento';
import { CampanhaPage } from '../campanha/campanha';
import { InformacaoPage } from '../informacao/informacao';
import { HomePage } from '../home/home';
import { RequisicoesHttpProvider } from '../../providers/requisicoes-http/requisicoes-http';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { RegistrarDoacaoPage } from '../registrarDoacao/registrarDoacao';


@Component({
  selector: 'page-hemocentroSelecionado',
  templateUrl: 'hemocentroSelecionado.html'
})
export class HemocentroSelecionadoPage {
  imagemPerfil:string = "../../assets/imgs/imagemPerfil1.jpg";
  nomeUsuario:string = "Juca Cabuloso da Silva";
  codHemocentro:number;
  estoques: any[];
  levelUsuario:string = "Lv20  (100/350)";

  constructor(public navCtrl: NavController, 
              public req:RequisicoesHttpProvider,
              public parametro: NavParams) { 
  
    this.DadosEstoqueSangue();
    
  }

  DadosEstoqueSangue() {
    this.codHemocentro=this.parametro.get('hemocentroSelecionado');
    this.req.getDadosEstoque(this.codHemocentro)
      .map(res => res.json())
      .subscribe(data => {
        this.estoques = data;
        })
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
  chamarIdentificador(){
    this.navCtrl.setRoot(IdentificadorPage);
  }

}

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
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { RequisicoesHttpProvider } from '../../providers/requisicoes-http/requisicoes-http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    RequisicoesHttpProvider
  ]
})
export class HomePage {
  public imagemPerfil:String = "../../assets/imgs/imagemPerfil1.jpg";
  public nomeUsuario:String = "Juca Cabuloso da Silva";
  public nomeHemocentro:String = "Santa Casa";
  public levelUsuario:String = "Lv20  (100/350)";
  public codUsuario:number;

  constructor(public navCtrl: NavController,
              public parametro: NavParams,
              private req: RequisicoesHttpProvider) {  
            
    this.codUsuario = parametro.get('codUsuario');
    this.DadosDoUsuario();
    
  }

  DadosDoUsuario() {
    this.req.getDadosUsuario(this.codUsuario)
      .map(res => res.json())
      .subscribe(data => {
        //Setando dados do usuario na tela
        this.nomeUsuario = data.nome;
        this.nomeHemocentro=data.hemocentroFavorito;

      });

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

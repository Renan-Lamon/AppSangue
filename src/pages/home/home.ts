import { Component, Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IdentificadorPage } from '../identificador/identificador';
import { NoticiaPage } from '../noticia/noticia';
import { AgendamentoPage } from '../agendamento/agendamento';
import { CampanhaPage } from '../campanha/campanha';
import { HemocentroPage } from '../hemocentro/hemocentro';
import { InformacaoPage } from '../informacao/informacao';
import { RankPage } from '../rank/rank';
import { PerfilPage } from '../perfil/perfil';
import { LoginPage } from '../login/login';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { RequisicoesHttpProvider } from '../../providers/requisicoes-http/requisicoes-http';
import { DadosUsuarioProvider } from '../../providers/dados-usuario/dados-usuario';
import { Badge } from '@ionic-native/badge';
import { RegistrarDoacaoPage } from '../registrarDoacao/registrarDoacao';
import { Facebook } from '@ionic-native/facebook';
import { Hemocentro } from '../../app/hemocentro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    RequisicoesHttpProvider
  ]
})

@Injectable()
export class HomePage {
  public dadosFB:any;
  public imagemPerfil: string = "../../assets/imgs/imagemPerfil1.jpg";
  public nomeUsuario: string = "-";
  public hemocentroFavorito: Hemocentro;
  public nomeHemocentroFavorito: string;
  public levelUsuario: string = "Lv20  (100/350)";
  public codUsuario: number;
 
  public estoques: any[];

  constructor(public navCtrl: NavController,
    public parametro: NavParams,
    private req: RequisicoesHttpProvider,
    public providerDados: DadosUsuarioProvider,
    public badge: Badge, public FB:Facebook) {
  
    this.codUsuario = this.providerDados.getCod();
    this.dadosFB = this.providerDados.getDadosFB();
    this.badge.set(1);
    
    console.log(this.badge.get());
    this.DadosDoUsuarioEstoque();
    
  }

 
  DadosDoUsuarioEstoque() {
    this.req.getDadosUsuario(this.codUsuario)
      .map(res => res.json())
      .subscribe(data => {
        //Setando dados do usuario na tela
        this.nomeUsuario = data.nome;
        this.hemocentroFavorito = data.hemocentroFavorito;
        this.nomeHemocentroFavorito = this.hemocentroFavorito.nome;
        //carregando dados do estoque
        this.DadosEstoqueSangue();

      });

  }
  

  DadosEstoqueSangue() {
    this.req.getDadosEstoque(this.hemocentroFavorito.cod)
      .map(res => res.json())
      .subscribe(data => {
        this.estoques = data;
      });

  }

  getCodUsuario(){
    return this.codUsuario;
  }

  chamarCampanha() {
    this.navCtrl.setRoot(CampanhaPage);
  }
  chamarRegistrarDoacao(){
    this.navCtrl.setRoot(RegistrarDoacaoPage);
  }
  chamarHemocentro() {
    this.navCtrl.setRoot(HemocentroPage);
  }
  chamarNoticia() {
    this.navCtrl.setRoot(NoticiaPage);
  }
  chamarAgendamento() {
    this.navCtrl.setRoot(AgendamentoPage);
  }
  chamarInformacoes() {
    this.navCtrl.setRoot(InformacaoPage);
  }
  chamarIdentificador() {
    this.navCtrl.setRoot(IdentificadorPage);
  }

  chamarNoticiaPush() {
    this.navCtrl.push(NoticiaPage);
  }
  chamarAgendamentoPush() {
    this.navCtrl.push(AgendamentoPage);
  }
  chamarRankPush() {
    this.navCtrl.push(RankPage);
  }
  chamarPerfilPush() {
    this.navCtrl.push(PerfilPage);
  }

  chamarLoginPush() {
    this.navCtrl.push(LoginPage);
  }
}

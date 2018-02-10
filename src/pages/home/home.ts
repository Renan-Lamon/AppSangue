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
  public nomeUsuario: string;
  public nomeHemocentro: string;
  public levelUsuario: string = "Lv20  (100/350)";
  public codUsuario: number;
  public APositivoSituacao:string;
  public ANegativoSituacao:string;
  public BPositivoSituacao:string;
  public BNegativoSituacao:string;
  public ABPositivoSituacao:string;
  public ABNegativoSituacao:string;
  public OPositivoSituacao:string;
  public ONegativoSituacao:string;

  constructor(public navCtrl: NavController,
    public parametro: NavParams,
    private req: RequisicoesHttpProvider,
    public providerDados: DadosUsuarioProvider) {
  
    this.codUsuario = this.providerDados.getCod();
    this.dadosFB = this.providerDados.getDadosFB();
    
    this.DadosDoUsuarioEstoque();
    
  }

  DadosDoUsuarioEstoque() {
    this.req.getDadosUsuario(this.codUsuario)
      .map(res => res.json())
      .subscribe(data => {
        //Setando dados do usuario na tela
        this.nomeUsuario = data.nome;
        this.nomeHemocentro = data.hemocentroFavorito;
        //carregando dados do estoque
        this.DadosEstoqueSangue();

      });

  }
  DadosEstoqueSangue() {
    this.req.getDadosEstoque(this.nomeHemocentro)
      .map(res => res.json())
      .subscribe(data => {
        //percorrendo todos os objetos da lista e pegando a situação do 
        //estoque para cada tipo Sanguineo, ex:A+ = critico
        //por algum motivo é preciso criar uma variavel intermediaria pra montar o endereco da imagem
        //sem ela da erro, por isso criei a variavel situacao;
        let situacao:string;
        for (var itemEstoque of data) {
          if(itemEstoque.tipoSangue == 'A+'){
            situacao=itemEstoque.situacao; 
            this.APositivoSituacao = "assets/imgs/"+situacao+".png"; 
          }else if(itemEstoque.tipoSangue == 'A-'){
            situacao=itemEstoque.situacao;
            this.ANegativoSituacao = "assets/imgs/"+situacao+".png"; 
          }else if(itemEstoque.tipoSangue == 'B+'){
            situacao=itemEstoque.situacao; 
            this.BPositivoSituacao = "assets/imgs/"+situacao+".png"; 
          }else if(itemEstoque.tipoSangue == 'B-'){
            situacao=itemEstoque.situacao; 
            this.BNegativoSituacao = "assets/imgs/"+situacao+".png"; 
          }else if(itemEstoque.tipoSangue == 'AB+'){
            situacao=itemEstoque.situacao; 
            this.ABPositivoSituacao = "assets/imgs/"+situacao+".png"; 
          }else if(itemEstoque.tipoSangue == 'AB-'){
            situacao=itemEstoque.situacao; 
            this.ABNegativoSituacao = "assets/imgs/"+situacao+".png"; 
          }else if(itemEstoque.tipoSangue == 'O+'){
            situacao=itemEstoque.situacao; 
            this.OPositivoSituacao = "assets/imgs/"+situacao+".png"; 
          }else if(itemEstoque.tipoSangue == 'O-'){
            situacao=itemEstoque.situacao; 
            this.ONegativoSituacao = "assets/imgs/"+situacao+".png"; 
          }
        }
      });

  }

  getCodUsuario(){
    return this.codUsuario;
  }

  chamarCampanha() {
    this.navCtrl.setRoot(CampanhaPage);
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

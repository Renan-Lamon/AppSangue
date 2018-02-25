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
  nomeHemocentro:string = "Santa Casa";
  levelUsuario:string = "Lv20  (100/350)";
  public APositivoSituacao:string;
  public ANegativoSituacao:string;
  public BPositivoSituacao:string;
  public BNegativoSituacao:string;
  public ABPositivoSituacao:string;
  public ABNegativoSituacao:string;
  public OPositivoSituacao:string;
  public ONegativoSituacao:string;

  constructor(public navCtrl: NavController, 
              public req:RequisicoesHttpProvider,
              public parametro: NavParams) { 
  
    this.DadosEstoqueSangue();
    
  }

  DadosEstoqueSangue() {
    this.nomeHemocentro=this.parametro.get('hemocentroSelecionado');
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

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IdentificadorPage} from '../identificador/identificador';
import {NoticiaPage} from '../noticia/noticia';
import {AgendamentoPage} from '../agendamento/agendamento';
import { HemocentroPage } from '../hemocentro/hemocentro';
import { InformacaoPage } from '../informacao/informacao';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-campanhaSelecionada',
  templateUrl: 'campanhaSelecionada.html'
})
export class CampanhaSelecionadaPage {
  campanhas: Array<{ titulo: string, sangue: string, hemocentro: string, criador: string, alvo: string, data: string, quantidade: number,descricao:string, id: number }>;

  constructor(public navCtrl: NavController) {
    this.campanhas = [
      { titulo: 'Meu amigo precisa de você!', sangue: 'O+', hemocentro: 'Hospital Evangélico', criador: 'Juca da Silva', alvo: 'Juquinha Bizerra', data: '01/02/2018', quantidade: 5, descricao:'vem doar, lalalaalala, ele precisa de sangue urdur, DOEM SANGUE, bblabalblaballbalbla', id: 1}
    ];
    
  }

   chamarHome(){
    this.navCtrl.setRoot(HomePage);
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
  
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HemocentroSelecionadoPage } from '../hemocentroSelecionado/hemocentroSelecionado';
import { CampanhaPage } from '../campanha/campanha';
import {IdentificadorPage} from '../identificador/identificador';
import {NoticiaPage} from '../noticia/noticia';
import {AgendamentoPage} from '../agendamento/agendamento';
import { InformacaoPage } from '../informacao/informacao';
import { HomePage } from '../home/home';
import { DadosUsuarioProvider } from '../../providers/dados-usuario/dados-usuario';
import { RegistrarDoacaoPage } from '../registrarDoacao/registrarDoacao';
import { RequisicoesHttpProvider } from '../../providers/requisicoes-http/requisicoes-http';
import { Hemocentro } from '../../app/hemocentro';

@Component({
  selector: 'page-hemocentro',
  templateUrl: 'hemocentro.html',
})

export class HemocentroPage {
  searchQuery: string = '';
  items: Hemocentro[];
  
  
  constructor(public navCtrl: NavController, 
              public req:RequisicoesHttpProvider){
    this.initializeItems("");
  }

  initializeItems(filtro:string) {
    this.req.getHemocentros()
    .map(res => res.json())
    .subscribe(data => {
      this.items = data;

      // filtra os itens de acordo com a pesquia
      this.filtra(filtro);
    })
  }

  
  getItems(ev: any) {
      // set val to the value of the searchbar
    let val = ev.target.value;
    // Reset items back to all of the items
    this.initializeItems(val);


  }
  filtra(val:string){
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
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

  chamarHemocentroSelecionado(itemSelecionado:any){
    this.navCtrl.push(HemocentroSelecionadoPage,{'hemocentroSelecionado': itemSelecionado});
  }
}

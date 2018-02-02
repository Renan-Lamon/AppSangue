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

@Component({
  selector: 'page-hemocentro',
  templateUrl: 'hemocentro.html',
})
export class HemocentroPage {
  searchQuery: string = '';
  items: string[];
  
  
  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Hospital Evangélico',
      'Santa Casa'
    ];
  }

  
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
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

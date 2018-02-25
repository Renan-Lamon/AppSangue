import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CampanhaPage } from '../campanha/campanha';
import {IdentificadorPage} from '../identificador/identificador';
import {NoticiaPage} from '../noticia/noticia';
import { HemocentroPage } from '../hemocentro/hemocentro';
import { InformacaoPage } from '../informacao/informacao';
import { HomePage } from '../home/home';
import { RegistrarDoacaoPage } from '../registrarDoacao/registrarDoacao';

@Component({
  selector: 'page-grupo',
  templateUrl: 'grupo.html'
})
export class GrupoPage {
  convidados: Array<{nome:String, perfil:any, confirmou:boolean, cod:number}>;
  
  constructor(public navCtrl: NavController) {
    this.convidados = [
      {nome:'Afonso Costa Azul', perfil:'', confirmou : true, cod: 1 },
      {nome:'Jacarezin Furao', perfil:'', confirmou : false, cod: 2 },
      {nome:'Estou Sem Criatividade', perfil:'', confirmou : false, cod: 3 }
    ];  
  }

  chamarRegistrarDoacao(){
    this.navCtrl.setRoot(RegistrarDoacaoPage);
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
  chamarCampanha(){
    this.navCtrl.setRoot(CampanhaPage);
  }
  chamarInformacoes(){
    this.navCtrl.setRoot(InformacaoPage);
  }
  chamarIdentificador(){
    this.navCtrl.setRoot(IdentificadorPage);
  }
}

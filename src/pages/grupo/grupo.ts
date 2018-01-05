import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


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

}

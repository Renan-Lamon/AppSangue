import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-noticiaSelecionada',
  templateUrl: 'noticiaSelecionada.html'
})
export class NoticiaSelecionadaPage {
  a = new HomePage(this.navCtrl);
  constructor(public navCtrl: NavController) {
    
  }
  testeClasse(){
    let cu = new HomePage(this.navCtrl);
    cu.imagemPerfil = 'shdushd';
  }
}

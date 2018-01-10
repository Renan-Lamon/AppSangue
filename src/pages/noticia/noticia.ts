import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoticiaSelecionadaPage } from '../noticiaSelecionada/noticiaSelecionada';


@Component({
  selector: 'page-noticia',
  templateUrl: 'noticia.html'
})
export class NoticiaPage {
local:string='todos';

  constructor(public navCtrl: NavController) {

  }
 
  chamarNoticiaSelecionada(){
    this.navCtrl.push(NoticiaSelecionadaPage);
  }

}

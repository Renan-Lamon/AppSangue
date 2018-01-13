import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoticiaSelecionadaPage } from '../noticiaSelecionada/noticiaSelecionada';


@Component({
  selector: 'page-desktop',
  templateUrl: 'desktop.html'
})
export class DesktopPage {
local:string='todos';

  constructor(public navCtrl: NavController) {

  }
 
  chamarNoticiaSelecionada(){
    this.navCtrl.push(NoticiaSelecionadaPage);
  }

}

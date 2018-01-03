import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-identificador',
  templateUrl: 'identificador.html'
})
export class IdentificadorPage {
  QRUsuario:String = "../../assets/imgs/QRcoude.png";
  
  constructor(public navCtrl: NavController) {

  }

}

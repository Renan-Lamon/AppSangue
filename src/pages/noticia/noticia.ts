import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-noticia',
  templateUrl: 'noticia.html'
})
export class NoticiaPage {
local:string='todos';
  constructor(public navCtrl: NavController) {

  }
 
}

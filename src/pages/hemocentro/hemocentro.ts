import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HemocentroSelecionadoPage } from '../hemocentroSelecionado/hemocentroSelecionado';


@Component({
  selector: 'page-hemocentro',
  templateUrl: 'hemocentro.html'
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

  chamarHemocentroSelecionado(){
    this.navCtrl.push(HemocentroSelecionadoPage);
  }
}

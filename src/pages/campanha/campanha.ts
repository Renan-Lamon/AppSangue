import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {criarCampanhaPage} from '../criarCampanha/criarCampanha';

@Component({
  selector: 'page-campanha',
  templateUrl: 'campanha.html'
})
export class CampanhaPage {
  campanhas: Array<{ titulo: string, sangue: string, hemocentro: string, criador: string, alvo: string, data: string, quantidade: number }>;

  constructor(public navCtrl: NavController) {
    this.campanhas = [
      { titulo: 'Meu amigo precisa de você!', sangue: 'O+', hemocentro: 'Hospital Evangélico', criador: 'Juca da Silva', alvo: 'Juquinha Bizerra', data: '01/02/2018', quantidade: 5 },
      { titulo: 'Meu amigo precisa de você!', sangue: 'O+', hemocentro: 'Hospital Evangélico', criador: 'Juca da Silva', alvo: 'Juquinha Bizerra', data: '01/02/2018', quantidade: 5 },
      { titulo: 'Meu amigo precisa de você!', sangue: 'O+', hemocentro: 'Hospital Evangélico', criador: 'Juca da Silva', alvo: 'Juquinha Bizerra', data: '01/02/2018', quantidade: 5 },
      { titulo: 'Meu amigo precisa de você!', sangue: 'O+', hemocentro: 'Hospital Evangélico', criador: 'Juca da Silva', alvo: 'Juquinha Bizerra', data: '01/02/2018', quantidade: 5 }

    ];
    
  }
  chamarCriarCampanha(){
    this.navCtrl.push(criarCampanhaPage);
  }

}

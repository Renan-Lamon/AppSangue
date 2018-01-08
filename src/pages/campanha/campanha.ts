import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {criarCampanhaPage} from '../criarCampanha/criarCampanha';
import { CampanhaSelecionadaPage } from '../campanhaSelecionada/campanhaSelecionada';

@Component({
  selector: 'page-campanha',
  templateUrl: 'campanha.html'
})
export class CampanhaPage {
  campanhas: Array<{ titulo: string, sangue: string, hemocentro: string, criador: string, alvo: string, data: string, quantidade: number, id: number }>;

  constructor(public navCtrl: NavController) {
    this.campanhas = [
      { titulo: 'Meu amigo precisa de você!', sangue: 'O+', hemocentro: 'Hospital Evangélico', criador: 'Juca da Silva', alvo: 'Juquinha Bizerra', data: '01/02/2018', quantidade: 5, id: 1},
      { titulo: 'Meu amigo precisa de você!', sangue: 'O+', hemocentro: 'Hospital Evangélico', criador: 'Juca da Silva', alvo: 'Juquinha Bizerra', data: '01/02/2018', quantidade: 5, id: 2},
      { titulo: 'Meu amigo precisa de você!', sangue: 'O+', hemocentro: 'Hospital Evangélico', criador: 'Juca da Silva', alvo: 'Juquinha Bizerra', data: '01/02/2018', quantidade: 5, id: 3},
      { titulo: 'Meu amigo precisa de você!', sangue: 'O+', hemocentro: 'Hospital Evangélico', criador: 'Juca da Silva', alvo: 'Juquinha Bizerra', data: '01/02/2018', quantidade: 5, id: 4}

    ];
    
  }
  chamarCriarCampanha(){
    this.navCtrl.push(criarCampanhaPage);
  }

  chamarCampanhaSelecionada(){
    this.navCtrl.push(CampanhaSelecionadaPage);
  }

}

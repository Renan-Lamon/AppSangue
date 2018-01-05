import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-agendamento',
  templateUrl: 'agendamento.html'
})
export class AgendamentoPage {
  campanhas: Array<{ titulo: string, sangue: string, hemocentro: string, criador: string, alvo: string, data: string, quantidade: number, cod: number }>;
  grupos: Array<{ nome: string, campanha: any, quantidade: number, cod: number }>;
  
  constructor(public navCtrl: NavController) {
    this.campanhas = [
      { titulo: 'Meu amigo precisa de você!', sangue: 'O+', hemocentro: 'Hospital Evangélico', criador: 'Juca da Silva', alvo: 'Juquinha Bizerra', data: '01/02/2018', quantidade: 5, cod: 1},
      { titulo: 'Meu amigo precisa de você!2', sangue: 'O+', hemocentro: 'Hospital Evangélico', criador: 'Juca da Silva', alvo: 'Juquinha Bizerra', data: '01/02/2018', quantidade: 5, cod: 2},
      { titulo: 'Meu amigo precisa de você!3', sangue: 'O+', hemocentro: 'Hospital Evangélico', criador: 'Juca da Silva', alvo: 'Juquinha Bizerra', data: '01/02/2018', quantidade: 5, cod: 3},
      { titulo: 'Meu amigo precisa de você!4', sangue: 'O+', hemocentro: 'Hospital Evangélico', criador: 'Juca da Silva', alvo: 'Juquinha Bizerra', data: '01/02/2018', quantidade: 5, cod: 4}
    ];
    
    this.grupos = [
      { nome: 'Seila1', campanha:'',quantidade: 5, cod: 1},
      { nome: 'Seila2', campanha:'',quantidade: 5, cod: 2},
      { nome: 'Seila3', campanha:'',quantidade: 5, cod: 3}
    ];


  }

}

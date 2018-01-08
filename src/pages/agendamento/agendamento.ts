import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GrupoPage } from '../grupo/grupo';
import { Time } from '@angular/common/src/i18n/locale_data_api';


@Component({
  selector: 'page-agendamento',
  templateUrl: 'agendamento.html'
})
export class AgendamentoPage {
  campanhas: Array<{ titulo: string, sangue: string, hemocentro: string, criador: string, alvo: string, data: string, quantidade: number, cod: number }>;
  grupos: Array<{ nome: string, campanha: any, quantidade: number, privado:boolean,data:string, horario:string, cod: number }>;
  grupoSelecionado: string;
  grupoSelecionadoData: string;
  grupoSelecionadoHorario: string;

  grupo:string='nenhum';
  campanha:string='nenhuma';

  constructor(public navCtrl: NavController) {
    this.campanhas = [
      { titulo: 'Meu amigo precisa de você!', sangue: 'O+', hemocentro: 'Hospital Evangélico', criador: 'Juca da Silva', alvo: 'Juquinha Bizerra', data: '01/02/2018', quantidade: 5, cod: 1},
      { titulo: 'Meu amigo precisa de você!2', sangue: 'O+', hemocentro: 'Hospital Evangélico', criador: 'Juca da Silva', alvo: 'Juquinha Bizerra', data: '01/02/2018', quantidade: 5, cod: 2},
      { titulo: 'Meu amigo precisa de você!3', sangue: 'O+', hemocentro: 'Hospital Evangélico', criador: 'Juca da Silva', alvo: 'Juquinha Bizerra', data: '01/02/2018', quantidade: 5, cod: 3},
      { titulo: 'Meu amigo precisa de você!4', sangue: 'O+', hemocentro: 'Hospital Evangélico', criador: 'Juca da Silva', alvo: 'Juquinha Bizerra', data: '01/02/2018', quantidade: 5, cod: 4}
    ];
    this.grupoSelecionado='vazio';
    this.grupoSelecionadoHorario='vazio';
    this.grupoSelecionadoData='vazio';
    
    this.grupos = [
      { nome: 'Seila1', campanha:'',quantidade: 5,privado:true,data:'2015-08-01',horario:'09:32', cod: 1},
      { nome: 'Seila2', campanha:'',quantidade: 5,privado:false,data:'2019-08-01',horario:'09:32', cod: 2},
      { nome: 'Seila3', campanha:'',quantidade: 5,privado:false,data:'2019-08-01',horario:'09:32', cod: 3}
    ];


  }

  chamarGrupo(){
    this.navCtrl.push(GrupoPage);
  }
  grupoSelecionadoSet(g:any){
    this.grupoSelecionado= g.nome;
    this.grupoSelecionadoData= g.data;
    this.grupoSelecionadoHorario= g.horario;
  }
  grupoSelecionadoNenhum(){
    this.grupoSelecionado= 'vazio';
    this.grupoSelecionadoData= 'vazio';
    this.grupoSelecionadoHorario= 'vazio';
  }

}

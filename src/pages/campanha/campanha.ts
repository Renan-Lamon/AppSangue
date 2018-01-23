import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { criarCampanhaPage } from '../criarCampanha/criarCampanha';
import { CampanhaSelecionadaPage } from '../campanhaSelecionada/campanhaSelecionada';
import { IdentificadorPage } from '../identificador/identificador';
import { NoticiaPage } from '../noticia/noticia';
import { AgendamentoPage } from '../agendamento/agendamento';
import { HemocentroPage } from '../hemocentro/hemocentro';
import { InformacaoPage } from '../informacao/informacao';
import { HomePage } from '../home/home';

//Requisicao HTPP
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { RequisicoesHttpProvider } from '../../providers/requisicoes-http/requisicoes-http';

@Component({
  selector: 'page-campanha',
  templateUrl: 'campanha.html'
})
export class CampanhaPage {
  b: string;
  seila:any='cu';
  campanhas: Array<{}>;
  constructor(public navCtrl: NavController,
    public http: Http,
    private providerHttp: RequisicoesHttpProvider) {
    
      this.carregarCampanhas();
      
  }

  carregarCampanhas() {
    this.providerHttp.getCampanha()
      .map(res => res.json())
      .subscribe(data => {
        this.campanhas = data;
      });
  }

  chamarHome() {
    this.navCtrl.setRoot(HomePage);
  }
  chamarHemocentro() {
    this.navCtrl.setRoot(HemocentroPage);
  }
  chamarNoticia() {
    this.navCtrl.setRoot(NoticiaPage);
  }
  chamarAgendamento() {
    this.navCtrl.setRoot(AgendamentoPage);
  }
  chamarInformacoes() {
    this.navCtrl.setRoot(InformacaoPage);
  }
  chamarIdentificador() {
    this.navCtrl.setRoot(IdentificadorPage);
  }

  chamarCriarCampanha() {
    this.navCtrl.push(criarCampanhaPage);
  }

  chamarCampanhaSelecionada(campanhaEscolhida: any) {
    this.navCtrl.push(CampanhaSelecionadaPage, {'campanhas':campanhaEscolhida});
  }

}

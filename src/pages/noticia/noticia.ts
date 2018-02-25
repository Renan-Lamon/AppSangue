import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoticiaSelecionadaPage } from '../noticiaSelecionada/noticiaSelecionada';
import { HemocentroPage } from '../hemocentro/hemocentro';
import { CampanhaPage } from '../campanha/campanha';
import { IdentificadorPage } from '../identificador/identificador';
import { AgendamentoPage } from '../agendamento/agendamento';
import { InformacaoPage } from '../informacao/informacao';
import { HomePage } from '../home/home';

//Requisicao HTPP
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { RequisicoesHttpProvider } from '../../providers/requisicoes-http/requisicoes-http';
import { RegistrarDoacaoPage } from '../registrarDoacao/registrarDoacao';

@Component({
  selector: 'page-noticia',
  templateUrl: 'noticia.html',
  providers: [
    RequisicoesHttpProvider
  ]
})
export class NoticiaPage {
  public local: string = 'todos';
  public pessoas: Array<{}>;

  constructor(
    public navCtrl: NavController,
    public http: Http,
    private req: RequisicoesHttpProvider
  ) {
    this.TesteRequisicaoHTTP();

  }

  TesteRequisicaoHTTP() {
    this.req.getTeste3()
      .map(res => res.json())
      .subscribe(data => {
        this.pessoas = data;
      });
  }

  chamarRegistrarDoacao(){
    this.navCtrl.setRoot(RegistrarDoacaoPage);
  }
  chamarHome() {
    this.navCtrl.setRoot(HomePage);
  }
  chamarCampanha() {
    this.navCtrl.setRoot(CampanhaPage);
  }
  chamarHemocentro() {
    this.navCtrl.setRoot(HemocentroPage);
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

  chamarNoticiaSelecionada() {
    this.navCtrl.push(NoticiaSelecionadaPage);
  }

}

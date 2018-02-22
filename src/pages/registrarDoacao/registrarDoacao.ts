import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HemocentroSelecionadoPage } from '../hemocentroSelecionado/hemocentroSelecionado';
import { CampanhaPage } from '../campanha/campanha';
import {IdentificadorPage} from '../identificador/identificador';
import {NoticiaPage} from '../noticia/noticia';
import {AgendamentoPage} from '../agendamento/agendamento';
import { InformacaoPage } from '../informacao/informacao';
import { HomePage } from '../home/home';
import { DadosUsuarioProvider } from '../../providers/dados-usuario/dados-usuario';
import { HemocentroPage } from '../hemocentro/hemocentro';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-registrarDoacao',
  templateUrl: 'registrarDoacao.html',
})
export class RegistrarDoacaoPage {
  qrData = null;
  createdCode = null;
  scannedCode = null;
  searchQuery: string = '';
  items: string[];
  
  
  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {
    
  }

  createCode() {
    this.createdCode = this.qrData;
  }
 
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    }, (err) => {
        console.log('Error: ', err);
    });
  }

  chamarHome(){
    this.navCtrl.setRoot(HomePage);
  }
  chamarHemocentro(){
    this.navCtrl.setRoot(HemocentroPage);
  }
  chamarCampanha(){
    this.navCtrl.setRoot(CampanhaPage);
  }
  chamarNoticia(){
    this.navCtrl.setRoot(NoticiaPage);
  }
  chamarAgendamento(){
    this.navCtrl.setRoot(AgendamentoPage);
  }
  chamarInformacoes(){
    this.navCtrl.setRoot(InformacaoPage);
  }
  chamarIdentificador(){
    this.navCtrl.setRoot(IdentificadorPage);
  }

  chamarHemocentroSelecionado(itemSelecionado:any){
    this.navCtrl.push(HemocentroSelecionadoPage,{'hemocentroSelecionado': itemSelecionado});
  }
}

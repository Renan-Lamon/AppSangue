import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-monitoramento',
  templateUrl: 'monitoramento.html'
})
export class MonitoramentoPage {
  monitoramento = {};

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }


  cadastrar() {
    this.mensagemConfirmacao();
    console.log(this.monitoramento);
  }

  mensagemConfirmacao() {
    let alert = this.alertCtrl.create({
      title: 'Mensagem enviada!',
      subTitle: 'Agradecemos sua cooperação, analisaremos sua resposta, caso exista a necessidade entraremos em contato.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.setRoot(HomePage);
          }
        }

      ]
    });
    alert.present();
    return alert;
  }
}

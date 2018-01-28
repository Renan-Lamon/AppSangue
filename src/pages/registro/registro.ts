import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html'
})
export class RegistroPage {
  conta = {};

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }


  cadastrar() {
    this.mensagemConfirmacao();

  }

  mensagemConfirmacao() {
    let alert = this.alertCtrl.create({
      title: 'Conta criada!',
      subTitle: 'Sua conta está pronta para uso.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.pop();
          }
        }

      ]
    });
    alert.present();
    return alert;
  }
}

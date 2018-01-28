import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { RegistroPage } from '../registro/registro';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  conta = {email:'',senha:''};
  contaVerificacao = { emailV: 'email@hotmail.com', senhaV: '123' };

  constructor(public navCtrl: NavController, private alertCtrl: AlertController,
              private loading: LoadingController) {

  }
  
  logar() {
    if (this.conta.email == this.contaVerificacao.emailV 
        && this.conta.senha == this.contaVerificacao.senhaV) {
          this.presentLoading();
          this.chamarHome();
      
    } else {
      this.showAlert();
      console.log(this.conta);
    }
  }
  presentLoading() {
    let loader = this.loading.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }
  

  chamarHome() {
    this.navCtrl.setRoot(HomePage);
  }
  chamarRegistroPush(){
    this.navCtrl.push(RegistroPage);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Email ou Senha incorretos!',
      subTitle: 'Certifique-se de ter inserido os dados corretamente. Caso não tenha uma conta, clique em REGISTRAR-SE.',
      buttons: ['OK']
    });
    alert.present();
  }
}

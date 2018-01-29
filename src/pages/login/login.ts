import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { RegistroPage } from '../registro/registro';
import { LoadingController } from 'ionic-angular';
import { RequisicoesHttpProvider } from '../../providers/requisicoes-http/requisicoes-http';
import { MonitoramentoPage } from '../monitoramento/monitoramento';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    RequisicoesHttpProvider
  ]
})
export class LoginPage {
  conta = {email:'',senha:''};
  contaVerificacao = { emailV: 'email@hotmail.com', senhaV: '123' };

  constructor(public navCtrl: NavController, private alertCtrl: AlertController,
              private loading: LoadingController, private req: RequisicoesHttpProvider) {

  }
  
  logarFacebook(){
    this.req.logarFacebook()
    .then(()=>{
      this.navCtrl.setRoot(HomePage);
    });
  }

  logar() {
    if (this.conta.email == this.contaVerificacao.emailV 
        && this.conta.senha == this.contaVerificacao.senhaV) {
          this.loadingLogar();
          
      
    } else {
      this.showAlert();
      console.log(this.conta);
    }
  }
  loadingLogar() {
    let loader = this.loading.create({
      content: "Aguarde um momento...",
      duration: 1000
    });
    loader.present();
    setTimeout(() => {
      this.chamarHome();
    }, 1000);
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

  monitoramento(){
    this.navCtrl.push(MonitoramentoPage);
  }
}

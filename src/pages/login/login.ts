import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { RegistroPage } from '../registro/registro';
import { LoadingController } from 'ionic-angular';
import { RequisicoesHttpProvider } from '../../providers/requisicoes-http/requisicoes-http';
import { MonitoramentoPage } from '../monitoramento/monitoramento';
import { DadosUsuarioProvider } from '../../providers/dados-usuario/dados-usuario';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    RequisicoesHttpProvider
  ]
})
export class LoginPage {
  conta = { email: '', senha: '' };
  public codUsuario: string;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController,
    private loading: LoadingController, private req: RequisicoesHttpProvider,
    public providerCod:DadosUsuarioProvider) {
      
  }

  logarFacebook() {
    this.req.logarFacebook()
      .then(() => {
        this.navCtrl.setRoot(HomePage);
      });
  }
  logarFacebook2(){
    this.req.logarFacebook2();
  }

  logar() {
    if (this.conta.email == '' || this.conta.senha == '') {
      this.showAlertEmailOUSenhaVazio();
    } else {
      this.req.getLogin(this.conta.email, this.conta.senha)
        .map(res => res.json())
        .subscribe(data => {
          this.codUsuario = data;
          this.providerCod.setCod(data);
          
          if (this.codUsuario != '666') {
            this.loadingLogar();
          } else {
            this.showAlertUsuarioIncorreto();
          }

        });
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
    this.navCtrl.setRoot(HomePage, { 'codUsuario': this.codUsuario });
  }
  chamarRegistroPush() {
    this.navCtrl.push(RegistroPage);
  }

  showAlertUsuarioIncorreto() {
    let alert = this.alertCtrl.create({
      title: 'Email ou Senha incorretos!',
      subTitle: 'Certifique-se de ter inserido os dados corretamente. Caso não tenha uma conta, clique em <b>REGISTRAR-SE</b>.',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlertEmailOUSenhaVazio() {
    let alert = this.alertCtrl.create({
      title: 'Dados não preenchidos!',
      subTitle: 'Certifique-se de ter inserido todos os dados necessarios.',
      buttons: ['OK']
    });
    alert.present();
  }

  monitoramento() {
    this.navCtrl.push(MonitoramentoPage);
  }
}

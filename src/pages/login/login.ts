import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { RegistroPage } from '../registro/registro';
import { LoadingController } from 'ionic-angular';
import { RequisicoesHttpProvider } from '../../providers/requisicoes-http/requisicoes-http';
import { MonitoramentoPage } from '../monitoramento/monitoramento';
import { DadosUsuarioProvider } from '../../providers/dados-usuario/dados-usuario';
import { Facebook, FacebookLoginResponse} from '@ionic-native/facebook';
import {Badge} from '@ionic-native/badge';

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
  public dadosFB:any;
  public a:any;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController,
    private loading: LoadingController, private req: RequisicoesHttpProvider,
    public providerDados:DadosUsuarioProvider, private facebook:Facebook,
    public badge: Badge) {
      
  }

  testeBadge(){
    //let badgePermissao = this.badge.requestPermission();
    let badgeAux = this.badge.set(3);
    let badgeAux2 = this.badge.get();
    let alert = this.alertCtrl.create({
      title: 'Dados não preenchidos!'+ badgeAux2,
      subTitle: 'Certifique-se de ter inserido todos os dados necessarios.',
      buttons: ['OK']
    });
    alert.present();
  }
  loginFB() {
    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        this.dadosFB = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'], id: profile['id']}
        this.providerDados.setDadosFB(this.dadosFB);
        this.providerDados.setCod(1);
        this.loadingLogar();
      });
    });
    
  }
   
  logarSemConta(){
    this.navCtrl.setRoot(HomePage);
  }
  logar() {
    if (this.conta.email == '' || this.conta.senha == '') {
      this.showAlertEmailOUSenhaVazio();
    } else {
      this.req.getLogin(this.conta.email, this.conta.senha)
        .map(res => res.json())
        .subscribe(data => {
          this.codUsuario = data.cod;
          this.providerDados.setCod(data.cod);
          console.log("Resposta login:",data)
          if (this.codUsuario != undefined) {
            this.loadingLogar();
          } else {
            this.showAlertUsuarioIncorreto();
          }

        });
    }
  }

  logarReuniao(){
    if (this.conta.email == '' || this.conta.senha == '') {
      this.showAlertEmailOUSenhaVazio();
    } else if (this.conta.email == "teste@hotmail.com" && this.conta.senha == "123"){
      this.providerDados.setCod(1);
      this.loadingLogar();
    }else {
      this.showAlertUsuarioIncorreto();
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

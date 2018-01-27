import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html'
})
export class RegistroPage {
  conta = {email:'',senha:''};
  contaVerificacao = { emailV: 'email@hotmail.com', senhaV: '123' };
  constructor(public navCtrl: NavController) {

  }
  
  logar() {
    if (this.conta.email == this.contaVerificacao.emailV 
        && this.conta.senha == this.contaVerificacao.senhaV) {
      
    } else {
      
      console.log(this.conta);
    }
  }
}

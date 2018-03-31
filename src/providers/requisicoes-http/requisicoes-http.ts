import{Http, Response, URLSearchParams  } from "@angular/http";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";
/*
  Generated class for the RequisicoesHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequisicoesHttpProvider {
  
  urlCampanha:string="http://www.json-generator.com/api/json/get/ceXlnuglvm?indent=2";
  urlLogin: string="http://sangue.wancharle.com.br/usuario/login/";
  urlDadosUsuario:string="http://sangue.wancharle.com.br/usuario/dados/";
  urlDadosEstoque:string="http://sangue.wancharle.com.br/hemocentro/estoque/";
  urlHemocentros:string="http://sangue.wancharle.com.br/hemocentro/";
  
  constructor(public http: Http, public fb: Facebook) {
    console.log('Hello RequisicoesHttpProvider Provider');
  }
  
  getHemocentros(){
    return this.http.get(this.urlHemocentros);
  }
  getTeste3(){
    return this.http.get('http://www.json-generator.com/api/json/get/ckfMJvGVGq?indent=2');
  }

  getCampanha(){
    return this.http.get(this.urlCampanha)
  }

  getLogin(email:string, senha:string){
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('email', email);
    urlSearchParams.append('senha',senha );
     return this.http.post(this.urlLogin,urlSearchParams);
  }
  
  getDadosEstoque(codHemocentroFavorito:number){
    return this.http.get(this.urlDadosEstoque+codHemocentroFavorito+"/");
  }
  //REUNIAO
  getDadosEstoqueREUNIAO(){
    return this.http.get("http://www.json-generator.com/api/json/get/cpWAsrvmXm?indent=2");
  }

  getDadosUsuario(cod:number){
    return this.http.get(this.urlDadosUsuario+'?cod='+cod);
  }

  logarFacebook(){
    return this.fb.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
    .catch(e => console.log('Error logging into Facebook', e));
  }
  logarFacebook2(){
    return this.fb.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
    .catch(e => console.log('Error logging into Facebook', e));
  }
  
}

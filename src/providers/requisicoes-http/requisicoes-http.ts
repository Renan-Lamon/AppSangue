import{Http, Response} from "@angular/http";
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
  urlCampanha:string="http://www.json-generator.com/api/json/get/bUPkvwTMPm?indent=2";
  urlLogin: string="http://localhost:8081/WSappSangue/webresources/login";

  constructor(public http: Http, public fb: Facebook) {
    console.log('Hello RequisicoesHttpProvider Provider');
  }
  
  getTeste3(){
    return this.http.get('http://www.json-generator.com/api/json/get/ckfMJvGVGq?indent=2');
  }
  getCampanha(){
    return this.http.get(this.urlCampanha)
  }
  getLogin(){
    return this.http.get(this.urlLogin);
  }

  logarFacebook(){
    return this.fb.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
    .catch(e => console.log('Error logging into Facebook', e));
  }
  
}

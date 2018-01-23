import{Http, Response} from "@angular/http";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the RequisicoesHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequisicoesHttpProvider {
  
  constructor(public http: Http) {
    console.log('Hello RequisicoesHttpProvider Provider');
  }
  
  getTeste3(){
    return this.http.get('http://www.json-generator.com/api/json/get/ckfMJvGVGq?indent=2');
  }
}

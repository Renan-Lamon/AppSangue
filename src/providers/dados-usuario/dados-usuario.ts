
import { Injectable } from '@angular/core';

/*
  Generated class for the RequisicoesHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DadosUsuarioProvider {
  public codUsuario:number;
  
  constructor() {
    console.log('Hello RequisicoesHttpProvider Provider');
  }
  
  public setCod(cod:number){
    this.codUsuario=cod;
  }
  public getCod(){
    return this.codUsuario;
  }

  
}

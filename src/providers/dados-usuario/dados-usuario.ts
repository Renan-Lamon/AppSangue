
import { Injectable } from '@angular/core';

/*
  Generated class for the RequisicoesHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DadosUsuarioProvider {
  public codUsuario:number;
  private dadosFB:any;
  private badge:number = 0;

  constructor() {
    console.log('Hello RequisicoesHttpProvider Provider');
  }
  
  public setDadosFB(dados:any){
    this.dadosFB=dados;
  }
  public getDadosFB(){
    return this.dadosFB;
  }

  public setCod(cod:number){
    this.codUsuario=cod;
  }
  public getCod(){
    return this.codUsuario;
  }
  public setBadge(badge: number){
    this.badge = badge;
  }
  public getBadge(){
    return this.badge;
  }
  
}

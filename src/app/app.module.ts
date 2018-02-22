import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HemocentroPage } from '../pages/hemocentro/hemocentro';
import { NoticiaPage } from '../pages/noticia/noticia';
import { InformacaoPage } from '../pages/informacao/informacao';
import { IdentificadorPage } from '../pages/identificador/identificador';
import { AgendamentoPage } from '../pages/agendamento/agendamento';
import { CampanhaPage } from '../pages/campanha/campanha';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DuvidaPage } from '../pages/duvida/duvida';
import { criarCampanhaPage } from '../pages/criarCampanha/criarCampanha';
import { GrupoPage } from '../pages/grupo/grupo';
import { CampanhaSelecionadaPage } from '../pages/campanhaSelecionada/campanhaSelecionada';
import { HemocentroSelecionadoPage } from '../pages/hemocentroSelecionado/hemocentroSelecionado';
import { NoticiaSelecionadaPage } from '../pages/noticiaSelecionada/noticiaSelecionada';
import { RankPage } from '../pages/rank/rank';
import { RequisicoesHttpProvider } from '../providers/requisicoes-http/requisicoes-http';
import { PerfilPage } from '../pages/perfil/perfil';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';

import{Facebook} from '@ionic-native/facebook';
import { MonitoramentoPage } from '../pages/monitoramento/monitoramento';
import { DadosUsuarioProvider } from '../providers/dados-usuario/dados-usuario';
import { Badge } from '@ionic-native/badge';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { RegistrarDoacaoPage } from '../pages/registrarDoacao/registrarDoacao';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HemocentroPage,
    AgendamentoPage,
    NoticiaPage,
    InformacaoPage,
    IdentificadorPage,
    CampanhaPage,
    DuvidaPage,
    criarCampanhaPage,
    GrupoPage,
    CampanhaSelecionadaPage,
    HemocentroSelecionadoPage,
    NoticiaSelecionadaPage,
    RankPage,
    PerfilPage,
    LoginPage,
    RegistroPage,
    MonitoramentoPage,
    RegistrarDoacaoPage
    
      
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    NgxQRCodeModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HemocentroPage, 
    AgendamentoPage, 
    NoticiaPage,
    InformacaoPage,
    IdentificadorPage,
    CampanhaPage,
    DuvidaPage,
    criarCampanhaPage,
    GrupoPage,
    CampanhaSelecionadaPage,
    HemocentroSelecionadoPage,
    NoticiaSelecionadaPage,
    RankPage,
    PerfilPage,
    LoginPage,
    RegistroPage,
    MonitoramentoPage,
    RegistrarDoacaoPage
 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RequisicoesHttpProvider,
    Facebook,
    Badge,
    DadosUsuarioProvider,
    BarcodeScanner
  ]
})
export class AppModule {}

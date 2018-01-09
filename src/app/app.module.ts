import { BrowserModule } from '@angular/platform-browser';
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
    HemocentroSelecionadoPage
      
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    HemocentroSelecionadoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

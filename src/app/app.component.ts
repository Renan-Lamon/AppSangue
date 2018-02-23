import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HemocentroPage } from '../pages/hemocentro/hemocentro';
import { NoticiaPage } from '../pages/noticia/noticia';
import { InformacaoPage } from '../pages/informacao/informacao';
import { IdentificadorPage } from '../pages/identificador/identificador';
import { AgendamentoPage } from '../pages/agendamento/agendamento';
import { CampanhaPage } from '../pages/campanha/campanha';
import { LoginPage } from '../pages/login/login';
import { RegistrarDoacaoPage } from '../pages/registrarDoacao/registrarDoacao';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = RegistrarDoacaoPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Início', component: HomePage },
      { title: 'Hemocentros', component: HemocentroPage },
      { title: 'Campanhas', component: CampanhaPage },
      { title: 'Notícias', component: NoticiaPage },
      { title: 'Agendamento de Doação', component: AgendamentoPage },
      { title: 'Identificador Digital', component: IdentificadorPage },
      { title: 'Informações Gerais', component: InformacaoPage },
      { title: 'Registrar Doação', component: RegistrarDoacaoPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

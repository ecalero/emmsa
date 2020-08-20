import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Mapa',
      url: '/home/mapa',
      icon: 'map'
    },
    {
      title: 'Eventos',
      url: '/home/eventos',
      icon: 'notifications'
    },
    {
      title: 'Agenda',
      url: '/home/revistas',
      icon: 'filing'
    },
    {
      title: 'Noticias',
      url: '/home/noticias',
      icon: 'paper'
    },
    {
      title: 'Lugares turisticos',
      url: '/principal',
      icon: 'paper-plane'
    },
    {
      title: 'Salir',
      url: '/salir',
      icon: 'exit'
    }
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

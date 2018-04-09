import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RadioOnLinePage } from '../pages/radio-on-line/radio-on-line';
import { NuestraWebPage } from '../pages/nuestra-web/nuestra-web';
import { ContactoPage } from '../pages/contacto/contacto';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = RadioOnLinePage;

  pages: Array<{title: string, component: any, icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Radio On Line', component: RadioOnLinePage, icon:'topCantabria-radio' },
      { title: 'Nuestra Web', component: NuestraWebPage, icon:'topCantabria-web' },
      { title: 'Contacto', component: ContactoPage, icon:'topCantabria-contacto' }
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

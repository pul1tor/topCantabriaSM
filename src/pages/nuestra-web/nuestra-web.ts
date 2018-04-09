import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


/**
 * Generated class for the NuestraWebPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuestra-web',
  templateUrl: 'nuestra-web.html',
})
export class NuestraWebPage implements OnInit{

  constructor(private inAppBrowser:InAppBrowser, public navCtrl: NavController, public navParams: NavParams, platform: Platform) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuestraWebPage');

  }

  /**
   * Mediante este metodo lo que hago es abrir la pagina web de la empresa, el '_self'
   * es para que use el propio telefono para mostrar la pagina.
   */
  ngOnInit(){
    const browser = this.inAppBrowser.create('http://www.topcantabriafm.com/', '_system',{location:'yes'});
    browser.close();
    //_self para que se abra en la app _system para que se abra en el dispositivo.
  }

}

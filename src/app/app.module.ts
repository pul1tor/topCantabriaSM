import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { RadioOnLinePage } from '../pages/radio-on-line/radio-on-line';
import { NuestraWebPage } from '../pages/nuestra-web/nuestra-web';
import { ContactoPage } from '../pages/contacto/contacto';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { EmailComposer } from '@ionic-native/email-composer';
import { CallNumber } from '@ionic-native/call-number';

import { SocialSharing } from '@ionic-native/social-sharing';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    RadioOnLinePage,
    NuestraWebPage,
    ContactoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RadioOnLinePage,
    NuestraWebPage,
    ContactoPage
  ],
  providers: [
    StatusBar,
    InAppBrowser,
    EmailComposer,
    SocialSharing,
    CallNumber,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}

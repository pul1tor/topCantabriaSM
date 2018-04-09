import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuestraWebPage } from './nuestra-web';

@NgModule({
  declarations: [
    NuestraWebPage,
  ],
  imports: [
    IonicPageModule.forChild(NuestraWebPage),
  ],
})
export class NuestraWebPageModule {}

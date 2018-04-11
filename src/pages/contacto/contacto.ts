import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { CallNumber } from '@ionic-native/call-number';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {
  vError: string;
  //imagen:string = '../assets/imgs/topcantabriaCompartir.jpg';
  //https://imgur.com/gjDearO

  constructor(private socialSharing: SocialSharing, private vLlamada: CallNumber, private emailComposer: EmailComposer, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.emailComposer = emailComposer;
  }

  /**
   * 
   * @param message Es el mensaje que creo yo a mano dependiendo del tipo de error que ocurra 
   * Este método lo que hace es presentar un alertBox cuando un error aparezca.
   */
  presentConfirm(message: string) {
    let alert = this.alertCtrl.create({
      title: 'Error!',
      message,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            console.log('cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }

  /**
   * Mediante este metodo lo que hago es comprobar las conexiones con los 
   * respectivos mecanismos de "sharing" y compartirlo.
   */
  compartir() {
    this.socialSharing.share('Hola!, me encantaría compartir esta radio contigo','topCantabriaFM!',null, 'http://www.topcantabriafm.com/').then(() => {
      
    }).catch((e) => {
      this.presentConfirm('Se ha producido este error: ' + e);
    })
  }

  /**
   * Mediante esta alerta lo que hago es que cuando pulse el boton del Email aparezca
   * esta ventana y pida el email del usuario, el asunto del email y el detalle del email
   * y tras recibir ese contenido si pulsa enviar envie el correo y si lo cancela sale
   * de la pagina
   */
  presentAlertEmail() {
    let alert = this.alertCtrl.create({
      title: 'Envienos un correo',
      inputs: [
        {
          name: 'email',
          placeholder: 'ejemplo@ejemplo.ejemplo'
        },
        {
          name: 'asunto',
          placeholder: 'Asunto del email'
        },
        {
          name: 'detalle',
          placeholder: 'Escriba su comentario'
        }
      ], buttons: [{
        text: 'Enviar',
        handler: data => {
          //Aqui es donde compruebo que se han rellenado los inputs y envio el email
          this.send(data.email, data.asunto, data.detalle);

        }
      },
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: data => {
          console.log('cancelar pulsado');
          //Se cierra y ya está terminado.

        }
      }]
    })
    alert.present();

  }

  /**
   * 
   * @param vEmail es el email del usuario
   * @param vAsunto es el asunto que va en el email
   * @param vDetalle es el detalle que va en el email
   * Mediante este metodo y los 3 parametros que le paso lo que hago es enviar el 
   * correo a la cuenta donde esta el "to"
   */
  send(vEmail, vAsunto, vDetalle) {
    if (vEmail == "") {
      console.error("Error no escribio su Email");

    } else if (vAsunto == "") {
      console.error("Error no escribio el asunto");

    } else if (vDetalle == "") {
      console.error("Error no escribio el detalle");

    } else {
      let email = {
        to: 'javipulitor@hotmail.com',
        //a: info@topcantabriafm.com
        cc: vEmail,
        subject: vAsunto,
        body: vDetalle,
        isHtml: true

      };
      this.emailComposer.open(email);

    }

  }

  /**
   * Mediante este metodo lo que hago es que cuando pulse el boton del telefono
   * abra el telefono del movil y coja el numero de la empresa para hacer una llamada
   */
  llamar(numeroTlf: string) {
    this.vLlamada.callNumber(numeroTlf, true)
      .then(() => console.log('Launched dialer'))
      .catch(() => console.error('Error launching dialer'));

  }

  /**
   * Llamo al metodo de presentAlertEmail para enviar el email
   */
  enviarEmail() {
    this.presentAlertEmail();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }

}

import { Component, OnInit } from '@angular/core';

import { PrecioService } from '../../servicio/precio.service';
import {
  ModalController,
  //NavParams,
  ToastController,
  Platform,
  LoadingController
} from '@ionic/angular';
@Component({
  selector: 'app-ahorro',
  templateUrl: './ahorro.page.html',
  styleUrls: ['./ahorro.page.scss'],
})
export class AhorroPage implements OnInit {

  precios: Array<Object> = [];
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(
    public precioService: PrecioService,
    private modalController: ModalController,
  //private navParams: NavParams,
    public loadingCtrl: LoadingController,
    private platform: Platform,
    public toastCtrl: ToastController) { }

    async  ngOnInit() {
      await  this.getPreciosAhorroApp();
      }

      async getPreciosAhorroApp() {

        console.log("iniciando getSlider");
        const loading = await this.loadingCtrl.create({
          message: 'Espere por favor ...',
        });
        await loading.present();
        let resp = await this.precioService.getPreciosAhorro()
          .subscribe((res) => {
            console.log("siguiendo sss");
            this.precios=res[0]["data"];
            console.log(this.precios);
            let centros=this.precios;
            loading.dismiss();
              return centros;
          }, err => {
            console.log(err);
            loading.dismiss();
          }
        );
      }

}

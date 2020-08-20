import { Component, OnInit } from '@angular/core';

import { NoticiaService } from '../../servicio/noticia.service';
import {
  ModalController,
  //NavParams,
  ToastController,
  Platform,
  LoadingController
} from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  slider: Array<Object> = [];
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };


  constructor(
    public noticiaService: NoticiaService,
    private modalController: ModalController,
  //private navParams: NavParams,
    public loadingCtrl: LoadingController,
    private platform: Platform,
    public toastCtrl: ToastController) { }

    async  ngOnInit() {
      await  this.getSlider();
      }

      async getSlider() {

        console.log("iniciando getSlider");
        const loading = await this.loadingCtrl.create({
          message: 'Espere por favor ...',
        });
        await loading.present();
        let resp = await this.noticiaService.getSlider()
          .subscribe((res) => {
            console.log("siguiendo sss");
            this.slider=res[0]["data"];
            console.log(this.slider);
            let centros=this.slider;
            loading.dismiss();
              return centros;
          }, err => {
            console.log(err);
            loading.dismiss();
          }
        );
      }



}

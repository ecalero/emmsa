import { ModalPage } from './modal/modal.page';
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
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {

  noticias: Array<Object> = [];
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  dataReturned:any;

  constructor(
    public noticiaService: NoticiaService,
    private modalController: ModalController,
  //private navParams: NavParams,
    public loadingCtrl: LoadingController,
    private platform: Platform,
    public toastCtrl: ToastController) { }

    async  ngOnInit() {
      await  this.getNoticias();
      }

      async getNoticias() {

        console.log("iniciando getSlider");
        const loading = await this.loadingCtrl.create({
          message: 'Espere por favor ...',
        });
        await loading.present();
        let resp = await this.noticiaService.getNoticias()
          .subscribe((res) => {
            console.log("siguiendo sss");
            this.noticias=res[0]["data"];
            console.log(this.noticias);
            let centros=this.noticias;
            loading.dismiss();
              return centros;
          }, err => {
            console.log(err);
            loading.dismiss();
          }
        );
      }

      async openModal(noticia) {
        const modal = await this.modalController.create({
          component: ModalPage,
          componentProps: noticia
        });
    
        modal.onDidDismiss().then((dataReturned) => {
          if (dataReturned !== null) {
            this.dataReturned = dataReturned.data;
          }
        });
        return await modal.present();
      }



}
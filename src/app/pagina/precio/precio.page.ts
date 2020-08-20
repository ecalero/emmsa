import { Component, OnInit } from '@angular/core';

import { PrecioService } from '../../servicio/precio.service';

import {
  ModalController,
  //NavParams,
  ToastController,
  Platform,
  LoadingController
} from '@ionic/angular';

import { IonicSelectableComponent } from 'ionic-selectable';


class Producto {
  public idproducto: number;
  public nomproducto: string;
  public pabellon: string;
  public precioproducto: string;
  public urlimagproducto: string;
  public volproducto: string;
  public fecregproducto: Date;
  public estadotemporada: number;
  public estadosemanaahorro: number;
  public estadosproducto: number;
  public descproducto: string;
}


@Component({
  selector: 'app-precio',
  templateUrl: './precio.page.html',
  styleUrls: ['./precio.page.scss'],
})
export class PrecioPage implements OnInit {

  precios: Array<Object> = [];
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  productos: Producto[];
  producto: Producto;

  constructor(
    public precioService: PrecioService,
    private modalController: ModalController,
  //private navParams: NavParams,
    public loadingCtrl: LoadingController,
    private platform: Platform,
    public toastCtrl: ToastController) { 
    }

    portChange(event: {
      component: IonicSelectableComponent,
      value: any
    }) {
      console.log('port:', event.value);
      let idCatalogoProducto = -1;
      if(event.value == null){
        idCatalogoProducto = -1;
      }else{
        idCatalogoProducto = event.value.idCatalogoProducto;
      }
      this.getPreciosApp(idCatalogoProducto);
    }

    async  ngOnInit() {
      await   this.getCatalogoProductosApp();
      await   this.getPreciosApp(-1);
      }

      async getPreciosApp(idCatalogoProducto) {

        console.log("iniciando getSlider");
        const loading = await this.loadingCtrl.create({
          message: 'Espere por favor ...',
        });
        await loading.present();
        let resp = await this.precioService.getPrecios(idCatalogoProducto)
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

      async getCatalogoProductosApp() {

        console.log("iniciando getSlider");
        const loading = await this.loadingCtrl.create({
          message: 'Espere por favor ...',
        });
        await loading.present();
        let resp = await this.precioService.getCatalogoProductosApp()
          .subscribe((res) => {
            this.productos = res[0]["data"];

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

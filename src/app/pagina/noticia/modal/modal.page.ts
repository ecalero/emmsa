import { Component, OnInit,ViewChild } from '@angular/core';
import {
  ModalController,
  NavParams,
  ToastController,
  Platform,
  LoadingController,
  IonContent
} from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  noticia: any;

  @ViewChild(IonContent) content: IonContent;
  constructor(
    private modalController: ModalController,
    private navParams: NavParams
    ) { }

  ngOnInit() {
    this.noticia = this.navParams.data;
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}

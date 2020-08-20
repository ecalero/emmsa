import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemporadaPageRoutingModule } from './temporada-routing.module';

import { TemporadaPage } from './temporada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemporadaPageRoutingModule
  ],
  declarations: [TemporadaPage]
})
export class TemporadaPageModule {}

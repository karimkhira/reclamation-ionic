import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReclamCreatePageRoutingModule } from './reclam-create-routing.module';

import { ReclamCreatePage } from './reclam-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReclamCreatePageRoutingModule
  ],
  declarations: [ReclamCreatePage]
})
export class ReclamCreatePageModule {}

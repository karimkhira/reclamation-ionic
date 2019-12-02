import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReclamEditPageRoutingModule } from './reclam-edit-routing.module';

import { ReclamEditPage } from './reclam-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReclamEditPageRoutingModule
  ],
  declarations: [ReclamEditPage]
})
export class ReclamEditPageModule {}

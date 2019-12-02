import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReclamListPageRoutingModule } from './reclam-list-routing.module';

import { ReclamListPage } from './reclam-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReclamListPageRoutingModule
  ],
  declarations: [ReclamListPage]
})
export class ReclamListPageModule {}

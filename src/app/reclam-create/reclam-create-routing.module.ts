import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReclamCreatePage } from './reclam-create.page';

const routes: Routes = [
  {
    path: '',
    component: ReclamCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReclamCreatePageRoutingModule {}

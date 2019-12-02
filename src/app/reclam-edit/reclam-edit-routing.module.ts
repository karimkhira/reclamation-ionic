import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReclamEditPage } from './reclam-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ReclamEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReclamEditPageRoutingModule {}

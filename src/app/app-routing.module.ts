import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'create', loadChildren: () => import('./reclam-create/reclam-create.module').then( m => m.ReclamCreatePageModule)},
  { path: 'edit', loadChildren: () => import('./reclam-edit/reclam-edit.module').then( m => m.ReclamEditPageModule)},
  { path: 'list', loadChildren: () => import('./reclam-list/reclam-list.module').then( m => m.ReclamListPageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

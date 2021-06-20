import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'download',
    loadChildren: () => import('./download/download.module').then(m => m.DownloadModule),
  },
  {
    path: '',
    redirectTo: '/download',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: () => import('./404/404.module').then(m => m.P404Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

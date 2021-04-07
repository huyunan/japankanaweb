import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P404Component } from './404/404.component';
import { DownloadComponent } from './download/download.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'download',
    component: DownloadComponent,
  },
  {
    path: '',
    redirectTo: '/download',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: P404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

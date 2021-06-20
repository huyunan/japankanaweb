import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DownloadComponent } from './download.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DownloadComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DownloadComponent,
      }
    ])
  ],
  providers: []
})
export class DownloadModule { }

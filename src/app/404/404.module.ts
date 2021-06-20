import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { P404Component } from './404.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    P404Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: P404Component,
      }
    ])
  ],
  providers: []
})
export class P404Module { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    DetailComponent,

  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
  ]
})
export class DetailsModule { }

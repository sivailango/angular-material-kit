import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { OeeRoutingModule } from './oee.routing.module';
import { OeeComponent } from './oee.component';

import { MaterialModule } from './../material//material.module';

@NgModule({
  declarations: [
    OeeComponent
  ],
  imports: [
    CommonModule,
    OeeRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    OeeComponent
  ]
})
export class OeeModule { }

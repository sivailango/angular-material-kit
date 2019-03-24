import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { DtRoutingModule } from './dt.routing.module';
import { DtComponent } from './dt.component';

import { MaterialModule } from './../material//material.module';

@NgModule({
  declarations: [
    DtComponent
  ],
  imports: [
    CommonModule,
    DtRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    DtComponent
  ]
})
export class DtModule { }

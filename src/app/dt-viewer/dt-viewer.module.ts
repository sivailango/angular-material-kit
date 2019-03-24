import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { FlexLayoutModule } from '@angular/flex-layout';

import { DtRoutingModule } from './dt-viewer.routing.module';
import { DtViewerComponent } from './dt-viewer.component';

import { MaterialModule } from './../material//material.module';

@NgModule({
  declarations: [DtViewerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DtRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class DtViewerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedInComponent } from './logged-in.component';

import { LoggedInRoutingModule } from './logged-in.routing.module';

import { LoggedInService } from './logged-in.service';

import { MaterialModule } from './../material//material.module';

@NgModule({
  declarations: [
    LoggedInComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LoggedInRoutingModule
  ],
  providers: [
    LoggedInService
  ],
  exports: [
  ]
})
export class LoggedInModule { }

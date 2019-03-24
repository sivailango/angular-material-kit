import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OeeComponent } from './oee.component';

const routes: Routes = [
  { path: '', component: OeeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OeeRoutingModule { }

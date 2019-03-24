import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DtViewerComponent } from './dt-viewer.component';

const routes: Routes = [
  { path: '', component: DtViewerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DtRoutingModule { }

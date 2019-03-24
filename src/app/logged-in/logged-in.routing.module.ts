import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggedInComponent } from './logged-in.component';

const routes: Routes = [
  {
    path: '',
    component: LoggedInComponent,
    children: [
      {
        path: 'oee',
        loadChildren: './../oee/oee.module#OeeModule'
      },
      {
        path: 'dt',
        loadChildren: './../dt/dt.module#DtModule'
      },
      {
        path: 'dt-viewer',
        loadChildren: './../dt-viewer/dt-viewer.module#DtViewerModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedInRoutingModule { }

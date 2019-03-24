import { Component, OnInit } from '@angular/core';

import { SideMenu } from './models/sidemenu.model';
import { LoggedInService } from './logged-in.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent implements OnInit {

  sideMenus: SideMenu[];

  constructor(private loggedInService: LoggedInService ) { }

  ngOnInit() {
    this.sideMenus = this.loggedInService.getSideMenus();
  }

}

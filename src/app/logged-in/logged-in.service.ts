import { Injectable } from '@angular/core';

import { SideMenu } from './models/sidemenu.model';
import { SIDEMENUS } from './data/sidemenu.data';

@Injectable()
export class LoggedInService {

  constructor() {

  }

  getSideMenus(): SideMenu[] {
    return SIDEMENUS;
  }

}

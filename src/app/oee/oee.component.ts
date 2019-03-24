import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

export interface OeeElement {
  systemId: string;
  dt: number;
  pp: number;
  qf: number;
  oee: number;
}

const ELEMENT_DATA: OeeElement[] = [
  {systemId: 'AU008', dt: 80, pp: 65, qf: 74, oee: 76},
  {systemId: 'AU009', dt: 80, pp: 65, qf: 74, oee: 76},
  {systemId: 'AU010', dt: 80, pp: 65, qf: 74, oee: 76},
  {systemId: 'MA008', dt: 80, pp: 65, qf: 74, oee: 76},
  {systemId: 'MA009', dt: 80, pp: 65, qf: 74, oee: 76},
  {systemId: 'JM013', dt: 80, pp: 65, qf: 74, oee: 76},
  {systemId: 'JM015', dt: 80, pp: 65, qf: 74, oee: 76},
  {systemId: 'JM028', dt: 80, pp: 65, qf: 74, oee: 76}
];

@Component({
  selector: 'app-oee',
  templateUrl: './oee.component.html',
  styleUrls: ['./oee.component.scss']
})
export class OeeComponent implements OnInit {

  displayedColumns: string[] = ['systemId', 'dt', 'pp', 'qf', 'oee'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}

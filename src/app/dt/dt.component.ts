import { Component, OnInit } from '@angular/core';

export interface DtElement {
  systemId: string;
  progress: number;
}

const ELEMENT_DATA: DtElement[] = [
  {systemId: 'AU008', progress: 80 },
  {systemId: 'AU009', progress: 50 },
  {systemId: 'AU010', progress: 62 },
  {systemId: 'MA008', progress: 24 },
  {systemId: 'MA009', progress: 71 },
  {systemId: 'JM013', progress: 18 },
  {systemId: 'JM015', progress: 94 },
  {systemId: 'JM028', progress: 42 }
];

@Component({
  selector: 'app-dt',
  templateUrl: './dt.component.html',
  styleUrls: ['./dt.component.scss']
})
export class DtComponent implements OnInit {

  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dt-viewer',
  templateUrl: './dt-viewer.component.html',
  styleUrls: ['./dt-viewer.component.scss']
})
export class DtViewerComponent implements OnInit {

  dtForm = new FormGroup({
    date: new FormControl(''),
    shift: new FormControl(''),
    machine: new FormControl(''),
    part: new FormControl(''),
    planned: new FormControl(''),
    startTime: new FormControl(''),
    endTime: new FormControl(''),
    reason: new FormControl(''),
    description: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.dtForm)
  }

}

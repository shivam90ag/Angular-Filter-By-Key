import { Component, OnInit } from '@angular/core';
import {records} from './records'

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  records:Array<any>=records;
  constructor() { }

  ngOnInit() {
  }

}

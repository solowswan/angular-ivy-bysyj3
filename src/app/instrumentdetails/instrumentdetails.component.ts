import { OnInit, ChangeDetectorRef } from '@angular/core';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {AppComponent} from '../app.component';
import { MessageService } from '../message.service';
import {animate, state, style, transition, trigger} from '@angular/animations';


export interface Instrument {
  tag: string;
  value: string;
  expanded: boolean;
  tag1: string;
  value1: string;
  tag2: string;
  value2: number
  tag3: string;
  value3: string
  tag4: string;
  value4: string
  tag5: string;
  value5: number;
  tag6: string;
  value6: number;
  tag7: string;
  value7: number;    
}

const ELEMENT_DATA: Instrument[] = [
  {
    tag: "Instrument Core",
    value: '30 JUN 2022',
    expanded: false,
    tag1: "ISIN",
    value1: "DE0007100000",
    tag2: "IDIRINSTRUMENT",
    value2: 213123,
    tag3: "Issue date",
    value3: "01011900",
    tag4: "Maturity date",
    value4: "01012020",
    tag5: "Amount outstanding",
    value5: 12312441,
    tag6: "",
    value6: 0,
    tag7: "",
    value7: 0

  },
  {
    tag: "Instrument Income",
    value: '',
    expanded: false,
    tag1: "Coupong Type",
    value1: "FIX",
    tag2: "Coupon Rate",
    value2: 3.5,
    tag3: "Coupon Frequency",
    value3: "AN",
    tag4: "Coupon Underlying",
    value4: "EURIBOR 3MO",
    tag5: "Coupon Spread",
    value5: 1.2,
    tag6: "",
    value6: 0,
    tag7: "",
    value7: 0
  }
]

@Component({
  selector: 'app-instrumentdetails',
  templateUrl: './instrumentdetails.component.html',
  styleUrls: ['./instrumentdetails.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class InstrumentdetailsComponent {

  dataSource = ELEMENT_DATA;

  columnsToDisplay = ['tag', 'value'];
  toggleRow(element: { expanded: boolean; }) {
    // Uncommnet to open only single row at once
    // ELEMENT_DATA.forEach(row => {
    //   row.expanded = false;
    // })
    element.expanded = !element.expanded
  }

  manageAllRows(flag: boolean) {
    ELEMENT_DATA.forEach(row => { row.expanded = flag; })
  }
}
import { OnInit, ChangeDetectorRef } from '@angular/core';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {AppComponent} from '../app.component';
import { MessageService } from '../message.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface Instrument {
  IDIRINSTRUMENT: number;
  ISIN: string;  
  SHORTNAME: string;
  IDISSUEDATE: string;
  IDMATURITYDATE: string;
  AMOUNTOUTSTANDING: string;
  COUPONTYPE: number;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  expanded: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    "expanded": false
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    "expanded": false
  },
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

  columnsToDisplay = ['id', 'name', 'username', 'email', 'address'];
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
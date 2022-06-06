import { OnInit, ChangeDetectorRef } from '@angular/core';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {AppComponent} from '../app.component';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';

export interface BatchElement {
  idcpbatch: number;
  process_id: number;  
  filename: string;
  startdate: string;
}

const BATCH_DATA: BatchElement[] = [
  {idcpbatch: 1, process_id:111, filename: 'SHSSCC.csv', startdate:"2012-03-19T07:22Z"},
  {idcpbatch: 1, process_id:111,filename: 'SHSSCC.xml', startdate:"2012-03-19T07:22Z"},
  {idcpbatch: 1, process_id:111,filename: 'DQMetric.json', startdate:"2012-03-19T07:22Z"},
  {idcpbatch: 2, process_id:111, filename: 'SHSSCC.csv', startdate:"2012-03-19T07:22Z"},
  {idcpbatch: 2, process_id:111,filename: 'SHSSCC.xml', startdate:"2012-03-19T07:22Z"},
  {idcpbatch: 2, process_id:111,filename: 'DQMetric.json', startdate:"2012-03-19T07:22Z"},
  {idcpbatch: 3, process_id:111, filename: 'SHSSCC.csv', startdate:"2012-03-19T07:22Z"},
  {idcpbatch: 3, process_id:111,filename: 'SHSSCC.xml', startdate:"2012-03-19T07:22Z"},
  {idcpbatch: 3, process_id:111,filename: 'DQMetric.json', startdate:"2012-03-19T07:22Z"}
];

@Component({
  selector: 'app-capturebatchbrowserdetails',
  templateUrl: './capturebatchbrowserdetails.component.html',
  styleUrls: ['./capturebatchbrowserdetails.component.css']
})
export class CapturebatchbrowserdetailsComponent implements OnInit {
  displayedColumns: string[] = ['idcpbatch', 'process_id', 'filename','startdate'];

  constructor(public messageService: MessageService, 
    private changeDetectorRefs: ChangeDetectorRef, 
    private router: Router) {
  }

  dataSource = new MatTableDataSource(BATCH_DATA);

  ngOnInit() {
  }

}
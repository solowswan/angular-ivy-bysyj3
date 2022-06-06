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
  source: string;
  state: string;
  startdate: string;
  records: number;
}

const BATCH_DATA: BatchElement[] = [
  {idcpbatch: 1, process_id:111, filename: '20220601-1231241-BBK-SHSS-1123124-20220531', source:"BBK", state:"Capture completed",startdate:"2012-03-19T07:22Z",records:100},
  {idcpbatch: 2, process_id:112,filename: '20220601-1231241-BBK-SHSS-1123124-20220531', source:"BBK",state:"Capture completed",startdate:"2012-03-19T07:22Z",records:100},
  {idcpbatch: 3, process_id:113,filename: '20220601-1231241-BBK-SHSS-1123124-20220531', source:"BBK",state:"Capture completed",startdate:"2012-03-19T07:22Z",records:100},
  {idcpbatch: 4, process_id:114,filename: '20220601-1231241-BBK-SHSS-1123124-20220531', source:"BBK",state:"Capture completed",startdate:"2012-03-19T07:22Z",records:100},
  {idcpbatch: 5, process_id:115,filename: '20220601-1231241-BBK-SHSS-1123124-20220531', source:"BBK",state:"Capture completed",startdate:"2012-03-19T07:22Z",records:100},
  {idcpbatch: 6, process_id:116,filename: '20220601-1231241-BBK-SHSS-1123124-20220531', source:"BBK",state:"Capture completed",startdate:"2012-03-19T07:22Z",records:100},
  {idcpbatch: 7, process_id:117,filename: '20220601-1231241-BBK-SHSS-1123124-20220531',source:"BBK",state:"Capture completed",startdate:"2012-03-19T07:22Z",records:100},
  {idcpbatch: 8, process_id:118,filename: '20220601-1231241-BBK-SHSS-1123124-20220531', source:"BBK",state:"Capture completed",startdate:"2012-03-19T07:22Z",records:100},
  {idcpbatch: 9, process_id:119,filename: '20220601-1231241-BBK-SHSS-1123124-20220531', source:"BBK",state:"Capture completed",startdate:"2012-03-19T07:22Z",records:100},
  {idcpbatch: 10, process_id:120,filename: '20220601-1231241-BBK-SHSS-1123124-20220531', source:"BBK",state:"Capture completed",startdate:"2012-03-19T07:22Z",records:100},
];

const BATCH_DATA_ISS: BatchElement[] = [
  {idcpbatch: 1, process_id:111, filename: '20220601-1231241-WMD-DBT-1123124-20220531', source:"WMD", state:"Capture completed",startdate:"2012-03-19T07:22Z",records:100},
  {idcpbatch: 2, process_id:112,filename: '20220601-1231241-OEN-SHR-1123124-20220531', source:"OEN",state:"Cleaning completed",startdate:"2012-03-19T07:22Z",records:100}
];

const BATCH_DATA_PAR: BatchElement[] = [
  {idcpbatch: 1, process_id:111, filename: '20220601-1231241-RIADTS-1123124-20220531', source:"RIADTS", state:"Cleaning completed",startdate:"2012-03-19T07:22Z",records:100},
  {idcpbatch: 2, process_id:113,filename: '20220601-1231241-OEN-SHR-1123124-20220531', source:"OEN",state:"Cleaning completed",startdate:"2012-03-19T07:22Z",records:100},
  {idcpbatch: 3, process_id:114,filename: '20220601-1231241-GLEIF-1123124-20220531', source:"GLEIF",state:"Post capture completed",startdate:"2012-03-19T07:22Z",records:100}
];


/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-capturebatchbrowser',
  templateUrl: './capturebatchbrowser.component.html',
  styleUrls: ['./capturebatchbrowser.component.css']
})
export class CapturebatchbrowserComponent implements AfterViewInit {
  //displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  displayedColumns: string[] = ['idcpbatch', 'process_id', 'filename', 'source','state','startdate','records'];
 

  constructor(public messageService: MessageService, 
    private changeDetectorRefs: ChangeDetectorRef, 
    private router: Router) {
  }
  
  dataSource = new MatTableDataSource(BATCH_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit(): void {    
    if (this.messageService.cleaningline=="holding") {
      this.dataSource = new MatTableDataSource(BATCH_DATA);
      console.log("holding data");
      }
      else if (this.messageService.cleaningline=="issuance") {
        this.dataSource = new MatTableDataSource(BATCH_DATA_ISS);
        console.log("issuance data");
      }
      else if (this.messageService.cleaningline=="party") {
        this.dataSource = new MatTableDataSource(BATCH_DATA_PAR);
        console.log("issuance data");
      }
    }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }  
  }

  onRowClicked(row) {
    let route = '/capturebatchbrowserdetails';
    console.log('Row clicked: ', row);
    this.router.navigate([route], { queryParams: { id: row.idcpbatch } });
  }


}


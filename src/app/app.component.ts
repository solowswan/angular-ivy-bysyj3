import { NestedTreeControl } from "@angular/cdk/tree";
import { TreeDataSource} from './tree-datasource';
import {MatTreeNestedDataSource} from '@angular/material/tree';

import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Batches',
    children: [
      {
        name: 'Capture',children: [{name: 'Browse'},{name: 'New'}, ],
      }, 
      {name: 'Unification',children: [{name: 'Dashboard'},{name: 'Batches'}, {name: 'Schedule batches',children: [{name: 'New'}, ],}],      }, 
      {name: 'Grouping',children: [{name: 'Dashboard'},{name: 'Batches'}, {name: 'Schedule batches',children: [{name: 'New'}, ],}],      }, 
      {name: 'Transfer',children: [{name: 'Dashboard'},{name: 'Batches'}, {name: 'Schedule batches',children: [{name: 'New'}, ],}],      }, 
      {name: 'Enrichment',children: [{name: 'Dashboard'},{name: 'Batches'}, {name: 'Schedule batches',children: [{name: 'New'}, ],}],      }, 
      {name: 'Population',children: [{name: 'Dashboard'},{name: 'Batches'}, {name: 'Schedule batches',children: [{name: 'New'}, ],}],      }, 
      {name: 'Purging',children: [{name: 'Dashboard'},{name: 'Batches'}, {name: 'Schedule batches',children: [{name: 'New'}, ],}],      }, 
      {name: 'Compression',children: [{name: 'Dashboard'},{name: 'Batches'}, {name: 'Schedule batches',children: [{name: 'New'}, ],}],      }, 
      {name: 'DW Compression',children: [{name: 'Dashboard'},{name: 'Batches'}, {name: 'Schedule batches',children: [{name: 'New'}, ],}],      }, 
    ],
  },
  
  {
    name: 'Staging Area',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'UDS',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Configuration',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {name: 'Dashboard' }, 
  {name: 'iDQM Portal' }, 
  {name: 'Instruments' }, 
  {name: 'Parties' }, 
  {name: 'Codelists' }, 
  {name: 'WS Parameters' }, 
  {name: 'Worker jobs pool' }, 
  {name: 'Incremental propagation' }, 
  {name: 'System',children: [{name: 'Technical info'}, {name: 'DB pools',children: [{name: 'Main pool'}, {name: 'Caching pool'},{name: 'WH pool'}],},{name: 'Cache'}],      }, 

];


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {     this.dataSource.data = TREE_DATA;
   }

  ngOnInit(): void { 
  }


  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;


  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}
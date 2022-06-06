import { NestedTreeControl } from "@angular/cdk/tree";
import { TreeDataSource} from './tree-datasource';
import {MatTreeNestedDataSource} from '@angular/material/tree';

import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { MessageService } from './message.service';


interface FoodNode {
  name: string;
  url:string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    "name": "Batches","url":"/heroesdetail",
    "children": [
      {
        "name": "Capture","url":"","children": [{"name": "Dashboard","url":""},{"name": "Batches","url":"/capturebatchbrowserfilter"},{"name": "File manager","url":""}]
      }, 
      {"name": "Unification","url":"","children": [{"name": "Dashboard","url":""},{"name": "Batches","url":""}, {"name": "Schedule batches","url":"","children": [{"name": "New","url":""} ]}]      }, 
      {"name": "Grouping","url":"","children": [{"name": "Dashboard","url":""},{"name": "Batches","url":""}, {"name": "Schedule batches","url":"","children": [{"name": "New","url":""} ]}]      }, 
      {"name": "Transfer","url":"","children": [{"name": "Dashboard","url":""},{"name": "Batches","url":""}, {"name": "Schedule batches","url":"","children": [{"name": "New","url":""}]}]      }, 
      {"name": "Enrichment","url":"","children": [{"name": "Dashboard","url":""},{"name": "Batches","url":""}, {"name": "Schedule batches","url":"","children": [{"name": "New","url":""} ]}]      }, 
      {"name": "Population","url":"","children": [{"name": "Dashboard","url":""},{"name": "Batches","url":""}, {"name": "Schedule batches","url":"","children": [{"name": "New","url":""} ]}]      }, 
      {"name": "Purging","url":"","children": [{"name": "Dashboard","url":""},{"name": "Batches","url":""}, {"name": "Schedule batches","url":"","children": [{"name": "New","url":""} ]}]      }, 
      {"name": "Compression","url":"","children": [{"name": "Dashboard","url":""},{"name": "Batches","url":""}, {"name": "Schedule batches","url":"","children": [{"name": "New","url":""} ]}]      }, 
      {"name": "DW Compression","url":"","children": [{"name": "Dashboard","url":""},{"name": "Batches","url":""}, {"name": "Schedule batches","url":"","children": [{"name": "New","url":""}]}]}
    ]
  },
  {
    "name": "Staging Area","url":"/heroes",
    "children": [{"name": "Record browser","url":""}]
  },
  {
    "name": "UDS","url":"",
    "children": [{"name": "Candidates","url":"/heroesdetail"}, {"name": "Compounds","url":"/heroesdetail"}, {"name": "Re-link instruments","url":"/heroesdetail"},{"name": "Re-transfer instruments","url":"/heroesdetail"}]
  },
  {
    "name": "Configuration","url":"",
    "children": [{"name": "Source parameters","url":"/heroesdetail"}, {"name": "Grouping criteria","url":"/heroesdetail"}, {"name": "Compounding rules","url":"/heroesdetail"}]
  },
  {"name": "Dashboard","url":"/heroesdetail" }, 
  {"name": "iDQM Portal","url":"/heroesdetail" }, 
  {"name": "Instruments","url":"/instrumentdetails" }, 
  {"name": "Parties","url":"/heroesdetail" }, 
  {"name": "Codelists","url":"/heroesdetail" }, 
  {"name": "WS Parameters","url":"/heroesdetail" }, 
  {"name": "Worker jobs pool","url":"/heroesdetail" }, 
  {"name": "Incremental propagation","url":"/heroesdetail" }, 
  {"name": "System","url":"","children": [{"name": "Technical info","url":"/heroesdetail"}, {"name": "DB pools","url":"/heroesdetail","children": [{"name": "Main pool","url":"/heroesdetail"}, {"name": "Caching pool","url":"/heroesdetail"},{"name": "WH pool","url":"/heroesdetail"}]},{"name": "Cache","url":"/heroesdetail"}]
  },
  {
    "name": "Uploads","url":"",
    "children": [{"name": "XML Upload","url":""}, {"name": "SHS CC Upload","url":""}]
  },
];


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  public selectedVal: string;

  public onValChange(val: string) {
    this.selectedVal = val;
    this.messageService.add1(val);
  }
  
  constructor(private messageService: MessageService) {     this.dataSource.data = TREE_DATA;
   }

  ngOnInit(): void {    
  this.selectedVal ='holding';
  this.messageService.add1('holding');
  }


  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

}
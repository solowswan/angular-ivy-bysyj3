import { NestedTreeControl } from "@angular/cdk/tree";
import { TreeDataSource} from './tree-datasource';
import {MatTreeNestedDataSource} from '@angular/material/tree';

import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

interface FoodNode {
  name: string;
  url:string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    "name": "Batches","url":"/heroes",
    "children": [
      {
        "name": "Capture","url":"","children": [{"name": "Dashboard","url":""},{"name": "Batches","url":""},{"name": "File manager","url":""}]
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
    "name": "Staging Area","url":"",
    "children": [{"name": "Apple","url":""}, {"name": "Banana","url":""}, {"name": "Fruit loops","url":""}]
  },
  {
    "name": "UDS","url":"",
    "children": [{"name": "Apple","url":"https://orf.at"}, {"name": "Banana","url":"https://orf.at"}, {"name": "Fruit loops","url":"https://orf.at"}]
  },
  {
    "name": "Configuration","url":"",
    "children": [{"name": "Apple","url":"https://orf.at"}, {"name": "Banana","url":"https://orf.at"}, {"name": "Fruit loops","url":"https://orf.at"}]
  },
  {"name": "Dashboard","url":"https://orf.at" }, 
  {"name": "iDQM Portal","url":"https://orf.at" }, 
  {"name": "Instruments","url":"https://orf.at" }, 
  {"name": "Parties","url":"https://orf.at" }, 
  {"name": "Codelists","url":"https://orf.at" }, 
  {"name": "WS Parameters","url":"https://orf.at" }, 
  {"name": "Worker jobs pool","url":"https://orf.at" }, 
  {"name": "Incremental propagation","url":"https://orf.at" }, 
  {"name": "System","url":"","children": [{"name": "Technical info","url":"https://orf.at"}, {"name": "DB pools","url":"https://orf.at","children": [{"name": "Main pool","url":"https://orf.at"}, {"name": "Caching pool","url":"https://orf.at"},{"name": "WH pool","url":"https://orf.at"}]},{"name": "Cache","url":"https://orf.at"}]
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

  constructor() {     this.dataSource.data = TREE_DATA;
   }

  ngOnInit(): void { 
  }


  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

}
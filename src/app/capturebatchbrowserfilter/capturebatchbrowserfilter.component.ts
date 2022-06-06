import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-capturebatchbrowserfilter',
  templateUrl: './capturebatchbrowserfilter.component.html',
  styleUrls: ['./capturebatchbrowserfilter.component.css']
})
export class CapturebatchbrowserfilterComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
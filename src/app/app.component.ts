import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0,
    });
  }
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}
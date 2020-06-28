import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RequestBuilderService } from 'src/app/services/request-builder.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-auth-methods',
  templateUrl: './auth-methods.component.html',
  styleUrls: ['./auth-methods.component.css'],
})
export class AuthMethodsComponent implements OnInit {
  name: string = 'authorizationMethods';
  options: { value: string; label: string; checked?: boolean }[] = [
    { value: 'none', label: 'No Authorization', checked: true },
    { value: 'basic', label: 'Basic' },
    { value: 'bearer', label: 'Bearer Token' },
  ];
  radioValue: string = 'none';

  constructor(public rbs: RequestBuilderService) {}

  onRadioSelect(event) {
    // If our currentRadioValue is not none && if its value is changed
    // then we need to reset that formControl
    // such that there is no duplicate auth method selected.
    if (this.radioValue !== event && this.radioValue !== 'none') {
      this.rbs.authScheme.get(this.radioValue).reset();
    }
    this.radioValue = event;
    this.rbs.selectedAuthMethod = event;
  }

  ngOnInit(): void {}
}

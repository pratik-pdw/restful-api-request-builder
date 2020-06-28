import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormGroup,
  FormControl,
  Validators,
  Form,
} from '@angular/forms';
import { RequestBuilderService } from 'src/app/services/request-builder.service';

@Component({
  selector: 'app-query-params',
  templateUrl: './query-params.component.html',
  styleUrls: ['./query-params.component.css'],
})
export class QueryParamsComponent implements OnInit {
  constructor(public rbs: RequestBuilderService) {}

  ngOnInit(): void {}
}

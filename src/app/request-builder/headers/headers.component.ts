import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { RequestBuilderService } from 'src/app/services/request-builder.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css'],
})
export class HeadersComponent implements OnInit {
  constructor(public rbs: RequestBuilderService) {}

  ngOnInit(): void {}
}

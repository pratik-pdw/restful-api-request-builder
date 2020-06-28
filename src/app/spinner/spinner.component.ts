import { Component, OnInit } from '@angular/core';
import { FireRequestService } from '../services/fire-request.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnInit {
  constructor(public fireRequestService: FireRequestService) {}

  ngOnInit(): void {}
}

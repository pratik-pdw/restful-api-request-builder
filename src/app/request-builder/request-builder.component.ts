import { Component, OnInit } from '@angular/core';
import { RequestBuilderService } from '../services/request-builder.service';
import { FireRequestService } from '../services/fire-request.service';

@Component({
  selector: 'app-request-builder',
  templateUrl: './request-builder.component.html',
  styleUrls: ['./request-builder.component.css'],
})
export class RequestBuilderComponent implements OnInit {
  methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

  name: string = 'authorizationMethods';
  options: { value: string; label: string }[] = [
    { value: 'basic', label: 'Basic Authorization' },
    { value: 'bearer', label: 'Bearer Token' },
    { value: 'apikey', label: 'API Key' },
  ];

  selectedRadioValue: string = '';

  showTextArea: boolean = false;

  showSpinner: boolean = false;

  constructor(
    public rbs: RequestBuilderService,
    public fireRequestService: FireRequestService
  ) {}

  ngOnInit(): void {}

  onRadioButtonSelected(event) {
    if (event.target.value !== 'none') {
      this.showTextArea = true;
    } else {
      this.showTextArea = false;
    }
  }

  onSubmitClick() {
    this.rbs.sendRequestToFireService();
    if (window.innerWidth < 768) {
      const element = document.querySelector('#response');
      if (element) {
        setTimeout(function () {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 1500);
      }
    }
  }

  onAbortBtnClick() {
    this.fireRequestService.requestSubscription.unsubscribe();
    this.fireRequestService.reqInProg = false;
    this.fireRequestService.response.body = 'Your request was aborted !!';
  }
}

import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  DoCheck,
  OnChanges,
} from '@angular/core';
import { RequestBuilderService } from 'src/app/services/request-builder.service';
import { AceEditorComponent } from 'ng2-ace-editor';

@Component({
  selector: 'app-req-body',
  templateUrl: './req-body.component.html',
  styleUrls: ['./req-body.component.css'],
})
export class ReqBodyComponent implements OnInit {
  name: string = 'reqBodyType';
  options: { value: string; label: string; checked?: boolean }[] = [
    { value: 'no body', label: 'None', checked: true },
    { value: 'raw', label: 'Raw' },
  ];
  radioValue: string = 'no body';

  dropdownOptions: string[] = ['text', 'json', 'html', 'css', 'xml'];
  selectedDropdownOption: string = this.dropdownOptions[0];

  constructor(public rbs: RequestBuilderService) {}

  ngOnInit(): void {}

  onRadioSelect(event) {
    this.radioValue = event;
    if (event === 'no body') {
      this.rbs.reqBodyType = 'none';
    } else {
      this.rbs.reqBodyType = this.selectedDropdownOption;
    }
    console.log(event);
  }

  setLanguage(language) {
    console.log(language);
    this.selectedDropdownOption = language;
    this.rbs.reqBodyType = language;
  }
}

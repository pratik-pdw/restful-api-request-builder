import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-selector',
  templateUrl: './radio-selector.component.html',
  styleUrls: ['./radio-selector.component.css'],
})
export class RadioSelectorComponent implements OnInit {
  // As this is a reusable component a parent component will send below
  // two properties to render.
  @Input('radioName') public name;
  @Input('optionsObject') public radioSelectorOptions;

  @Output() public selectedRadio = new EventEmitter();

  onRadioSelect(event) {
    this.selectedRadio.emit(event.target.value);
  }

  constructor() {}

  ngOnInit(): void {}
}

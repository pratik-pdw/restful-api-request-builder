import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FireRequestService } from '../services/fire-request.service';
import { AceEditorComponent } from 'ng2-ace-editor';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css'],
})
export class ResponseComponent implements OnInit, AfterViewInit {
  editorOptions = {};

  constructor(public fireRequestService: FireRequestService) {}
  @ViewChild('editor', { static: true }) editor: AceEditorComponent;

  ngOnInit() {}
  ngAfterViewInit() {
    // console.log('After view init called...');
    this.editor.setTheme('tomorrow_night_eighties');
    this.editor.setMode('text');
    this.editor.getEditor().setShowPrintMargin(false);
    this.editor.getEditor().setFontSize(14);
    this.editor.setReadOnly(true);
    this.editor.getEditor().setOptions({
      wrap: true,
      // enableBasicAutocompletion: true,
    });

    this.editor.getEditor().commands.addCommand({
      name: 'showOtherCompletions',
      bindKey: 'Ctrl-.',
      exec: function (editor) {},
    });
  }

  ngOnChanges() {
    console.log('Called NgOnChanges');
  }
}

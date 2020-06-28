import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AceEditorComponent } from 'ng2-ace-editor';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
})
export class PlaygroundComponent implements OnInit {
  ngOnInit() {}

  @ViewChild('editor') editor: AceEditorComponent;
  text: string = 'Your response will appear here';

  ngAfterViewInit() {
    this.editor.setTheme('monokai');

    this.editor.setMode('text');

    this.editor.getEditor().setShowPrintMargin(false);
    this.editor.getEditor().setFontSize(16);
    // this.editor.setReadOnly(true);
    this.editor.getEditor().setOptions({
      // enableBasicAutocompletion: true,
    });

    this.editor.getEditor().commands.addCommand({
      name: 'showOtherCompletions',
      bindKey: 'Ctrl-.',
      exec: function (editor) {},
    });
  }

  onDropdownSelect(event) {
    console.log(this.editor.getEditor().getReadOnly());
    this.editor.setMode(event.target.value);
  }
}

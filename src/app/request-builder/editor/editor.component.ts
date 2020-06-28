import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Input,
  OnChanges,
} from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';
import { RequestBuilderService } from 'src/app/services/request-builder.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('editor', { static: true }) editor: AceEditorComponent;

  @Input('editorMode') public mode;
  @Input('readOnly') public readOnly;

  constructor(public rbs: RequestBuilderService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // console.log('After view init called...');
    this.editor.setTheme('tomorrow_night_eighties');
    this.editor.setMode(this.mode);
    this.editor.getEditor().setShowPrintMargin(false);
    this.editor.getEditor().setFontSize(14);
    this.editor.setReadOnly(this.readOnly);
    this.editor.getEditor().setOptions({
      // enableLiveAutocompletion: true,
    });

    this.editor.getEditor().commands.addCommand({
      name: 'showOtherCompletions',
      bindKey: 'Ctrl-.',
      exec: function (editor) {},
    });
  }

  ngOnChanges() {
    this.editor.setMode(this.mode);
  }
}

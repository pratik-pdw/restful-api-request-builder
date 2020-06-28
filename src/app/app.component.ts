import { Component } from '@angular/core';
import { RequestBuilderService } from './services/request-builder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public rbs: RequestBuilderService) {}
  title = 'restful-builder';
}

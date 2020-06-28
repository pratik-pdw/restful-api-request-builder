import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RequestBuilderComponent } from './request-builder/request-builder.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RadioSelectorComponent } from './request-builder/radio-selector/radio-selector.component';
import { AuthMethodsComponent } from './request-builder/auth-methods/auth-methods.component';
import { QueryParamsComponent } from './request-builder/query-params/query-params.component';
import { HeadersComponent } from './request-builder/headers/headers.component';
import { ReqBodyComponent } from './request-builder/req-body/req-body.component';
import { ResponseComponent } from './response/response.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { EditorComponent } from './request-builder/editor/editor.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LightDotComponent } from './light-dot/light-dot.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RequestBuilderComponent,
    PlaygroundComponent,
    RadioSelectorComponent,
    AuthMethodsComponent,
    QueryParamsComponent,
    HeadersComponent,
    ReqBodyComponent,
    ResponseComponent,
    SpinnerComponent,
    EditorComponent,
    LightDotComponent,
  ],
  imports: [
    AceEditorModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    LoadingBarModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

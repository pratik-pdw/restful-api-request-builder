import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import {
  HttpRequest,
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { RestfulRequest } from '../models/RestfulRequest';
import { Subscription } from 'rxjs';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Injectable({
  providedIn: 'root',
})
export class FireRequestService {
  reqInProg: boolean = false;
  response = {
    status: null,
    statusText: null,
    body: 'Your response will appear here!!!',
  };
  requestSubscription: Subscription;

  constructor(private http: HttpClient) {}

  sendRequest(restfulObject: RestfulRequest) {
    this.reqInProg = true;

    // console.clear();
    // console.log(restfulObject);
    let p: HttpParams = new HttpParams();
    let h: HttpHeaders = new HttpHeaders();

    restfulObject.headers.forEach((header) => {
      if (header.key && header.value) {
        h = h.set(header.key, header.value);
      }
    });

    restfulObject.queryParameters.forEach((param) => {
      if (param.key && param.value) {
        p = p.set(param.key, param.value);
      }
    });

    switch (restfulObject.selectedAuthMethod) {
      case 'basic':
        let str = `${restfulObject.authorizationScheme.basic.username}:${restfulObject.authorizationScheme.basic.password}`;
        h = h.set('Authorization', `Basic ${btoa(str)}`);
        break;
      case 'bearer':
        h = h.set(
          'Authorization',
          `Bearer ${restfulObject.authorizationScheme.bearer.token}`
        );
        break;
      default:
    }

    let body;

    switch (restfulObject.reqBodyType) {
      case 'json':
        h = h.set('Content-Type', 'application/json');
        body = restfulObject.reqBody;
        break;
      case 'text':
        h = h.set('Content-Type', 'text/plain');
        body = restfulObject.reqBody;
        break;
      case 'html':
        h = h.set('Content-Type', 'text/html');
        body = restfulObject.reqBody;
        break;
      case 'css':
        h = h.set('Content-Type', 'text/css');
        body = restfulObject.reqBody;
        break;
      case 'xml':
        h = h.set('Content-Type', 'text/xml');
        body = restfulObject.reqBody;
        break;
      default:
    }

    const httpRequest = new HttpRequest(
      restfulObject.method,
      restfulObject.url,
      body,
      {
        headers: h,
        params: p,
      }
    );

    // console.log(httpRequest);

    this.requestSubscription = this.http
      .request(httpRequest)
      .pipe(delay(1000))
      .subscribe(
        (response: HttpResponse<any>) => {
          // console.log(response.headers.get('content-type'));

          this.response.body = JSON.stringify(response.body, undefined, 2);
          this.response.status = response.status;
          this.response.statusText = response.statusText;
          this.reqInProg = false;
        },
        (err: HttpErrorResponse) => {
          // console.log(err.headers.getAll('*'));

          if (err.error) {
            this.response.body = JSON.stringify(err.error, undefined, 2);
          } else {
            this.response.body = err.message;
          }
          // console.log(err);
          this.response.status = err.status;
          // debugger;
          this.response.statusText = err.statusText;
          // debugger;
          this.reqInProg = false;
        }
      );
  }
}

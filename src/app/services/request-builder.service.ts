import { Injectable } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { FireRequestService } from './fire-request.service';

@Injectable({
  providedIn: 'root',
})
export class RequestBuilderService {
  public selectedAuthMethod: string = 'none';
  public reqBody: string = '';
  public reqBodyType: string = 'none';

  public reqBuilderForm: FormGroup = new FormGroup({
    method: new FormControl('GET'),
    url: new FormControl(null, Validators.required),
    authorizationScheme: new FormGroup({
      // basic has username & password hence its a form group
      basic: new FormGroup({
        username: new FormControl(),
        password: new FormControl(),
      }),
      bearer: new FormGroup({
        token: new FormControl(),
      }),
    }),
    queryParameters: new FormArray([
      new FormGroup({
        key: new FormControl(null),
        value: new FormControl(null),
      }),
    ]),
    headers: new FormArray([
      new FormGroup({
        key: new FormControl(null),
        value: new FormControl(null),
      }),
    ]),
  });

  constructor(
    public rbs: RequestBuilderService,
    private fireRequestService: FireRequestService
  ) {}

  get rbform() {
    return this.reqBuilderForm;
  }

  get method() {
    return this.reqBuilderForm.get('method');
  }

  get url() {
    return this.reqBuilderForm.get('url');
  }

  get authScheme() {
    return this.reqBuilderForm.get('authorizationScheme');
  }

  get queryParams() {
    return (this.reqBuilderForm.get('queryParameters') as FormArray).controls;
  }

  //this is for light dot
  get queryParamControls() {
    return this.reqBuilderForm.get('queryParameters');
  }

  get queryParamsSize() {
    return (this.reqBuilderForm.get('queryParameters') as FormArray).length;
  }

  get headers() {
    return (this.reqBuilderForm.get('headers') as FormArray).controls;
  }

  get headerControls() {
    return this.reqBuilderForm.get('headers');
  }

  get headersSize() {
    return (this.reqBuilderForm.get('headers') as FormArray).length;
  }

  addQueryParams() {
    (this.reqBuilderForm.get('queryParameters') as FormArray).push(
      new FormGroup({
        key: new FormControl(null),
        value: new FormControl(null),
      })
    );
  }

  removeQueryParams(index) {
    let arr = this.reqBuilderForm.get('queryParameters') as FormArray;
    if (arr.length !== 1) {
      arr.removeAt(index);
    }
  }

  // Methods to add to headers Form Array and Remove values from it.
  addHeaders() {
    (this.reqBuilderForm.get('headers') as FormArray).push(
      new FormGroup({
        key: new FormControl(null, Validators.required),
        value: new FormControl(null, Validators.required),
      })
    );
  }

  removeHeaders(index) {
    let arr = this.reqBuilderForm.get('headers') as FormArray;
    if (arr.length !== 1) {
      arr.removeAt(index);
    }
  }

  public sendRequestToFireService() {
    // console.clear();
    // console.log({
    //   selectedAuthMethod: this.selectedAuthMethod,
    //   ...this.reqBuilderForm.value,
    //   reqBody: this.reqBody,
    // });
    this.fireRequestService.sendRequest({
      selectedAuthMethod: this.selectedAuthMethod,
      ...this.reqBuilderForm.value,
      reqBody: this.reqBody,
      reqBodyType: this.reqBodyType,
    });
  }
}

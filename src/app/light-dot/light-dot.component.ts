import { Component } from '@angular/core';

@Component({
  selector: 'light-dot',
  template: `
    <span
      style="width:8px;height:8px;display:inline-block;background:#00bc8c !important;border-radius:100%"
      class="circle"
    ></span>
  `,
})
export class LightDotComponent {}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button mat-button color="primary"><ng-content></ng-content></button>
  `,
})
export class ButtonComponent {
  @Input() primary:string;
}

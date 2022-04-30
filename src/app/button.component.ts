import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button mat-button [ngClass]="isActive ? 'primary' : 'accent'"><ng-content></ng-content></button>
  `,
})
export class ButtonComponent {
  @Input() isActive:Boolean=false;
}

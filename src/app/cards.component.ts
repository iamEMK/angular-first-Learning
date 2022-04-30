import { Component, Input } from '@angular/core';

@Component({
  selector: `app-cards`,
  template: `
  <div class="emk">
  <ng-content></ng-content>
  </div>
  `,
  styleUrls:[ './cards.component.css' ]
})
export class CardsComponent {
  @Input() title:string;
  @Input() subtitle:string;
  @Input() footer:string;
}

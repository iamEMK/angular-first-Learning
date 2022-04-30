import { Component, Input } from '@angular/core';

@Component({
  selector: `app-card`,
  template: `
  <div class="emk">
  <mat-card class="card" animationDuration="2000ms">
  <mat-card-title>{{title}}</mat-card-title>
  <mat-card-subtitle>{{subtitle}}</mat-card-subtitle>
  <mat-card-content>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat suscipit nulla ullam illo, quae eos sed dolor consequatur voluptatibus expedita repudiandae unde inventore eius dolorem molestias repellendus repellat hic vero?
  Dolor eum saepe atque consectetur, illo culpa cumque at suscipit quaerat corporis omnis earum modi fuga explicabo incidunt quis. Accusamus cumque amet distinctio quod esse tempora, totam ullam quae natus?</mat-card-content>
  <mat-card-actions><app-button>ok</app-button>
    <app-button>cancel</app-button></mat-card-actions>
    <mat-card-footer>{{footer}}</mat-card-footer>
  </mat-card>
  </div>
  `,
  styleUrls:[ './card.component.css' ]
})
export class CardComponent {
  @Input() title:string;
  @Input() subtitle:string;
  @Input() footer:string;
}

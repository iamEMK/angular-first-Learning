import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {ButtonComponent} from './button.component';
import {MatCardModule} from '@angular/material/card';
import {CardComponent} from './card.component';

import {CardsComponent} from './cards.component';


@NgModule({
  imports: [BrowserModule, FormsModule, MatTabsModule,BrowserAnimationsModule,MatButtonModule,MatCardModule],
  declarations: [AppComponent, HelloComponent,ButtonComponent,CardsComponent,CardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxAdvancedRatingStarsModule } from 'ngx-advanced-rating-stars';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAdvancedRatingStarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

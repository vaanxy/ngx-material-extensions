import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MatAutocompleteExModule } from './mat-autocomplete-ex/mat-autocomplete-ex.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteExModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

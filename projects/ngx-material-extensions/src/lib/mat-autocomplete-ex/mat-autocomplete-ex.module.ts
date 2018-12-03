import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
} from '@angular/material';
import { MatAutocompleteExComponent } from './mat-autocomplete-ex.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatIconModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  declarations: [MatAutocompleteExComponent],
  exports: [MatAutocompleteExComponent]
})
export class MatAutocompleteExModule { }

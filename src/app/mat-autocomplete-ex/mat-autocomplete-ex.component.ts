import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { FormControl } from '@angular/forms';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { startWith } from 'rxjs/operators/startWith';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'mat-autocomplete-ex',
  templateUrl: './mat-autocomplete-ex.component.html',
  styleUrls: ['./mat-autocomplete-ex.component.css']
})
export class MatAutocompleteExComponent implements OnInit {
  inputtedItems: string[] = [];

  removable = true;
  addOnBlur = true;
  selectable = true;
  separatorKeysCodes = [ENTER, COMMA];
  inputCtrl: FormControl;

  @Input() placeholder = '请输入';
  @Input() multiple = false;
  @Input() items = [];
  @Input() candidateList$: Observable<any[]> = of([]);
  @Output() itemAdded: EventEmitter<any> = new EventEmitter();
  @Output() itemRemoved: EventEmitter<any> = new EventEmitter();
  @Output() valueChanged: EventEmitter<string> = new EventEmitter();
  @Input() displayWith = (item) => item;




  constructor() {
    this.inputCtrl = new FormControl();
    this.inputCtrl.valueChanges.subscribe(value => {
      this.valueChanged.emit(value);
    });
  }

  ngOnInit() {
  }

  clearInput(event: MatChipInputEvent): void {
    const input = event.input;
    if (input) {
      input.value = '';
    }
  }

  add(event: MatAutocompleteSelectedEvent): void {
    if (!this.multiple && this.items.length === 1) {
      return;
    }
    const optionValue = event.option.value;
    if (optionValue) {
      this.items.push(this.displayWith(optionValue));
      this.itemAdded.emit(optionValue);
    }
  }

  remove(index, item): void {
    this.items.splice(index, 1);
    this.itemRemoved.emit(item);
  }

}

import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MatChipInputEvent, MatAutocompleteSelectedEvent, MatAutocomplete, MatAutocompleteTrigger } from '@angular/material';
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

  private _items = [];
  private _placeholder = '请输入';
  removable = true;
  addOnBlur = true;
  selectable = true;
  separatorKeysCodes = [ENTER, COMMA];
  inputCtrl: FormControl;
  displayValues: string[] = [];

  @ViewChild(MatAutocompleteTrigger) autocomplete: MatAutocompleteTrigger;
  @Input() set placeholder(placeholder) {
    this._placeholder = placeholder;
  }
  get placeholder() {
    // console.log(this._placeholder);
    return this._placeholder;
  }

  @Input() autoAppendItem = true;
  @Input() openPanelAfterRemove = true;
  @Input() multiple = false;
  @Input() showRemoveIcon = true;
  @Input() candidateList$: Observable<any[]> = of([]);
  @Input() set items(items) {
    this._items = items;
    this.displayValues = this.items.map(i => this.displayWith(i));
  }
  get items() {
    return this._items;
  }

  @Output() itemAdded: EventEmitter<any> = new EventEmitter();
  @Output() itemRemoved: EventEmitter<any> = new EventEmitter();
  @Output() valueChanged: EventEmitter<string> = new EventEmitter();
  @Output() focused: EventEmitter<void> = new EventEmitter();

  @Input() set displayWith(func) {
    this._displayWith = func;
    this.displayValues = this.items.map(item => this.displayWith(item));
  }
  get displayWith() {
    return this._displayWith;
  }

  constructor() {
    this.inputCtrl = new FormControl();
    this.inputCtrl.valueChanges.subscribe(value => {
      if (typeof(value) !== 'string') {
        return;
      }
      this.valueChanged.emit(value);
    });
  }

  ngOnInit() { }

  private _displayWith = (item) => item;

  focus(event) {
    this.focused.next();
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
      if (this.autoAppendItem) {
        this.items.push(optionValue);
      }
      this.displayValues = this.items.map(item => this.displayWith(item));
      this.itemAdded.emit(optionValue);
    }

    setTimeout(() => {
      if (this.multiple) {
        this.autocomplete.openPanel();
      }
    }, 0);
  }

  remove(index): void {
    console.log(index);
    const item = this.items.splice(index, 1);
    this.displayValues = this.items.map(i => this.displayWith(i));
    this.itemRemoved.emit(item[0]);
    if (this.openPanelAfterRemove) {
      setTimeout(() => {
        if (this.multiple || this.items.length === 0) {
          this.autocomplete.openPanel();
        }
      }, 0);
    }
  }
}

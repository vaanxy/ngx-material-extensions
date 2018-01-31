import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAutocompleteExComponent } from './mat-autocomplete-ex.component';

describe('MatAutocompleteExComponent', () => {
  let component: MatAutocompleteExComponent;
  let fixture: ComponentFixture<MatAutocompleteExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatAutocompleteExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatAutocompleteExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

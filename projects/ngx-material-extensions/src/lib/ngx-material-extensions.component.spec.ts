import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialExtensionsComponent } from './ngx-material-extensions.component';

describe('NgxMaterialExtensionsComponent', () => {
  let component: NgxMaterialExtensionsComponent;
  let fixture: ComponentFixture<NgxMaterialExtensionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMaterialExtensionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialExtensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

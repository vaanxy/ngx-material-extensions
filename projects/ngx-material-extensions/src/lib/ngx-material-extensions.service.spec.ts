import { TestBed } from '@angular/core/testing';

import { NgxMaterialExtensionsService } from './ngx-material-extensions.service';

describe('NgxMaterialExtensionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMaterialExtensionsService = TestBed.get(NgxMaterialExtensionsService);
    expect(service).toBeTruthy();
  });
});

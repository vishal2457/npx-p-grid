import { TestBed } from '@angular/core/testing';

import { NgxPGridService } from './ngx-p-grid.service';

describe('NgxPGridService', () => {
  let service: NgxPGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

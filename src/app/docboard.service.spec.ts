import { TestBed } from '@angular/core/testing';

import { DocboardService } from './docboard.service';

describe('DocboardService', () => {
  let service: DocboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

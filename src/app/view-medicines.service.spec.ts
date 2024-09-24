import { TestBed } from '@angular/core/testing';

import { ViewMedicinesService } from './view-medicines.service';

describe('ViewMedicinesService', () => {
  let service: ViewMedicinesService;
 
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewMedicinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

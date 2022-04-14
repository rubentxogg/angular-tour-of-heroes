import { TestBed } from '@angular/core/testing';

import { InbMemoryDataService } from './in-memory-data.service';

describe('InbMemoryDataService', () => {
  let service: InbMemoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InbMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

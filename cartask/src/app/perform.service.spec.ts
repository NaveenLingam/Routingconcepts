import { TestBed } from '@angular/core/testing';

import { PerformService } from './perform.service';

describe('PerformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerformService = TestBed.get(PerformService);
    expect(service).toBeTruthy();
  });
});

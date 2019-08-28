import { TestBed } from '@angular/core/testing';

import { SampleOrderService } from './sample-order.service';

describe('SampleOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleOrderService = TestBed.get(SampleOrderService);
    expect(service).toBeTruthy();
  });
});

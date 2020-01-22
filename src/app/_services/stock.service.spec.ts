import { TestBed } from '@angular/core/testing';

import { StockService } from './stock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StockService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
  );
  it('should be created', () => {
    const service: StockService = TestBed.get(StockService);
    expect(service).toBeTruthy();
  });
});

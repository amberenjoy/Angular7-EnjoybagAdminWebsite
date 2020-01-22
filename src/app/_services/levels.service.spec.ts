import { TestBed } from '@angular/core/testing';

import { LevelsService } from './levels.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LevelsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
  );
  it('should be created', () => {
    const service: LevelsService = TestBed.get(LevelsService);
    expect(service).toBeTruthy();
  });
});

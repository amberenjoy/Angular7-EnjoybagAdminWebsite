import { TestBed } from '@angular/core/testing';

import { MembershipService } from './membership.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MembershipService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
  );
  it('should be created', () => {
    const service: MembershipService = TestBed.get(MembershipService);
    expect(service).toBeTruthy();
  });
});

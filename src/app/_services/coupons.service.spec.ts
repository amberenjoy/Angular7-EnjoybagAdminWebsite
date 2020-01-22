/*
 * @Author: your name
 * @Date: 2019-08-19 12:47:37
 * @LastEditTime: 2019-10-28 16:10:07
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Angular\enjoybagAdmin\src\app\_services\coupons.service.spec.ts
 */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CouponsService } from './coupons.service';

describe('CouponsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: CouponsService = TestBed.get(CouponsService);
    expect(service).toBeTruthy();
  });
});

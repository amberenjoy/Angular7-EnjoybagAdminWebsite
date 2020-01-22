/*
 * @Author: your name
 * @Date: 2019-08-01 14:09:44
 * @LastEditTime: 2019-10-28 16:12:06
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Angular\enjoybagAdmin\src\app\_services\sample-order.service.spec.ts
 */
import { TestBed } from '@angular/core/testing';

import { SampleOrderService } from './sample-order.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SampleOrderService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
  );
  it('should be created', () => {
    const service: SampleOrderService = TestBed.get(SampleOrderService);
    expect(service).toBeTruthy();
  });
});

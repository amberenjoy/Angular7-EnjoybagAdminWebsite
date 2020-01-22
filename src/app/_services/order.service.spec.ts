/*
 * @Author: your name
 * @Date: 2019-07-26 10:25:06
 * @LastEditTime: 2019-10-28 16:11:59
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Angular\enjoybagAdmin\src\app\_services\order.service.spec.ts
 */
import { TestBed } from '@angular/core/testing';

import { OrderService } from './order.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OrderService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
  );
  it('should be created', () => {
    const service: OrderService = TestBed.get(OrderService);
    expect(service).toBeTruthy();
  });
});

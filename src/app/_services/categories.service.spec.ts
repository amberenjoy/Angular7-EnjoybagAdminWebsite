/*
 * @Author: your name
 * @Date: 2019-07-26 12:37:10
 * @LastEditTime: 2019-10-28 16:10:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Angular\enjoybagAdmin\src\app\_services\categories.service.spec.ts
 */
import { TestBed } from '@angular/core/testing';

import { CategoriesService } from './categories.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CategoriesService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
  );

  it('should be created', () => {
    const service: CategoriesService = TestBed.get(CategoriesService);
    expect(service).toBeTruthy();
  });
});

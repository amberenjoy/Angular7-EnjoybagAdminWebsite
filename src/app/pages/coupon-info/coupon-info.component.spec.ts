import { ReactiveFormsModule } from '@angular/forms';
/*
 * @Author: your name
 * @Date: 2019-08-19 12:09:17
 * @LastEditTime: 2019-10-28 17:19:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Angular\enjoybagAdmin\src\app\pages\coupon-info\coupon-info.component.spec.ts
 */
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponInfoComponent } from './coupon-info.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CouponInfoComponent', () => {
  let component: CouponInfoComponent;
  let fixture: ComponentFixture<CouponInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [CouponInfoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

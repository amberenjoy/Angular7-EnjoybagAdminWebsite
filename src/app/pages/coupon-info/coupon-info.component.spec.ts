import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponInfoComponent } from './coupon-info.component';

describe('CouponInfoComponent', () => {
  let component: CouponInfoComponent;
  let fixture: ComponentFixture<CouponInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponInfoComponent ]
    })
    .compileComponents();
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

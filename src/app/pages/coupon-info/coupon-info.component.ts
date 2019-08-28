/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 12:09:17
 * @LastEditTime: 2019-08-19 15:18:42
 * @LastEditors: Please set LastEditors
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CouponsService } from './../../_services/coupons.service';
import { Coupon } from '../../shared/models/coupon';

@Component({
  selector: 'app-coupon-info',
  templateUrl: './coupon-info.component.html',
  styleUrls: ['./coupon-info.component.scss']
})

export class CouponInfoComponent implements OnInit {

  couponForm: FormGroup;
  coupon: Coupon = {
    code: null,
    amount: null,
    type: null,
    description: null,
    startAt: new Date().toISOString().substring(0, 10),
    expiredAt: new Date().toISOString().substring(0, 10),
    usageCount: 0,
    usageLimit: 0,
    minimumAmount: 0,
    usedBy: [],
    createAt: null,
    updateAt: null
  };

  constructor(
    private formBuilder: FormBuilder,
    private couponsService: CouponsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.couponForm = this.formBuilder.group({
      code: [this.coupon.code, Validators.required],
      type: [this.coupon.type, Validators.required],
      amount: [this.coupon.amount, Validators.required],
      minimumAmount: [this.coupon.minimumAmount, Validators.required],
      usageLimit: [this.coupon.usageLimit, Validators.required],
      startAt: [this.coupon.startAt, Validators.required],
      expiredAt: [this.coupon.expiredAt, Validators.required],
      description: [this.coupon.description],
      usageCount: [this.coupon.usageCount],
      usedBy: [this.coupon.usedBy]
    });
    this.route.params.subscribe(param => {
      if (param.id) {
        this.couponsService.getCouponById(param.id).subscribe(res => {
          delete res.id;
          delete res.updateAt;
          delete res.createAt;
          this.coupon = res;
          console.log(this.coupon);
          this.couponForm.setValue(this.coupon);
        });
      }
    });
  }

  onSubmit() {
    if (this.couponForm.invalid) {
      return;
    }
    this.couponsService.addNewCoupon(this.couponForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['admin/website', res.id]);
    });
  }
}

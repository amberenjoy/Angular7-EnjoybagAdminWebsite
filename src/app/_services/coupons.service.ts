/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 12:47:37
 * @LastEditTime: 2019-08-19 15:25:13
 * @LastEditors: Please set LastEditors
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map, retry } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Coupon } from '../shared/models/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  constructor(
    private http: HttpClient
  ) { }

  addNewCoupon(coupon) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json; charset=UTF-8');
    return this.http.post<Coupon>(`${environment.apiUrl}/coupons`, coupon, { headers })
      .pipe(map(res => {
        return res;
      }));
  }

  getCouponById(id) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json; charset=UTF-8');
    return this.http.get<Coupon>(`${environment.apiUrl}/coupons/${id}`, { headers })
      .pipe(map(res => {
        return res;
      }));
  }

  getCoupons() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json; charset=UTF-8');
    return this.http.get<Coupon[]>(`${environment.apiUrl}/coupons`, { headers })
      .pipe(map(res => {
        return res;
      }));
  }
}

/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-26 10:25:06
 * @LastEditTime: 2019-10-04 14:47:53
 * @LastEditors: Please set LastEditors
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

let headers: HttpHeaders = new HttpHeaders();
headers = headers.append('Content-Type', 'application/json; charset=UTF-8');

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  getOrdersList(pageIndex, pageSize, sortConditions) {
    return this.http.get<any>(`${environment.apiUrl}/orders`,
      { headers, params: { page: pageIndex, size: pageSize, sort: sortConditions } })
      .pipe(map(
        res => {
          return res;
        }
      ));
  }

  searchOrders(searchString) {
    return this.http.get<any>(`${environment.apiUrl}/orders`,
      { headers, params: { search: searchString } })
      .pipe(map(
        res => {
          return res;
        }
      ));
  }

  getOrdersQty() {
    return this.http.get<any>(`${environment.apiUrl}/orders/qty`, { headers }).pipe(map(
      res => {
        return res;
      }
    ));
  }

  getOrderInfoById(orderId) {

    return this.http.get<any>(`${environment.apiUrl}/orders/${orderId}`, { headers }).pipe(map(
      res => {
        return res;
      }
    ));
  }

  updateOrderInfoById(orderId, orderUpdate) {
    return this.http.put<any>(`${environment.apiUrl}/orders/${orderId}`, orderUpdate, { headers }).pipe(map(
      res => {
        return res;
      }
    ));
  }

  sendEmail(orderId) {
    return this.http.get<any>(`${environment.apiUrl}/orders/${orderId}/email`, { headers }).pipe(map(
      res => {
        return res;
      }
    ));
  }
}

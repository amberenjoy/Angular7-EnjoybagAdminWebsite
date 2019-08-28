/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-26 10:25:06
 * @LastEditTime: 2019-08-26 14:29:49
 * @LastEditors: Please set LastEditors
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  getAllOrders() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json; charset=UTF-8');
    return this.http.get<any>(`${environment.apiUrl}/orders`, { headers }).pipe(map(
      res => {
        return res;
      }
    ));
  }

  getOrderInfoById(orderId) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json; charset=UTF-8');
    return this.http.get<any>(`${environment.apiUrl}/orders/${orderId}`, { headers }).pipe(map(
      res => {
        return res;
      }
    ));
  }

  updateOrderInfoById(orderId, orderUpdate) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json; charset=UTF-8');
    return this.http.put<any>(`${environment.apiUrl}/orders/${orderId}`, orderUpdate, { headers }).pipe(map(
      res => {
        return res;
      }
    ));
  }

  sendEmail(orderId) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json; charset=UTF-8');
    return this.http.get<any>(`${environment.apiUrl}/orders/${orderId}/email`, { headers }).pipe(map(
      res => {
        return res;
      }
    ));
  }
}

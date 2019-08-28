/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-01 14:09:44
 * @LastEditTime: 2019-08-21 12:47:54
 * @LastEditors: Please set LastEditors
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleOrderService {
  apiUrl = 'http://mail.wingchit.com.hk/wcapps/so.nsf/EnjoySO?ReadViewEntries&outputformat=JSON&count=1000';

  constructor(
    private http: HttpClient
  ) { }

  getEnjoySample() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json; charset=UTF-8');

    return this.http.get(this.apiUrl, { headers }).pipe(map(res => {
      return res;
    }));
  }
}

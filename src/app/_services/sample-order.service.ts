/*
* @Description: In User Settings Edit
* @Author: your name
* @Date: 2019-08-01 14:09:44
 * @LastEditTime: 2019-09-19 11:11:23
 * @LastEditors: Please set LastEditors
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SampleOrderService {
  private sampleOrderSubject = new BehaviorSubject<any>([]);

  apiUrl = 'http://mail.wingchit.com.hk/wcapps/so.nsf/EnjoySO?ReadViewEntries&outputformat=JSON&count=1000';

  constructor(
    private http: HttpClient
  ) { }

  getSampleFromApi() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json; charset=UTF-8');

    return this.http.get(`${environment.apiUrl}/so/enjoybag`, { headers }).pipe(map(res => {

      this.sampleOrderSubject.next(res);

      return res;
    }));
  }

  getSampleOrder(): Observable<any> {
    return this.sampleOrderSubject.asObservable();
  }
}

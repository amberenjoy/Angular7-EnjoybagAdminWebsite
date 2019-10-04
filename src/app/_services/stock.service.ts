/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-30 10:05:45
 * @LastEditTime: 2019-09-19 11:21:09
 * @LastEditors: Please set LastEditors
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from './../../environments/environment';

const headers = new HttpHeaders({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');

@Injectable({
  providedIn: 'root'
})

export class StockService {

  private bagWomenListSubject = new BehaviorSubject<any>([]);
  private bagMenListSubject = new BehaviorSubject<any>([]);
  private bagSLGListSubject = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient, private ngxXml2jsonService: NgxXml2jsonService, ) { }

  getWomenList(): Observable<any> {
    return this.bagWomenListSubject.asObservable();
  }
  getMenList(): Observable<any> {
    return this.bagMenListSubject.asObservable();
  }
  getSLGList(): Observable<any> {
    return this.bagSLGListSubject.asObservable();
  }
  // share with client api
  getBaglist(key) {
    return this.http.get(`${environment.apiUrl}/products/lines/${key}`, {
      headers, responseType: 'text',
      params: {
        lan: 'EN',
        cur: 'HKD'
      }
    }).pipe(
      map(res => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(res, 'text/xml');
        const obj = this.ngxXml2jsonService.xmlToJson(xml);
        if (key === 'women') {
          this.bagWomenListSubject.next(obj['product'.toString()]);
        } else if (key === 'men') {
          this.bagMenListSubject.next(obj['product'.toString()]);
        } else if (key === 'slg') {
          this.bagSLGListSubject.next(obj['product'.toString()]);
        }
        return obj['product'.toString()];
      }), retry(2), catchError(this.handleError));
  }
  // share with client api
  getBagType(name) {
    return this.http.get(`${environment.apiUrl}/products/types/${name}`, {
      headers, responseType: 'text',
      params: {
        lan: 'EN',
        cur: 'HKD'
      }
    }).pipe(
      map(res => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(res, 'text/xml');
        const obj = this.ngxXml2jsonService.xmlToJson(xml);
        return obj['product'.toString()];
      }), retry(2), catchError(this.handleError));
  }
  // only for business admin
  getSKUStock(sku) {
    return this.http.get(`${environment.apiUrl}/stock/${sku}`, { headers, responseType: 'text' }).pipe(
      map(res => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(res, 'text/xml');
        const obj = this.ngxXml2jsonService.xmlToJson(xml);
        return obj['product'.toString()];
      }), retry(2), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}

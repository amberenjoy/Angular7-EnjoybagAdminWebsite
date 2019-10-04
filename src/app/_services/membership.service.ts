/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-26 10:25:06
 * @LastEditTime: 2019-10-04 11:51:10
 * @LastEditors: Please set LastEditors
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../shared/models/user';

let headers: HttpHeaders = new HttpHeaders();
headers = headers.append('Content-Type', 'application/json; charset=UTF-8');

@Injectable({
  providedIn: 'root'
})

export class MembershipService {

  // private userBehaviorSubject = new BehaviorSubject<any[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  getUsersList(pageIndex, pageSize, sortConditions) {
    return this.http.get<any>(`${environment.apiUrl}/users`,
      { headers, params: { page: pageIndex, size: pageSize, sort: sortConditions } }).pipe(map(
        res => {
          return res;
        }
      ));
  }
  searchUsers(searchString) {
    return this.http.get<any>(`${environment.apiUrl}/users`,
      { headers, params: { search: searchString } }).pipe(map(
        res => {
          return res;
        }
      ));
  }
  getUsersQTY() {
    return this.http.get<any>(`${environment.apiUrl}/users/qty`, { headers }).pipe(map(
      res => {
        // this.userBehaviorSubject.next(res);
        return res;
      }
    ));
  }

  // currentUserList(): Observable<any[]> {
  //   return this.userBehaviorSubject.asObservable();
  // }

  getUserInfo(uid) {
    return this.http.get<any>(`${environment.apiUrl}/users/${uid}`, { headers }).pipe(map(
      res => {
        return res;
      }
    ));
  }

  uploadData(data) {
    return this.http.post<any>(`${environment.apiUrl}/users/json`, data, {
      headers,
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: progress };
        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
      }
    }));
  }
}

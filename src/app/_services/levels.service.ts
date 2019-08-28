/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 12:17:54
 * @LastEditTime: 2019-08-16 14:19:14
 * @LastEditors: Please set LastEditors
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map, retry } from 'rxjs/operators';
import { Level } from '../shared/models/level';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LevelsService {

  private levelSubject = new BehaviorSubject<Level[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  getLevels(): Observable<Level[]> {
    return this.levelSubject.asObservable();
  }

  getLevelsApi() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json; charset=UTF-8');
    return this.http.get<Level[]>(`${environment.apiUrl}/levels`, { headers })
      .pipe(map(res => {
        this.levelSubject.next(res);
        return res;
      }));
  }

  updateLevelById(item) {
    console.log(item);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json; charset=UTF-8');
    return this.http.put<Level[]>(`${environment.apiUrl}/levels/${item.id}`, item, { headers })
      .pipe(map(res => {
        return res;
      }));
  }

}

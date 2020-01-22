/*
 * @Author: your name
 * @Date: 2019-07-26 11:06:29
 * @LastEditTime: 2019-10-30 15:47:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Angular\enjoybagAdmin\src\app\_services\authentication.service.ts
 */
/*
 * @Author: your name
 * @Date: 2019-07-26 11:06:29
 * @LastEditTime: 2019-10-28 16:11:41
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Angular\enjoybagAdmin\src\app\_services\authentication.service.ts
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../shared/models/user';
import { environment } from '../../environments/environment';

const headers = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('user'))
    );
  }

  currentUserValue(): Observable<User> {
    return this.currentUserSubject.asObservable();
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(
        `${environment.apiUrl}/staff/auth`,
        { email, password },
        headers
      )
      .pipe(
        map(thisUser => {
          console.log(thisUser);
          // login successful if there's a jwt token in the response
          if (thisUser && thisUser.token) {
            // store thisUser details and jwt token in local storage to keep thisUser logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(thisUser));
            this.currentUserSubject.next(thisUser);
            return thisUser;
          }
        })
      );
  }

  logout() {
    return this.http
      .get(`${environment.apiUrl}/staff/logout`, headers)
      .subscribe(res => {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.currentUserSubject.next(null);
      });
  }
}

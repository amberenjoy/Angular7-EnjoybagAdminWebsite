/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 10:32:20
 * @LastEditTime: 2019-08-14 10:32:20
 * @LastEditors: your name
 */
/* @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-05 14:52:14
 * @LastEditTime: 2019-08-14 10:34:21
 * @LastEditors: Please set LastEditors
 */
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private router: Router
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.router.navigate(['./login']);
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}
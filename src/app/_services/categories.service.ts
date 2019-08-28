import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map, retry } from 'rxjs/operators';
import { Category } from '../shared/models/category';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private categorySubject = new BehaviorSubject<Category[]>([]);

  constructor(
    private http: HttpClient
  ) {

  }

  getBagCategories() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json; charset=UTF-8');
    return this.http.get<Category[]>(`${environment.apiUrl}/categories`, { headers })
      .pipe(map(res => {
        this.categorySubject.next(res);
        return res;
      }));
  }

  getCategories(): Observable<Category[]> {
    return this.categorySubject.asObservable();
  }

  addNewCategory(category) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json; charset=UTF-8');
    return this.http.post<any>(`${environment.apiUrl}/categories`, category, { headers })
      .pipe(map(res => {
        return res;
      }));
  }

  deleteACategoryById(categoryId) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json; charset=UTF-8');
    return this.http.delete<Category[]>(`${environment.apiUrl}/categories/${categoryId}`, { headers })
      .pipe(map(res => {
        return res;
      }));
  }

  updateACategoryById(category) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json; charset=UTF-8');
    return this.http.put<Category[]>(`${environment.apiUrl}/categories/${category.id}`, category, { headers })
      .pipe(map(res => {
        return res;
      }));
  }
}

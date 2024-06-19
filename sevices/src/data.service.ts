import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getPost(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createPost(post: any): Observable<any> {
    return this.http.post(this.apiUrl, post, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  updatePost(id: number, post: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, post, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  patchPost(id: number, post: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, post, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  throwError(error: Error) {
    return throwError(() => new Error(error.message));
  }

  getDataFromAPI(): Observable<any[]> {
    return this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/posts23')
      .pipe(catchError(this.throwError));
  }
}

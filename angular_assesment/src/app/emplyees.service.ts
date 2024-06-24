import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmplyeesService {
  private apiUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getPost(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createPost(post: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, post, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  updatePost(id: string, post: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, post, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  deletePost(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  throwError(error: Error) {
    return throwError(() => new Error(error.message));
  }

  getDataFromAPI(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(catchError(this.throwError));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { of, throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Admin } from './admin.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiPath = '/api/v1/admin/user/';
  logged: Admin;
  
  constructor(
    private http: HttpClient
  ) { }

  checkLogged(): Observable<Admin> {
    if (this.logged) {
      return of(this.logged);
    }
    let params = {
      token: localStorage.getItem('tokena'),
      type: '2'
    };
    return this.http.post(this.apiPath + 'getCurrentUser', params, httpOptions).pipe(
      map((result: Admin) => {
          this.logged = result;
          return result;
      }),
      catchError((error:HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
  
}

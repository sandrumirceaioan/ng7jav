import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { of, throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Admin } from '../../services/admin/admin.model';
import { environment } from '../../../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  apiPath: string = environment.apiEndpoint + '/admin/user';
  loggedAdmin: Admin;

  constructor(private http: HttpClient) { }

loginAdmin(params): Observable<Admin> {
  return this.http.post(this.apiPath + '/logIn', params, httpOptions).pipe(
    map((result: Admin) => {
      this.loggedAdmin = result;
      localStorage.setItem('tokena', result.token);
      return result;
    }),
    catchError((error: HttpErrorResponse) => {
      return throwError(error);
    })
  );
}

checkLogged(): Observable<Admin> {
  if (this.loggedAdmin) {
    return of(this.loggedAdmin);
  }
  return this.http.post(this.apiPath + '/getCurrentUser', null, httpOptions).pipe(
    map((result: Admin) => {
        this.loggedAdmin = result;
        return result;
    }),
    catchError((error) => {
      return throwError(error);
    })
  );
}

// loginUser(params): Observable<User>{
//   return this.http.post(this.apiPath + '/login', params, httpOptions).pipe(
//     map((result: User) => {
//         localStorage.setItem('wmtoken', result.token);
//         this.logged = result;
//         return result;
//     }),
//     catchError((error:HttpErrorResponse) => {
//       return throwError(error);
//     })
//   );
// }

// all(): Observable<User[]> {
//   if (this.users.length) return of(this.users);
//   return this.http.get(this.apiPath + '/all').pipe(
//     map((result: User[]) => {
//         this.users = result;
//         return result;
//     }),
//     catchError((error:HttpErrorResponse) => {
//       return throwError(error);
//     })
//   );
// }

}


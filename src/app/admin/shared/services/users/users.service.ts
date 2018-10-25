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
  logged;
  
  constructor(
    private http: HttpClient
  ) {
    this.logged = false;
   }


  
}

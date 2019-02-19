import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, Route, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AdminService } from '../services/admin/admin.service';
import { of, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
    constructor(
        private router: Router,
        private toastr: ToastrService,
        private adminService: AdminService
    ){ }

    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<boolean> {
        // check if user is logged in
        return this.adminService.checkLogged().pipe(
            map(user => {
                if (user) return true;
            }),
            catchError(error => {
                this.toastr.error(error.message);
                this.router.navigate(['/admin/login']);
                return of(false);
            })
        );

    }


    canLoad(route: Route): Observable<boolean> {
        // check if user is logged in
        return this.adminService.checkLogged().pipe(
            map(user => {
                if (user) return true;
            }),
            catchError(error => {
                this.router.navigate(['/admin/login']);
                return of(false);
            })
        );
    }

}
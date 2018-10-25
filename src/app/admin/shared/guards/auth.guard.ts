import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, Route, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UsersService } from '../services/users/users.service';
import { of, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
    constructor(
        private router: Router,
        private toastr: ToastrService,
        private usersService: UsersService
    ){ }

    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
        // check if user is logged in
        return this.usersService.checkLogged().pipe(
            map(user => {
                if (user) return true;
            }),
            catchError(error => {
                this.toastr.error(error.error.error.message);
                this.router.navigate(['/admin/login']);
                return of(false);
            })
        );
    }

    canLoad(route: Route): boolean {
        if (this.usersService.logged) {
            return true;
        } else {
            this.toastr.error('Cannot load <b>' + route.path + '</b> module!');
            this.router.navigate(['/admin/login']);
            return false;
        }
    }

}
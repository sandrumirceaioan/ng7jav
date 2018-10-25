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
        console.log(111);
        return true;
    }

    canLoad(route: Route): boolean {
        console.log(this.usersService.logged);
        if (this.usersService.logged) {
            return true;
        } else {
            console.log('not gg');
            this.toastr.error('Cannot load <b>' + route.path + '</b> module!');
            this.router.navigate(['/admin/login']);
            return false;
        }
    }

}
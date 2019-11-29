import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {HousesService} from './houses.service';
import {map} from 'rxjs/operators';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private dataService: HousesService,
              private router: Router,
              private user: UserService) {  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.dataService.isLoggedIn) {
        return true;
      }
      return this.user.isLoggedIn().pipe(
        map((res: any) => {
          if (res.status) {
            this.dataService.setLogIn(true);
            return true;
          } else {
            this.router.navigate(['login']);
            return false;
          }
        })
      );
  }

}

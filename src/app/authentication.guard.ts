import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const roleWhiteList = next.data.roleWhiteList;
    const roleBlackList = next.data.roleBlackList;
    const onlyNoAuth = next.data.onlyNoAuth;
    if (this.authService.isAuthenticated()) {
      if (!onlyNoAuth && (roleWhiteList === undefined || this.authService.getRoles().some(role => role === roleWhiteList)) && (roleBlackList === undefined || !this.authService.getRoles().some(role => role === roleBlackList))) {
        return true;
      } else {
        this.router.navigate(['']);
        return false;
      }
    } else {
      if (onlyNoAuth) {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
    }
  }
}

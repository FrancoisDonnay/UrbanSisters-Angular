import { Injectable } from '@angular/core';
import {JwtToken} from './api/models/jwt-token';
import decode from 'jwt-decode';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private accessToken: JwtToken;
  private roles: Array<string>;
  constructor(private router: Router) { }

  public setToken(token: JwtToken, rememberMe: boolean) {
    this.accessToken = token;
    const tokenDecoded = decode(token.access_token);
    if (tokenDecoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === undefined) {
      this.roles = [];
    } else {
      if (typeof tokenDecoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === 'string') {
        this.roles = [tokenDecoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']];
      } else {
        this.roles = tokenDecoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      }
    }

    if (rememberMe) {
      localStorage.setItem('token', token.access_token);
      localStorage.setItem('tokenExpiration', token.expire_at.toString());
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('tokenExpiration');
    }
  }

  public updateToken(token: JwtToken) {
    this.setToken(token, localStorage.hasOwnProperty('token') && localStorage.hasOwnProperty('tokenExpiration'));
  }

  public getToken(): JwtToken {
    return this.accessToken;
  }

  public getRoles(): Array<string> {
    return this.roles;
  }

  public isAuthenticated(): boolean {
    if (this.accessToken === undefined) {
      const storedToken = localStorage.getItem('token');
      const storedTokenExpiration = localStorage.getItem('tokenExpiration');

      if (storedToken && storedTokenExpiration && parseInt(storedTokenExpiration, 10) >= new Date().getTime() / 1000) {
        this.setToken({access_token : storedToken, expire_at : parseInt(storedTokenExpiration, 10)}, true);
        return true;
      } else {
        this.accessToken = null;
        return false;
      }
    } else {
      return this.accessToken !== null && !this.tokenIsExpirated();
    }
  }

  public logout(): void {
    this.accessToken = null;
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
    this.router.navigate(['login']);
  }

  public isAdmin(): boolean {
    return this.roles.some(role => role === 'admin');
  }

  public isRelookeuse(): boolean {
    return this.roles.some(role => role === 'relookeuse');
  }

  public tokenIsExpirated(): boolean {
    return this.accessToken.expire_at <= new Date().getTime() / 1000;
  }
}

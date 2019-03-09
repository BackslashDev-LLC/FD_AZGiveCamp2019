import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from  '../app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {
  constructor(private  authService:  AuthService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isLoggedIn || this.router.parseUrl("/login");
  }
}

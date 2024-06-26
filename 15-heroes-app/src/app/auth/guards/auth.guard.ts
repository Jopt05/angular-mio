import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ){}

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this._authService.verifyAuth()
      .pipe(
        tap(isAuth => {
          if (!isAuth) this._router.navigate(['/auth/login'])
        })
      );
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this._authService.verifyAuth()
    .pipe(
      tap(isAuth => {
        if (!isAuth) this._router.navigate(['/auth/login'])
      })
    );
  }

}

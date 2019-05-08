import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorisationService } from './authorisation.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorisathionCheckGuard implements CanActivate {

  constructor(private authorisation: AuthorisationService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authorisation.isAutorised()) {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
  }
}

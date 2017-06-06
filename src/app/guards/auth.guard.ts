import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authservice: AuthService, private router: Router) { }

  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
      if(this.authservice.usuarioEstaAutenticado()){
        return true;
      }

      this.router.navigate(['/login']);

      return false;
  }

}

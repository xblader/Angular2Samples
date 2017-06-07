import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authservice: AuthService, private router: Router) { }

  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
      if(this.authservice.usuarioEstaAutenticado()){        
        return true;
      }
      console.log('usuario nao autenticado');

      this.router.navigate(['/login']);

      return false;
  }

    private verificarAcesso(){
      if(this.authservice.usuarioEstaAutenticado()){
        return true;
      }
    }

  	canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
      console.log('verificando se pode carregar o modulo...');
      return this.verificarAcesso();
    }

}

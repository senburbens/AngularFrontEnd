import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../@services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router){
  }

  canActivate():boolean{
    if(this._authService.isLoggedIn() && window.location.pathname === '/'){
      this._router.navigate(['/main']);
      return false;
    }
      return true;
  }  
}

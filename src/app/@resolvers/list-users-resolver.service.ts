import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TestListeUserService } from '../@services/test-liste-user.service';
import { AuthService } from '../auth/@services/auth.service';


@Injectable()
export class ListUsersResolverService implements Resolve<any>{

    constructor(private _testListeService: TestListeUserService, private _authService: AuthService, private _router : Router){
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
        if(!this._authService.isLoggedIn()){
            this._router.navigate(['login']);
        }
        return  this._testListeService.getListeUsers();
    }

}
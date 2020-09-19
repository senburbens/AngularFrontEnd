import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TestListeUserService } from '../@services/test-liste-user.service';


@Injectable()
export class ListUsersResolverService implements Resolve<any>{

    constructor(private _testListeService: TestListeUserService){
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
        //throw new Error('Method not implemented.');

        return  this._testListeService.getListeUsers();
    }

}
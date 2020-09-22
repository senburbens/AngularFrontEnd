import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { JqxService } from './../jqx.service';


@Injectable()
export class JqxResolver implements Resolve<any>{

    constructor(private service: JqxService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return  this.service.getListe();
    }
}
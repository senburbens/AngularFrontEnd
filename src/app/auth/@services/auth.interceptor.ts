import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let tokenizedRequest = request.clone();

    if(sessionStorage.getItem('token')){
      tokenizedRequest = request.clone({
        setHeaders : {
          Authorization : `Bearer ${ sessionStorage.getItem('token') }`
        }
      }); 
    }

    return next.handle(tokenizedRequest);
  }
}

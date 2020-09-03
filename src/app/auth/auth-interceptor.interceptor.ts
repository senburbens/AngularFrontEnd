import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authService = this.injector.get(AuthService);

    let tokenizedRequest = request.clone({
      setHeaders : {
        Authorization : `Bearer ${ authService.getToken() }`
      }
    });

  console.log(tokenizedRequest.headers);

    return next.handle(tokenizedRequest);
  }
}

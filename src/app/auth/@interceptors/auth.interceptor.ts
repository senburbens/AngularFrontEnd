import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import { AuthService } from '../@services/auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {  

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(public authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(sessionStorage.getItem('token')) {
      request = this.addToken(request, sessionStorage.getItem('token'));
    }

    return next.handle(request).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && error.status === 401 && error.error.message === 'Expired JWT Token') {
        sessionStorage.removeItem('token');
        return this.handle401Error(request, next);
      }else if(error instanceof HttpErrorResponse && error.status === 401 && error.error.message === 'Invalid credentials.'){
          return throwError(error);
      }else if(error instanceof HttpErrorResponse && error.status === 401){
          const re = "/api/login";
          if (request.url.search(re) === -1 ) {
            console.log(request.url);
            this.authService.logout();
            return throwError(error);
          }else{
            return throwError(error);
          }
      }else {
        console.log(error);
        this.authService.logout();
        return throwError(error);
      }
    }));
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshToken().pipe(
        switchMap((token: any) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token['token']);
          return next.handle(this.addToken(request, token['token']));
        }));

    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addToken(request, jwt));
        }));
    }
  }

    private addToken(request: HttpRequest<any>, token: string) {
      return request.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`
        }
      });
    }
}

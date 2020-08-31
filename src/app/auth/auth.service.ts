import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';
import * as moment from "moment";
import { catchError } from 'rxjs/operators';
import { Observable, throwError  } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _url = 'http://127.0.0.1:8000/test';

  constructor(private _http: HttpClient) {}

  private errorHandler(error: HttpErrorResponse){
      let errorMsg:string = '';
      if(error.status === 404){
        errorMsg = "Erreur 404 : ressource introuvable !"
      }
      return throwError(errorMsg || error.message);
  }

  // public test(user: User):Observable<any> {
  public test():Observable<any> {
    return this._http.get<any>(this._url)
                .pipe(catchError(this.errorHandler));
  }

  public login(email:string, password:string ) {
    return this._http.post<User>('/api/login', {email, password})
        //.do(res => this.setSession) 
        //.shareReplay();
  }
      
  private setSession(authResult) {
      const expiresAt = moment().add(authResult.expiresIn,'second');
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }          

  public logout() {
      localStorage.removeItem("id_token");
      localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
  }

  public isLoggedOut() {
      return !this.isLoggedIn();
  }

  public getExpiration() {
      const expiration = localStorage.getItem("expires_at");
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
  } 
}

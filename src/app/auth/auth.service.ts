import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';
import * as moment from "moment";
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _url = 'http://127.0.0.1:8000/api/login';
  private _JWT_token = '';

  constructor(private _http: HttpClient) {}

  public getJwtToken():string{
    return this._JWT_token;
  }

  public getToken():string{
    return localStorage.getItem('token');
  }

  public setJwtToken(token:string){
    this._JWT_token = token;
  }

  private errorHandler(error: HttpErrorResponse){
      let errorMsg:string = '';
      if(error.status === 404){
        errorMsg = "Erreur 404 : ressource introuvable !"
      }else if(error.status === 401){
        errorMsg = "Erreur 401 : Accès non autorisé !"
      }
      return throwError(errorMsg || error.message);
  }

  // public test(user: User):Observable<any> {
  //public test():Observable<any> {
    //return this._http.get<any>(this._url)
                //.pipe(catchError(this.errorHandler));
  //}

  public login(username:string, password:string ) {
    console.log('From login function', username, password);
    return this._http.post(this._url, {"login":username, "password":password})
               .pipe(catchError(this.errorHandler));
        //.do(res => this.setSession) 
        //.shareReplay();
  }
      
  private setSession(authResult) {
      const expiresAt = moment().add(authResult.expiresIn,'second');
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }          

  public logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      this.setJwtToken('');
  }

  public isLoggedIn() {
      //return moment().isBefore(this.getExpiration());
      return !!localStorage.getItem('token');
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

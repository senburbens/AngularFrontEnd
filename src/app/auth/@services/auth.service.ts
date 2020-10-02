import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { constants } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly ROOT_URL = constants.ROOT_URL;
  _userActionOccured: Subject<void> = new Subject();

  get userActionOccured(): Observable<void> { 
      return this._userActionOccured.asObservable() 
  };

  public notifyUserAction() {
    this._userActionOccured.next();
  }

  public timesUp() {
    console.log('Times Up');
  }

  constructor(private _http: HttpClient, private _router:Router) {}


  public getDecodedAccessToken(token: string): any {
    try{
      const helper = new JwtHelperService();
      const decoded= helper.decodeToken(token);
      return decoded;
    }
    catch(Error){
        return null;
    }
  }

  public getSessionStorageItem(cle:string):string{
    return sessionStorage.getItem(cle);
  }

  public setSessionStorageItem(cle:string, valeur:string):void{
    sessionStorage.setItem(cle, valeur);
  } 

  private errorHandler(error: HttpErrorResponse){
      let errorMsg:string = '';
      if(error.status === 404){
        errorMsg = "Ressource introuvable !";
      }else if(error.status === 401){
        errorMsg = "Accès non autorisé !";
      }else if(error.status === 500){
        errorMsg = "Erreur serveur !";
      }else if(error.status === 0){
        errorMsg = "Serveur injoignable !";
      }
      return throwError(errorMsg || error.message);
  }

  public login(username:string, password:string ):Observable<any> {
    return this._http.post(` ${ this.ROOT_URL }/login`, {"login":username, "password":password})
               .pipe(
                    tap((data) => {
                        this.setSessionStorageItem('token', data['token']);
                        this.setSessionStorageItem('refresh_token', data['refresh_token']);
                        // this.setSessionStorageItem('username', username);
                    }),
                    catchError(this.errorHandler)
                 );
  }

  public logout() {
    sessionStorage.removeItem('token');
    // sessionStorage.removeItem('username');
    sessionStorage.removeItem('utilisateurInactif');
    sessionStorage.removeItem('refresh_token');
    this._router.navigate(['/login']);
  }


  public refreshToken():Observable<any> {
    return this._http.post(`${this.ROOT_URL}/token/refresh`, { 'refresh_token': sessionStorage.getItem('refresh_token') }).pipe(
      tap((res) => {
        this.setSessionStorageItem('token', res['token']);
        this.setSessionStorageItem('refresh_token', res['refresh_token']);
      }),
      catchError((error) =>{
        return throwError(error);
      })
    )
  }

  public isLoggedIn() {
      return sessionStorage.getItem('token') !== null;
  }

  public isLoggedOut() {
      return !this.isLoggedIn();
  }
}

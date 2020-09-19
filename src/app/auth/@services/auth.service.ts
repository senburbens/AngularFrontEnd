import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _url:string = 'http://localhost:8000/api/login';

  private _JWT_token:string = '';
  private identifiant:string = '';
  private roles:string[] = [];

  _userActionOccured: Subject<void> = new Subject();
  get userActionOccured(): Observable<void> { return this._userActionOccured.asObservable() };

  notifyUserAction() {
    this._userActionOccured.next();
  }

  loginUser() {
    console.log('user login');
  }

  logOutUser() {
    console.log('user logout');
  }

  constructor(private _http: HttpClient) {
  }

  public getJwtToken():string{
    return this._JWT_token;
  }

  public setJwtToken(token:string):void{
    this._JWT_token = token;
  }

  public getIdentifiant():string{
    return this.identifiant;
  }

  public setIdentifiant(identifiant:string):void{
    this.identifiant = identifiant;
  }

  public setSessionStorageItem(cle:string, valeur:string):void{
    console.log(cle, valeur);
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
    return this._http.post(this._url, {"login":username, "password":password})
               .pipe(catchError(this.errorHandler));
        //.do(res => this.setSession) 
        //.shareReplay();
  }

  public logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');

    this.setIdentifiant('');
    this.setJwtToken('');
    sessionStorage.removeItem('utilisateurInactif');
  }

  public isLoggedIn() {
      //return moment().isBefore(this.getExpiration());
      return sessionStorage.getItem('token') !== null;
  }

  public isLoggedOut() {
      return !this.isLoggedIn();
  }
      
  /*   private setSession(authResult) {
      const expiresAt = moment().add(authResult.expiresIn,'second');
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }*/       


  /*public getExpiration() {
      const expiration = localStorage.getItem("expires_at");
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
  }*/
}

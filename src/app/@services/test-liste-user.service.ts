import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../auth/@models/user';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TestListeUserService {

  _url:string = 'http://localhost:8000/api/users';

  constructor(private _http: HttpClient) { }

  private errorHandler(error: HttpErrorResponse){
    let errorMsg:string = '';
    if(error.status === 404){
      errorMsg = "Erreur 404 : ressource introuvable !"
    }
    return throwError(errorMsg || error.message);
  }

  public getListeUsers(): Observable<User[]> {
    return this._http.get<User[]>(this._url)
               .pipe(catchError(this.errorHandler));
  }
}

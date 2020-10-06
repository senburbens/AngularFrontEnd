import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { constants } from '../app.constant';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FormulaireDynamiqueService {  

  private ROOT_URL = constants.ROOT_URL;

  constructor(private _http: HttpClient) { }


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

  getFormulaire(): Observable<any> {
    return this._http.get<any>(`${ this.ROOT_URL }/test`).pipe(
      tap((data) => {
          console.log('From service : ', data);
      }),
      catchError(this.errorHandler)
    );
  }
}

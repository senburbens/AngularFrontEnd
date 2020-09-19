import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class JqxService { 
  _url:string = 'http://10.9.8.200:8000/api/evenements';

  constructor(private _http: HttpClient) { }

  private errorHandler(error: HttpErrorResponse){
    let errorMsg:string = '';
    if(error.status === 404){
      errorMsg = "Erreur 404 : ressource introuvable !"
    }
    return throwError(errorMsg || error.message);
}

  public getListe(): Observable<any[]> {
    return this._http.get<any[]>(this._url)
               .pipe(catchError(this.errorHandler));
  }
}
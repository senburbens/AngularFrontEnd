import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parameters } from '../models/parameters';
import { Observable, throwError  } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ParametersService {
  
  private _url = 'http://localhost:8000/api/parameters?code_param=';

  constructor(private _http: HttpClient) {}

  getParameter(parameterCode: string): Observable<any> {
    this._url = this._url + parameterCode;
    return this._http.get<any>(this._url);
    // return 'V' || 1 ? false : false;
  }
}

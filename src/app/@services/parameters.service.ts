import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ParametersService {  
  private _url = 'http://localhost:8000/api/parameters';

  constructor(private _http: HttpClient) {
  }

  getParameter(parameterCode: string): Observable<any> {

    let params = new HttpParams().set('code_param', parameterCode);

    console.log(this._url);
    return this._http.get<any>(this._url, { params: params });
  }
}

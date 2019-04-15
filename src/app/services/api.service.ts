import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { StringHandlerService } from '../services/string-handler.service';
import { AlertService } from '../services/alert.service';
import { IUnits } from '../interfaces';
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, public stringHandlerService: StringHandlerService, private alertService: AlertService) { }

  getUnitsList(): Observable<IUnits> {
    const unitsAPI = this.stringHandlerService.getUnitsAPI();
    return this.http.get(unitsAPI, httpOptions).pipe(
      map((res: any) =>  res),
      catchError(this.handleError<any>('getUnitsList'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.alertService.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

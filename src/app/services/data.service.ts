import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { catchError, Observable } from 'rxjs';
import { ApiResponse } from '../types/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = environment.apiUrl;
  private apiToken = environment.apiToken;

  constructor(private http: HttpClient) {}

  getData(id: string): Observable<ApiResponse> {
    return this.http
      .get<ApiResponse>(this.apiUrl + '/linklistfy/store/' + id, {
        headers: {
          'X-API-Sweep-Key': this.apiToken,
        },
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.log('An error ocurred', error);
    throw error;
  }
}

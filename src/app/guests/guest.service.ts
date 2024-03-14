import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guest } from './types';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private _apiUrl = environment.api.baseUrl + 'guests'

  constructor(private http: HttpClient) { }

  search(q?: string): Observable<Guest[]> {
    return this.http.get<Guest[]>(this._apiUrl);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from './types';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private _apiUrl = environment.api.baseUrl + 'hotels';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this._apiUrl);
  }
}

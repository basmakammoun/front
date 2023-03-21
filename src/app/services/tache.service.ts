import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../config/globals';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private http: HttpClient) { }

  /*getAlltache(): Observable<any> {
    return this.http.get(API_URL + 'taches');
  }

  gettacheById(id): Observable<any> {
    return this.http.get(API_URL + `taches/${id}`);
  }

  addtache(object): Observable<any> {
    return this.http.post(API_URL + 'taches', object);
  }

  deletetache(id): Observable<any> {
    return this.http.delete(API_URL + `taches/${id}`);
  }

  updatetache(id, object): Observable<any> {
    return this.http.put(API_URL + `taches/${id}`, object);
  }*/
}

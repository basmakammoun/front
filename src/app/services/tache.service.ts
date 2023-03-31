import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../config/globals';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private http: HttpClient) { }

  getAllTache(): Observable<any> {
    return this.http.get(API_URL + 'taches');
  }

  getTacheById(id : any): Observable<any> {
    return this.http.get(API_URL + `taches/${id}`);
  }

  addTache(object: any): Observable<any> {
    return this.http.post(API_URL + 'taches', object);
  }

  deleteTache(id: any): Observable<any> {
    return this.http.delete(API_URL + `taches/${id}`);
  }

  updateTache(id: any, object: any): Observable<any> {
    return this.http.put(API_URL + `taches/${id}`, object);
  }
}

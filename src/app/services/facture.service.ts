import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../config/globals';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private http: HttpClient) { }

  /*getAllFacture(): Observable<any> {
    return this.http.get(API_URL + 'Factures');
  }

  getFactureById(id): Observable<any> {
    return this.http.get(API_URL + `Factures/${id}`);
  }

  addFacture(object): Observable<any> {
    return this.http.post(API_URL + 'Factures', object);
  }

  deleteFacture(id): Observable<any> {
    return this.http.delete(API_URL + `Factures/${id}`);
  }

  updateFacture(id, object): Observable<any> {
    return this.http.put(API_URL + `Factures/${id}`, object);
  }*/
}

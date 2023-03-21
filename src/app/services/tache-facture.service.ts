import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../config/globals';

@Injectable({
  providedIn: 'root'
})
export class TacheFactureService {

  constructor(private http: HttpClient) { }

  /*getAllTaches_factures(): Observable<any> {
    return this.http.get(API_URL + 'taches_factures');
  }

  getTaches_facturesById(id): Observable<any> {
    return this.http.get(API_URL + `taches_factures/${id}`);
  }

  addTaches_factures(object): Observable<any> {
    return this.http.post(API_URL + 'v', object);
  }

  deleteTaches_factures(id): Observable<any> {
    return this.http.delete(API_URL + `taches_factures/${id}`);
  }

  updateTaches_factures(id, object): Observable<any> {
    return this.http.put(API_URL + `taches_factures/${id}`, object);
  }*/
}

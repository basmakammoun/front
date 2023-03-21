import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../config/globals';

@Injectable({
  providedIn: 'root'
})
export class TachePersonnelService {

  constructor(private http: HttpClient) { }

  /*getAllTaches_personnels(): Observable<any> {
    return this.http.get(API_URL + 'taches_personnels');
  }

  getTaches_personnelsById(id): Observable<any> {
    return this.http.get(API_URL + `taches_personnels/${id}`);
  }

  addTaches_personnels(object): Observable<any> {
    return this.http.post(API_URL + 'taches_personnels', object);
  }

  deleteTaches_personnels(id): Observable<any> {
    return this.http.delete(API_URL + `taches_personnels/${id}`);
  }

  updateTaches_personnels(id, object): Observable<any> {
    return this.http.put(API_URL + `taches_personnels/${id}`, object);
  }*/
}

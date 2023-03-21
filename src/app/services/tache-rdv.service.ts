import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../config/globals';

@Injectable({
  providedIn: 'root'
})
export class TacheRdvService {

  constructor(private http: HttpClient) { }

  /*getAllTaches_rdvs(): Observable<any> {
    return this.http.get(API_URL + 'taches_rdvs');
  }

  getTaches_rdvsById(id): Observable<any> {
    return this.http.get(API_URL + `taches_rdvs/${id}`);
  }

  addTaches_rdvs(object): Observable<any> {
    return this.http.post(API_URL + 'taches_rdvs', object);
  }

  deleteTaches_rdvs(id): Observable<any> {
    return this.http.delete(API_URL + `taches_rdvs/${id}`);
  }

  updateTaches_rdvs(id, object): Observable<any> {
    return this.http.put(API_URL + `taches_rdvs/${id}`, object);
  }*/
}

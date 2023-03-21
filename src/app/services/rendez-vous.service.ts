import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../config/globals';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  constructor(private http: HttpClient) { }

  /*getAllRendez_vous(): Observable<any> {
    return this.http.get(API_URL + 'rendez_vouss');
  }

  getRendez_vousById(id): Observable<any> {
    return this.http.get(API_URL + `rendez_vouss/${id}`);
  }

  addRendez_vous(object): Observable<any> {
    return this.http.post(API_URL + 'rendez_vouss', object);
  }

  deleteRendez_vous(id): Observable<any> {
    return this.http.delete(API_URL + `rendez_vouss/${id}`);
  }

  updateRendez_vous(id, object): Observable<any> {
    return this.http.put(API_URL + `rendez_vouss/${id}`, object);
  }*/
}

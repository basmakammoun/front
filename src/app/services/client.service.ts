import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../config/globals';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  /*getAllClient(): Observable<any> {
    return this.http.get(API_URL + 'Clients');
  }

  getClientById(id): Observable<any> {
    return this.http.get(API_URL + `Clients/${id}`);
  }

  addClient(object): Observable<any> {
    return this.http.post(API_URL + 'Clients', object);
  }

  deleteClient(id): Observable<any> {
    return this.http.delete(API_URL + `Clients/${id}`);
  }

  updateClient(id, object): Observable<any> {
    return this.http.put(API_URL + `Clients/${id}`, object);
  }*/
}

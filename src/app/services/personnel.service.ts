import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../config/globals';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  constructor(private http: HttpClient) { }

  getAllPersonnel(): Observable<any> {
    return this.http.get(API_URL + 'personnels');
  }

  addPersonnel(object : any): Observable<any> {
      return this.http.post(API_URL + 'personnels', object);
    }
  /*getPersonnelById(id): Observable<any> {
    return this.http.get(API_URL + `personnels/${id}`);
  }

  

  deletePersonnel(id): Observable<any> {
    return this.http.delete(API_URL + `personnels/${id}`);
  }

  updatePersonnel(id, object): Observable<any> {
    return this.http.put(API_URL + `personnels/${id}`, object);
  }*/

}
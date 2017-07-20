import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
 import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppServicesService {

  constructor(private http: Http) { }

  create(url, data): Observable<any> {
    return this.http.post(url, data)
    .map(res => {
      return res.json();
    },
    error => {
      console.log(error);
    });
  }

  get(url): Observable<any> {
    return this.http.get(url);
  }

  getBy(url, id): Observable<any> {
    return this.http.get(`${url}/${id}`)
    .map(res => {
      return res.json();
    },
    error => {
      console.log(error);
    })
  }
}

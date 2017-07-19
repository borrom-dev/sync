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
      console.log(res.json());
    },
    error => {
      console.log(error);
    });
  }

  get(url): Observable<any> {
    return this.http.get(url);
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppServicesService {

  constructor(private http: Http) { }
}

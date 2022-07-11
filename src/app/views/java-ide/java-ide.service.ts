import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JavaIdeService {

  constructor(private http: HttpClient) { }

  executeJavaCode(javaClass: string): Observable<any> {
    return this.http.post('//localhost:8080/vaya-api/run-java-class/', javaClass)
  }
}

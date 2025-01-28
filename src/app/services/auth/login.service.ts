import { AppComponent } from './../../app.component';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from './login.request';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {   }

  login(credentials:LoginRequest):Observable<any>{
  return this.http.get<any>("/assets/data.json");


  }

}

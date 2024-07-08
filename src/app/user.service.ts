import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private Urls = 'htpp://127.0.0.1:5000';


  constructor(private http:HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.Urls}/login`, {correo: email, password: password});
    }
}

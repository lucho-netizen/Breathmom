import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private TOKETN_KEY = '%TGBNME.9';

  private apiUrl = 'http://127.0.0.1:5000'; // Ajusta la URL del backend según tu configuración

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/login`, { correo: email, password: password });
  }

  getToken(): string | null  {
    return localStorage.getItem(this.TOKETN_KEY);
  }

  setToken(token: string):void {
    localStorage.setItem(this.TOKETN_KEY, token);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logout(): void {
    localStorage.removeItem(this.TOKETN_KEY);
  }

}

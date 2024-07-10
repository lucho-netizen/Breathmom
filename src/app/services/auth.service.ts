import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private TOKETN_KEY = '%TGBNME.9';

  private apiUrl = 'http://127.0.0.1:5000'; // Ajusta la URL del backend según tu configuración

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/login`, { correo: email, password: password });
  }

  addUser(
    nombre: string,
    apellido: string,
    tipo_documento: string,
    phone_number: number,
    identification: number,
    email: string,
    edad: number,
    peso: number,
    password: string,
    id_role: number,
    estado: number){
      return this.http.post<any>(`${this.apiUrl}/adduser`, {
        nombre: nombre, 
        apellido: apellido,
        tipo_documento: tipo_documento,
        celular: phone_number, 
        identificacion: identification, 
        edad: edad,
        peso: peso,
        correo: email,
        password: password,
        id_role: id_role, 
        estado: estado
      });
    }

  getToken(): string | null {
    return localStorage.getItem(this.TOKETN_KEY);
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKETN_KEY, token);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logout(): void {
    localStorage.removeItem(this.TOKETN_KEY);
  }

}

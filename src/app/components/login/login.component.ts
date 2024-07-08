import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: '../../../assets/css/login.css'
})
export class LoginComponent  {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}
  
  onSubmit(): void {
      
        const email = this.email;
        const password = this.password
      
        this.http.post<any>('http://127.0.0.1:5000/login', { correo: this.email, password: this.password })
      .subscribe(
        (response) => {
          // Manejar la respuesta exitosa
          if (response && response.message === 'Usuario encontrado') {
            localStorage.setItem('token', this.email.toString()); // Guardar el token en localStorage si está disponible
            this.router.navigate(['/dashboard']);
          } else {
            // Respuesta inválida del servidor
            this.errorMessage = 'Respuesta inválida del servidor';
          }
        },
        (error) => {
          // Manejar errores de HTTP
          if (error.status === 401) {
            this.errorMessage = 'Credenciales inválidas';
          } else if (error.status === 404) {
            this.errorMessage = 'Usuario no encontrado';
          } else {
            this.errorMessage = 'Error en el servidor. Por favor, inténtelo de nuevo más tarde.';
          }
        }
      );
  }
}


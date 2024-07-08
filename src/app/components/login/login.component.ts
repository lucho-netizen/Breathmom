import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { UserService } from '../../user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: '../../../assets/css/login.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  // constructor(private http: HttpClient, private router: Router) {}

  // onSubmit(): void {

  //       const email = this.email;
  //       const password = this.password

  //       this.http.post<any>('http://127.0.0.1:5000/login', { correo: this.email, password: this.password })
  //     .subscribe(
  //       (response) => {
  //         // Manejar la respuesta exitosa
  //         if (response && response.message === 'Usuario encontrado') {
  //           localStorage.setItem('token', response.token); // Guardar el token en localStorage si está disponible
  //           this.router.navigate(['/dashboard']);
  //         } else {
  //           // Respuesta inválida del servidor
  //           this.errorMessage = 'Respuesta inválida del servidor';
  //         }
  //       },
  //       (error) => {
  //         // Manejar errores de HTTP
  //         if (error.status === 401) {
  //           this.errorMessage = 'Credenciales inválidas';
  //         } else if (error.status === 404) {
  //           this.errorMessage = 'Usuario no encontrado';
  //         } else {
  //           this.errorMessage = 'Error en el servidor. Por favor, inténtelo de nuevo más tarde.';
  //         }
  //       }
  //     );
  // }

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  onSubmit(): void {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password)
        .subscribe(
          (response: any) => {
            if (response && response.token) {
              this.authService.setToken(response.token); // Guarda el token utilizando AuthService
              this.router.navigate(['/dashboard']); // Redirige al dashboard después del login exitoso
            } else {
              this.errorMessage = 'Credenciales inválidas'; // Mensaje de error si las credenciales son incorrectas
            }
          },
          (error) => {
            console.error('Error en el login:', error);
            this.errorMessage = 'Error en el servidor. Por favor, inténtelo de nuevo más tarde.'; // Manejo de errores HTTP
          }
        );
    } else {
      this.errorMessage = 'Por favor, ingrese su correo electrónico y contraseña.';
    }
  }
}
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
      const formData = {
        email: this.email,
        password: this.password
      };
      
      this.http.post<any>('http://127.0.0.1:5000/login', formData).subscribe(
        (response) => {
          console.log('ok', response)
          // this.router.navigate(['/dashboard'])
        },
        (error)=> {
          console.error('Error al iniciar sesión:', error);
          this.router.navigate(['/login'])
          this.errorMessage = 'Invalid credentials';
        }
      )
    }
  
}


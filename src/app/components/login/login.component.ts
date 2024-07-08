import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: '../../../assets/css/login.css'
})
export class LoginComponent implements OnInit {

  userLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router  // Import router from Angular Router module
  ){
    this.userLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  
  ngOnInit(): void {}

  onSubmit(): void {
    if (this.userLogin.valid) {
      this.http.post('http://127.0.0.1:5000/login', this.userLogin.value).subscribe(
        (response: any) => {
          if (response === 'Usuario encontrado') {
            this.router.navigate(['/dashboard']);
          } else {
            console.error('Error al iniciar sesión:', response);
            alert('Correo o contraseña incorrectos.');
          }
        },
        error => {
          console.error('Error al iniciar sesión:', error);
        }
      );
    }
  }
}


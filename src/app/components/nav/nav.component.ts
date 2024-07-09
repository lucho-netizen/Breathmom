import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: '../../../assets/css/nav.css'
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']); // Redirigir al componente de home si está logueado
    } else {
      this.router.navigate(['/login']); // Redirigir al componente de login si no está logueado
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/logout']); // Redirigir al componente de logout
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}

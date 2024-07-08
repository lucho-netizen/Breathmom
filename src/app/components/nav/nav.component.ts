import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: '../../../assets/css/nav.css'
})
export class NavComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/logout']); // Redirigir al componente de logout
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AdminAuthService } from '../../services/admin-auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: '../../../assets/css/nav.css'
})export class NavComponent  {

  // constructor(
  //   private authService: AuthService,
  //   private adminAuthService: AdminAuthService,
  //   private router: Router) { }

  // ngOnInit(): void {
  //   if (this.authService.isLoggedIn()) {
  //     if (this.adminAuthService.isLoggedInAdmin()) {
  //       this.router.navigate(['/admin']); // Redirigir al admin si es administrador
  //     } else {
  //       this.router.navigate(['/dashboard']); // Redirigir al dashboard si es usuario normal
  //     }
  //   } else {
  //     this.router.navigate(['/login']); // Redirigir al login si no está logueado
  //   }
  // }

  // logout(): void {
  //   this.authService.logout();
  //   this.router.navigate(['/login']); // Redirigir al login después de cerrar sesión
  // }

  // isLoggedIn(): boolean {
  //   return this.authService.isLoggedIn();
  // }
}

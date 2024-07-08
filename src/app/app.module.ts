import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdduserComponent } from './components/adduser/adduser.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoutComponent } from './components/logout/logout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AdduserComponent,
    LoginComponent,
    AdminComponent,
    ChatbotComponent,
    FooterComponent,
    LogoutComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'adduser', component: AdduserComponent },  // Asegúrate de tener estos componentes
      { path: 'admin', component: AdminComponent },  // Asegúrate de tener estos componentes
      { path: 'dashboard', component: DashboardComponent },  // Ruta de redirección después del login exitoso
      { path: '', redirectTo: '/login', pathMatch: 'full' }
    ])

  ],

  bootstrap: [AppComponent],

  providers: [
    provideAnimationsAsync()

  ]
})
export class AppModule { }

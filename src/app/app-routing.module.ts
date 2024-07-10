import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardadminComponent } from './components/dashboardadmin/dashboardadmin.component';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';

// Security for admin 

import {AdminAuthGuard } from './admin-auth/admin-auth.guard'

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'index', component: AppComponent },
  { path: 'nav', component: NavComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'dashboardadmin', component: DashboardadminComponent, canActivate: [AdminAuthGuard], data: {title: 'Dashboard'}} ,
  { path: 'logout', component: LogoutComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'chatbot', component: ChatbotComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

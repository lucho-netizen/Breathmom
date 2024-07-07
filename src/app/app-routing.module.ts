import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'nav', component: NavComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'logout', component: LogoutComponent},
  { path: 'adduser', component: AdduserComponent },
  { path: 'chatbot', component: ChatbotComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

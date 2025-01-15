import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { JobManagementComponent } from './job-management/job-management.component';
import { CandManagementComponent } from './cand-management/cand-management.component';
import { SignUpComponent } from './sign-Up/sign-up.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'job-management', component: JobManagementComponent },
  { path: 'candidate-management', component: CandManagementComponent },
  { path: 'sign-up', component: SignUpComponent }
  // { path: 'home', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

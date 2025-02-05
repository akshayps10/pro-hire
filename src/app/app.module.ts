import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { JobManagementComponent } from './job-management/job-management.component';
import { CandManagementComponent } from './cand-management/cand-management.component';
import { SignUpComponent } from './sign-Up/sign-up.component';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    HeaderComponent,
    SidebarComponent,
    JobManagementComponent,
    CandManagementComponent,
    SignUpComponent,
    AboutComponent,
    SettingsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule , ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

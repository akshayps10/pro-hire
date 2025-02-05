import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';  // ✅ Fixed import path

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData = {
    email: '',
    password: '',
  };

  constructor(
    private http: HttpClient, 
    private router: Router,  
    private userService: UserService  // ✅ Injected UserService to store user data
  ) {}

  onSubmit() {
    console.log('Login Data:', this.loginData); // ✅ Debugging: Log entered credentials

    this.http.post<any>('https://prohirebackend.onrender.com/api/login', this.loginData).subscribe(
      (response) => {
        console.log('Login successful', response);

        // ✅ Store authentication token in localStorage
        localStorage.setItem('token', response.token);

        // ✅ Store user details in UserService so they persist across components
        this.userService.setUser(response.user);  

        // ✅ Redirect user to the candidate management page
        this.router.navigate(['/candidate-management']);

        alert('Login Successful!');
      },
      (error) => {
        console.error('Login failed', error); // ✅ Log error for debugging
        alert('Login Failed! Please check your credentials.'); // ✅ Show user-friendly message
      }
    );
  }
}

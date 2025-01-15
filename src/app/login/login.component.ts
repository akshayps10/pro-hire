import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router

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

  constructor(private http: HttpClient, private router: Router) {} // Inject Router service

  onSubmit() {
    console.log('Login Data:', this.loginData);

    // Send login request to the backend
    this.http.post<any>('http://localhost:3000/api/login', this.loginData).subscribe(
      (response) => {
        console.log('Login successful', response);

        // Store the JWT token in localStorage (or sessionStorage)
        localStorage.setItem('token', response.token);

        // Redirect to the dashboard or home page after successful login
        this.router.navigate(['/candidate-management']); // Change to your target page

        alert('Login Successful!');
      },
      (error) => {
        console.error('Login failed', error);
        alert('Login Failed! Please check your credentials.');
      }
    );
  }
}

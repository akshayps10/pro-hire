import { Component } from '@angular/core';

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

  onSubmit() {
    console.log('Login Data:', this.loginData);
    // Add authentication logic here
    alert('Login Successful!');
  }

}

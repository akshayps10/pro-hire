import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signUpData = {
    name: '',
    email: '',
    password: '',
  };

  // Inject HttpClient in the constructor
  constructor(private http: HttpClient) {}

  onSubmit() {
    console.log('Sign-Up Data:', this.signUpData);


    // Call the backend API to store the sign-up data
    this.http.post('http://localhost:3000/api/signup', this.signUpData)
      .subscribe(
        (response) => {
          alert('Sign-Up Successful!');
          console.log(response);
        },
        (error) => {
          if (error.status === 400) {
            alert('Sign-Up Failed: ' + error.error.message);
          } else {
            alert('Sign-Up Failed: Server error. Please try again later.');
          }
          console.error(error);
        }
      );
  }
}

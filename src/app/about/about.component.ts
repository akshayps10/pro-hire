import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  mission: string;
  whatWeDo: string;
  values: string[];
  contactEmail: string;

  constructor() {
    // Initialize properties
    this.mission = "Our mission is to simplify the hiring process for both candidates and employers, ensuring a seamless experience for all parties involved.";
    this.whatWeDo = "We provide a comprehensive platform for job seekers to find opportunities that match their skills and for employers to discover the best talent available.";
    this.values = [
      "Integrity: We believe in honest and transparent practices.",
      "Innovation: We strive to stay ahead with the latest technology and trends.",
      "Community: We are committed to building a supportive community for job seekers and employers alike."
    ];
    this.contactEmail = "info@example.com";
  }

  ngOnInit(): void {
    // Any additional initialization logic can go here
  }
}
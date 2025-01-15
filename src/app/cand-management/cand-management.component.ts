import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cand-management',
  templateUrl: './cand-management.component.html',
  styleUrls: ['./cand-management.component.css'],
})
export class CandManagementComponent implements OnInit {
  candidates: any[] = [];
  jobs: any[] = [
    { title: 'Software Engineer' },
    { title: 'Product Manager' },
    { title: 'Graphic Designer' },
    { title: 'HR Specialist' },
  ];
  showCandidateModal = false;
  candidateForm!: FormGroup;

  // Backend API URL
  apiUrl = 'http://localhost:3000/candidates';

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.candidateForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      appliedPosition: ['', Validators.required],
      isFresher: [false],
      profilePicture: [null],
      resume: [null],
    });

    // Fetch all candidates on load
    this.getCandidates();
  }

  // Fetch all candidates from backend
  getCandidates(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => (this.candidates = data),
      (error) => console.error('Error fetching candidates:', error)
    );
  }

  // Open the modal to create a new candidate
  openCandidateModal(): void {
    if (!this.showCandidateModal) {
      this.candidateForm.reset();
      this.showCandidateModal = true;
    }
  }

  // Close the modal
  closeCandidateModal(): void {
    this.showCandidateModal = false;
  }

  // Create a new candidate and send it to the backend
  createCandidate(): void {
    if (this.candidateForm.valid) {
      const formData = new FormData();
      const formValue = this.candidateForm.value;

      formData.append('firstName', formValue.firstName);
      formData.append('lastName', formValue.lastName);
      formData.append('email', formValue.email);
      formData.append('phoneNo', formValue.phoneNo);
      formData.append('appliedPosition', formValue.appliedPosition);
      formData.append('isFresher', formValue.isFresher.toString());

      if (formValue.profilePicture) {
        formData.append('profilePicture', formValue.profilePicture);
      }
      if (formValue.resume) {
        formData.append('resume', formValue.resume);
      }

      this.http.post(this.apiUrl, formData).subscribe(
        (response) => {
          alert('Candidate created successfully!');
          this.getCandidates();
          this.closeCandidateModal();
        },
        (error) => console.error('Error creating candidate:', error)
      );
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }

  // Delete a candidate by ID
  deleteCandidate(candidateId: string): void {
    if (confirm('Are you sure you want to delete this candidate?')) {
      this.http.delete(`${this.apiUrl}/${candidateId}`).subscribe(
        () => {
          alert('Candidate deleted successfully!');
          this.getCandidates();
        },
        (error) => console.error('Error deleting candidate:', error)
      );
    }
  }

  // Get form controls for validation
  get f() {
    return this.candidateForm.controls;
  }
}

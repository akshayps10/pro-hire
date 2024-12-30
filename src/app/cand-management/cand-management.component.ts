import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cand-management',
  templateUrl: './cand-management.component.html',
  styleUrls: ['./cand-management.component.css']
})
export class CandManagementComponent implements OnInit {

  candidates: any[] = [];

  // Variable to store available jobs for the dropdown
  jobs: any[] = [
    { title: 'Software Engineer' },
    { title: 'Product Manager' },
    { title: 'Graphic Designer' },
    { title: 'HR Specialist' }
  ];

  // Boolean to manage the modal visibility
  showCandidateModal = false;

  // FormGroup for candidate creation
  candidateForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form with validations
    this.candidateForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      appliedPosition: ['', Validators.required],
      isFresher: [false],
      profilePicture: [null],
      resume: [null]
    });
  }

  // Open the modal to create a new candidate
  openCandidateModal(): void {
    this.showCandidateModal = true;
  }

  // Close the modal
  closeCandidateModal(): void {
    this.showCandidateModal = false;
  }

  // Create a new candidate and add to the candidates list
  createCandidate(): void {
    if (this.candidateForm.valid) {
      const newCandidate = this.candidateForm.value;
      newCandidate.id = this.candidates.length + 1; // Assign an ID (you can modify this if needed)

      // Optionally, you could handle file uploads here (e.g., profile picture, resume)

      // Add the new candidate to the candidates array
      this.candidates.push(newCandidate);

      // Reset the form and close the modal
      this.candidateForm.reset();
      this.closeCandidateModal();
    } else {
      // If the form is invalid, show validation errors (you can handle this in a user-friendly way)
      alert('Please fill all the required fields correctly.');
    }
  }

  // Delete a candidate from the candidates list
  deleteCandidate(index: number): void {
    if (confirm('Are you sure you want to delete this candidate?')) {
      this.candidates.splice(index, 1);
    }
  }

  // Get the form control for displaying validation messages (optional)
  get f() {
    return this.candidateForm.controls;
  }
}

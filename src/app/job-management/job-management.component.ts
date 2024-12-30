import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-management',
  templateUrl: './job-management.component.html',
  styleUrls: ['./job-management.component.css'],
})
export class JobManagementComponent {
  showModal = false;
  jobForm: FormGroup;
  jobs: any[] = [];

  constructor(private fb: FormBuilder) {
    this.jobForm = this.fb.group({
      title: ['', [Validators.required]],
      department: ['', [Validators.required]],
      tillDate: ['', [Validators.required]],
    });
  }

  openJobModal() {
    this.showModal = true;
  }

  closeJobModal() {
    this.showModal = false;
  }

  createJob() {
    if (this.jobForm.valid) {
      const newJob = {
        title: this.jobForm.get('title')?.value,
        department: this.jobForm.get('department')?.value,
        createdDate: new Date(),
        tillDate: this.jobForm.get('tillDate')?.value,
      };
      this.jobs.push(newJob);
      this.jobForm.reset();
      this.closeJobModal();
    } else {
      alert('Please fill in all fields.');
    }
  }

  deleteJob(index: number) {
    this.jobs.splice(index, 1);
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-management',
  templateUrl: './job-management.component.html',
  styleUrls: ['./job-management.component.css'],
})
export class JobManagementComponent {
  showModal = false;
  jobForm: FormGroup;
  jobs: any[] = [];
  apiUrl = 'https://prohirebackend.onrender.com/jobs'; // Backend API URL

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.jobForm = this.fb.group({
      title: ['', [Validators.required]],
      department: ['', [Validators.required]],
      tillDate: ['', [Validators.required]],
    });

    this.loadJobs();
  }

  openJobModal() {
    this.showModal = true;
  }

  closeJobModal() {
    this.showModal = false;
  }

  createJob() {
    if (this.jobForm.valid) {
      const newJob = this.jobForm.value;
      this.http.post(this.apiUrl, newJob).subscribe(
        (response: any) => {
          this.jobs.push(response.job); // Update UI
          this.jobForm.reset();
          this.closeJobModal();
        },
        (error) => {
          alert('Error creating job');
          console.error(error);
        }
      );
    } else {
      alert('Please fill in all fields.');
    }
  }

  loadJobs() {
    this.http.get(this.apiUrl).subscribe(
      (response: any) => {
        this.jobs = response;
      },
      (error) => {
        console.error('Error loading jobs', error);
      }
    );
  }

  deleteJob(index: number, jobId: string) {
    this.http.delete(`${this.apiUrl}/${jobId}`).subscribe(
      () => {
        this.jobs.splice(index, 1);
      },
      (error) => {
        alert('Error deleting job');
        console.error(error);
      }
    );
  }
}

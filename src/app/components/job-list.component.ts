import {Component, OnInit} from '@angular/core';
import {JobService} from '../services/job.service';
import {Job} from '../models/job.model';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private jobService: JobService) {
  }

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe((data: Job[]) => {
      this.jobs = data;
    });
  }
}

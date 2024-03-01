import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/Service/jobs.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  jobs: any[] = []
  constructor(private jobService:JobService){
    
  }

  ngOnInit(): void {
    this.jobService.getJobs().then((res: any) => {
      if (res)
      this.jobs = res
    });

}}

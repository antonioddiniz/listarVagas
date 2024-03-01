import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/Service/jobs.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent implements OnInit {

  jobs: any[] = []
  constructor(private jobService:JobService){
    
  }

  ngOnInit(): void {
    this.jobService.getJobs().then((res: any) => {
      if (res)
      this.jobs = res
    });
  }

}

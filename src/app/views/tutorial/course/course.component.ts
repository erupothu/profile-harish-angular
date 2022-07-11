import { Component, OnInit, ViewChild } from '@angular/core';
import { TutorialService } from '../tutorial.service';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute, Router } from '@angular/router';
import { AnalyticsService } from '../../reports/analytics/analytics.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @ViewChild('stepper') stepper: MatStepper;
  course: any;
  couseContent: any;
  courseId: any;
  constructor(private tutorialService: TutorialService, private route: ActivatedRoute, private as: AnalyticsService, private router: Router) { }

  ngOnInit(): void {
    // this.as.saveVisitorsData(this.router.url);
    // this.couseContent = this.tutorialService.course[0].chapters;
    this.route.queryParamMap.subscribe(data => {
      this.courseId = data['params']['courseId'];
      if (this.courseId > 0) {
        const mydata = this.tutorialService.course.filter(data => data.id == this.courseId);
        this.couseContent = mydata[0].chapters;
      }
    });
  }

  goBack() {
    this.stepper.previous();
  }

  goForward() {
    this.stepper.next();
  }


}

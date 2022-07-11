import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsService } from '../reports/analytics/analytics.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  constructor(private as: AnalyticsService, private router: Router) {
  }

  ngOnInit() {
    this.as.saveVisitorsData();
  }

}

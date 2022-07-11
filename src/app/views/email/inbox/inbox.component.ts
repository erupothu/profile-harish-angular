import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsService } from '../../reports/analytics/analytics.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  checkbox: false;
 constructor(private as: AnalyticsService, private router: Router) {
  }

  ngOnInit() {
    this.as.saveVisitorsData();
  }

}

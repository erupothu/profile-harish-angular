import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsService } from '../reports/analytics/analytics.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

 constructor(private as: AnalyticsService, private router: Router) {
  }

  ngOnInit() {
    this.as.saveVisitorsData();
  }

}

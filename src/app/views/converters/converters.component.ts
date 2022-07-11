import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../reports/analytics/analytics.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-converters',
  templateUrl: './converters.component.html',
  styleUrls: ['./converters.component.css']
})
export class ConvertersComponent implements OnInit {

   constructor(private as: AnalyticsService, private router: Router) {
  }

  ngOnInit() {
    this.as.saveVisitorsData();
  }

}

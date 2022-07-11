import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsService } from '../reports/analytics/analytics.service';

@Component({
  selector: 'app-e-cart',
  templateUrl: './e-cart.component.html',
  styleUrls: ['./e-cart.component.css']
})
export class ECartComponent implements OnInit {

 constructor(private as: AnalyticsService, private router: Router) {
  }

  ngOnInit() {
    this.as.saveVisitorsData();
  }

}

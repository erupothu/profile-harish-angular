import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsService } from '../analytics/analytics.service';


@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {

  selectYear = ['2017', '2018', '2019', '2020'];
  selectedyear: any;
  tabColor = 'primary';

  constructor(private as: AnalyticsService, private router: Router) {
  }

  ngOnInit() {
    this.as.saveVisitorsData();
  }
  

}

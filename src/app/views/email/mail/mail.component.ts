import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../reports/analytics/analytics.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  constructor(private as: AnalyticsService, private router: Router) {
  }

  ngOnInit() {
    // this.as.saveVisitorsData(this.router.url);
  }

}

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { AnalyticsService } from '../reports/analytics/analytics.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  @ViewChild('authSideNav') sideNav: ElementRef;

  hide = false;
  constructor(public authService: AuthenticationService,private as: AnalyticsService, private router: Router) { }

  ngOnInit(): void {
    this.as.saveVisitorsData();
  }

  ngAfterViewInit() {
    this.authService.authSideNav = this.sideNav;
  }

}

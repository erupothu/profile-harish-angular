import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import {PpBreadcrumbsService, Breadcrumb} from 'pp-breadcrumbs';
import { Router } from '@angular/router';
import { AnalyticsService } from '../reports/analytics/analytics.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

   myhtml = `<span class="my-class"> Hello </span>`;

  code = `function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello there!";
  document.getElementById("demo2").innerHTML = "How are you?";
}`;

  
  constructor(private breadcrumbsService: PpBreadcrumbsService,private as: AnalyticsService, private router: Router) { }

  ngOnInit(): void {
    this.as.saveVisitorsData();
     this.breadcrumbsService.postProcess = (breadcrumbs: Breadcrumb[]) => {
      if (breadcrumbs.length) {
        breadcrumbs.unshift({ text: `Home`, path: '/' });
      }
      return breadcrumbs;
    };
  }

   onHighlight(e) {
  }

}

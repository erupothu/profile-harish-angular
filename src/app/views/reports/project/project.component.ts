import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../analytics/analytics.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  team_memeber_cols = ['name', 'position', 'office', 'email', 'phone']
  team_members = [
    { name: 'harish', position: 'Product Manager', office: 'vaya head office', email: 'harish.erupothu@gmail.com', phone: '0091 8464044323' },
    { name: 'vinny', position: 'Web design', office: 'vaya head office', email: 'vinnyu@gmail.com', phone: '0091 8464044323' },
    { name: 'vishnu', position: 'UX developer', office: 'vaya head office', email: 'harish.erupothu@gmail.com', phone: '0091 8464044323' },
    { name: 'naveen', position: 'databse', office: 'vaya head office', email: 'harish.erupothu@gmail.com', phone: '0091 8464044323' },
    { name: 'nani', position: 'testing', office: 'vaya head office', email: 'harish.erupothu@gmail.com', phone: '0091 8464044323' },
    { name: 'john', position: 'developer', office: 'vaya head office', email: 'harish.erupothu@gmail.com', phone: '0091 8464044323' },
    { name: 'venkatesh', position: 'developer', office: 'vaya head office', email: 'harish.erupothu@gmail.com', phone: '0091 8464044323' },
    { name: 'raju', position: 'developer', office: 'vaya head office', email: 'harish.erupothu@gmail.com', phone: '0091 8464044323' },
    { name: 'sandy', position: 'developer', office: 'vaya head office', email: 'harish.erupothu@gmail.com', phone: '0091 8464044323' },
    { name: 'samuel', position: 'developer', office: 'vaya head office', email: 'harish.erupothu@gmail.com', phone: '0091 8464044323' },
    { name: 'bhanu', position: 'developer', office: 'vaya head office', email: 'harish.erupothu@gmail.com', phone: '0091 8464044323' },
    { name: 'vinod', position: 'developer', office: 'vaya head office', email: 'harish.erupothu@gmail.com', phone: '0091 8464044323' }
  ];

  constructor(private as: AnalyticsService, private router: Router) {
   
  }

  ngOnInit(): void {
    this.as.saveVisitorsData();
  }

}

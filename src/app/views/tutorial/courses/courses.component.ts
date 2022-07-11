import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FilterPipe } from 'ngx-filter-pipe';
import { TutorialService } from '../tutorial.service';
import { Router } from '@angular/router';
import { AnalyticsService } from '../../reports/analytics/analytics.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  mycardColor = 'green';
  searchCourse: any = {category: '', time: '', name: '', created_date: '', updated_date: '', action: '', color: ''};
  public courses: any;
  myData: any;
  selectedCategory: any;
  constructor(private filterPipe: FilterPipe, public tutorialService: TutorialService, private router: Router, private as: AnalyticsService) { }

  ngOnInit(): void {
    this.as.saveVisitorsData();
    this.courses = this.tutorialService.courses;
    this.myData = this.courses;
    this.courses = this.filterPipe.transform(this.myData, { name: '' });
  }

  applyFilterOnCources(filterValue: string){
    // this.myData.filter = filterValue.trim().toLowerCase();
    // this.courses = this.courses.filter(data => data.name === filterValue);
    this.courses = this.filterPipe.transform(this.myData, { name: filterValue });
  }
  searchCategory(filterValue: string) {
    this.courses = this.filterPipe.transform(this.myData, { category: filterValue });
  }
  goToCourse(course: any) {
    const data = course;
    this.router.navigate(['/tutorial/course'], { queryParams: { courseId: course.id}});
  }
}

import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../reports/analytics/analytics.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor(private as: AnalyticsService) { }

  ngOnInit(): void {
    this.as.saveVisitorsData();
  }

}

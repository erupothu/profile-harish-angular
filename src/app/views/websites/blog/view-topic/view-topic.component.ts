import { Component, OnInit } from '@angular/core';
import { WebsitesService } from '../../websites.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-topic',
  templateUrl: './view-topic.component.html',
  styleUrls: ['./view-topic.component.css']
})
export class ViewTopicComponent implements OnInit {

  selectedCategory: any;
  selectedProfile: any;
  selectedTopic: any;
  content = `<p>helo</p>`;
  constructor(private websiteService: WebsitesService,
    private router: Router) { }

  ngOnInit(): void {
    this.selectedCategory = this.websiteService.selectedCategory;
    this.selectedProfile = this.websiteService.selectedProfile;
    this.selectedTopic = this.websiteService.selectedTopic;
    this.content = this.selectedTopic.content;
  }

  editTopic() {
    this.router.navigate(['/websites/create-blog-topic']);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebsitesService } from '../../websites.service';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  categoryId: any;
  selectedProfile: any;
  selectedCategory: any;
  selectedTopic: any;
  content = `<p>Hi</p>`;
  constructor(private websiteService: WebsitesService, 
    private filterPipe: FilterPipe,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedCategory = this.websiteService.selectedCategory;
    this.selectedProfile = this.websiteService.selectedProfile;
    this.selectedTopic = this.websiteService.selectedTopic;
    this.content = this.selectedTopic.content;
    //  this.route.queryParamMap.subscribe(data => {
    //   this.categoryId = data['params']['categoryId'];
    //   if (this.categoryId > 0) {
    //    this.topic.categoryId = this.categoryId;
    //    this.topic.profileId = this.websiteService.selectedProfile;
    //   }
    // });
  }

}

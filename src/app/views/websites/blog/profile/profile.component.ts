import { Component, OnInit } from '@angular/core';
import { WebsitesService } from '../../websites.service';
import { FilterPipe } from 'ngx-filter-pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  categoryList = [];
  topicList: any;
  profileList: any;
  selectedProfile: any;
  public showAll: any = false;
  constructor(private websiteService: WebsitesService,
    private filterPipe: FilterPipe,
    private router: Router) { }

  ngOnInit(): void {
    this.selectedProfile = this.websiteService.selectedProfile;
    this.categoryList = this.websiteService.categoryList;
    this.topicList = this.websiteService.topicList;
    for (let item of this.categoryList) {
      let topic = { categoryId: item.id, profileId: this.selectedProfile.id };
      let tmpTopicList = this.filterPipe.transform(this.topicList, topic);
      item.topicList = tmpTopicList;
    }
    let tmpCategory = this.categoryList;
  }

  createTopic(category) {
    this.websiteService.selectedCategory = category;
    this.router.navigate(['/websites/create-blog-topic'], { queryParams: { categoryId: category.id } });
  }

  viewTopic(category, topic) {
    this.websiteService.selectedCategory = category;
    this.websiteService.selectedTopic = topic;
    this.router.navigate(['/websites/view-blog-topic']);
  }

  triggerReadMore() {
    this.showAll = true;
  }

  triggerReadLess() {
    this.showAll = false;
  }

}

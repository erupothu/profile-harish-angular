import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WebsitesComponent, WebsitePopup } from './websites.component';
import { SampleWebsiteComponent } from './sample-website/sample-website.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreMaterialModule } from 'src/app/core-modules/core-material.module';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { NgPipesModule } from 'ngx-pipes';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AngularSplitModule } from 'angular-split';

import { SmpleBlogComponent } from './smple-blog/smple-blog.component';
import { ProfileComponent } from './blog/profile/profile.component';
import { TopicComponent } from './blog/topic/topic.component';
import { SafePipe } from './safe.pipe';
import { SafehtmlPipe } from './safehtml.pipe';
import { ReadmorePipe } from './readmore.pipe';
import { ViewTopicComponent } from './blog/view-topic/view-topic.component';
// import { AdminBlogComponent } from './admin-blog/admin-blog.component';

const websites_routes: Routes = [
  { path: '', component: WebsitesComponent, children: [
    { path: 'sample-website', component: SampleWebsiteComponent},
    { path: 'sample-blog', component: SmpleBlogComponent},
    { path: 'blog-profile', component: ProfileComponent},
    { path: 'create-blog-topic', component: TopicComponent},
    { path: 'view-blog-topic', component: ViewTopicComponent},

  ]}
]

@NgModule({
  declarations: [WebsitesComponent, SampleWebsiteComponent, WebsitePopup, SmpleBlogComponent, ProfileComponent, 
    TopicComponent, SafehtmlPipe, SafePipe, ReadmorePipe, ViewTopicComponent],
  imports: [
    CommonModule, RouterModule.forChild(websites_routes),FlexLayoutModule, CoreMaterialModule,FormsModule,ReactiveFormsModule,
     DeviceDetectorModule, NgPipesModule, FilterPipeModule, AngularEditorModule, AngularSplitModule
  ],
  providers: [],
})
export class WebsitesModule { }

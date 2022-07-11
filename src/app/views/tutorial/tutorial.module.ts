import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreMaterialModule } from 'src/app/core-modules/core-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { MaterialElevationDirective } from '../email/inbox/material-elevation.directive';
import { TutorialComponent } from './tutorial.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { CreateCourseComponent } from './create-course/create-course.component';


const tutorial_routes: Routes = [
  {path: '', component: TutorialComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'course', component: CourseComponent},
  {path: 'create-course', component: CreateCourseComponent},
]

@NgModule({
  declarations: [
    TutorialComponent,
    CoursesComponent, MaterialElevationDirective, CourseComponent, CreateCourseComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(tutorial_routes), ReactiveFormsModule, FormsModule, CoreMaterialModule, 
    FlexLayoutModule, FilterPipeModule,DeviceDetectorModule
  ]
})
export class TutorialModule { }

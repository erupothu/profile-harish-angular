import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreMaterialModule } from 'src/app/core-modules/core-material.module';
import { AngularSplitModule } from 'angular-split';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule} from '@angular/common/http';

import { AdminHomePageComponent } from './admin-pages/admin-home-page/admin-home-page.component';
import { AdminComponent } from './admin.component';
import { AdminContactUsComponent } from './admin-pages/admin-contact-us/admin-contact-us.component';
import { HomePageComponent } from './user-pages/home-page/home-page.component';
import { ContactUsComponent } from './user-pages/contact-us/contact-us.component';
import { AdminToolbarComponent } from './admin-pages/admin-toolbar/admin-toolbar.component';
import { AdminFooterComponent } from './admin-pages/admin-footer/admin-footer.component';
import { AdminDocumentComponent } from './admin-pages/admin-document/admin-document.component';
import { SafehtmlPipe } from './safehtml.pipe';
import { SafePipe } from './safe.pipe';
import { AdminService } from './admin.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const admin_routes: Routes = [
  {path: '', component: AdminComponent},
  {path: 'admin-home', component: AdminHomePageComponent, canActivate: [AdminService], data: {roles : ['admin']}},
  {path: 'admin-contact-us', component: AdminContactUsComponent, canActivate: [AdminService], data: {roles : ['admin']}},
  {path: 'admin-toolbar', component: AdminToolbarComponent},
  {path: 'admin-footer', component: AdminFooterComponent},
  {path: 'contact-us', component: ContactUsComponent, canActivate: [AdminService], data: {roles : ['admin', 'user']}},
  {path: 'home-page', component: HomePageComponent, canActivate: [AdminService], data: {roles : ['admin', 'user']}},
  {path: 'admin-login', component: AdminLoginComponent},
  {path: 'admin-documentation', component: AdminDocumentComponent, canActivate: [AdminService], data: {roles : ['admin', 'user']}}
]

@NgModule({
  declarations: [
    AdminComponent, AdminHomePageComponent, AdminContactUsComponent, HomePageComponent, ContactUsComponent, AdminToolbarComponent,
    AdminFooterComponent, AdminDocumentComponent, SafehtmlPipe, SafePipe, AdminLoginComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(admin_routes), CoreMaterialModule, ReactiveFormsModule, FlexLayoutModule,FormsModule,
    AngularSplitModule,AngularEditorModule,HttpClientModule
  ], exports: [
    RouterModule
  ]
})
export class AdminModule { }

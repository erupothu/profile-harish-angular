import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CoreMaterialModule } from 'src/app/core-modules/core-material.module';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { PagesComponent } from './pages.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProfileComponent } from './profile/profile.component';
import { FaqComponent } from './faq/faq.component';

const pagesRoutes: Routes = [
  { path: '', component: PagesComponent, children: [
    { path: 'pricing', component: PricingComponent },
    { path: 'pricing/:id', component: PricingComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'faq', component: FaqComponent },
  ]},
  { path: 'my-inbox', component: PagesComponent },
]

@NgModule({
  declarations: [
    PagesComponent,
    PricingComponent,
    ProfileComponent,
    FaqComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(pagesRoutes), FlexLayoutModule, CoreMaterialModule, DeviceDetectorModule
  ]
})
export class PagesModule { }

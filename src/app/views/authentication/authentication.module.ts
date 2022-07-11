import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreMaterialModule } from 'src/app/core-modules/core-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AuthenticationComponent } from './authentication.component';

const authentication_routes: Routes = [
  {path: '', component: AuthenticationComponent}
]

@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(authentication_routes), ReactiveFormsModule, FormsModule, CoreMaterialModule, FlexLayoutModule
  ]
})
export class AuthenticationModule { }

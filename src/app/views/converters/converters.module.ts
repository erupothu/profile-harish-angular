import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CoreMaterialModule } from 'src/app/core-modules/core-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { ConvertersComponent } from './converters.component';
import { Routes, RouterModule } from '@angular/router';
import { SimpleConvertersComponent } from './simple-converters/simple-converters.component';
import { ImageConverterComponent } from './image-converter/image-converter.component';
import { DataConverterComponent } from './data-converter/data-converter.component';

const converter_routes: Routes = [
  { path: '', component: ConvertersComponent, children: [
    { path: 'simple-converter', component: SimpleConvertersComponent},
    { path: 'image-converter', component: ImageConverterComponent},
    { path: 'data-converter', component: DataConverterComponent}
  ]}
]

@NgModule({
  declarations: [ConvertersComponent, SimpleConvertersComponent, ImageConverterComponent, DataConverterComponent],
  imports: [
    CommonModule, RouterModule.forChild(converter_routes), FlexLayoutModule, CoreMaterialModule, FormsModule, ReactiveFormsModule,
    DeviceDetectorModule
  ]
})
export class ConvertersModule { }

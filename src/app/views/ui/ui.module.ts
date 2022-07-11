import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CoreMaterialModule } from 'src/app/core-modules/core-material.module';
import {PpBreadcrumbsModule} from 'pp-breadcrumbs';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgPipesModule } from 'ngx-pipes';
import { AngularSplitModule } from 'angular-split';
import {HttpClientModule} from '@angular/common/http';
import { ResizableModule } from 'angular-resizable-element';
import { NgxEchartsModule } from 'ngx-echarts';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';


import { UiComponent } from './ui.component';
import { TypographyComponent } from './typography/typography.component';
import { CardComponent } from './card/card.component';
import { HowToComponent } from './how-to/how-to.component';
import { MenuComponent } from './menu/menu.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsComponent,RegisterDialog,FrogotPasswordDialog } from './forms/forms.component';
import { MoreComponent } from './more/more.component';
import { FiltersComponent } from './filters/filters.component';
import { SampleIdeComponent } from './sample-ide/sample-ide.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { SafePipe } from './safe.pipe';
import { D3graphsComponent } from './d3graphs/d3graphs.component';
import { TablesComponent } from './tables/tables.component';
import { CustomFlexLayoutComponent } from './custom-flex-layout/custom-flex-layout.component';
import { ChartsComponent } from './charts/charts.component';
import { CarouselComponent } from './carousel/carousel.component';

const pagesRoutes: Routes = [
  { path: '', component: UiComponent, data: { breadcrumbs: 'ui' }, children: [
    { path: 'cards', component: CardComponent, data: { breadcrumbs: 'cards' }},
    { path: 'typography', component: TypographyComponent, data: { breadcrumbs: 'typography' } },
    { path: 'menu', component: MenuComponent, data: { breadcrumbs: 'menu' } },
    { path: 'buttons', component: ButtonsComponent, data: { breadcrumbs: 'buttons' } },
    { path: 'forms', component: FormsComponent, data: { breadcrumbs: 'forms' } },
    { path: 'filters', component: FiltersComponent, data: { breadcrumbs: 'forms' } },
    { path: 'howto', component: HowToComponent, data: { breadcrumbs: 'forms' } },
    { path: 'more', component: MoreComponent, data: { breadcrumbs: 'forms' } },
    { path: 'sample-ide', component: SampleIdeComponent, data: { breadcrumbs: 'forms' } },
    { path: 'drag-and-drop', component: DragAndDropComponent},
    { path: 'd3-graphs', component: D3graphsComponent},
    { path: 'tables', component: TablesComponent},
    { path: 'custom-flex-layout', component: CustomFlexLayoutComponent},
    { path: 'charts', component: ChartsComponent},
    { path: 'carousel', component: CarouselComponent},
  ]},
  { path: 'my-inbox', component: UiComponent },
]

@NgModule({
  declarations: [
    UiComponent,
    TypographyComponent,
    CardComponent,
    HowToComponent,
    MenuComponent,
    ButtonsComponent,
    FormsComponent,
    RegisterDialog,
    FrogotPasswordDialog,
    MoreComponent,
    FiltersComponent,
    SampleIdeComponent,
    DragAndDropComponent,
    SafePipe,
    D3graphsComponent,
    TablesComponent,
    CustomFlexLayoutComponent,
    ChartsComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(pagesRoutes), FlexLayoutModule, CoreMaterialModule,FormsModule,
    PpBreadcrumbsModule,ReactiveFormsModule, FilterPipeModule,NgPipesModule,AngularSplitModule,HttpClientModule, ResizableModule,
    NgxEchartsModule, DeviceDetectorModule, NgbModule, NgImageSliderModule
  ]
})
export class UiModule { }

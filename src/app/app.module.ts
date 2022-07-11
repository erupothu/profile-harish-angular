import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FlexLayoutModule} from '@angular/flex-layout';
import { NgTerminalModule } from 'ng-terminal';
import { HttpClientModule} from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgImageSliderModule } from 'ng-image-slider';
import { CountdownModule } from "ng2-date-countdown";
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import {CoreMaterialModule} from './core-modules/core-material.module';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ChatComponent } from './views/chat/chat.component';
import { JavaIdeComponent } from './views/java-ide/java-ide.component';
import { EcommerceComponent } from './views/reports/ecommerce/ecommerce.component';
import { AnalyticsComponent } from './views/reports/analytics/analytics.component';
import { FormsModule } from '@angular/forms';
import { ChatBotComponent } from './views/chat-bot/chat-bot.component';
import { ProjectComponent } from './views/reports/project/project.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { ContactsComponent,
ContactsEditDialog } from './views/contacts/contacts.component';
import { TodoComponent } from './views/todo/todo.component';
import { ScrumboardComponent, CreateScrumboardDialog } from './views/scrumboard/scrumboard.component';
import { ScrumPannelComponent, CreateScrumPannelDialog } from './views/scrumboard/scrum-pannel/scrum-pannel.component';
import { DocumentationComponent, NewVersionDialog } from './views/documentation/documentation.component'; 


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChatComponent,
    JavaIdeComponent,
    EcommerceComponent,
    AnalyticsComponent,
    ChatBotComponent,
    ProjectComponent,
    CalendarComponent,
    ContactsComponent,
    ContactsEditDialog,
    TodoComponent,
    ScrumboardComponent,
    ScrumPannelComponent,
    CreateScrumboardDialog,
    CreateScrumPannelDialog,
    DocumentationComponent,
    NewVersionDialog
  ],
  imports: [
    BrowserModule, FlexLayoutModule, CoreMaterialModule, AppRoutingModule, BrowserAnimationsModule, NgTerminalModule, HttpClientModule,
    FormsModule, ScrollingModule, NgbModalModule, DragDropModule, MatDatepickerModule,
    NgImageSliderModule, CountdownModule, NgxEchartsModule, DeviceDetectorModule.forRoot(), NgxChartsModule,
    AngularEditorModule, NgbModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  entryComponents: [NewVersionDialog],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

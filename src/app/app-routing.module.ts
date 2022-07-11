import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';


import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ChatComponent } from './views/chat/chat.component';
import { JavaIdeComponent } from './views/java-ide/java-ide.component';
import { EcommerceComponent } from './views/reports/ecommerce/ecommerce.component';
import { AnalyticsComponent } from './views/reports/analytics/analytics.component';
import { ChatBotComponent } from './views/chat-bot/chat-bot.component';
import { ProjectComponent } from './views/reports/project/project.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { ContactsComponent } from './views/contacts/contacts.component';
import { TodoComponent } from './views/todo/todo.component';
import { ScrumboardComponent } from './views/scrumboard/scrumboard.component';
import { ScrumPannelComponent } from './views/scrumboard/scrum-pannel/scrum-pannel.component';
import { DocumentationComponent } from './views/documentation/documentation.component'; 

const routes: Routes = [
  {path: '', redirectTo: 'analytics', pathMatch: 'full' },
  {path: 'chat', component: ChatComponent},
  {path: 'email', loadChildren: () => import('./views/email/email.module').then(m => m.EmailModule)},
  {path: 'admin', loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule)},
  {path: 'java-ide', component: JavaIdeComponent},
  {path: 'ecommerce', component: EcommerceComponent},
  {path: 'analytics', component: AnalyticsComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'chat-bot', component: ChatBotComponent},
  {path: 'e-cart', loadChildren: () => import('./views/e-cart/e-cart.module').then(m => m.ECartModule)},
  {path: 'authentication', loadChildren: () => import('./views/authentication/authentication.module').then(m => m.AuthenticationModule)},
  {path: 'tutorial', loadChildren: () => import('./views/tutorial/tutorial.module').then(m => m.TutorialModule)},
  {path: 'calendar', component: CalendarComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'to-do', component: TodoComponent},
  {path: 'scrumboard', component: ScrumboardComponent},
  {path: 'scrum-pannel', component: ScrumPannelComponent},
  {path: 'documentation', component: DocumentationComponent},
  {path: 'pages', loadChildren: () => import('./views/pages/pages.module').then(m => m.PagesModule)},
  {path: 'ui', loadChildren: () => import('./views/ui/ui.module').then(m => m.UiModule)},
  {path: 'editor', loadChildren: () => import('./views/editor/editor.module').then(m => m.EditorModule)},
   {path: 'converters', loadChildren: () => import('./views/converters/converters.module').then(m => m.ConvertersModule)},
   {path: 'websites', loadChildren: () => import('./views/websites/websites.module').then(m => m.WebsitesModule)}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

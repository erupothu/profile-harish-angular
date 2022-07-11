import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  angularFaq = [
    { id: '1', question: 'what is angular?', answer: 'Angular is a TypeScript-based open-source web application framework, developed and maintained by Google.It offers an easy and powerful way of building front end web-based applications.', rating: 5},
    { id: '2', question: 'what are New Features of angular9', answer: '1.default Ivy, 2.Angular core type safe changes, 3.ModuleWithProviders Support,'+
    '4.Dependency Injection Changes in Core', rating: 5},
    { id: '3', question: 'How to Update from v8 to v9?', answer: 'ng update @angular/core @angular/cli', rating: 5},
    { id: '4', question: 'Please explain the various features of Angular', answer: '1.Accessibility Applications, 2.Angular CLI, 3.Cross-Platform App Development'+
    '4.Code Generation, 5.Code Splitting, 6.Synergy with Popular Code Editors and IDEs, 7.Templates, 8.Testing', rating: 5},
    { id: '5', question: 'Could you explain services in Angular?', answer: 'Singleton objects in Angular that get instantiated only once during the lifetime of an application are called services. An Angular service contains methods that maintain the data throughout the life of an application.', rating: 5},
    { id: '6', question: 'what are directives', answer: '1.Attribute: ngClass, ngStyle, 2.structural:*ngIf, *ngFor, *ngSwitch 3.custom: DropDown, Highliter', rating: 5},
    { id: '7', question: 'what is angular?', answer: 'Angualr is a web application', rating: 5},
    { id: '8', question: 'what is angular?', answer: 'Angualr is a web application', rating: 5},
    { id: '9', question: 'what is angular?', answer: 'Angualr is a web application', rating: 5},
    { id: '10', question: 'what is angular?', answer: 'Angualr is a web application', rating: 5},
    { id: '11', question: 'what is angular?', answer: 'Angualr is a web application', rating: 5}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

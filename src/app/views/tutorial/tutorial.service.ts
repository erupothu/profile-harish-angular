import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  public courses = [
    {id: '1', category: 'web', time: '60 min', name: 'Basices of Angular', created_date: '', updated_date: 'March 1 2020', action: 'START', color: 'blue'},
    {id: '2', category: 'web', time: '60 min', name: 'Advanced Angular', created_date: '', updated_date: 'March 1 2020', action: 'START', color: 'blue'},
    {id: '3', category: 'web', time: '60 min', name: 'Angular Interview Questions', created_date: '', updated_date: 'March 1 2020', action: 'START', color: 'blue'},
    {id: '4', category: 'web', time: '60 min', name: 'Basices of TypeScript', created_date: '', updated_date: 'March 1 2020', action: 'START', color: 'blue'},
    {id: '5', category: 'web', time: '60 min', name: 'Basices of AngularJs', created_date: '', updated_date: 'March 1 2020', action: 'START', color: 'blue'},
    {id: '6', category: 'web', time: '60 min', name: 'Basices of JavaScript', created_date: '', updated_date: 'March 1 2020', action: 'START', color: 'blue'},
    {id: '7', category: 'web', time: '60 min', name: 'Basices of HTML5', created_date: '', updated_date: 'March 1 2020', action: 'START', color: 'blue'},
    {id: '8', category: 'web', time: '60 min', name: 'Basices of CSS', created_date: '', updated_date: 'March 1 2020', action: 'START', color: 'blue'},
    {id: '9', category: 'Back End', time: '60 min', name: 'Basices of Java', created_date: '', updated_date: 'March 1 2020', action: 'START', color: 'green'},
    {id: '10', category: 'Back End', time: '60 min', name: 'Basices of Spring', created_date: '', updated_date: 'March 1 2020', action: 'START', color: 'green'},
    {id: '11', category: 'Back End', time: '60 min', name: 'Basices of Spring boot', created_date: '', updated_date: 'March 1 2020', action: 'START', color: 'green'},
    {id: '12', category: 'OS', time: '60 min', name: 'Unix', created_date: '', updated_date: 'March 1 2020', action: 'START', color: 'orange'},
    {id: '13', category: 'OS', time: '60 min', name: 'Windows', created_date: '', updated_date: 'March 1 2020', action: 'START', color: 'orange'},
    {id: '14', category: 'mobile', time: '60 min', name: 'Basices of Android', created_date: '', updated_date: 'March 1 2020', action: 'START', color: 'red'},
    {id: '15', category: 'mobile', time: '60 min', name: 'Basices of IOS', created_date: '', updated_date: 'March 1 2020', action: 'START', color: 'red'},
    {id: '16', category: 'mobile', time: '60 min', name: 'Basices of flutter', created_date: '', updated_date: 'March 1 2020', action: 'START', color: 'red'},
    {id: '17', category: 'Database', time: '60 min', name: 'Basices of MySQL', created_date: '', updated_date: 'March 1 2020', action: 'START', color: 'yellow'},
    {id: '18', category: 'Database', time: '60 min', name: 'Basices of Postgres', created_date: '', updated_date: 'March 1 2020', action: 'START', color: 'yellow'},
    {id: '19', category: 'Database', time: '60 min', name: 'Basices of MongoDB', created_date: '', updated_date: 'March 1 2020', action: 'START', color: 'yellow'}
  ];
  public course = [
    {id: '1', category: 'web', name: 'Basices of Angular', chapters: [
      {id: '0', chapter_name: 'Introduction', content: 'Introduction'},
      {id: '1', chapter_name: 'What is angular?', content: 'What is angular?'},
      {id: '2', chapter_name: 'History of Angular', content: 'History of Angular'},
      {id: '3', chapter_name: 'Angular Features', content: 'Angular Features'},
      {id: '4', chapter_name: 'How to install Angular?', content: 'How to install Angular?'},
      {id: '5', chapter_name: 'Angular Project Setup', content: 'Angular Project Setup'},
      {id: '6', chapter_name: 'Angular Files Explanation', content: 'Angular Files Explanation'},
      {id: '7', chapter_name: 'Angular with bootstrap', content: 'Angular with bootstrap'},
      {id: '8', chapter_name: 'Angular Libraries', content: 'Angular Libraries'},
      {id: '9', chapter_name: 'Angular Architecture', content: 'Angular Architecture'},
      {id: '10', chapter_name: 'Angular Routing', content: 'Angular Routing'},
      {id: '11', chapter_name: 'Angular Directives', content: 'Angular Directives'},
      {id: '12', chapter_name: 'Angular Pipes', content: 'Angular Pipes'},
      {id: '13', chapter_name: 'Angular Services', content: 'Angular Services'},
      {id: '14', chapter_name: 'Angular Interfaces', content: 'Angular Interfaces'},
      {id: '15', chapter_name: 'Angular Classes', content: 'Angular Classes'},
      {id: '16', chapter_name: 'More', content: 'More'},
      {id: '17', chapter_name: 'Summary', content: 'Summary'}
    ]},
    {id: '3', category: 'web', name: 'Angular Interview Questions', chapters: [
      {id: '0', chapter_name: 'Introduction', content: ''},
      {id: '1', chapter_name: 'What is angular?', content: ''},
      {id: '2', chapter_name: 'History of Angular', content: ''},
      {id: '3', chapter_name: 'Angular Features', content: ''},
      {id: '4', chapter_name: 'How to install Angular?', content: ''},
      {id: '5', chapter_name: 'Angular Project Setup', content: ''}
    ]}
  ]
  constructor() { }
}

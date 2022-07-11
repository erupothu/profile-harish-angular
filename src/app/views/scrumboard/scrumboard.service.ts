import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrumboardService {

  scrumboardItems = [
    {
      id: '1', name: 'Angular', icon: 'people', type: 'Application', appNote: [
        {
          appNoteName: 'Testing', cardList: [
            {
              title: 'title1', description: 'this fot testing', dueDate: '2020-03-10', subscribe: false, 
              lables: [
                { name: 'high priority', color: 'warn',checked: true }, 
                { name: 'App', color: 'primary',checked: true }, 
                { name: 'Design', color: 'accent' ,checked: true}, 
                { name: 'feature', color: 'green',checked: true }
              ],
              members: [
                { name: 'harish', url: '../../../assets/images/people/female_photo.jpeg',checked: true },
                { name: 'vinny', url: '../../../assets/images/people/male_photo2.jpeg',checked: true },
                { name: 'rishi', url: '../../../assets/images/people/felamle_photo2.jpeg',checked: true }
              ],
              checkList: [
                { name: 'checklist1', checked: true }
              ], 
              comments: [{name: 'comment1'}, {name:'comment2'}]
            }
          ]
        }
      ]
    },
    { id: '2', name: 'Spring Boot', icon: 'people', type: 'Application', appNote: [] },
    { id: '3', name: 'AWS', icon: 'people', type: 'Application', appNote: [] },
    { id: '4', name: 'Android', icon: 'people', type: 'Application', appNote: [] }
  ];
  constructor() { }
}

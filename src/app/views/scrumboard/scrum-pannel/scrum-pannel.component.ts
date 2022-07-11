import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrumboardService } from '../scrumboard.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  myData: any;
}

@Component({
  selector: 'app-scrum-pannel',
  templateUrl: './scrum-pannel.component.html',
  styleUrls: ['./scrum-pannel.component.css']
})
export class ScrumPannelComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    public scrumService: ScrumboardService,
    public dialog: MatDialog) { }

  pannelContent: any;
  scrumBoradImtems = {
    id: '',
    name: '',
    icon: '',
    type: '',
    appNote: []
  }

  appNote = {
    appNoteName: '',
    cardList: []
  }
  cardList = {
    title: '',
    description: '',
    subscribe: '',
    lables: [
      { name: '', color: '', checked: false }
    ],
    members: [
      { name: '', url: '', checked: false }
    ],
    checkList: [
      { name: '', checked: false }
    ],
    comments: [
      { name: '' }
    ]
  }
  lableList = [
    { name: 'App', color: 'primary', checked: false },
    { name: 'Design', color: 'accent', checked: false },
    { name: 'Database', color: 'primary', checked: false },
    { name: 'high priority', color: 'warn', checked: false },
    { name: 'feature', color: 'accent', checked: false }
  ];
  membersList = [
    { name: 'harish', url: '../../../../assets/images/people/male_photo1.jpeg', checked: false },
    { name: 'harish2', url: '../../../../assets/images/people/male_photo2.jpeg', checked: false },
    { name: 'harish3', url: '../../../../assets/images/people/male_photo3.jpeg', checked: false },
    { name: 'vinny', url: '../../../../assets/images/people/female_photo.jpeg', checked: false },
    { name: 'vinny2', url: '../../../../assets/images/people/felamle_photo2.jpeg', checked: false },
    { name: 'vinny2', url: '../../../../assets/images/people/female_photo3.jpeg', checked: false },
  ];
  showAppNote = false;
  showCreateAppNote = false;
  name: any;
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(data => {
      const pannelParams = data['params']['courseId'];
      if (pannelParams > 0) {
        const mydata = this.scrumService.scrumboardItems.filter(data => data.id == pannelParams);
        this.pannelContent = mydata[0];
      }
    });
  }

  addApplicationNote() {
    this.showCreateAppNote = true;
  }

  addAppNote() {
    this.showCreateAppNote = false;
    this.showAppNote = true;
    this.pannelContent.appNote.push(this.appNote)
    this.appNote = {
      appNoteName: '',
      cardList: []
    }
  }
  deleteAppNote(idx) {
    this.pannelContent.appNote.splice(idx, 1);
  }
  cancel() {
    this.showCreateAppNote = false;
  }

  addCard(idx: any) {
    // const index = idx+1;
    this.pannelContent.appNote[idx].cardList.push(this.cardList);
    this.cardList = {
      title: '',
      description: '',
      subscribe: '',
      lables: [
        { name: '', color: '', checked: false }
      ],
      members: [
        { name: '', url: '', checked: false }
      ],
      checkList: [
        { name: '', checked: false }
      ],
      comments: [
        { name: '' }
      ]
    }
  }

  removeCard(i, c) {
    this.pannelContent.appNote[i].cardList.splice(c, 1);
  }

  editCard(card: any) {
    this.lableList = [
      { name: 'App', color: 'primary', checked: false },
      { name: 'Design', color: 'accent', checked: false },
      { name: 'Database', color: 'primary', checked: false },
      { name: 'high priority', color: 'warn', checked: false },
      { name: 'feature', color: 'accent', checked: false }
    ];
    this.membersList = [
      { name: 'harish', url: '../../../../assets/images/people/male_photo1.jpeg', checked: false },
      { name: 'harish2', url: '../../../../assets/images/people/male_photo2.jpeg', checked: false },
      { name: 'harish3', url: '../../../../assets/images/people/male_photo3.jpeg', checked: false },
      { name: 'vinny', url: '../../../../assets/images/people/female_photo.jpeg', checked: false },
      { name: 'vinny2', url: '../../../../assets/images/people/felamle_photo2.jpeg', checked: false },
      { name: 'vinny2', url: '../../../../assets/images/people/female_photo3.jpeg', checked: false },
    ];
    const dialogRef = this.dialog.open(CreateScrumPannelDialog, {
      width: '30%',
      height: '80%',
      data: { card: card, lableList: this.lableList, membersList: this.membersList }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result != undefined) {
        this.scrumService.scrumboardItems.push(result);
      }
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'create-scrum-pannel-popup.html',
})
export class CreateScrumPannelDialog {

  myData: any;
  checklistItem = { name: '', checked: false }
  comments = {name: ''};
  constructor(private scrumService: ScrumboardService,
    public dialogRef: MatDialogRef<CreateScrumPannelDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.myData = data;
    for (let i = 0; i < this.myData.card.lables.length; i++) {
      for (let j = 0; j < this.myData.lableList.length; j++) {
        if (this.myData.card.lables[i].name == this.myData.lableList[j].name) {
          this.myData.lableList[j].checked = true;
        }
      }
    }

    for (let i = 0; i < this.myData.card.members.length; i++) {
      for (let j = 0; j < this.myData.membersList.length; j++) {
        if (this.myData.card.members[i].name == this.myData.membersList[j].name) {
          this.myData.membersList[j].checked = true;
        }
      }
    }
  }

  updateLable(item) {
    const idx = this.myData.card.lables.findIndex(data => data.name == item.name);
    if (idx > -1) {
      if (item.checked) {
        this.myData.card.lables.splice(idx, 1);
      }
    } else {
      this.myData.card.lables.push(item);
    }
  }

  updateMember(item) {
    const idx = this.myData.card.members.findIndex(data => data.name == item.name);
    if (idx > -1) {
      if (item.checked) {
        this.myData.card.members.splice(idx, 1);
      }
    } else {
      this.myData.card.members.push(item);
    }
  }

  updateSubscribe() {
    this.myData.card.subscribe = !this.myData.card.subscribe;
  }

  addcheckList() {
    if (this.checklistItem.name != '') {
      this.myData.card.checkList.push(this.checklistItem);
    }
    this.checklistItem = { name: '', checked: false }
  }

  addComment() {
     if (this.comments.name != '') {
      this.myData.card.comments.push(this.comments);
    }
    this.comments = {name: ''};
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  submit() {
    this.dialogRef.close();
  }

}

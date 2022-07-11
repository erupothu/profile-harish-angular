import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  selectAllColor = '';
  selectStarredColor = '';
  selectPriorityColor = '';
  selectScheduledColor = '';
  selectDoneColor = '';
  selectDeleteColor = '';
  selectTodayColor = '';

  allNotesData = [
    { id: '1', title: 'Meeting with Anil', content: 'pipeline Query check', start_date: '2020-03-05', end_date: '2020-03-05', category: ['frontend', 'backend'], important: false, star: false, checked: false },
    { id: '2', title: 'Movie time', content: 'test', start_date: '2020-03-05', end_date: '2020-03-05', category: [], important: false, star: false, checked: false },
    { id: '3', title: 'conference', content: '', start_date: '2020-03-05', end_date: '2020-03-05', category: ['marketing'], important: false, star: false, checked: false },
    { id: '4', title: 'Meeting with siddesh', content: '', start_date: '2020-03-05', end_date: '2020-03-05', category: ['frontend'], important: false, star: false, checked: false },
    { id: '5', title: 'Marriage', content: '', start_date: '2020-03-05', end_date: '2020-03-05', category: ['frontend', 'backend'], important: false, star: false, checked: false },
    { id: '6', title: 'Festival with family', content: '', start_date: '2020-03-05', end_date: '2020-03-05', category: [], important: false, star: false, checked: false },
    { id: '7', title: 'Conference with Anil', content: 'regarding collection reports', start_date: '2020-03-05', end_date: '2020-03-05', category: ['frontend', 'backend'], important: false, star: false, checked: false },
    { id: '8', title: 'Do QC image Quality', content: 'images are not loading properly', start_date: '2020-03-05', end_date: '2020-03-05', category: ['frontend', 'backend'], important: false, star: false, checked: false },
    { id: '9', title: 'Check activity hist', content: 'Activity history data is not storing properly', start_date: '2020-03-05', end_date: '2020-03-05', category: ['frontend', 'backend'], important: false, star: false, checked: false },
  ]
  showItem: any = {
    id: '', title: '', content: '', start_date: '', end_date: '', category: [], important: false, star: false
  };
  showDeletedItems = [];
  showStarredItems = [];
  showPriorityItems = [];
  showScheduledItems = [];
  showDoneItems = [];
  showTodayItems = [];

  showSelectedItems = [];
  newItem: any = {
    id: '4890', title: '', content: '', start_date: '', end_date: '', category: [], important: false, star: false
  };
  newItemFlag = false;
  minDate: Date;
  maxDate: Date;
  constructor() {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
    this.showSelectedItems = this.allNotesData;
  }

  ngOnInit(): void {
  }
  getAllNotes() {
    this.selectAllColor = 'primary';
    this.selectStarredColor = '';
    this.selectPriorityColor = '';
    this.selectScheduledColor = '';
    this.selectDoneColor = '';
    this.selectDeleteColor = '';
    this.selectTodayColor = '';
    this.showSelectedItems = this.allNotesData;
  }

  getStarredData() {
    this.selectAllColor = '';
    this.selectStarredColor = 'primary';
    this.selectPriorityColor = '';
    this.selectScheduledColor = '';
    this.selectDoneColor = '';
    this.selectDeleteColor = '';
    this.selectTodayColor = '';
    this.showSelectedItems = this.showStarredItems;
  }

  getPriorityData() {
    this.selectAllColor = '';
    this.selectStarredColor = '';
    this.selectPriorityColor = 'primary';
    this.selectScheduledColor = '';
    this.selectDoneColor = '';
    this.selectDeleteColor = '';
    this.selectTodayColor = '';
    this.showSelectedItems = this.showPriorityItems;
  }

  getScheduledData() {
    this.selectAllColor = '';
    this.selectStarredColor = '';
    this.selectPriorityColor = '';
    this.selectScheduledColor = 'primary';
    this.selectDoneColor = '';
    this.selectDeleteColor = '';
    this.selectTodayColor = '';
    this.showSelectedItems = this.showScheduledItems;
  }

  getDoneData() {
    this.selectAllColor = '';
    this.selectStarredColor = '';
    this.selectPriorityColor = '';
    this.selectScheduledColor = '';
    this.selectDoneColor = 'primary';
    this.selectDeleteColor = '';
    this.selectTodayColor = '';
    this.showSelectedItems = this.showDoneItems;
  }

  getDeletedData() {
    this.selectAllColor = '';
    this.selectStarredColor = '';
    this.selectPriorityColor = '';
    this.selectScheduledColor = '';
    this.selectDoneColor = '';
    this.selectDeleteColor = 'primary';
    this.selectTodayColor = '';
    this.showSelectedItems = this.showDeletedItems;
  }

  getTodayData() {
    this.selectAllColor = '';
    this.selectStarredColor = '';
    this.selectPriorityColor = '';
    this.selectScheduledColor = '';
    this.selectDoneColor = '';
    this.selectDeleteColor = '';
    this.selectTodayColor = 'primary';
    this.showSelectedItems = this.showTodayItems;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.allNotesData, event.previousIndex, event.currentIndex);
  }
  showData(item: any, flag: boolean) {
    this.showItem = item;
    this.newItemFlag = flag;
  }

  saveItem() {
    this.allNotesData.push(this.showItem)
    this.newItem = {
      id: '4890', title: '', content: '', start_date: '', end_date: '', category: [], important: false, star: false
    };
    this.newItemFlag = false;
  }

  deleteSelectedItem(showItem: any) {
    const idx = this.showSelectedItems.findIndex(data => data.title == showItem.title);
    if (idx > -1) {
      this.showDeletedItems.push(this.allNotesData[idx]);
      this.showSelectedItems.splice(idx, 1);
    }
  }

  starSelected(item: any) {
    const idx = this.showSelectedItems.findIndex(data => data.title == item.title);
    if (idx > -1) {
      this.showSelectedItems[idx].star = !this.showSelectedItems[idx].star;
      if (this.showSelectedItems[idx].star == true) {
        this.showStarredItems.push(this.showSelectedItems[idx]);
      } else {
        const idx = this.showStarredItems.findIndex(data => data.title == item.title);
        this.showStarredItems.splice(idx, 1)
      }
    }
  }

  importantSelected(item) {
    const idx = this.showSelectedItems.findIndex(data => data.title == item.title);
    if (idx > -1) {
      this.showSelectedItems[idx].important = !this.showSelectedItems[idx].important;
      if (this.showSelectedItems[idx].important == true) {
        this.showPriorityItems.push(this.showSelectedItems[idx]);
      } else {
        const idx = this.showPriorityItems.findIndex(data => data.title == item.title);
        this.showPriorityItems.splice(idx, 1)
      }
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  listItems = ['Apple', 'Banana', 'Aeroplane', 'Ship', 'Hyderabad', 'Orange', 'telangana'];
  originalList = this.listItems;
   cardItems = ['Apple', 'Banana', 'Aeroplane', 'Ship', 'Hyderabad', 'Orange', 'telangana'];
  originalcard = this.listItems;
  searchList = '';
  searchCard = '';
  drpdnFlag = false;
  constructor() { }

  ngOnInit(): void {
  }

  filterListItems() {
    // listItems.select();
    this.listItems = this.originalList.filter(s => s.includes(this.searchList));
    const tst = this.listItems;
  }

  filterCardItems() {
    // listItems.select();
    this.cardItems = this.originalcard.filter(s => s.includes(this.searchCard));
  }

}

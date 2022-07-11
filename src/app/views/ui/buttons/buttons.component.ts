import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  showMore = false;
  scrolNumber = 0;
  
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  toggleMoreLess() {
    this.showMore = !this.showMore;
  }

  scroll = (event: any): void => {
    this.scrolNumber = event.srcElement.scrollTop;
    // console.log(event);
    // console.log('I am scrolling ' + number);
  };
  scrolTotop() {
    const mainDiv = document.getElementById('myscrollDiv');
    mainDiv.scrollIntoView();
  }

}

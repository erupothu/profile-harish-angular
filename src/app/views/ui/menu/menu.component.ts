import { Component, OnInit, Input, ViewChild, ElementRef, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  barStatus = false;
  @ViewChild('scroll') private scr: ElementRef;
  @Input() index: number = 1;
  scrollTop: number;
  scrolling: boolean;
  drpDnBtnFire = false;

  menuWithSelectColor = [
    { id: 1, name: 'red' },
    { id: 2, name: 'blue' },
    { id: 3, name: 'green' },
    { id: 4, name: 'yellow' },
    { id: 5, name: 'orange' },
  ]
  searchColors = '';
  selectedColor: any;

  constructor() { }

  ngOnInit(): void {
  }

  changeIcon() {
    this.barStatus = !this.barStatus;
  }

  onScroll(e: Event) {
    // this.scrollTop = e.srcElement.scrollTop;
    const data = e;

  }

  drpdnBtnFired() {
    this.drpDnBtnFire = !this.drpDnBtnFire;
  }

  stopPropagationColor($event: any) {
    $event.stopPropagation();
    //Another instructions
  }

}

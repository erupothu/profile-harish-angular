import { Component, OnInit, ViewChild, ElementRef, HostBinding } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Directionality } from '@angular/cdk/bidi';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-custom-flex-layout',
  templateUrl: './custom-flex-layout.component.html',
  styleUrls: ['./custom-flex-layout.component.css']
})
export class CustomFlexLayoutComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  @ViewChild('inp') inp: ElementRef;
  
  // Layouts
  fxLayouts = ['row', 'column', 'row-reverse', 'column-reverse'];
  selectedFxLayouts = 'row';
  fxLayoutGaps = [1, 2, 3, 4, 5, 6, 7, 8];
  // fxLayoutAligns = ['main-axis', 'cross-axis'];

  // Layout Childrens
  fxFlex = [10, 11, 12, 13, 14, 15];
  fxFlexOrder = [1, 2, 3, 4, 5, 6, 7];
  fxFlexOffset = [1, 2, 3, 4, 5, 6]
  /* elements positioned accross main axis (horizontal incase of row layout)
      Elements are positioned across cross axis (vertical incase of row layout)
      <div fxLayout="row" fxLayoutAlign="<main-axis> <cross-axis>" >
      </div> */
  main_axis_fxFlexAlign = ['start', 'center', 'end', 'space-around', 'space-between', 'space-evenly'];
  selectedMain_axis_fxFlexAlign = 'center';
  cross_axis_fxFlexAlign = ['start', 'center', 'end', 'stretch'];
  selectedCross_axis_fxFlexAlign = 'center';
  selectedFxLayoutAlign = 'center center';
  
  /* Mat Side Nav */
  sideNavModes = ['over', 'side', 'push'];
  selectedMode = 'side';
  sideNavPosition = ['start', 'end'];
  selectedPosition = 'left';
  fixdeSideNav = false;
  fixedBottomGap = 300;
  fixedTopGap = 200;
  backdropClick = 'backdrop';
  escape = 'escape';
  closeButton = 'closeButton';
  opened = true;
  reason = '';
  event = '';
  isExpanded = true;
  isShowing = false;

  direction = 'rtl';
  /* Themes */
  currentTheme = '';
  color = "primary";
  @HostBinding('class') componentCssClass;
  constructor(dir: Directionality, public overlayContainer: OverlayContainer) {
    dir.change.subscribe((changes) => {
      console.log(changes)
    });
   }

  ngOnInit(): void {
    this.selectedFxLayoutAlign = this.selectedMain_axis_fxFlexAlign + ' ' + this.selectedCross_axis_fxFlexAlign;
  }

  axisChange() {
    this.selectedFxLayoutAlign = this.selectedMain_axis_fxFlexAlign + ' ' + this.selectedCross_axis_fxFlexAlign;
  }

   close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  
  mouseenter() {
     this.isExpanded = true;
  }

   mouseleave() {
    this.isExpanded = false;
  }

  rightAlign() {
    this.inp.nativeElement.setAttribute('dir', 'rtl');
  }

  leftAlign() {
    this.inp.nativeElement.setAttribute('dir', 'ltr');
  }

   onSetTheme(theme) {
    this.currentTheme = theme;
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }

}

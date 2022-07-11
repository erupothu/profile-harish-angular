import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthenticationService } from '../authentication/authentication.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('mainsidenav') sidenav: MatSidenav;
  name: string = 'harish';

  /* Themes setting */
  themes = ['native', 'default', 'athena', 'poseidon', 'hera', 'zeus', 'dark-theme', 'light-theme', 'my-theme'];
  selectedTheme = 'default';

  /* layout */
  selectedLayoutWidth = '100';

  /* Navbar */
  sideNavModes = ['over', 'side', 'push'];
  selectedMode = 'side';
  sideNavPosition = ['start', 'end'];
  selectedPosition = 'left';
  selectedNavAction = 'open';
  selectedNavAction2 = 'expand';
  fixdeSideNav = false;
  isExpanded = true;
  isShowing = false;
  opened = true;
  reason: any;

  menuWithSelectColor = [
    { id: 1, name: 'red' },
    { id: 2, name: 'blue' },
    { id: 3, name: 'green' },
    { id: 4, name: 'yellow' },
    { id: 5, name: 'orange' },
    { id: 5, name: 'black' },
    { id: 5, name: 'white' },
  ]
  selectedSideNavColor = 'black';
  selectedSideNavClr = 'white'



  @HostBinding('class') componentCssClass;
  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public authService: AuthenticationService,
    private overlayContainer: OverlayContainer, ) {
    this.matIconRegistry.addSvgIcon('email', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/gif/open-letter.gif'))
  }

  ngOnInit() {
  }

  showFullScreen() {
    // https://stackblitz.com/edit/angular-awqvmd
    let elem = document.documentElement;
    let methodToBeInvoked = elem.requestFullscreen || elem.webkitMatchesSelector || elem['mozRequestFullscreen'] || elem['msRequestFullscreen'];
    if (methodToBeInvoked) methodToBeInvoked.call(elem);
  }

  onSetTheme(theme) {
    this.selectedTheme = theme;
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }

  mouseenter() {
    //  this.isExpanded = true;
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    // this.isExpanded = false;
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.open();
  }

  onToggleChange(event: MatSlideToggleChange) {
    this.isExpanded = !this.isExpanded;
    const val = '';
  }

  stopPropagationColor($event: any, item: any) {
    $event.stopPropagation();
    this.selectedSideNavColor = item.name
    if (this.selectedSideNavColor == 'black') {
      this.selectedSideNavClr = 'white';
    } else {
      this.selectedSideNavClr = 'black';
    }
    //Another instructions
  }

}

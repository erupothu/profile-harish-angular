import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailChatService {

  public sideNav: any;

  constructor() { }

  public closeNav() {
    this.sideNav.close();
  }

  public openNav() {
    this.sideNav.open();
  }
}

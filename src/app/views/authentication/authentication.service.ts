import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public authSideNav: any;
  public clickStatus: string;

  constructor() { }

  public closeNav() {
    this.authSideNav.close();
  }

  public openNav() {
    this.authSideNav.open();
  }
}

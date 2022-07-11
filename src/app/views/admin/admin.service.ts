import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements CanActivate {

  authentication = [
    { username: 'harish', password: 'harish', email: 'harish.erupothu@gmail.com', role: 'admin' },
    { username: 'admin', password: 'admin', email: 'admin@gmail.com', role: 'admin' },
    { username: 'user', password: 'user', email: 'user@gmail.com', role: 'user' },
  ];
  currentUser = { username: '', password: '', email: '', role: '' };
  private currentUserSubject: BehaviorSubject<any>;
  myUser: Observable<any>;
  constructor(private router: Router) { 
     this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('user')));
        this.myUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.currentUser
    if (currentUser) {
      if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
        this.router.navigate(['admin/admin-login'], { queryParams: { returnUrl: state.url } });
        return false;
      }
      return true;
    }

    this.router.navigate(['analytics']); //this.router.navigate(['dashborad'], { queryParams: { returnUrl: state.url }});
    return false;
  }

  authenticate(dataSource: any) {
    if (dataSource != null) {
      sessionStorage.setItem('user', JSON.stringify(dataSource));
      this.currentUserSubject.next(dataSource);
      return true;
    }
    return false;
  }
}

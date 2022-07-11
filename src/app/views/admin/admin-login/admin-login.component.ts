import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  hide = true;
  user = { username: '', password: '' };
  authData: any;
  redirectUrl: any;
  constructor(private adminService: AdminService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(data => {
      this.redirectUrl = data['params']['returnUrl'] || 'admin/admin-documentation';
    });
  }

  authenticate() {
    for (let item of this.adminService.authentication) {
      if (this.user.username === item.username && this.user.password === item.password) {
        this.authData = item;
        this.adminService.currentUser = item;
        if (this.adminService.authenticate(this.authData)) {
          this.router.navigate([this.redirectUrl]);
        }
      }
    }
  }

}

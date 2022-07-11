import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AnalyticsService } from '../reports/analytics/analytics.service';

interface DialogData {
  usename: '';
  firstPassword: '';
  secondPassword: '';
  email: '';
  phone: ''
}

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.css']
})
export class WebsitesComponent implements OnInit {

  constructor(private dialog: MatDialog, public snackBar: MatSnackBar, private as: AnalyticsService, private router: Router) { }

  ngOnInit(): void {
    this.as.saveVisitorsData();
    // const dialogRef = this.dialog.open(WebsitePopup, {
    //   width: '40%',
    //   height: '40%',
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   if (result != undefined) {
    //     const response = result;
    //     let config = new MatSnackBarConfig();
    //     config.panelClass = ['custom-snackbars'];
    //     config.verticalPosition = 'top';  // 'top' | 'bottom'
    //     config.horizontalPosition = 'center'; //'start' | 'center' | 'end' | 'left' | 'right'
    //     config.duration = 2000;
    //     this.snackBar.open('', response, config);
    //   }
    // });
  }

}

@Component({
  selector: 'website-dialog',
  templateUrl: 'website-popup.html',
})
export class WebsitePopup {

  constructor(
    public dialogRef: MatDialogRef<WebsitePopup>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close("Thank you");
  }
}

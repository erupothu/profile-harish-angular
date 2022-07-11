import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AnalyticsService } from '../reports/analytics/analytics.service';

export interface DialogData {
  contactsData: any;
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts = [
    {name: 'Harish', email: 'harish.e@vayaindia.com', phone: '8464044323', job_title: 'Techonology Analyst', imageUrl: '../../../assets/images/people/male_photo2.jpeg'},
    {name: 'Harish', email: 'harish.e@vayaindia.com', phone: '8464044323', job_title: 'Techonology Analyst', imageUrl: '../../../assets/images/people/male_photo1.jpeg'},
    {name: 'Harish', email: 'harish.e@vayaindia.com', phone: '8464044323', job_title: 'Techonology Analyst', imageUrl: '../../../assets/images/people/male_photo3.jpeg'},
    {name: 'Vinny', email: 'harish.e@vayaindia.com', phone: '8464044323', job_title: 'Techonology Analyst', imageUrl: '../../../assets/images/people/female_photo.jpeg'},
    {name: 'Vinny', email: 'harish.e@vayaindia.com', phone: '8464044323', job_title: 'Techonology Analyst', imageUrl: '../../../assets/images/people/felamle_photo2.jpeg'},
    {name: 'Vinny', email: 'harish.e@vayaindia.com', phone: '8464044323', job_title: 'Techonology Analyst', imageUrl: '../../../assets/images/people/female_photo3.jpeg'}
  ];
  selection = new SelectionModel(true, []);
  allContacts = new MatTableDataSource();
  showAllContacts = true;
  showFrequentContacts = false;
  showStaredContacts =  false;
  allContactsColumms = ['select', 'imageUrl', 'name', 'email', 'phone', 'job_title', 'star']
  constructor(public dialog: MatDialog, private as: AnalyticsService, private router: Router) { }

  ngOnInit(): void {
    this.as.saveVisitorsData();
    this.allContacts = new MatTableDataSource(this.contacts);
  }

   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.allContacts.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.allContacts.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  openDialog(element): void {
    const dialogRef = this.dialog.open(ContactsEditDialog, {
      width: '20%',
      height: '90%',
      data: {contactsData: element}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'contacts-edit-dialod.html',
})
export class ContactsEditDialog {

  constructor(
    public dialogRef: MatDialogRef<ContactsEditDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

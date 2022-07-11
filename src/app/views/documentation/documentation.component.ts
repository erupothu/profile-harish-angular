import { Component, OnInit, Inject } from '@angular/core';
import { DocumentationService } from './documentation.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  versionData: any;
  introduction: any;
  installation: any;
  mydata: any;
  versionResponse: any;
  constructor(private docService: DocumentationService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.versionData = this.docService.versionControll;
    this.introduction = this.docService.introduction;
    this.installation = this.docService.installation;
  }

  addNewVersion() {
    const dialogRef = this.dialog.open(NewVersionDialog, {
      width: '50%',
      height: '50%',
      data: {versionObj: this.docService.currentVersion}
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');  
      this.versionResponse = result;

    });
  }

}

@Component({
  selector: 'new-version-dialog',
  templateUrl: 'new-version-dialog.html',
})
export class NewVersionDialog {

  feature =  { type: 'new', color: 'green', list: ['IAM Admin access', 'Documentation'] };
  constructor(public dialogRef: MatDialogRef<NewVersionDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

    let mydata = data;
   }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

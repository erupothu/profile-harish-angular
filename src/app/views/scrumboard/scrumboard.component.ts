import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import M from 'materialize-css';
import { Router } from '@angular/router';
import { ScrumboardService } from './scrumboard.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnalyticsService } from '../reports/analytics/analytics.service';

export interface DialogData {
  id: string;
  name: string; 
  icon: string; 
  type: string;
}

@Component({
  selector: 'app-scrumboard',
  templateUrl: './scrumboard.component.html',
  styleUrls: ['./scrumboard.component.css']
})
export class ScrumboardComponent implements OnInit {

  mycolor = '#c7e9b4';
  colorList = ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58', 'red', 'blue', 'green', 'yellow', 'brown', 'black','white'];
  options = {fullWidth: false, shift: 1, padding: 2, numVisible: 3, indicators: true};
  //  items = ["https://picsum.photos/200/300?image=0", "https://picsum.photos/200/300?image=1", "https://picsum.photos/200/300?image=2", "https://picsum.photos/200/300?image=3", "https://picsum.photos/200/300?image=4"]

  // hrefs = ['one', 'two', 'three', 'four', 'five'];

  scrumboardItems: any;
  constructor(private http: HttpClient, 
    private route: Router, 
    private scrumService: ScrumboardService,
    public dialog: MatDialog,private as: AnalyticsService) { }

  ngOnInit() {
    this.as.saveVisitorsData();
    this.scrumboardItems = this.scrumService.scrumboardItems;
    // ERROR
    // Error: Cannot read property 'clientWidth' of undefined
    // let elems = document.querySelectorAll('.carousel');
    // let instances = M.Carousel.init(elems, this.options);
  }

   ngAfterViewInit() {
    // https://www.npmjs.com/package/materialize-css
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems, this.options);
  }

  gotoPannel(item) {
    this.route.navigate(['/scrum-pannel'], { queryParams: { courseId: item.id}})
  }

  addApplication() {
     const dialogRef = this.dialog.open(CreateScrumboardDialog, {
      width: '20%',
      height: '40%',
      data: {id: '', name: '', icon: '', type: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
      if(result != undefined) {
        this.scrumService.scrumboardItems.push(result);
      }
    });
  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'create-srumboard-dialog.html',
})
export class CreateScrumboardDialog {

  createScrumData = {id: '', name: '', icon: '', type: '' };
  constructor(private scrumService: ScrumboardService,
    public dialogRef: MatDialogRef<CreateScrumboardDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.createScrumData.id = ''+ (this.scrumService.scrumboardItems.length+1);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  submit() {
    this.dialogRef.close(this.createScrumData);
  }

}

import { Component, OnInit } from '@angular/core';
// import strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';

import MyCustomUploadAdapterPlugin from './image-upload';


@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {


  title: any;
  slideData = 'text here';
  slideDescriptionData: any;
  pageData = [
    { slideName: '', slideDescription: this.slideDescriptionData, extra: '' }
  ];
  public ckConfig = {
    extraPlugins: [MyCustomUploadAdapterPlugin]
  };

  constructor() {
    const mydata = 'hello';
  }

  ngOnInit(): void {

  }
  addSlide() {
    const obj = { slideName: '', slideDescription: this.slideDescriptionData, extra: '' };
    this.pageData.push(obj);
  }

}

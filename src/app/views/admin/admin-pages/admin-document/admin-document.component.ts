import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-document',
  templateUrl: './admin-document.component.html',
  styleUrls: ['./admin-document.component.css']
})
export class AdminDocumentComponent implements OnInit {

  changeLog = `<p>text here</p>`;
  currentUser = JSON.parse(sessionStorage.getItem('user'));
  constructor() { }

  ngOnInit(): void {
  }

}

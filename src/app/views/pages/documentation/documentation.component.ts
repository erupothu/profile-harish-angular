import { Component, OnInit } from '@angular/core';
import { DocumentationService } from './documentation.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  versionData: any;
  introduction: any;
  installation: any;
  constructor(private docService: DocumentationService) { }

  ngOnInit(): void {
    this.versionData = this.docService.versionControll;
    this.introduction = this.docService.introduction;
    this.installation = this.docService.installation;
  }

}

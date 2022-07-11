import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compose-mail',
  templateUrl: './compose-mail.component.html',
  styleUrls: ['./compose-mail.component.css']
})
export class ComposeMailComponent implements OnInit {
  
  config: any = {
  };
  public model = {
        editorData: '<p>Hello, world!</p>'
    };
  constructor() {
    
   }

  ngOnInit(): void {
  }

}

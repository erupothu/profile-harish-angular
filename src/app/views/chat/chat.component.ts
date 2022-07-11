import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  title = 'app';
  userId = 999;

  // public adapter: ChatAdapter = new MyAdapter();
  constructor() { }

  ngOnInit() {
  }

}

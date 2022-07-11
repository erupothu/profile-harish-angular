import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EmailChatService } from './email-chat.service';
import { Message, ChatBotService } from '../../chat-bot/chat-bot.service';

@Component({
  selector: 'app-email-chat',
  templateUrl: './email-chat.component.html',
  styleUrls: ['./email-chat.component.css']
})
export class EmailChatComponent implements OnInit {

  @ViewChild('sidenav3') sideNav: ElementRef;

  public sidenav3: any;
  displayData: any;
   messages: Message[] = [];
  value: string;
  constructor(public emailChatService: EmailChatService, public chatService: ChatBotService) { }

  ngOnInit(): void {
   
    this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });
  }
  firstImageChat() {
     this.messages = [
      {
        author: 'user',
        content: `<img src="../../../../assets/images/people/felamle_photo2.jpeg" height="50px" width="50px">  Hi Vinny`
      },
      {
        author: 'bot',
        content: 'Hi Harish'
      }, {
        author: 'user',
        content: `<img src="../../../../assets/images/people/felamle_photo2.jpeg" height="50px" width="50px">  How are you`
      },
      {
        author: 'bot',
        content: `I'm Fine Harish`
      }
    ];
    this.emailChatService.openNav();
  }
  secondImageChat() {
    this.messages = [
      {
        author: 'user',
        content: `<img src="../../../../assets/images/people/felamle_photo2.jpeg" height="50px" width="50px"> Hi Rishi`
      },
      {
        author: 'bot',
        content: 'Hi Harish'
      }, {
        author: 'user',
        content: `<img src="../../../../assets/images/people/felamle_photo2.jpeg" height="50px" width="50px">  we are going to party`
      },
      {
        author: 'bot',
        content: `Yes, we are going`
      }
    ];
    this.emailChatService.openNav();
  }
  thirdImageChat() {
     this.messages = [
      {
        author: 'user',
        content: `<img src="../../../../assets/images/people/female_photo.jpeg" height="50px" width="50px">  Hi Yogesh`
      },
      {
        author: 'bot',
        content: 'Hi Harish'
      }, {
        author: 'user',
        content: `<img src="../../../../assets/images/people/female_photo.jpeg" height="50px" width="50px">  When is the meeting`
      },
      {
        author: 'bot',
        content: `Tomorrow @ 5pm`
      }
    ];
    this.emailChatService.openNav();
  }
  fourthImageChat() {
    this.messages = [
      {
        author: 'user',
        content: `<img src="../../../../assets/images/people/female_photo3.jpeg" height="50px" width="50px">  Hi Yesh`
      },
      {
        author: 'bot',
        content: 'Hi Harish'
      }, {
        author: 'user',
        content: `<img src="../../../../assets/images/people/female_photo3.jpeg" height="50px" width="50px"> Good morning`
      },
      {
        author: 'bot',
        content: `Good morning!`
      }
    ];
    this.emailChatService.openNav();
  }

  ngAfterViewInit() {
    this.emailChatService.sideNav = this.sideNav;
  }

  sendMessage() {
    this.chatService.getBotAnswer(this.value);
    this.value = '';
  }

}

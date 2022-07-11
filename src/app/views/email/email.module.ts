import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { InboxComponent } from './inbox/inbox.component';
import { CoreMaterialModule } from 'src/app/core-modules/core-material.module';
import { EmailRoutingModule } from './email-routing.module';

import { EmailComponent } from './email.component';
import { MailComponent } from './mail/mail.component';
import { ComposeMailComponent } from './compose-mail/compose-mail.component';
import { SentComponent } from './sent/sent.component';
import { DraftComponent } from './draft/draft.component';
import { StaredComponent } from './stared/stared.component';
import { SpamComponent } from './spam/spam.component';
import { TrashComponent } from './trash/trash.component';
import { EmailChatComponent } from './email-chat/email-chat.component';
import { SafePipe } from './safe.pipe';



@NgModule({
  declarations: [
    InboxComponent, EmailComponent, MailComponent, ComposeMailComponent, SentComponent, 
    DraftComponent, StaredComponent, SpamComponent, TrashComponent, EmailChatComponent, SafePipe
  ],
  imports: [
    CommonModule, CoreMaterialModule, EmailRoutingModule,ReactiveFormsModule, FormsModule, FlexLayoutModule,
    DeviceDetectorModule
  ]
})
export class EmailModule { }

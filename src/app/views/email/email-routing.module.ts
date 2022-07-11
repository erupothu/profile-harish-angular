import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { EmailComponent } from './email.component';
import { InboxComponent } from './inbox/inbox.component';
import { MailComponent } from './mail/mail.component';
import { ComposeMailComponent } from './compose-mail/compose-mail.component';
import { SentComponent } from './sent/sent.component';
import { DraftComponent } from './draft/draft.component';
import { StaredComponent } from './stared/stared.component';
import { SpamComponent } from './spam/spam.component';
import { TrashComponent } from './trash/trash.component';
import { EmailChatComponent } from './email-chat/email-chat.component';

const routes2: Routes = [
  { path: '', component: EmailComponent, children: [
    { path: 'inbox', component: InboxComponent },
    { path: 'mail', component: MailComponent },
    { path: 'sent-mails', component: SentComponent },
    { path: 'compose-mail', component: ComposeMailComponent },
    { path: 'draft-mails', component: DraftComponent },
    { path: 'stared-mails', component: StaredComponent },
    { path: 'spam-mails', component: SpamComponent },
    { path: 'trash-mails', component: TrashComponent },
    { path: 'email-chat', component: EmailChatComponent }
  ] },
  { path: 'my-inbox', component: InboxComponent },
  // { path: 'mail', component: MailComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes2)
  ], exports: [
    RouterModule
  ]
})
export class EmailRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ChatNavbarComponent } from '../chat-navbar/chat-navbar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChatComponent,
    ChatNavbarComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class ChatModule { }

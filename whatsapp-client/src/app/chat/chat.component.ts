import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Chat } from '../interfaces/chat';
import { io, Socket } from 'socket.io-client';
import { Message } from '../interfaces/message';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Output() isChatOpen: boolean = false;
  @Output() chats: Chat[] = [];

  BASE_URL: string = 'http://localhost:3000'
  socket: Socket = io(this.BASE_URL);
  chatSelected: Chat = {messageList: [], usersWithAccess: []};

  inputMessage = this.formBuilder.group({
    message: '',
  })

  constructor(private formBuilder: FormBuilder, 
    private userService: UserService,
    private http: HttpClient) {
    }

  ngOnInit(): void {
    this.http.get(`${this.BASE_URL}/chat/${this.userService.user.username}`).subscribe((data) => {
      this.chats = data as Chat[];
    })
    
    this.socket.on('newMessage', (message: Message) => {
      if (message.to == this.userService.user.username) {
        this.updateChatsArrayOnNewMessage(message);
      }      
    });
  }
  
  private updateChatsArrayOnNewMessage(message: Message): void {
    for (let i = 0; i < this.chats.length; i++) {
      if (this.chats[i].usersWithAccess.includes(message.from) && 
      this.chats[i].usersWithAccess.includes(message.to)) {
        this.chats[i].messageList.push(message);
        this.chats.unshift(this.chats.splice(i, 1)[0]);
      }
    }
  }

  private getCurrentTime(): string {
    return moment().format('HH:mm').toString();
  }

  private getRecipientUsername(): string {
    return this.chatSelected.usersWithAccess[0] == this.userService.user.username ? 
    this.chatSelected.usersWithAccess[1] : this.chatSelected.usersWithAccess[0];
  }

  public OnSendMessage(): void {
    const message: Message = {
      from: this.userService.user.username,
      to: this.getRecipientUsername(),
      text: this.inputMessage.get('message')?.value,
      time: this.getCurrentTime(),
    }

    this.chatSelected.messageList.push(message);
    
    this.socket.emit('sendMessage', message);
  }

  public OnChatSelected(chat: Chat): void {
    this.chatSelected = chat;
    this.isChatOpen = true;
  }
}

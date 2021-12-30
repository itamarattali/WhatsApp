import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Chat } from '../interfaces/chat';
import { io, Socket } from 'socket.io-client';
import { Message } from '../interfaces/message';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Output() chats: Chat[] = [];

  BASE_URL = 'http://localhost:3000'
  socket: Socket = io(this.BASE_URL);

  inputMessage = this.formBuilder.group({
    message: '',
  })

  constructor(private formBuilder: FormBuilder, 
    private userService: UserService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`${this.BASE_URL}/chats/${this.userService.user.username}`).subscribe((data) => {
      this.chats = data as Chat[];
    })
    
    this.socket.on('newMessage', (message: Message) => {
      if (message.to == this.userService.user.username) {
        this.UpdateChatsArrayOnNewMessage(message);
      }
    });
  }
  
  private UpdateChatsArrayOnNewMessage(message: Message): void {
    for (let i = 0; i < this.chats.length; i++) {
      if (this.chats[i].usersWithAccess.includes(message.from) && 
      this.chats[i].usersWithAccess.includes(message.to)) {
        this.chats[i].messageList.push(message);
        this.chats.unshift(this.chats.splice(i, 1)[0]);
      }
    }
  }
}

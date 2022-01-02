import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';
import { Chat } from '../interfaces/chat';
import { Input } from '@angular/core';
import { Socket } from 'socket.io-client';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-chat-navbar',
  templateUrl: './chat-navbar.component.html',
  styleUrls: ['./chat-navbar.component.css']
})
export class ChatNavbarComponent implements OnInit {

  @Input() chats: Chat[] = [];
  
  searchNotFailed: boolean = true;
  userNotFound: boolean = true;
  loading: boolean = false;
  addNewChat: boolean = false;

  userFound: User = {username: '', password: ''};

  BASE_URL: string = "http://localhost:3000";

  searchUser = this.formBuilder.group({
    username: '',
  })

  constructor(private http: HttpClient, 
    private userService: UserService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  AddNewChatNavbar(): void {
    this.searchNotFailed = true;
    this.addNewChat = true;
  }

  OnBack(): void {
    this.addNewChat = false;
  }

  GetCurrentUsername(): string {
    return this.userService.user.username;
  }

  OnSearch() {
    this.searchNotFailed = true;
    this.http.get(`${this.BASE_URL}/users/user/${this.searchUser.get('username')?.value}`).subscribe((data) => {
      this.loading = true;
      setTimeout(() => {
        if (data == null) {
          this.userNotFound = true;
          this.searchNotFailed = false;
        }
        else {
          this.userNotFound = false;
          this.userFound = data as User;
        }
        this.loading = false;
      }, 1000)
    })
  }

  public OnAddChat(): void {
    const recipient: string = this.searchUser.get('username')?.value;
    const myUsername: string = this.userService.user.username;
    this.chats.unshift({messageList: [], usersWithAccess: [myUsername, recipient]});    
    this.http.get(`${this.BASE_URL}/chat/add/${myUsername}/${recipient}`).subscribe(() => {});
  }

  public GetRecipient(chat: Chat): string {
    return this.userService.user.username == chat.usersWithAccess[0] ? 
    chat.usersWithAccess[1] : chat.usersWithAccess[0];
  }

  public GetLastMessage(chat: Chat): string {
    if (chat.messageList.length == 0) {
      return '';
    }
    const from: string = chat.messageList[chat.messageList.length - 1].from;
    const message: string = chat.messageList[chat.messageList.length - 1].text;
    return `${from}: ${message}`;
  }

  public GetLastTime(chat: Chat): string {
    if (chat.messageList.length == 0) {
      return '';
    }
    return chat.messageList[chat.messageList.length - 1].time;
  }
}

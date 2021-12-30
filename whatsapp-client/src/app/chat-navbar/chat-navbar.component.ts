import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';
import { Chat } from '../interfaces/chat';
import { Input } from '@angular/core';

@Component({
  selector: 'app-chat-navbar',
  templateUrl: './chat-navbar.component.html',
  styleUrls: ['./chat-navbar.component.css']
})
export class ChatNavbarComponent implements OnInit {

  @Input() chats: Chat[] = []
  
  searchNotFailed: boolean = true;
  userNotFound: boolean = true;
  loading: boolean = false;
  addNewChat: boolean = false;

  userFound: User = {username: '', password: ''};

  BASE_URL: string = "http://localhost:3000";

  constructor(private http: HttpClient, 
    private userService: UserService) {}

  ngOnInit(): void { }

  AddNewChat(firstUser: string, secondUser: string): void {
    this.http.get(`${this.BASE_URL}/chats/add/${firstUser}/${secondUser}`)
    this.searchNotFailed = true;
    this.addNewChat = true;
  }

  OnBack(): void {
    this.addNewChat = false;
  }

  GetCurrentUsername(): string {
    return this.userService.user.username;
  }

  OnSearch(input: HTMLInputElement) {
    this.searchNotFailed = true;
    this.http.get(`${this.BASE_URL}/users/user/${input.value}`).subscribe((data) => {
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
}

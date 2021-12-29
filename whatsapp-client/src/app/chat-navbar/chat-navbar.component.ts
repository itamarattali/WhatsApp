import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-chat-navbar',
  templateUrl: './chat-navbar.component.html',
  styleUrls: ['./chat-navbar.component.css']
})
export class ChatNavbarComponent implements OnInit {
  
  searchNotFailed: boolean = true;
  userNotFound: boolean = true;
  loading: boolean = false;
  addNewChat: boolean = false;
  userFound: User = {username: '', password: ''};
  BASE_URL: string = "http://localhost:3000";

  constructor(private http: HttpClient, 
    private userService: UserService) {}

  ngOnInit(): void {}

  AddNewChat(): void {
    this.userNotFound = true;
    this.searchNotFailed = true;
    this.addNewChat = true;
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

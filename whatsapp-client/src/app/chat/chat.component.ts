import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Chat } from '../interfaces/chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  isChatSelected: boolean = false;
  chatRecipient: Chat = {messageList: [], usersWithAccess: []};

  inputMessage = this.formBuilder.group({
    message: '',
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  // TODO how to check what chat i selected
}
